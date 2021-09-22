import React, { Component } from "react";
import { Nav } from './nav';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Issue from './issue--notReviewed';

const typeNotReviewed = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 50) {
        nodes {
          name
          issues(first: 50, orderBy: {field: COMMENTS, direction: DESC}, states: OPEN, filterBy: {labels: "not-reviewed"}) {
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

class NotReviewed extends Component {
  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Not Reviewed</h1>
        <p>With all code, there are issues to be addressed. The following are reported issues that have not yet been reviewed.</p>
        <Query query={typeNotReviewed}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue key={name} name={name} issues={issues.nodes} />
                : `---- ${name}: "${issues.nodes}" `
            ));
          }}
        </Query>
      </section>
    )
  }
}

export default NotReviewed;
