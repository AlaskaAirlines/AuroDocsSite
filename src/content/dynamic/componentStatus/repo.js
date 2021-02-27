import React, { Component } from "react";

let randomNumber = ''

class Repo extends Component {

  charGenerate() {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    randomNumber = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
  }

  render() {
    if (!this.props.isPrivate) {
      if (this.props.releases.nodes.length !== 0) {
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
            <td className="">
              { this.charGenerate() }
              {
                this.props.releases.nodes.length !== 0
                  ? this.props.releases.nodes.map(({tagName, createdAt, id, url}) => (
                      <div>
                        <div className="badge util_pointer" id={randomNumber}>
                          <div className="title">Release</div>
                          <div className="data data--release">{tagName}</div>
                        </div>
                        <auro-popover for={randomNumber} sticky>
                          <strong>Last release: </strong>
                          <a key={id} href={url} target="_blank" className="hyperlink" rel="noopener noreferrer">
                            <auro-datetime utc={createdAt} weekday="long"> <auro-icon category="interface" name="external-link-md" customcolor></auro-icon></auro-datetime>
                          </a>
                          {
                            this.props.pullRequests.nodes.length !== 0
                              ? this.props.pullRequests.nodes.map(({title, author, id, url}) => (
                                  <div>
                                    <strong>Latest PR:</strong> <a key={id} href={url} target="_blank" className="hyperlink" rel="noopener noreferrer">
                                      {title} <auro-icon category="interface" name="external-link-md" customcolor></auro-icon>
                                    </a><br/>
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
            <td>
              <div className="shortWrap">{this.props.description}</div>
            </td>
          </tr>
        )
      } else {
        return ('')
      }
    } else {
      return ('')
    }
  }
}

export default Repo;
