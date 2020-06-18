import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
// import Epic from './epic';
import Issue from './issue';
// import { Nav } from './nav';

const issues = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro_docs") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Contextual"}, first: 50) {
            nodes {
              title
              url
              state
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
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

class AllEpics extends Component {
  render() {
    return (
      <section id="projectZero">

        {/* <Nav /> */}

        <h2 className="auro_heading auro_heading--800">Contextual</h2>
        <Query query={issues}>
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

export default AllEpics;
