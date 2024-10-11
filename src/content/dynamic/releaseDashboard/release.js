import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
};

class Release extends MarkdownPageWrapper {
  render() {
    return (
      <div key={this.props.name} className="releaseWrapper">

        <h1 className="auro_heading auro_heading--700">{this.props.name}</h1>
        <p style={{marginTop: "-26px"}}>{this.props.start.toLocaleDateString("en-US", options)} - {this.props.end.toLocaleDateString("en-US", options)}</p>
        {this.props.releases.map(({name, description}) => (
          <div key={name} className="release">
            <h2 className="auro_heading auro_heading--600">{name}</h2>
            <div className="auro-markdown releaseWrapper--data">
              <ReactMarkdown
                children={description}
                components={{
                  
                  heading: this.headingRenderer,
                  link: this.linkRenderer
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Release;
