import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class Epic extends Component {
  render() {
    return (
      <div key={this.props.name} className="releaseWrapper">
        {this.props.epics.map(({title, body, url}) => (
          <div key={title}>
            <h1 className="auro_heading auro_heading--display">{title}</h1>
            <auro-hyperlink href={url} target="_blank">See epic in Github</auro-hyperlink>
            <div className="auro-markdown epicWrapper--data">
              <ReactMarkdown source={body} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Epic;
