import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import calculateSprints, { createSprintReleaseDataset } from '../../../functions/sprintCalculator';
import Release from './release';
import { Nav } from './nav';

const RELEASES = gql`
{ 
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first:100, orderBy:{field: NAME, direction: ASC }) {
        nodes {
          name,
          releases(last:10, orderBy: {field: CREATED_AT, direction:DESC }) {
            nodes {
              name,
              createdAt,
              description
            }
          }
        }
      }
    }
  }
}
`;

class ReleasesBySprint extends Component {

  

  render() {
    const sprints = calculateSprints(new Date());
    return (
      <section id="releases-by-sprint">
        <Nav />
        <Query query={RELEASES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            const sprintsDataset = createSprintReleaseDataset(sprints, data.organization.team.repositories.nodes);

            console.log(sprintsDataset);
            return sprintsDataset.map(({sprintName, releases}) => (
              <Release key={sprintName} name={sprintName} releases={releases} />
            ));
          }}
        </Query>
      </section>
    );
  }
}

export default ReleasesBySprint;