import React from "react";
import { Nav } from './nav';
import LinkIcons from 'components/linkIcons';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
// import markdownContent from '@alaskaairux/auro-popover/demo/demo.md'
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-popover/master/demo/demo.md';

class AuroPopover extends MarkdownPageWrapper {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-popover'];

    return `@alaskaairux/auro-popover: ${dependencies}`;
  };

  // function to get text from MD document
  getMarkdownText() {
    fetch(markdownContent)
        .then((response) => response.text())
        .then((text) => {
          const rawHtml = marked(text);
          document.querySelector('.auro-markdown').innerHTML = rawHtml;
          Prism.highlightAll();
        });

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      let url = href
      url = url.replace(/^.*\/\/[^/]+/, '')

      if (href.includes("auro.alaskaair.com")) {

        return link.replace("href",`href="${url}"`);
      } else {

        const newLink = `<a href="${href}"  rel="noopener noreferrer" target="_blank" className="externalLink">${text} <auro-icon customColor category="interface" name="external-link-md"></auro-icon></a>`

        return newLink;
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

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-datetime"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-datetime"
          code="https://github.com/AlaskaAirlines/auro-datetime/blob/master/src/auro-datetime.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroPopover;
