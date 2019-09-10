import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
// import '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties.css';
import '../sass/markdown.scss';

import ReactMarkdown from 'react-markdown';
// import readme from '@alaskaairux/ods-docs/docs/README.md'
// import babel from '@alaskaairux/ods-docs/docs/BABEL_SUPPORT.md'
import generator from '@alaskaairux/ods-wc-generator/README.md'

class Docs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // docsReadme: null,
      // docsBabel: null,
      docsGenerator: null
    }
  };

  componentWillMount() {
    // fetch(readme).then((response) => response.text()).then((text) => {
    //   this.setState({
    //     docsReadme: text
    //   })
    // })

    // fetch(babel).then((response) => response.text()).then((text) => {
    //   this.setState({
    //     docsBabel: text
    //   })
    // })

    fetch(generator).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    })
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-docs'];
    return `@alaskaairux/ods-docs: ${dependencies}`;
  };

  render() {
    return (
      <section id="icons">

        <h1 className="heading heading--max">Orion Docs</h1>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__docs"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-docs"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/tree/master/docs"
          version={this.showVersion()}
        />

        <section className="ods-markdown">
          {/* <ReactMarkdown source={this.state.docsReadme} escapeHtml={false}/> */}
          {/* <ReactMarkdown source={this.state.docsBabel} escapeHtml={false}/> */}
          <ReactMarkdown source={this.state.docsGenerator} escapeHtml={false}/>
        </section>

      </section>
    );
  }
}

export default Docs;
