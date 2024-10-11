import React from "react";
import { Nav } from './nav';
import LinkIcons from '~/components/linkIcons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
// import markdownContent from '@aurodesignsystem/auro-tokenlist/README.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';
import packageJson from 'ROOT/package.json';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-tokenlist/main/README.md';

class AuroTokenListInstall extends MarkdownPageWrapper {

  showVersion() {

    const dependencies = packageJson.dependencies['@aurodesignsystem/auro-tokenlist'];

    return `@aurodesignsystem/auro-tokenlist: ${dependencies}`;
  };

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
            children={this.state.contentBuild}
            remarkPlugins={[remarkGfm,remarkRehype]}
            rehypePlugins={[rehypeHighlight,rehypeRaw]}
            components={{
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-tokenlist"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-tokenlist"
          code="https://github.com/AlaskaAirlines/auro-tokenlist/blob/master/src/auro-tokenlist.js"
        />
      </section>
    );
  }
}

export default AuroTokenListInstall;
