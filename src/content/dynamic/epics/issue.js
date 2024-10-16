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
      <table key={this.props.name} className="auro_table epicIssues">
        <thead>
          <tr>
            <th>Issues for: {this.props.name}</th>
            <th>Labels</th>
            <th>Release status</th>
            <th>State</th>
          </tr>
        </thead>
        {this.props.issues.map(({title, state, url, number, labels, projectCards}) => (
          <tr>
            <td>
              <auro-hyperlink href={url} target="_blank">{title} #{number}</auro-hyperlink>
            </td>
            <td className="labelWrapper">
              {labels.nodes.map(({name, color, description}, index) => (
                <div key={index + '_' + name} title={description} className="issueLabel" style={{backgroundColor: '#' + color, color: this.getContrastYIQ(color)}}>
                  {name}
                </div>
              ))}
            </td>
            <td>
              {projectCards.nodes.map(({column}, index) => (
                <div key={index + '_' + column.name}>
                  {column.name}
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
