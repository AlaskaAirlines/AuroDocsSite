import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

class Summary extends MarkdownPageWrapper {
  createNewDate(date) {
    let endDate = new Date(date);
    return `${endDate.getUTCMonth() + 1}/${endDate.getUTCDate()}/${endDate.getUTCFullYear()}`;
  }

  render() {
    return (
      <div key={this.props.name}>
        {this.props.milestones.nodes.map(({title, description, dueOn, state, url}) => (
            description !== ""
            ? <div key={title} className="summaryWrapper">
                <h1 className="auro_heading auro_heading--800">{title}</h1>
                <p><b>Sprint end:</b> {this.createNewDate(dueOn)} | <b>Release status:</b> <auro-hyperlink href={url} target="_blank">{state.toLowerCase()}</auro-hyperlink></p>
                <div className="auro-markdown">
                  <ReactMarkdown
                    children={description}
                    components={{
                      
                      heading: this.headingRenderer,
                      link: this.linkRenderer
                    }}
                  />
                </div>
              </div>
            : ''
        ))}
      </div>
    )
  }
}

export default Summary;
