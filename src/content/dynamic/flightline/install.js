import React from "react";
import { Nav } from './nav';
import LinkIcons from 'components/linkIcons';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
// import markdownContent from '@alaskaairux/auro-flightline/README.md'
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-flightline/master/README.md';

class AuroFlightlineInstall extends MarkdownPageWrapper {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-flightline'];

    return `@alaskaairux/auro-flightline: ${dependencies}`;
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
          github="https://github.com/AlaskaAirlines/auro-flightline"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-flightline"
          code="https://github.com/AlaskaAirlines/auro-flightline/blob/master/src/auro-flightline.js"
        />
      </section>
    );
  }
}

export default AuroFlightlineInstall;