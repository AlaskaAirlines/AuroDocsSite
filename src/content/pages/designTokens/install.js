import React from "react";
import { TokenNav } from './tokenNav';
import _getTokens from "../../../functions/getTokens"
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../components/CodeBlock';
import { MarkdownPageWrapper } from '../../../components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/AuroDesignTokens/master/README.md';

class TokenInstall extends MarkdownPageWrapper {

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

        <TokenNav />

        <section className="ods-markdown">
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

export default TokenInstall;
