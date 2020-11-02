import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class HelpWanted extends Component {
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
            <th>Latest Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, url, number, comments}) => (
            <tr key={title}>
              <td className="auro_util_nowrap">
                <div>
                  <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink><br/>
                  <small>#{number}</small>
                </div>
              </td>
              <td>
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
