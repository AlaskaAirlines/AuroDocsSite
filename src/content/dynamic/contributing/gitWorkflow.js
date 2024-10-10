import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '~/components/CodeBlock';
// import markdownContent from '@alaskaairux/auro-[Component]/README.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://gist.githubusercontent.com/blackfalcon/8428401/raw/d697660fe128864acc3ee4ba9ca5075894553808/git-feature-workflow.md';

class AuroContributingGitWorkflow extends MarkdownPageWrapper {

  // function to get text from MD document
  UNSAFE_componentWillMount() {
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
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default AuroContributingGitWorkflow;
