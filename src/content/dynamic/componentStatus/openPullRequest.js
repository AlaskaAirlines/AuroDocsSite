import React, { Component } from "react";
import { Nav } from './nav';
import Query from '~/functions/renderQuery';
import { gql } from '@apollo/client';
import Pr from './prs';

const openRequests = gql`
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

class PullRequestStatus extends Component {
  render() {
    return (
      <section>

        <Nav />

        <auro-header level="1" display="display">Open Pull Requests</auro-header>
        <p>The following is a list of open Pull Requests per project repo. Only repos that are open to the public will be seen in this list.</p>

        <auro-header level="3" display="600">Auro custom elements</auro-header>

        <table className="auro_table">
          <thead>
            <tr>
              <th>Project</th>
              <th></th>
              <th className="short">Description</th>
            </tr>
          </thead>
          <tbody>
            <Query query={openRequests}>
              {({ loading, error, data }) => {
                if (loading) return <tr><td></td></tr>;
                if (error) return <tr><td>We are unable to connect to GitHub at the moment, please try back later.</td></tr>;

                return data.organization.team.repositories.nodes.map(({name, isPrivate, description, url, homepageUrl, id, issues, releases, pullRequests}, index) => (
                  <Pr key={index + '_' + id}
                    isPrivate={isPrivate}
                    pullRequests={pullRequests}
                    name={name}
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
      </section>
    )
  }
}

export default PullRequestStatus;
