import React, { Component } from "react";

class LabsRepo extends Component {

  render() {
    return (
      this.props.isPrivate && !this.props.isArchived && (this.props.name.includes("aurolabs-") || this.props.name.includes("auro-")) && !this.props.name.includes("azure-")
        ? <tr>
            <td>
              <auro-hyperlink target="_blank" href={this.props.url}><strong>{this.props.name}</strong></auro-hyperlink><br/>
              <small><auro-hyperlink target="_blank" href={`https://github.com/AlaskaAirlines/${this.props.name}/graphs/contributors`}>Contributors</auro-hyperlink></small><br/>
              <small><auro-hyperlink target="_blank" href={`https://github.com/AlaskaAirlines/${this.props.name}/issues`}>Issues</auro-hyperlink></small>
            </td>
            <td>
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'auro'
                    ? topic.name
                    : ''
                ))
              }
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'auro-labs'
                    ? 'auroLabs'
                    : ''
                ))
              }
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'internal'
                    ? `, ${topic.name}`
                    : ''
                ))
              }
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'experimental'
                    ? `, ${topic.name}`
                    : ''
                ))
              }
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'pre-release'
                    ? `, ${topic.name}`
                    : ''
                ))
              }
            </td>
            <td>
              <div className="shortWrap">
                <small><auro-datetime weekday="long" month="long" utc={this.props.createdAt}></auro-datetime></small><br/>
                {
                  this.props.description
                    ? this.props.description
                    : 'no description given'
                }
                <strong>{
                  this.props.repositoryTopics.nodes.map(({topic}) => (
                    topic.name.includes("generator")
                      ? ` (${topic.name})`
                      : ''
                  ))
                }</strong>
                <br/>
              </div>
            </td>
          </tr>
        : null
    )
  }
}

export default LabsRepo;

