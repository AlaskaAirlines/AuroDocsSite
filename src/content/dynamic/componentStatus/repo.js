import React, { Component } from "react";

class Repo extends Component {

  render() {
    if (!this.props.isPrivate) {
      if (this.props.releases.nodes.length !== 0) {
        return (
          <tr>
            <td className="auro_util_nowrap">
              <auro-hyperlink nav href={this.props.homepageUrl}><strong>{this.props.name}</strong></auro-hyperlink>
              <div>
                <small>
                  { // loop over releases for URL to last release
                    this.props.releases.nodes.length !== 0
                      ? this.props.releases.nodes.map(({tagName, id, url}) => (
                          <div key={id}>
                            <auro-hyperlink href={url} target="_blank" nav>Release {tagName}</auro-hyperlink>
                          </div>
                        ))
                      : <div className="badge">
                          <div className="title">Release</div>
                          <div className="data data--null">v0</div>
                        </div>
                  }
                  <auro-hyperlink href={`https://github.com/AlaskaAirlines/${this.props.name}/pulse`} target="_blank" nav>Insights</auro-hyperlink><br/>
                  {
                    this.props.pullRequests.totalCount > 0
                      ? <auro-hyperlink href={`https://github.com/AlaskaAirlines/${this.props.name}/pulls`} target="_blank" nav>PRs</auro-hyperlink>
                      : ''
                  }
                </small>
              </div>
            </td>
            <td>
              <a href={`https://github.com/AlaskaAirlines/${this.props.name}/`} target="_blank" rel="noopener noreferrer"><img alt={`${this.props.name} build status`}src={`https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/${this.props.name}/testPublish.yml?branch=master&style=for-the-badge`} style={{'marginBottom': '-8px', 'maxWidth': 'unset'}}></img></a>
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
