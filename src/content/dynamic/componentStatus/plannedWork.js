import React, { Component } from "react";
import { Nav } from './nav';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Issue from './issue';
import IssueNoComments from './issue--noComments';

const workInProgress = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 30, orderBy: {field: NAME, direction: ASC}) {
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

const prioritizedForWork = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(last: 20, orderBy: {field: CREATED_AT, direction: ASC}, states: OPEN, filterBy: {labels: "Status: Prioritized for work"}) {
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

const backlogged = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          issues(last: 20, orderBy: {field: CREATED_AT, direction: ASC}, states: OPEN, filterBy: {labels: "Status: Backlogged"}) {
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

        <h1 className="auro_heading auro_heading--display">Planned work</h1>
        <p>The following lists are of tools and components currently queued up on the Auro roadmap.</p>

        <h2 className="auro_heading auro_heading--700">Work In Progress</h2>
        <p>WIP limit of 1.5 per individual assignee.</p>
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

        <h2 className="auro_heading auro_heading--700">Prioritized backlog of Work</h2>
        <p>The following items are not in sorted rank but are items prioritized for work by their respected assignees. </p>
        <Query query={prioritizedForWork}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <IssueNoComments key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <h2 className="auro_heading auro_heading--700">Backlogged</h2>
        <Query query={backlogged}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <IssueNoComments key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>
      </section>
    )
  }
}

export default PlannedWork;
