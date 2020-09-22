import React, { Component } from "react";

class IssueNoComments extends Component {
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
            <th>Issues for: {this.props.name}</th>
            <th>Labels</th>
            <th>Project column</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, url, number, labels, projectCards, assignees, comments}) => (
            <tr key={title}>
              <td>
                <div>
                  <auro-hyperlink href={url} target="_blank">{title} #{number}</auro-hyperlink>
                </div>
                <div className="githubAvatar--wrapper">
                  {assignees.nodes.map(({avatarUrl, name, id}) => (
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
                {projectCards.nodes.map(({column}) => (
                  <div key={column.name}>
                    {column.name}
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

export default IssueNoComments;
