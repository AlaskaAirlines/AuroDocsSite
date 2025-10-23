import React from "react";
import { Nav } from './nav';
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/refs/heads/master/readme.md';

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
            {... markdownOptions}/>
        </section>
      </section>
    );
  }
}

export default AuroButtonApi;