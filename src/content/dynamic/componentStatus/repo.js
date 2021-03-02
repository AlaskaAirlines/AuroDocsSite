import React, { Component } from "react";

let randomNumber = ''
// let randomNumberTwo = ''

class Repo extends Component {

  charGenerate() {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    randomNumber = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
    // randomNumberTwo = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
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
              { // loop over releases for URL to last release
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
                    {
                      this.props.issues.totalCount > 0
                      ? <div className="data data--issues">{this.props.issues.totalCount}</div>
                      : <div className="data data--null">{this.props.issues.totalCount}</div>
                    }
                  </div>
                </a>
              }
            </td>
            <td className="auro_util_nowrap">
              {
                <a href={`https://github.com/AlaskaAirlines/${this.props.name}/pulls`} target="_blank" className="noLinkUi" rel="noopener noreferrer">
                  <div className="badge">
                    <div className="title">PRs</div>
                    {
                      this.props.pullRequests.totalCount > 0
                      ? <div className="data data--prs">{this.props.pullRequests.totalCount}</div>
                      : <div className="data data--null">{this.props.pullRequests.totalCount}</div>
                    }
                  </div>
                </a>
              }
            </td>
            <td>
              <div className="shortWrap">{this.props.description}</div>

              {
                this.props.pullRequests.totalCount > 0
                ? <auro-accordion lowProfile noProfile justifyLeft>
                    <strong slot="trigger">Pull request details</strong>
                    <div className="statusPrLayout">
                      {this.props.pullRequests.nodes.map(({title, mergeable, changedFiles, commits, url, isDraft, reviewDecision, author, createdAt}) => (
                        <span>
                          {
                            isDraft
                            ? <auro-alerts noIcon className="alert">
                                <div className="cardHeader">
                                  <div>
                                    Draft:<br/><auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                                  </div>
                                  <div>
                                    <auro-datetime utc={createdAt}></auro-datetime>
                                  </div>
                                </div>
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
                                      Draft:<br/><auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                                    </div>
                                    <div>
                                      <auro-datetime utc={createdAt}></auro-datetime>
                                    </div>
                                  </div>
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
                              : <auro-alerts noIcon warning className="alert">
                                  <div className="cardHeader">
                                    <div>
                                      { reviewDecision === "REVIEW_REQUIRED" ? "Review required " : (reviewDecision === "CHANGES_REQUESTED" ? "Changes requested": '')}
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
        return ('')
      }
    } else {
      return ('')
    }
  }
}

export default Repo;
