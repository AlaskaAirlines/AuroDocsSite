import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
// import markdownContent from '@aurodesignsystem/webcorestylesheets/CONVENTIONS.md'
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

// This doc should be relocated to WCSS
const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WebCoreStyleSheets/master/CONVENTIONS.md';

class AuroCssConventions extends MarkdownPageWrapper {

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

        <section className="auro-markdown" id="top">
          <ReactMarkdown
            source={this.state.contentBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default AuroCssConventions;
