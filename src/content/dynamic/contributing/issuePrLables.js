import React from "react";
import { Nav } from './nav';
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import markdownContent from './issuePrLables.md'; // this document needs to be a request against from the file in github, not local
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';
import data from './labelSettings.json'; // this data needs to be a request against data file in github, not local

// const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/template/...';

class AuroContributingUpstream extends MarkdownPageWrapper {

  componentDidMount() {
    fetch(markdownContent).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })
  }

  getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#fff';
  };

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
        <table class="auro_table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Description</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({name, color, description, process}) => (
              <tr>
                <td>
                  <auro-badge label style={{
                    backgroundColor: `#${color}`,
                    borderColor: `#${color}`,
                    padding: "5px 10px",
                    marginRight: "auto",
                    color: this.getContrastYIQ(color)}}
                    >{name}</auro-badge>
                </td>
                <td style={{verticalAlign: "baseline"}} className="auro_util_fontWeightMedium">{description}</td>
                <td style={{verticalAlign: "baseline"}} className="auro_util_fontWeightMedium">{process}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default AuroContributingUpstream;
