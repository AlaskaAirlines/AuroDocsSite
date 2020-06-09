import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Release from './release';
import { Nav } from './nav';

const RELEASES = gql`
{ 
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first:100, orderBy:{field: NAME, direction: ASC }) {
        nodes {
          name,
          releases(last:2, orderBy: {field: CREATED_AT, direction:DESC }) {
            nodes {
              name,
              updatedAt,
              description
            }
          }
        }
      }
    }
  }
}
`

class ReleasesByProject extends Component {
  render() {
    return (
      <section id="releases">
        <Nav />
        <Query query={RELEASES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, releases }) => (
              releases.nodes.length > 0
                ? <Release key={name} name={name} releases={releases.nodes} />
                : ''
            ));
          }}
        </Query>
      </section>
    )
  }
}

export default ReleasesByProject;