import React from "react";
import { Nav } from './nav';
import RenderRemoteMarkdown from "~/functions/renderRemoteMarkdown";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://gist.githubusercontent.com/blackfalcon/8428401/raw/d697660fe128864acc3ee4ba9ca5075894553808/git-feature-workflow.md';

class AuroContributingGitWorkflow extends MarkdownPageWrapper {

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

export default AuroContributingGitWorkflow;
