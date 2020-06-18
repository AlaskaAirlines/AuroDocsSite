import React, { Component } from "react";

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
      <table key={this.props.name} className="auro_table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Status</th>
            <th>Notes</th>
            <th>State</th>
          </tr>
        </thead>
        {this.props.issues.map(({title, url, state, labels, comments}) => (
          <tr>
            <td>
              <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
            </td>
            <td className="labelWrapper">
              {labels.nodes.map(({name, color}) => (
                <div key={name} data-name={name} title={name} className="issueLabel auditLabel"
                  style={{backgroundColor: '#' + color, color: '#' + color}}>
                </div>
              ))}
            </td>
            <td>
              {comments.nodes.map(({body}) => (
                <div>
                  {body}
                </div>
              ))}
            </td>
            <td>
              <span className={state}>{state}</span>
            </td>
          </tr>
        ))}
      </table>
    )
  }
}

export default Issue;
