import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";

class Epic extends Component {
  render() {
    return (
      <div key={this.props.name} className="releaseWrapper">
        {this.props.epics.map(({title, body, url}, index) => (
          <div key={index + '_' + title}>
            <h1 className="auro_heading auro_heading--display">{title}</h1>
            <auro-hyperlink href={url} target="_blank">See epic in Github</auro-hyperlink>
            <div className="auro-markdown epicWrapper--data">
              <ReactMarkdown children={body}
              remarkPlugins={[remarkGfm,remarkRehype]}
              rehypePlugins={[[rehypeExternalLinks, {content: { type: 'text' , value: '' }}], rehypeHighlight,rehypeRaw]}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Epic;
