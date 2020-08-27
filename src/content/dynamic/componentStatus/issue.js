import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class Issue extends Component {
  getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#fff';
  };

  humanDate(dateData) {
    const standardOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
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
            <th>Labels</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, url, number, labels, projectCards, assignees, comments}) => (
            <tr key={title}>
              <td className="auro_util_nowrap">
                <div>
                  <auro-hyperlink href={url} target="_blank">{title} #{number}</auro-hyperlink>
                </div>
                <div className="githubAvatar--wrapper">
                  <small>Assigned: </small>{assignees.nodes.map(({avatarUrl, name, id}) => (
                    assignees.nodes.length > 0
                    ? <img key={id} src={avatarUrl} className="githubAvatar" alt={name} title={name} />
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color, description}) => (
                    <div key={name} title={description} className="issueLabel" style={{backgroundColor: '#' + color, color: this.getContrastYIQ(color)}}>
                      {name}
                    </div>
                  ))}
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

export default Issue;
