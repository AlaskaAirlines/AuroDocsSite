import React, { Component } from "react";
import { Nav } from './nav';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Help from './issue--helpWanted';

const helpWanted = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 50) {
        nodes {
          name
          issues(first: 50, orderBy: {field: COMMENTS, direction: DESC}, states: OPEN, filterBy: {labels: "help wanted"}) {
            nodes {
              title
              body
              url
              number
              createdAt
              labels(last: 10, orderBy: {field: NAME, direction: ASC}) {
                nodes {
                  name
                  color
                  description
                }
              }
              comments(last: 1) {
                nodes {
                  body
                  createdAt
                  author {
                    avatarUrl(size: 50)
                    login
                  }
                }
              }
              projectCards {
                nodes {
                  column {
                    name
                  }
                }
              }
              assignees(last: 5) {
                nodes {
                  avatarUrl(size: 50)
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const typeBug = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 50) {
        nodes {
          name
          issues(first: 50, orderBy: {field: COMMENTS, direction: DESC}, states: OPEN, filterBy: {labels: "Type: Bug"}) {
            nodes {
              title
              body
              url
              number
              createdAt
              labels(last: 10, orderBy: {field: NAME, direction: ASC}) {
                nodes {
                  name
                  color
                  description
                }
              }
              comments(last: 1) {
                nodes {
                  body
                  createdAt
                  author {
                    avatarUrl(size: 50)
                    login
                  }
                }
              }
              projectCards {
                nodes {
                  column {
                    name
                  }
                }
              }
              assignees(last: 5) {
                nodes {
                  avatarUrl(size: 50)
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`

class HelpWanted extends Component {
  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Help Wanted</h1>
        <p>The following issues are open tickets with the Auro Design System and help is greatly appreciated. If you see an issue here that you feel you can help with, design, a11y, or feature, please reach out and we would be excited to work with you!</p>

        <h2 className="auro_heading auro_heading--700">Design and Dev Support Issues</h2>
        <Query query={helpWanted}>
          {({ loading, error, data }) => {
            if (loading) return <auro-loader laser onlight></auro-loader>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Help key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <h2 className="auro_heading auro_heading--700">Bugs</h2>
        <p>With all code, there are issues to be addressed. The following are reported bugs that if you can help with, we would love the support! </p>
        <Query query={typeBug}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Help key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>
      </section>
    )
  }
}

export default HelpWanted;