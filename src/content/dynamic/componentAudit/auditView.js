import React, { Component } from "react";
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import Issue from './issue';

const Actions = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Actions"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Informational = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Informational"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Structural = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Structural"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Inputs = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Inputs"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Navigation = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Navigation"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Contextual = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Contextual"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Content = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Content"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const ContentLayout = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Audit: Content Layouts"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const PriorityAudit = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "auro") {
        nodes {
          name
          issues(filterBy: {labels: "Priority: Audit"}, first: 10) {
            nodes {
              title
              url
              labels(last: 10) {
                nodes {
                  name
                  color
                }
              }
              comments(last: 1) {
                nodes {
                  body
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const AuditLabels = gql`
{
  organization(login: "AlaskaAirlines") {
    team(slug: "auro-team") {
      repositories(first: 20, orderBy: {field: NAME, direction: ASC}, query: "AuroDesignTokens") {
        nodes {
          name
          labels(last: 50, query: "Artwork") {
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
}
`

class AllEpics extends Component {
  render() {
    return (
      <section id="projectZero">

        <h1 className="auro_heading auro_heading--display">Auro Design System: Project audit</h1>

        <p>This resource is provided as a way to track the progress of all components identified within the Auro Design System as either Auro or Orion compliant, or in progress.</p>

        <div className="auditLegend">
          <h3 className="auro_heading auro_heading--500">Legend</h3>

          <Query query={AuditLabels}>
            {({ loading, error, data }) => {
              if (loading) return <p></p>;
              if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

              return data.organization.team.repositories.nodes.map(({ labels }) => (
                <div className="auditLegend--key">
                  {labels.nodes.map(({name, color}) => (
                    name.includes("ODS/V0 Compliant")
                      ? <div className="auditLegend--labelWrapper"><div key={name} data-name={name} title={name} className="issueLabel auditLabel auditLabel--legend"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div><span>=</span><span>{name.substring(name.search("ODS/V0 Compliant"))}</span></div>
                    : ''
                  ))}

                  {labels.nodes.map(({name, color}) => (
                    name.includes("ADS Compliant")
                      ? <div className="auditLegend--labelWrapper"><div key={name} data-name={name} title={name} className="issueLabel auditLabel auditLabel--legend"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div><span>=</span><span>{name.substring(name.search("ADS Compliant"))}</span></div>
                    : ''
                  ))}

                  {labels.nodes.map(({name, color}) => (
                    name.includes("In Progress")
                      ? <div className="auditLegend--labelWrapper"><div key={name} data-name={name} title={name} className="issueLabel auditLabel auditLabel--legend"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div><span>=</span><span>{name.substring(name.search("In Progress"))}</span></div>
                    : ''
                  ))}

                  {labels.nodes.map(({name, color}) => (
                    name.includes("Backlogged")
                      ? <div className="auditLegend--labelWrapper"><div key={name} data-name={name} title={name} className="issueLabel auditLabel auditLabel--legend"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div><span>=</span><span>{name.substring(name.search("Backlogged"))}</span></div>
                    : ''
                  ))}
                </div>
              ));
            }}
          </Query>


        </div>

        <Query query={PriorityAudit}>
          {({ loading, error, data }) => {
            if (loading) return <p className="isLoading"></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Priority items'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Actions}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Actions'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Informational}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Informational'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Structural}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Structural'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Inputs}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Inputs'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Navigation}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Navigation'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Contextual}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Contextual'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={Content}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Content'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

        <Query query={ContentLayout}>
          {({ loading, error, data }) => {
            if (loading) return <p></p>;
            if (error) return <p>We are unable to connect to GitHub at the moment, please try back later.</p>;

            return data.organization.team.repositories.nodes.map(({ name, issues }) => (
              issues.nodes.length > 0
                ? <Issue tableName={'Content Layouts'} key={name} name={name} issues={issues.nodes} />
                : ''
            ));
          }}
        </Query>

      </section>
    )
  }
}

export default AllEpics;
