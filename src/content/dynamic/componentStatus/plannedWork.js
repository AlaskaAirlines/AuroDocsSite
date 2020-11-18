import React, { Component } from "react";
import { Nav } from './nav';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Issue from './issue';

const workInProgress = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 50) {
        nodes {
          name
          issues(first: 50, orderBy: {field: COMMENTS, direction: DESC}, states: OPEN, filterBy: {labels: "Status: Work In Progress"}) {
            nodes {
              title
              url
              number
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

const priority = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 50) {
        nodes {
          name
          issues(first: 50, orderBy: {field: COMMENTS, direction: DESC}, states: OPEN, filterBy: {labels: "Status: Prioritized for work"}) {
            nodes {
              title
              url
              number
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

class PlannedWork extends Component {
  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Work In Progress</h1>
        <p>The following are issues that are currently being worked on.</p>

        <Query query={workInProgress}>
          {({ loading, error, data }) => {
            if (loading) return <auro-loader laser onlight></auro-loader>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <h2 className="auro_heading auro_heading--700">Prioritized for work</h2>
        <p>The following are issues that are prioritized for work.</p>

        <Query query={priority}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>
      </section>
    )
  }
}

export default PlannedWork;
