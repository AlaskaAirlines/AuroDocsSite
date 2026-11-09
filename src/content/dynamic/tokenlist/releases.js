import React, { Component } from "react";
import Query from '~/functions/renderQuery';
import { gql } from '@apollo/client';
import Release from '../releaseDashboard/releases';
import { Nav } from './nav';

const RELEASES = gql`
{
  repository(owner: "AlaskaAirlines", name: "auro-tokenlist") {
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
`

class AllReleases extends Component {
  render() {
    return (
      <section id="releases">

        <Nav />
        <section className="auro-markdown">
          <h1 className="auro_heading auro_heading--display">Releases</h1>
          <p>The following is a list of all Auro element releases.</p>

          <Query query={RELEASES}>
            {({ loading, error, data }) => {
              if (loading) return <auro-loader laser onlight></auro-loader>;

              const repo = data?.repository;
              if (error || !repo) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

              return repo.releases.nodes.length > 0
                ? <Release name={repo.name} releases={repo.releases.nodes} />
                : '';
            }}
          </Query>
        </section>
      </section>
    )
  }
}

export default AllReleases;
