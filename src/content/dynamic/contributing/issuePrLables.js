import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
// import markdownContent from '@alaskaairux/auro-[Component]/README.md'
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/template/docs/upstream.md';

class AuroContributingUpstream extends MarkdownPageWrapper {

  constructor(props) {
    super(props);

    this.state = {
      jsonData: 'waiting...'
    };
  }

  componentDidMount() {
    const apiUrl = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/template/.github/labelSettings.json';

    fetch(apiUrl).then((response) => response.json()).then((data) => {
      this.setState({
        jsonData: data
      })
    })

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

        {/* {console.log(this.state.jsonData)} */}

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

export default AuroContributingUpstream;
