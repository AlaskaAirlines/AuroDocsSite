import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Epic from './epic';
import Issue from './issue';

const projectZero = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(labels: "Epic: Project Version Zero", states: OPEN, first: 10) {
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

const projectZeroIssues = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 100, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(labels: "Project: Version Zero", first: 10) {
            nodes {
              title
              state
              url
              number
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

        <h1 className="auro_heading auro_heading--display">Epics</h1>
        <p>The following document contains information related to current Epics in play.</p>

        <Query query={projectZero}>
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
        <h2 className="auro_heading auro_heading--800">Project Version Zero: related issues</h2>
        <Query query={projectZeroIssues}>
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
