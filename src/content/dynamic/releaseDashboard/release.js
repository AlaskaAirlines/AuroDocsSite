import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class Release extends Component {
  render() {
    return (
      <div key={this.props.name}>
        <h1 className="auro_heading auro_heading--display">{this.props.name}</h1>
        {this.props.releases.nodes.map(({name, description}) => (
          <div key={name}>
            <ReactMarkdown source={description} />
          </div>
        ))}
      </div>
    )
  }
}

export default Release;