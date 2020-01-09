import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
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

  showVersion() {
    if (this.module) {
      const pjson = require('../../package.json');
      const dependencies = pjson.dependencies[this.module];
      return `${this.module}: ${dependencies}`;
    }
  };

  getNpm() {
    if (this.module) {
      return `https://www.npmjs.com/package/${this.module}`
    }
  }
}


export class ExternalMarkdownWrapper extends MarkdownWrapper {

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
        <article className="ods-markdown">
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </article>

        <LinkIcons
          github={this.githubURL}
          npm={this.getNpm()}
          code={this.codeURL}
          version={this.showVersion()}
        />

      </section>
    );
  }
}

export class InternalMarkdownWrapper extends MarkdownWrapper {

  getMarkdown() {
    return this.readme
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
