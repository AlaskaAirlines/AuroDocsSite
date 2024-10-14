import React, { Component } from "react";
import Query from '~/functions/renderQuery';
import { gql } from '@apollo/client';
import Epic from './epic';
import Issue from './issue';
import { Nav } from './nav';

const epic = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(labels: "Epic: Auro User Definition", states: OPEN, first: 20) {
            nodes {
              title
              body
              url
            }
          }
        }
      }
    }
  }
}
`

const issues = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(labels: "Project: Auro User Definition", first: 10) {
            nodes {
              title
              url
              number
              state
              projectCards {
                nodes {
                  column {
                    name
                  }
                }
              }
              labels(first: 10, orderBy: {field: NAME, direction: ASC}) {
                nodes {
                  color
                  name
                  description
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

        <Nav />

        <Query query={epic}>
          {({ loading, error, data }) => {
            if (loading) return <p className="isLoading">Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Epic key={name} name={name} epics={issues.nodes} />
                : ''
            ));
          }}
        </Query>
        <h2 className="auro_heading auro_heading--800">Related issues</h2>
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
