import React from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

class Summary extends MarkdownPageWrapper {
  createNewDate(date) {
    let endDate = new Date(date);
    return `${endDate.getUTCMonth() + 1}/${endDate.getUTCDate()}/${endDate.getUTCFullYear()}`;
  }

  render() {
    return (
      <div key={this.props.name} className="">
        {this.props.milestones.nodes.map(({title, description, dueOn, state, url}) => (
          <div key={title}>
            <h1 className="auro_heading auro_heading--800">{title}</h1>
            <p><b>Sprint end:</b> {this.createNewDate(dueOn)} | <b>Relesae status:</b> <auro-hyperlink href={url} target="_blank">{state.toLowerCase()}</auro-hyperlink></p>
            <div className="auro-markdown">
              <ReactMarkdown
                source={description}
                renderers={{
                  code: CodeBlock,
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

export default Summary;
