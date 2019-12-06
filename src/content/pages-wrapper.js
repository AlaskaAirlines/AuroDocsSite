import React, { Component } from "react";
import '../sass/markdown.scss';

import ReactMarkdown from 'react-markdown';

export class MarkdownWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
  };

  componentWillMount() {
    fetch(this.getMarkdown()).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    })
  }

  getMarkdown() {
    return this.readme;
  }

  render() {
    return (
      <section>
        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </section>

      </section>
    );
  }
}


export class PagesMarkdownWrapper extends MarkdownWrapper {

  getMarkdown() {
    const details = this.githubURL.split("github.com/")[1].split("/");
    const repo = {
      user: details[0],
      name: details[1]
    };

    return `https://raw.githubusercontent.com/${repo.user}/${repo.name}/master/${this.readme}`
  }
}
