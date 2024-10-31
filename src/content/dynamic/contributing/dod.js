import React from "react";
import { Nav } from './nav';
import RenderRemoteMarkdown from "~/functions/renderRemoteMarkdown";
// import markdownContent from '@alaskaairux/auro-[component]/demo/demo.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/docs/definitionOfdone.md';

class AuroContributing extends MarkdownPageWrapper {

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

export default AuroContributing;
