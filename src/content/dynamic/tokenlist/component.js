import React from "react";
import { Nav } from './nav';
import RenderRemoteMarkdown from '~/functions/renderRemoteMarkdown';
// import markdownContent from '@aurodesignsystem/auro-[component]/demo/demo.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-tokenlist/main/demo/demo.md';

class AuroTokenList extends MarkdownPageWrapper {

  render() {
    return (
      <section className="auro_baseType">

        <Nav />

        <section className="auro-markdown">
            <RenderRemoteMarkdown markdownUrl={markdownContent} />
        </section>
      </section>
    );
  }
}

export default AuroTokenList;
