import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import '../sass/markdown.scss';

import ReactMarkdown from 'react-markdown';
import generator from '@alaskaairux/ods-wc-generator/README.md'

class Docs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
  };

  componentWillMount() {
    fetch(generator).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    })
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-wc-generator'];
    return `@alaskaairux/ods-wc-generator: ${dependencies}`;
  };

  render() {
    return (
      <section id="generator">
        <LinkIcons
          github="https://github.com/AlaskaAirlines/ods-wc-generator"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-wc-generator"
          code="https://github.com/AlaskaAirlines/ODS-WC-Generator/tree/master/template"
          version={this.showVersion()}
        />

        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </section>

      </section>
    );
  }
}

export default Docs;
