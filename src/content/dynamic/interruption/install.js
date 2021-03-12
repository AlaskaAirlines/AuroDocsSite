import React from "react";
import { Nav } from './nav';
import LinkIcons from 'components/linkIcons';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import markdownContent from '@alaskaairux/auro-interruption/README.md'
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';
class AuroInterruptionInstall extends MarkdownPageWrapper {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-interruption'];

    return `@alaskaairux/auro-interruption: ${dependencies}`;
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
          github="https://github.com/AlaskaAirlines/auro-interruption"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-interruption"
          code="https://github.com/AlaskaAirlines/auro-interruption/blob/master/src/auro-interruption.js"
        />
      </section>
    );
  }
}

export default AuroInterruptionInstall;
