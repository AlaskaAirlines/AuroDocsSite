import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

class Issue extends Component {
  getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#fff';
  };

  render() {
    return (
      <table key={this.props.name} className="auro_table epicIssues">
        <thead>
          <tr>
            <th className="auro_util_nowrap"><auro-header level="2" display="600">{this.props.name}</auro-header></th>
            <th>Labels</th>
            <th className="auro_table--notes">Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, url, number, labels, assignees, comments}, index) => (
            <tr key={index + '_' +title}>
              <td className="auro_table--issue">
                <div>
                  <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
                </div>
                <div>
                  <small> #{number}</small>
                </div>
                <div className="githubAvatar--wrapper">
                  <small>Assigned: </small>{assignees.nodes.map(({avatarUrl, name, id}, index) => (
                    assignees.nodes.length > 0
                    ? <img key={index + '_' + id} src={avatarUrl} className="githubAvatar" alt={name} title={name} />
                    : ''
                  ))}
                </div>
              </td>
              <td className="auro_table--labels">
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color, description}, index) => (
                    <div key={index + '_' + name} title={description} className="issueLabel" style={{backgroundColor: '#' + color, color: this.getContrastYIQ(color)}}>
                      {name}
                    </div>
                  ))}
                </div>
              </td>
              <td className="auro_table--notes">
                {comments.nodes.map(({body, createdAt}) => (
                  <div className="auro-markdown">
                    <ReactMarkdown children={body} {... markdownOptions}/>

                    {comments.nodes.map(({author}, index) => (
                      <img key={index + '_' + createdAt} src={author.avatarUrl} className="githubAvatar" alt="avatar" title={author.login} />
                    ))}<small>
                      <auro-datetime utc={createdAt} weekday="long"></auro-datetime>
                    </small>
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
