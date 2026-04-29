import React from "react";
import { Nav } from './nav';
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';
import Footer from '~/components/footer';

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
            {... markdownOptions}/>
        </section>
        <Footer />
      </section>
    );
  }
}

export default AuroButtonApi;
