import React from "react";
import { Nav } from './nav';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';
import { registerCustomComponent } from "content/utils/registerCustomComponent";

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-toast/main/demo/index.md';

class AuroToast extends MarkdownPageWrapper {

  componentDidMount() {
    window.initToastIndexExamples();
    registerCustomComponent('custom-toast', 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-toast@latest/dist/auro-toast__bundled.js');
  }

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

      if (href.includes("auro.alaskaair.com") || href.charAt(0) === '#') {

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
      </section>
    );
  }
}

export default AuroToast;
