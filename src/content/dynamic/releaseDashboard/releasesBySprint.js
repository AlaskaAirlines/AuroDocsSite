import React, { Component } from "react";
import Query from '~/functions/renderQuery';
import { gql } from '@apollo/client';
import calculateSprints, { createSprintReleaseDataset } from '~/functions/sprintCalculator';
import Release from './release';

const RELEASES = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first:100, orderBy:{field: CREATED_AT, direction: ASC }) {
        nodes {
          name,
          releases(first:20, orderBy: {field: CREATED_AT, direction: DESC }) {
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

        <h1 className="auro_heading auro_heading--display">Auro release dashboard</h1>
        <p>The following is a list of Auro product releases and changelog notes.</p>

        <Query query={RELEASES}>
          {({ loading, error, data }) => {
            if (loading) return <auro-loader laser onlight></auro-loader>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            const sprintsDataset = createSprintReleaseDataset(sprints, data.organization.team.repositories.nodes);

            return sprintsDataset.map(({sprintName, releases, sprintStartDate, sprintEndDate}) => (
              <Release key={sprintName} name={sprintName} releases={releases} start={sprintStartDate} end={sprintEndDate} />
            ));
          }}
        </Query>
      </section>
    );
  }
}

export default ReleasesBySprint;
