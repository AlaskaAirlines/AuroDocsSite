import React from "react";
import { Nav } from './nav';
import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { MarkdownPageWrapper } from 'components/markdownPageWrapper';
import { registerCustomComponent } from "content/utils/registerCustomComponent";

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/auro-pane/master/demo/index.md';

class AuroIcon extends MarkdownPageWrapper {

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

  componentDidMount() {
    registerCustomComponent('custom-pane', 'https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-pane@latest/dist/auro-pane__bundled.js');
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

export default AuroIcon;
