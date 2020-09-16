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
          description
          url
          homepageUrl
          id
          issues(states: OPEN) {
            totalCount
          }
          releases(last: 1) {
            nodes {
              tagName
              createdAt
              id
            }
          }
        }
      }
    }
  }
}
`

const odsComponentStatus = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(query: "ods-", orderBy: {field: NAME, direction: ASC}) {
        nodes {
          name
          description
          url
          homepageUrl
          id
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

        <auro-header level="1" display="display">Auro Status</auro-header>
        <p>IMPORTANT: The Auro Web Components are a work in progress and releases are subject to major changes.</p>

        <auro-header level="2" display="700">Auro Design System tools in active use and development</auro-header>
        <p>Auro Web Components are a collection of Web Components maintained by Alaska Airlines that implement the Auro Design System. Tools and developed components that are universally useable in almost any development environment including <auro-hyperlink href="/reactSetup" relative>React,</auro-hyperlink><auro-hyperlink href="/svelteSetup" relative>Svelte,</auro-hyperlink> or simply standard <auro-hyperlink href="/javascriptSetup" relative>JavaScript.</auro-hyperlink></p>

        <auro-header level="3" display="500">Design System support tools</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Package</th>
              <th>Issues</th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={generator}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td>Loading...</td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({ name, description, url, homepageUrl, issues, releases }) => (
                  <Repo key={name}
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

                return data.organization.team.repositories.nodes.map(({ id, name, description, url, homepageUrl, issues, releases }) => (
                  <Repo key={id}
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

                return data.organization.team.repositories.nodes.map(({ id, name, description, url, homepageUrl, issues, releases }) => (
                  <Repo key={id}
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

                return data.organization.team.repositories.nodes.map(({ id, name, description, url, homepageUrl, issues, releases }) => (
                  <Repo key={id}
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

        <auro-header level="3" display="500">Auro components</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Package</th>
              <th>Issues</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={componentStatus}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({ id, name, description, url, homepageUrl, issues, releases }) => (
                  <Repo key={id}
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

        <auro-header level="3" display="500">Legacy Orion components</auro-header>

        <table className="auro_table">
        <thead>
            <tr>
              <th>Project</th>
              <th>Package</th>
              <th>Issues</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={odsComponentStatus}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({ id, name, description, url, homepageUrl, issues, releases }) => (
                  <Repo key={id}
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
