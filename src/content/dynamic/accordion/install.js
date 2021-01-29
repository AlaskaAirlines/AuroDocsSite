import React from "react";
import { Nav } from './nav';
import LinkIcons from 'components/linkIcons';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-accordion/master/README.md';

class AuroAlertsInstall extends MarkdownPageWrapper {
  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-accordion'];

    return `@alaskaairux/auro-accordion: ${dependencies}`;
  };

  // function to get text from MD document
  componentWillMount() {
    fetch(markdownContent).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })
  }

  render() {
    return (
      <section className="auro_baseType">

        <Nav />

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.contentBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-accordion"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-accordion"
          code="https://github.com/AlaskaAirlines/auro-accordion/blob/master/src/auro-accordion.js"
        />
      </section>
    );
  }
}

export default AuroAlertsInstall;
