import React, { Component } from "react";

let randomNumber = ''

class Repo extends Component {

  charGenerate() {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    randomNumber = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
  }

  render() {
    if (!this.props.isPrivate && this.props.pullRequests.totalCount > 0) {
      if (this.props.releases.nodes.length !== 0) {
        return (
          <tr>
            <td className="auro_util_nowrap" style={{'vertical-align': 'baseline'}}>
              <auro-hyperlink nav href={this.props.homepageUrl}><strong>{this.props.name}</strong></auro-hyperlink>
            </td>
            <td style={{'vertical-align': 'baseline'}}>
              { this.charGenerate() }
              { // loop over releases for URL to last release
                this.props.releases.nodes.length !== 0
                  ? this.props.releases.nodes.map(({tagName, createdAt, id, url}, index) => (
                      <div key={id}>
                        <a key={index} href={url} target="_blank" rel="noopener noreferrer" style={{'textDecoration': 'none'}}>
                          <div className="badge util_pointer" id={randomNumber}>
                            <div className="title"><b>Current release</b></div>
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
            <td>
              {
                this.props.pullRequests.totalCount > 0
                ? <auro-accordion lowProfile noProfile justifyLeft expanded>
                    <strong slot="trigger" style={{'color': 'var(--auro-color-ui-default-on-light)'}}>
                      {this.props.pullRequests.totalCount > 1
                        ? `Their are (${this.props.pullRequests.totalCount}) open pull requests`
                        : `There is (${this.props.pullRequests.totalCount}) open pull request`}
                    </strong>
                    <div className="statusPrLayout">
                      {this.props.pullRequests.nodes.map(({title, mergeable, changedFiles, commits, url, isDraft, reviewDecision, author, createdAt}) => (
                        <span>
                          {
                            isDraft
                            ? <auro-alert noIcon>
                                <div className="cardHeader">
                                  <div>
                                    Draft
                                  </div>
                                  <div>
                                    <auro-datetime utc={createdAt}></auro-datetime>
                                  </div>
                                </div>
                                <small>Review only, DO NOT MERGE!!!</small>
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

                              </auro-alert>
                            : (mergeable && !isDraft && reviewDecision==='APPROVED'
                              ? <auro-alert noIcon type="success">
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

                                </auro-alert>
                              : (reviewDecision === "REVIEW_REQUIRED"
                                  ? <auro-alert noIcon type="warning">
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
                                    </auro-alert>
                                  : <auro-alert noIcon type="error">
                                      <div className="cardHeader">
                                        <div>
                                          { reviewDecision === "CHANGES_REQUESTED" ? "Changes requested": ''}
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

                                    </auro-alert>
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
