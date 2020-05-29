import React, { Component } from "react";
import { ButtonNav } from './buttonNav';
import _getTokens from "../../../functions/getTokens"
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../../components/CodeBlock';
import { MarkdownPageWrapper } from './markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/ods-button/master/docs/auro/api.md';

class AuroButtonApi extends MarkdownPageWrapper {

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

        <ButtonNav />

        <section className="ods-markdown">
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

export default AuroButtonApi;
