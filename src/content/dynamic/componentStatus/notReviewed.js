import React, { Component } from "react";
import { Nav } from './nav';
import Query from '~/functions/renderQuery';
import { gql } from '@apollo/client';
import Issues from './issues';

const typeBug = gql`
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

        <h1 className="auro_heading auro_heading--display">Not reviewed</h1>
        <p>Issues that have not been reviewed by the team.</p>
        <auro-accordion-group>
          <Query query={typeBug}>
            {({ loading, error, data }) => {
              if (loading) return <auro-loader laser onlight></auro-loader>;
              if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

              return data.organization.team.repositories.nodes.map(({ name, issues }, index) => (
                issues.nodes.length > 0
                  ? <Issues key={index + '_' + name} name={name} issues={issues.nodes} />
                  : ''
              ));
            }}
          </Query>
        </auro-accordion-group>
      </section>
    )
  }
}

export default NotReviewed;
