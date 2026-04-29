import React from "react";
import { Nav } from './nav';
import RenderRemoteMarkdown from "~/functions/renderRemoteMarkdown";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/template/docs/upstream.md';

class AuroContributingUpstream extends MarkdownPageWrapper {

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

export default AuroContributingUpstream;
