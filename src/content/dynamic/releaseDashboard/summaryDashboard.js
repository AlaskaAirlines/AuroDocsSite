import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Summary from './summary';
import { Nav } from './nav';

const milestones = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: CREATED_AT, direction: ASC}) {
        nodes {
          name
          milestones(first: 18, orderBy: {field: DUE_DATE, direction: DESC}, query: "Release") {
            nodes {
              title
              description
              dueOn
              state
              url
            }
          }
        }
      }
    }
  }
}
`;

class Milestones extends Component {

  render() {
    return (
      <section id="releases-by-sprint">
        <Nav />

        <h1 className="auro_heading auro_heading--display">Auro release summaries</h1>

        <Query query={milestones}>
          {({ loading, error, data }) => {
            if (loading) return <auro-loader laser onlight></auro-loader>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, milestones }) => (
              milestones.nodes.length > 0
                ? <Summary key={name} name={name} milestones={milestones} />
                : ''
            ));
          }}
        </Query>
      </section>
    );
  }
}

export default Milestones;
