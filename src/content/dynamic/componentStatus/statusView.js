import React, { Component } from "react";
import { Nav } from './nav';
import Query from '~/functions/renderQuery';
import { gql } from '@apollo/client';
import Repo from './repo';
import LabsRepo from './labsRepo';

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
          defaultBranchRef {
            name
          }
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
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
          releases(first: 1) {
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
          defaultBranchRef {
            name
          }
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
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
          releases(first: 1) {
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

const eslint = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "eslint-config-auro", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          description
          url
          homepageUrl
          id
          defaultBranchRef {
            name
          }
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
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
          defaultBranchRef {
            name
          }
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
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
          releases(first: 1) {
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
          defaultBranchRef {
            name
          }
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
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
          releases(first: 1) {
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
          defaultBranchRef {
            name
          }
          pullRequests(last: 10, states: OPEN) {
            totalCount
            nodes {
              title
              url
              changedFiles
              isDraft
              state
              reviewDecision
              createdAt
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

const Labs = gql`
{
  organization(login: "AlaskaAirlines") {
    repositories(first: 80, orderBy: {field: NAME, direction: ASC}, privacy: PRIVATE) {
      nodes {
        name
        isPrivate
        description
        url
        id
        defaultBranchRef {
          name
        }
        isArchived
        createdAt
        repositoryTopics(last: 10) {
          nodes {
            topic {
              name
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

        <p>Auro custom elements are a collection of custom elements maintained by Alaska Airlines that implement the Auro Design System. Tools and developed elements that are universally useable in almost any development environment including <auro-hyperlink href="/reactSetup" relative>React,</auro-hyperlink> <auro-hyperlink href="/svelteSetup" relative>Svelte,</auro-hyperlink> or simply standard <auro-hyperlink href="/javascriptSetup" relative>JavaScript.</auro-hyperlink></p>
        <p>Auro custom elements are always in a 'work in progress' status and releases are subject to major changes.</p>
        <p>For more information about how we address Node support maintenance, see our <auro-hyperlink href="/node-support" relative>Auro Node support</auro-hyperlink> page.</p>

        <auro-header level="3" display="600">Auro custom elements</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th></th>
              <th></th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={componentStatus}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, isPrivate, description, url, homepageUrl, id, defaultBranchRef, issues, releases, pullRequests}, index) => (
                  <Repo key={index + '_' + id}
                    isPrivate={isPrivate}
                    pullRequests={pullRequests}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}
                    negativeCount/>
                ));
              }}
            </Query>
          </tbody>
        </table>

        <auro-header level="3" display="600">Design System support tools</auro-header>

        <table className="auro_table statusViewTable">
          <thead>
            <tr>
              <th>Project</th>
              <th></th>
              {/* <th></th> */}
              <th></th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={generator}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td>Loading...</td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, defaultBranchRef, issues, releases, pullRequests}, index) => (
                  <Repo key={index + '_' + id}
                    pullRequests={pullRequests}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
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

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, defaultBranchRef, issues, releases, pullRequests}, index) => (
                  <Repo key={index + '_' + id}
                    pullRequests={pullRequests}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
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

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, defaultBranchRef, issues, releases, pullRequests}, index) => (
                  <Repo key={index + '_' + id}
                    pullRequests={pullRequests}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
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

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, defaultBranchRef, issues, releases, pullRequests}, index) => (
                  <Repo key={index + '_' + id}
                    pullRequests={pullRequests}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
                    description={description}
                    url={url}
                    homepageUrl={homepageUrl}
                    issues={issues}
                    releases={releases}/>
                ));
              }}
            </Query>
            <Query query={eslint}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, description, url, homepageUrl, id, defaultBranchRef, issues, releases, pullRequests}, index) => (
                  <Repo key={index + '_' + id}
                    pullRequests={pullRequests}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
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
