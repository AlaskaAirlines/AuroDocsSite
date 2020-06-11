import React, { Component } from "react";

class Issue extends Component {
  render() {
    return (
      <div key={this.props.name} className="epicIssues">
        <h4 className="auro_heading auro_heading--500 util_capitalize">{this.props.name}</h4>
        {this.props.issues.map(({title, state, url, number}) => (
          <div className="epicIssues-container">
            <div className="epicIssues-row"  key={title}>
              <div className="epicIssues-column">
                <p><auro-hyperlink href={url} target="_blank">{title} #{number}</auro-hyperlink></p>
              </div>
              <div className="epicIssues-column">
                <p className={state}>{state}</p>
              </div>
            </div>
          </div>
        ))}


      </div>
    )
  }
}

export default Issue;
