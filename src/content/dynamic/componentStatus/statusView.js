import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Issue from './issue';

const componentStatus = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(last: 20, orderBy: {field: CREATED_AT, direction: ASC}, states: OPEN, filterBy: {labels: "Status: Discovery"}) {
            nodes {
              title
              state
              url
              number
              labels(first: 10, orderBy: {field: NAME, direction: ASC}) {
                nodes {
                  name
                  color
                }
              }
              projectCards {
                nodes {
                  column {
                    name
                  }
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

const workInProgress = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(last: 20, orderBy: {field: CREATED_AT, direction: ASC}, states: OPEN, filterBy: {labels: "Status: Work In Progress"}) {
            nodes {
              title
              url
              number
              labels(last: 10, orderBy: {field: NAME, direction: ASC}) {
                nodes {
                  name
                  color
                }
              }
              projectCards {
                nodes {
                  column {
                    name
                  }
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
      <section id="projectZero">

        <h1 className="auro_heading auro_heading--display">Planned work</h1>
        <p>The following lists are of tools and components currently queued up on the Auro roadmap.</p>

        <h2 className="auro_heading auro_heading--700">Work In Progress</h2>
        <Query query={workInProgress}>
          {({ loading, error, data }) => {
            if (loading) return <p className="isLoading">Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <h2 className="auro_heading auro_heading--700">Proposed work in discovery</h2>
        <p>The following is a list of all proposed web components and other request(s) currently proposed for discovery.</p>
        <Query query={componentStatus}>
          {({ loading, error, data }) => {
            if (loading) return <p className="isLoading">Loading...</p>;
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
