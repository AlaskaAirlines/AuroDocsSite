import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import ReactMarkdown from 'react-markdown';

const RELEASES = gql`
{ 
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first:100, orderBy:{field: NAME, direction: ASC }) {
        nodes {
          name,
          releases(first:5, orderBy: {field: CREATED_AT, direction:DESC }) {
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

class ReleaseDashboard extends Component {
  render() {
    return (
      <section id="releases">
        <Query query={RELEASES}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, releases }) => (
              <div key={name}>
                <h1 className="auro_heading auro_heading--display">{name}</h1>
                {releases.nodes.map(({name, description}) => (
                  <div key={name}>
                    <ReactMarkdown source={description} />
                  </div>
                ))}
              </div>
            ));
          }}
          </Query>
        </section>
    )
  }
}

export default ReleaseDashboard;