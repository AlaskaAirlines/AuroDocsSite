import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/docs/api.md';

class AuroButtonApi extends MarkdownPageWrapper {

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
              heading: this.headingRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default AuroButtonApi;
