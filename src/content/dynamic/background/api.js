import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
// import markdownContent from '@aurodesignsystem/auro-background/docs/api.md'
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-background/master/docs/api.md';

class AuroBackgroundApi extends MarkdownPageWrapper {

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
      </section>
    );
  }
}

export default AuroBackgroundApi;