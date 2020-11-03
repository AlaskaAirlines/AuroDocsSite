import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class HelpWanted extends Component {
  toggleDialog = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = 'hidden';
    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDialogClose = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = '';
    dialog.removeAttribute("open");
  }

  humanDate(dateData) {
    const standardOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };

    const then = new Date(dateData);

    return then.toLocaleString('en-us', standardOptions);
  }

  render() {
    return (
      <table key={this.props.name} className="auro_table epicIssues">
        <thead>
          <tr>
            <th className="auro_util_nowrap">Issues for: {this.props.name}</th>
            <th></th>
            <th className="auro_table--notes">Latest Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, body, url, number, comments}) => (
            <tr key={title}>
              <td className="auro_util_nowrap">
                <div>
                  <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>(<small>#{number}</small>)
                </div>
              </td>
              <td>
                <auro-button secondary onClick={() => this.toggleDialog(`#dialog-${number}`)}>
                  <auro-icon customcolor category="alert" name="question-stroke">See repo readme</auro-icon>
                  &nbsp;&nbsp;See details
                </auro-button>

                <auro-dialog id={`dialog-${number}`} md>
                  <span slot="header">{title}</span>
                  <span slot="content">
                    <div className="auro-markdown util_wrap">
                      <ReactMarkdown source={body} />
                  </div>
                  </span>
                  <span slot="footer">
                    <auro-hyperlink cta secondary href={url} target="_blank">See: {title}</auro-hyperlink>
                  </span>
                </auro-dialog>
              </td>
              <td className="auro_table--notes">
                {comments.nodes.map(({body, createdAt}) => (
                  <div className="auro-markdown">
                    <ReactMarkdown source={body} />

                    {comments.nodes.map(({author}) => (
                      <img key={createdAt} src={author.avatarUrl} className="githubAvatar" alt="avatar" title={author.login} />
                    ))}<small>{this.humanDate(createdAt)}</small>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default HelpWanted;
