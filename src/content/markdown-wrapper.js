import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import '../sass/markdown.scss';

import ReactMarkdown from 'react-markdown';

//import readme from '@alaskaairux/ods-wc-generator/README.md'

class MarkdownWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
  };

  componentWillMount() {
    fetch(this.readme).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    })
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies[this.module];
    return `${this.module}: ${dependencies}`;
  };

  render() {
    return (
      <section>
        <LinkIcons
          github={this.githubURL}
          npm={`https://www.npmjs.com/package/${this.module}`}
          code={this.codeURL}
          version={this.showVersion()}
        />

        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </section>

      </section>
    );
  }
}

export default MarkdownWrapper;