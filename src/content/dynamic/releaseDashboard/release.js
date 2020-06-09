import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class Release extends Component {
  render() {
    return (
      <div key={this.props.name} className="releaseWrapper">
        <h1 className="auro_heading auro_heading--800">{this.props.name}</h1>
        {this.props.releases.map(({name, description}) => (
          <div key={name}>
            <h2 className="auro_heading auro_heading--600">{name}</h2>
            <div className="auro-markdown releaseWrapper--data">
              <ReactMarkdown source={description} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Release;
