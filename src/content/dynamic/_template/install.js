import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import markdownOptions from "~/functions/markdownOptions";
// import markdownContent from '@alaskaairux/auro-[Component]/README.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';
import packageJson from 'ROOT/package.json';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-[component]/master/README.md';

class Auro[Component]Install extends MarkdownPageWrapper {

  showVersion() {
    const dependencies = packageJson.dependencies['@alaskaairux/auro-[component]'];
    return `@alaskaairux/auro-[component]: ${dependencies}`;
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
            {... markdownOptions}/>
        </section>

      </section>
    );
  }
}

export default Auro[Component]Install;
