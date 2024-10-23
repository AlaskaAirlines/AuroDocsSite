import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';

class RenderMarkdownPage extends MarkdownPageWrapper {

  constructor(props) {
    super(props);

    this.markdownContentPath = undefined;
  };

  static get properties() {
    return {
      name: {
        type: String
      }
    };
  }

  convertToUpperCase(str) {
    if(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str;
    }
  }

  // function to get text from MD document
  getMarkdownText() {
    // this.parseRoute();

    fetch(this.markdownContent)
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

      text = text || href.text;

      if (href.toString().includes("auro.alaskaair.com")) {

        return link.replace(`href`,`href="${url}"`);
      } else {

        return `<a href="${href.href}"  rel="noopener noreferrer" target="_blank" className="externalLink">${text} <auro-icon customColor category="interface" name="external-link-md"></auro-icon></a>`
      }
    };

    marked.setOptions({
        renderer: renderer
    });
  }

  render() {
    return (
      <section className="auro_baseType">
        <section
          className="auro-markdown"
          dangerouslySetInnerHTML={this.getMarkdownText()}
        />
      </section>
    );
  }
}

export default RenderMarkdownPage;
