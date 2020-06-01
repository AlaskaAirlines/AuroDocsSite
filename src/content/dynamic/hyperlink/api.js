import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/ods-hyperlink/master/docs/auro-api.md';
const secondaryContent = 'https://raw.githubusercontent.com/AlaskaAirlines/ods-hyperlink/master/docs/ods-api.md';

class AuroButtonApi extends MarkdownPageWrapper {

  componentWillMount() {
    fetch(markdownContent).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })

    fetch(secondaryContent).then((response) => response.text()).then((text) => {
      this.setState({
        secondaryContentBuild: text
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

        <hr />

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.secondaryContentBuild}
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

export default AuroButtonApi;
