import React from "react";
import { Nav } from './nav';
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
// import markdownContent from '@alaskaairux/auro-[Component]/README.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/template/docs/upstream.md';

class AuroContributingUpstream extends MarkdownPageWrapper {

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
            {... markdownOptions}/>
        </section>
      </section>
    );
  }
}

export default AuroContributingUpstream;
