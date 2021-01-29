import React from "react";
import { Nav } from './nav';
import LinkIcons from 'components/linkIcons';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-hyperlink/master/README.md';

class AuroButtonApi extends MarkdownPageWrapper {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-hyperlink'];

    return `@alaskaairux/auro-hyperlink: ${dependencies}`;
  };

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
              heading: this.headingRenderer
            }}/>
        </section>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-hyperlink"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-hyperlink"
          code="https://github.com/AlaskaAirlines/auro-hyperlink/blob/master/src/auro-hyperlink.js"
        />
      </section>
    );
  }
}

export default AuroButtonApi;
