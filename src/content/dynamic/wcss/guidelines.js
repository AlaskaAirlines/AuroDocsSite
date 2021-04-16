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
            The following is a baseline list of guidelines from <auro-hyperlink href="https://raw.githubusercontent.com/KittyGiraudel/sass-guidelines/main/pages/en/_tldr.md" target="_blank">KittyGiraudel</auro-hyperlink> that Auro supports.
            In addition linting rules follow example from a handful of CSS styleguides, including: <auro-hyperlink href="https://github.com/necolas/idiomatic-css" target="_blank">The Idiomatic CSS Principles</auro-hyperlink>,
            <auro-hyperlink href="https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules" target="_blank">Google's CSS Style Guide</auro-hyperlink>,
            <auro-hyperlink href="https://github.com/airbnb/css#css" target="_blank">Airbnb's Styleguide</auro-hyperlink>, and <auro-hyperlink href="https://codeguide.co/#css" target="_blank">@mdo's Code Guide</auro-hyperlink>.
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
