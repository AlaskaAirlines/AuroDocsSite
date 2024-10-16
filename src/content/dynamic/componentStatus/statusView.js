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
        <p>
          <auro-banner billboard slim alignLeft onDark>
            <picture slot="displayImage">
              <source srcset="https://picsum.photos/id/213/1124/500" media="(min-width: 1024px)"/>
              <source srcset="https://picsum.photos/id/213/1124/1000" media="(min-width: 768px)"/>
              <source srcset="https://picsum.photos/id/213/736/950" media="(min-width: 736px)"/>
              <source srcset="https://picsum.photos/id/213/736/1500" media="(min-width: 375px)"/>
              <source srcset="https://picsum.photos/id/213/320/1100" media="(min-width: 320px)"/>
              <img src="https://picsum.photos/id/213/225/550" alt="" />
            </picture>
            <span slot="title"><auro-icon category="interface" name="chat" customColor customSize style={{width: '50px'}}></auro-icon>Auro Discussions </span>
            <p slot="description">
              <span style={{'max-width': '500px', display: 'block'}}>Have ideas you want to share or need more information about Auro? Please feel free to start a new discussion with the team.</span>
            </p>
            <auro-hyperlink style={{'marginRight': '1rem', 'marginBottom': '0.5rem'}} type="cta" secondary href="https://github.com/AlaskaAirlines/WC-Generator/discussions/new/choose" slot="action" target="_blank">Start a new discussion</auro-hyperlink>
            <auro-hyperlink type="cta" secondary href="https://github.com/AlaskaAirlines/WC-Generator/discussions" slot="action" target="_blank">View open discussions</auro-hyperlink>
          </auro-banner>
        </p>

        <p>Auro custom elements are always in a 'work in progress' status and releases are subject to major changes.</p>
        <p>Auro custom element are a collection of custom element maintained by Alaska Airlines that implement the Auro Design System. Tools and developed elements that are universally useable in almost any development environment including <auro-hyperlink href="/reactSetup" relative>React,</auro-hyperlink> <auro-hyperlink href="/svelteSetup" relative>Svelte,</auro-hyperlink> or simply standard <auro-hyperlink href="/javascriptSetup" relative>JavaScript.</auro-hyperlink></p>

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

        <auro-header level="2" display="700" id="auroLabs">auroLabs</auro-header>
        <p>Are you working on something that you feel should be a part of the Auro Design System? Consider contributing to <auro-hyperlink href="/aurolabs" relative>AuroLabs</auro-hyperlink>(for internal Alaska Airlines staff only) and the Auro team will be sure you reach out to you as soon as possible.</p>
        <p>The repositories listed here may contain <strong style={{'color': 'var(--auro-color-state-warning-500)'}}>pre-released and highly experimental</strong> npm versions. If there is an interest to use any of these custom elements, please reach out to the author of the repository.</p>

        <auro-header level="3" display="600">auroLabs projects</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Tags</th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={Labs}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.repositories.nodes.map(({name, isPrivate, description, url, id, defaultBranchRef, repositoryTopics, isArchived, createdAt}) => (
                  <LabsRepo key={index + '_' + id}
                    isPrivate={isPrivate}
                    name={name}
                    defaultBranchRef={defaultBranchRef}
                    description={description}
                    url={url}
                    createdAt={createdAt}
                    repositoryTopics={repositoryTopics}
                    isArchived={isArchived}
                  />
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
