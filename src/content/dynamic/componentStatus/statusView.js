import React, { Component } from "react";
import { Nav } from './nav';
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Repo from './repo';

const componentStatus = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "auro-", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          isPrivate
          description
          url
          homepageUrl
          id
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              mergeable
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
              suggestedReviewers {
                reviewer {
                  name
                }
              }
              author {
                login
                avatarUrl(size: 30)
              }
              commits {
                totalCount
              }
              files {
                totalCount
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          releases(last: 1) {
            nodes {
              tagName
              createdAt
              id
              url
            }
          }
        }
      }
    }
  }
}

`

const generator = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "generator", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          description
          url
          homepageUrl
          id
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              mergeable
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
              suggestedReviewers {
                reviewer {
                  name
                }
              }
              author {
                login
                avatarUrl(size: 30)
              }
              commits {
                totalCount
              }
              files {
                totalCount
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          releases(last: 1) {
            nodes {
              tagName
              createdAt
              url
            }
          }
        }
      }
    }
  }
}
`

const tokens = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "tokens", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          description
          url
          homepageUrl
          id
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              mergeable
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
              suggestedReviewers {
                reviewer {
                  name
                }
              }
              author {
                login
                avatarUrl(size: 30)
              }
              commits {
                totalCount
              }
              files {
                totalCount
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          releases(last: 1) {
            nodes {
              tagName
              createdAt
              url
            }
          }
        }
      }
    }
  }
}
`

const WebCoreStyleSheets = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "WebCoreStyleSheets", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          description
          url
          homepageUrl
          id
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              mergeable
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
              suggestedReviewers {
                reviewer {
                  name
                }
              }
              author {
                login
                avatarUrl(size: 30)
              }
              commits {
                totalCount
              }
              files {
                totalCount
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          releases(last: 1) {
            nodes {
              tagName
              createdAt
              url
            }
          }
        }
      }
    }
  }
}
`

const Icons = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "icons", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          description
          url
          homepageUrl
          id
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              mergeable
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
              suggestedReviewers {
                reviewer {
                  name
                }
              }
              author {
                login
                avatarUrl(size: 30)
              }
              commits {
                totalCount
              }
              files {
                totalCount
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          releases(last: 1) {
            nodes {
              tagName
              createdAt
              url
            }
          }
        }
      }
    }
  }
}
`

class ComponentStatus extends Component {
  render() {
    return (
      <section>

        <Nav />

        <auro-header level="1" display="display">Status</auro-header>
        <p>IMPORTANT: The Auro custom element are a work in progress and releases are subject to major changes.</p>
        <p>Auro custom element are a collection of custom element maintained by Alaska Airlines that implement the Auro Design System. Tools and developed elements that are universally useable in almost any development environment including <auro-hyperlink href="/reactSetup" relative>React,</auro-hyperlink><auro-hyperlink href="/svelteSetup" relative>Svelte,</auro-hyperlink> or simply standard <auro-hyperlink href="/javascriptSetup" relative>JavaScript.</auro-hyperlink></p>

        <auro-header level="2" display="600">Auro Labs</auro-header>
        <p>Are you working on something that you feel should be a part of the Auro Design System? Consider contributing to <auro-hyperlink href="/aurolabs" relative>AuroLabs</auro-hyperlink>(for internal Alaska Airlines staff only) and the Auro team will be sure you reach out to you as soon as possible.</p>

        <auro-header level="3" display="600">Design System support tools</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Package</th>
              <th>Issues</th>
              <th>PRs</th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={generator}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td>Loading...</td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, issues, releases, pullRequests}) => (
                  <Repo key={id}
                    pullRequests={pullRequests}
                    name={name}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}/>
                ));
              }}
            </Query>
            <Query query={tokens}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, issues, releases, pullRequests}) => (
                  <Repo key={id}
                    pullRequests={pullRequests}
                    name={name}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}/>
                ));
              }}
            </Query>
            <Query query={WebCoreStyleSheets}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, issues, releases, pullRequests}) => (
                  <Repo key={id}
                    pullRequests={pullRequests}
                    name={name}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}/>
                ));
              }}
            </Query>
            <Query query={Icons}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, issues, releases, pullRequests}) => (
                  <Repo key={id}
                    pullRequests={pullRequests}
                    name={name}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}/>
                ));
              }}
            </Query>
          </tbody>
        </table>

        <auro-header level="3" display="600">Auro custom elements</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Package</th>
              <th>Issues</th>
              <th>PRs</th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={componentStatus}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, isPrivate, description, url, homepageUrl, id, issues, releases, pullRequests}) => (
                  <Repo key={id}
                    isPrivate={isPrivate}
                    pullRequests={pullRequests}
                    name={name}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}/>
                ));
              }}
            </Query>
          </tbody>
        </table>
      </section>
    )
  }
}

export default ComponentStatus;
