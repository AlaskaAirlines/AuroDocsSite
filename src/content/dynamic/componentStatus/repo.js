import React, { Component } from "react";

let randomNumber = ''

class Repo extends Component {

  charGenerate() {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    randomNumber = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
  }

  render() {
    return (
      <tr>
        <td className="auro_util_nowrap">
          <auro-hyperlink href={this.props.homepageUrl}>{this.props.name}</auro-hyperlink>
          <div>
            <small>
              <auro-hyperlink href={`https://github.com/AlaskaAirlines/${this.props.name}/pulse`} target="_blank">Insights</auro-hyperlink>
            </small>
          </div>
        </td>
        <td className="auro_util_nowrap">
          { this.charGenerate() }
          {
            this.props.releases.nodes.length !== 0
              ? this.props.releases.nodes.map(({tagName, createdAt, id}) => (
                  <div>
                    <a key={id} id={randomNumber} href={this.props.url} target="_blank" className="noLinkUi" rel="noopener noreferrer">
                      <div className="badge">
                        <div className="title">Release</div>
                        <div className="data data--release">{tagName}</div>
                      </div>
                    </a>
                    <auro-popover for={randomNumber}>
                      <strong>Last release: </strong><auro-datetime utc={createdAt} weekday="long"></auro-datetime>
                      {
                        this.props.pullRequests.nodes.length !== 0
                          ? this.props.pullRequests.nodes.map(({title, id, author}) => (
                              <div>
                                <strong>Last PR:</strong> {title}<br/>
                                <strong>Author:</strong> <img className="githubAvatar" src={author.avatarUrl} alt={author.login} />{author.login}
                              </div>
                            ))
                          : ''
                      }
                    </auro-popover>
                  </div>
                ))
              : <div className="badge">
                  <div className="title">Release</div>
                  <div className="data data--null">v0</div>
                </div>
          }
        </td>
        <td className="auro_util_nowrap">
          {
            <a href={`https://github.com/AlaskaAirlines/${this.props.name}/issues`} target="_blank" className="noLinkUi" rel="noopener noreferrer">
              <div className="badge">
                <div className="title">Open Issues</div>
                {
                  this.props.issues.totalCount > 0
                  ? <div className="data data--issues">{this.props.issues.totalCount}</div>
                  : <div className="data data--null">{this.props.issues.totalCount}</div>
                }
              </div>
            </a>
          }
        </td>
        <td className="short">
          <div>{this.props.description}</div>
        </td>
      </tr>
    )
  }
}

export default Repo;
