import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

// This doc should be relocated to WCSS
const markdownContent = 'https://raw.githubusercontent.com/KittyGiraudel/sass-guidelines/main/pages/en/_tldr.md';

class LintRules extends MarkdownPageWrapper {

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

        <p>
          <small>
            Auro supports the following <auro-hyperlink href="https://sass-guidelin.es/" target="_blank">Sass Guidelines</auro-hyperlink>.
          </small>
        </p>

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
      </section>
    );
  }
}

export default LintRules;
