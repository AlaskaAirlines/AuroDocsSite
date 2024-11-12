import React, { Component } from "react";
import '~/sass/markdown.scss';
import ReactMarkdown from 'react-markdown';
import markdownOptions from "~/functions/markdownOptions";

export class RawMarkdownWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
  };

  // function to get text from MD document
  UNSAFE_componentWillMount() {
    fetch(this.getMarkdown()).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    });
  }
}



export class ExternalMarkdownWrapper extends RawMarkdownWrapper {

  getMarkdown() {
    const details = this.githubURL.split("github.com/")[1].split("/");
    const repo = {
      user: details[0],
      name: details[1]
    };

    return `https://raw.githubusercontent.com/${repo.user}/${repo.name}/master/${this.readme}`
  }

  render() {

    return (
      <section>
        <article className="auro-markdown">
          <ReactMarkdown
            children={this.state.docsGenerator}
            {... markdownOptions}
          />
        </article>
      </section>
    );
  }
}

export class InternalMarkdownWrapper extends RawMarkdownWrapper {

  getMarkdown() {
    return this.readme
  }

  render() {
    return (
      <section>
        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.docsGenerator}
            {... markdownOptions}
          />
        </section>
      </section>
    );
  }
}
