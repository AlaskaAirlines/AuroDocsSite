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
              <auro-hyperlink href={this.props.homepageUrl}><strong>{this.props.name}</strong></auro-hyperlink>
              <div>
                <small>
                  <auro-hyperlink href={`https://github.com/AlaskaAirlines/${this.props.name}/pulse`} target="_blank">Insights</auro-hyperlink>
                </small>
              </div>
            </td>
            <td>
              <a href={`https://github.com/AlaskaAirlines/${this.props.name}/`} target="_blank" rel="noopener noreferrer"><img alt={`${this.props.name} build status`}src={`https://img.shields.io/github/workflow/status/AlaskaAirlines/${this.props.name}/Test%20and%20publish?branch=master&style=for-the-badge`} style={{'marginBottom': '-8px', 'maxWidth': 'unset'}}></img></a>
            </td>
            <td>
              { this.charGenerate() }
              { // loop over releases for URL to last release
                this.props.releases.nodes.length !== 0
                  ? this.props.releases.nodes.map(({tagName, createdAt, id, url}) => (
                      <div key={id}>
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{'textDecoration': 'none'}}>
                          <div className="badge util_pointer" id={randomNumber}>
                            <div className="title">Release</div>
                            <div className="data data--release">{tagName}</div>
                          </div>
                        </a>
                        <auro-popover for={randomNumber} sticky>
                          <strong>Last release: </strong>
                          <auro-datetime utc={createdAt} weekday="long"></auro-datetime>
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
                    <div className="title">Issues</div>
                    {this.props.issues.totalCount > 0
                      ? <div className="data data--issues">{this.props.issues.totalCount}</div>
                      : <div className="data data--null">{this.props.issues.totalCount}</div>
                    }
                  </div>
                </a>
              }
            </td>
            <td>
              <div className="shortWrap">
                {this.props.description}
              </div>
              {
                this.props.pullRequests.totalCount > 0
                ? <auro-accordion lowProfile noProfile justifyLeft>
                    <strong slot="trigger">Open pull request{this.props.pullRequests.totalCount > 1 ? 's' : ''}</strong>
                    <div className="statusPrLayout">
                      {this.props.pullRequests.nodes.map(({title, mergeable, changedFiles, commits, url, isDraft, reviewDecision, author, createdAt}) => (
                        <span>
                          {
                            isDraft
                            ? <auro-alerts noIcon className="alert">
                                <div className="cardHeader">
                                  <div>
                                    Draft
                                  </div>
                                  <div>
                                    <auro-datetime utc={createdAt}></auro-datetime>
                                  </div>
                                </div>
                                <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                                <div className="cardStats">
                                  <div className="statsBadge"><auro-badge pill advisory>{changedFiles}</auro-badge> Changed file{changedFiles > 1 ? 's' : ''}</div>
                                  <div><auro-badge pill advisory>{commits.totalCount}</auro-badge> Commit{commits.totalCount > 1 ? 's' : ''}</div>
                                </div>
                                <div>
                                  <small>Author: </small>
                                  <img
                                    className="githubAvatar"
                                    src={author.avatarUrl}
                                    alt={author.login}
                                    title={author.login}></img>
                                </div>
                              </auro-alerts>
                            : (mergeable && !isDraft && reviewDecision==='APPROVED'
                              ? <auro-alerts noIcon success>
                                  <div className="cardHeader">
                                    <div>
                                      Approved
                                    </div>
                                    <div>
                                      <auro-datetime utc={createdAt}></auro-datetime>
                                    </div>
                                  </div>
                                  <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                                  <div className="cardStats">
                                    <div className="statsBadge"><auro-badge pill advisory>{changedFiles}</auro-badge> Changed file{changedFiles > 1 ? 's' : ''}</div>
                                    <div><auro-badge pill advisory>{commits.totalCount}</auro-badge> Commit{commits.totalCount > 1 ? 's' : ''}</div>
                                  </div>
                                  <div>
                                    <small>Author: </small>
                                    <img
                                      className="githubAvatar"
                                      src={author.avatarUrl}
                                      alt={author.login}
                                      title={author.login}></img>
                                  </div>
                                </auro-alerts>
                              : (reviewDecision === "REVIEW_REQUIRED"
                                  ? <auro-alerts noIcon information className="alert">
                                      <div className="cardHeader">
                                        <div>
                                          { reviewDecision === "REVIEW_REQUIRED" ? "Review required " : '' }
                                        </div>
                                        <div>
                                          <auro-datetime utc={createdAt}></auro-datetime>
                                        </div>
                                      </div>
                                      <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                                      <div className="cardStats">
                                        <div className="statsBadge"><auro-badge pill advisory>{changedFiles}</auro-badge> Changed file{changedFiles > 1 ? 's' : ''}</div>
                                        <div><auro-badge pill advisory>{commits.totalCount}</auro-badge> Commit{commits.totalCount > 1 ? 's' : ''}</div>
                                      </div>
                                      <div>
                                        { isDraft ? 'Draft PR, not ready for review!' : ''}
                                      </div>
                                      <div>
                                        <small>Author: </small>
                                        <img
                                          className="githubAvatar"
                                          src={author.avatarUrl}
                                          alt={author.login}
                                          title={author.login}></img>
                                      </div>
                                    </auro-alerts>
                                  : <auro-alerts noIcon error className="alert">
                                      <div className="cardHeader">
                                        <div>
                                          <b>{ reviewDecision === "CHANGES_REQUESTED" ? "Changes requested": ''}</b>
                                        </div>
                                        <div>
                                          <auro-datetime utc={createdAt}></auro-datetime>
                                        </div>
                                      </div>
                                      <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                                      <div className="cardStats">
                                        <div className="statsBadge"><auro-badge pill advisory>{changedFiles}</auro-badge> Changed file{changedFiles > 1 ? 's' : ''}</div>
                                        <div><auro-badge pill advisory>{commits.totalCount}</auro-badge> Commit{commits.totalCount > 1 ? 's' : ''}</div>
                                      </div>
                                      <div>
                                        { isDraft ? 'Draft PR, not ready for review!' : ''}
                                      </div>
                                      <div>
                                        <small>Author: </small>
                                        <img
                                          className="githubAvatar"
                                          src={author.avatarUrl}
                                          alt={author.login}
                                          title={author.login}></img>
                                      </div>
                                    </auro-alerts>
                                )
                            )
                          }
                        </span>
                      ))}
                    </div>
                  </auro-accordion>
                : ''
              }
            </td>
          </tr>
        )
      } else {
        return (null)
      }
    } else {
      return (null)
    }
  }
}

export default Repo;
