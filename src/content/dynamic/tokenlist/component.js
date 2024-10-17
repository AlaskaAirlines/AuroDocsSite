import React from "react";
import { Nav } from './nav';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
// import markdownContent from '@aurodesignsystem/auro-[component]/demo/demo.md'
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-tokenlist/main/demo/demo.md';

class AuroTokenList extends MarkdownPageWrapper {

  // function to get text from MD document
  getMarkdownText() {
    fetch(markdownContent)
        .then((response) => response.text())
        .then((text) => {
          const rawHtml = marked.parse(text);
          document.querySelector('.auro-markdown').innerHTML = rawHtml;
          Prism.highlightAll();
        });

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      let url = href
      url = url.toString().replace(/^.*\/\/[^/]+/, '')

      if (href.toString().includes("auro.alaskaair.com")) {

        return link.replace("href",`href="${url}"`);
      } else {

        return `<a href="${href}"  rel="noopener noreferrer" target="_blank" className="externalLink">${text} <auro-icon customColor category="interface" name="external-link-md"></auro-icon></a>`
      }
    };

    marked.setOptions({
        renderer: renderer
    });
  }



  render() {
    return (
      <section className="auro_baseType">

        <Nav />

        <section
          className="auro-markdown"
          dangerouslySetInnerHTML={this.getMarkdownText()}
        />
      </section>
    );
  }
}

export default AuroTokenList;
