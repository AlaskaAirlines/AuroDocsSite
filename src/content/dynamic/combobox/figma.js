import React from "react";
// import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-combobox/master/docs/figma.md';
const releaseContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-combobox/master/docs/design-notes.md';

class AuroComboboxFigma extends MarkdownPageWrapper {

  componentWillMount() {
    fetch(markdownContent).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })

    fetch(releaseContent).then((response) => response.text()).then((text) => {
      this.setState({
        releaseBuild: text
      })
    })
  }

  render() {
    return (
      <section className="auro_baseType">

        {/* <Nav /> */}

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.contentBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer
            }}/>
        </section>

        <hr/>

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.releaseBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default AuroComboboxFigma;
