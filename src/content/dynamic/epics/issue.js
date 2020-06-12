import React, { Component } from "react";

class Issue extends Component {
  render() {
    return (
      <table key={this.props.name} className="auro_table epicIssues">
        <thead>
          <tr>
            <th className="util_capitalize" colspan="2">{this.props.name}</th>
          </tr>
        </thead>
        {this.props.issues.map(({title, state, url, number}) => (
          <tr>
            <td>
              <auro-hyperlink href={url} target="_blank">{title} #{number}</auro-hyperlink>
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
