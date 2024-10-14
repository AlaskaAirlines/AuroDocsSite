import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Release from '~/content/dynamic/releaseDashboard/releases';

function RenderRelease(props) {

    const { componentName } = props;

    const RELEASES = gql`
      {
        organization(login: "AlaskaAirlines") {
          team(slug: "auro-team") {
            repositories(first: 1, orderBy: {field: NAME, direction: ASC}, query: "${componentName}") {
              nodes {
                name
                releases(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
                  nodes {
                    name
                    updatedAt
                    description
                  }
                }
              }
            }
          }
        }
      }
    `;
    const { loading, error, data } = useQuery(RELEASES);
  
    if (loading) return <auro-loader laser onlight></auro-loader>;
    if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

    return data.organization.team.repositories.nodes.map(({ name, releases }) => (
      releases.nodes.length > 0
        ? <Release key={name} name={name} releases={releases.nodes} />
        : ''
    ))
}

export default RenderRelease;