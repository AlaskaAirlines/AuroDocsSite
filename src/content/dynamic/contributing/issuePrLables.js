import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import markdownContent from './issuePrLables.md'; // this document needs to be a request against from the file in github, not local
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';
import data from './labelSettings.json'; // this data needs to be a request against data file in github, not local
import Template from './issuePrLablesTemplate';

// const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/template/...';

class AuroContributingIssues extends MarkdownPageWrapper {

  componentDidMount() {
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

        <auro-header level="2" display="700">Current project labels</auro-header>
        <p>The list below is a representation of the current set of labels, their descriptions and the process to use them.</p>

        <auro-header level="3" display="500">Default labels</auro-header>
        <table class="auro_table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Description</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({name, cat, color, description, process}) => (
              cat === 'default'
                ? <Template name={name} color={color} description={description} process={process}/>
                : ''
            ))}
          </tbody>
        </table>

        <auro-header level="3" display="500">Status labels</auro-header>
        <table class="auro_table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Description</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({name, cat, color, description, process}) => (
              cat === 'status'
                ? <Template name={name} color={color} description={description} process={process}/>
                : ''
            ))}
          </tbody>
        </table>

        <auro-header level="3" display="500">Type labels</auro-header>
        <table class="auro_table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Description</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({name, cat, color, description, process}) => (
              cat === 'type'
                ? <Template name={name} color={color} description={description} process={process}/>
                : ''
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default AuroContributingIssues;
