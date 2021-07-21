import React, { Component } from "react";

let randomNumber = ''

class LabsRepo extends Component {

  charGenerate() {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    randomNumber = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
  }

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
                    ? 'auro'
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
                    ? ', internal use only'
                    : ''
                ))
              }
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'experimental'
                    ? ', experimental '
                    : ''
                ))
              }
              {
                this.props.repositoryTopics.nodes.map(({topic}) => (
                  topic.name === 'pre-release'
                    ? ', pre-released version'
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

