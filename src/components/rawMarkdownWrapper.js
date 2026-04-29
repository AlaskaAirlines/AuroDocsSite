import React, { Component, createRef } from "react";
import '~/sass/markdown.scss';
import ReactMarkdown from 'react-markdown';
import markdownOptions from "~/functions/markdownOptions";
import Footer from '~/components/footer';

/**
 * Add copy buttons to all code blocks in the container.
 * @param {HTMLElement} container
 */
function addCopyButtons(container) {
  if (!container) return;
  container.querySelectorAll('pre:has(code.hljs), pre[class*="language-"], pre:has(code[class*="language-"])').forEach((pre) => {
    if (pre.parentNode.classList.contains('pre-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'pre-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const raw = code ? code.textContent : pre.textContent;
      const text = raw.replace(/\u200B/g, '').replace(/^\n+/, '').replace(/\n+$/, '\n').replace(/^\$ /, '');
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
      });
    });
    wrapper.appendChild(btn);
  });
}

export class RawMarkdownWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }
    this.containerRef = createRef();
  };

  // function to get text from MD document
  UNSAFE_componentWillMount() {
    fetch(this.getMarkdown()).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    });
  }

  componentDidMount() {
    if (this.containerRef.current) {
      addCopyButtons(this.containerRef.current);
    }
  }

  componentDidUpdate() {
    if (this.containerRef.current) {
      addCopyButtons(this.containerRef.current);
    }
  }
}



export class ExternalMarkdownWrapper extends RawMarkdownWrapper {

  getMarkdown() {
    const details = this.githubURL.split("github.com/")[1].split("/");
    const repo = {
      user: details[0],
      name: details[1]
    };

    return `https://raw.githubusercontent.com/${repo.user}/${repo.name}/master/${this.readme}`
  }

  render() {

    return (
      <section ref={this.containerRef}>
        <article className="auro-markdown">
          <ReactMarkdown
            children={this.state.docsGenerator}
            {... markdownOptions}
          />
          <Footer />
        </article>
      </section>
    );
  }
}

export class InternalMarkdownWrapper extends RawMarkdownWrapper {

  getMarkdown() {
    return this.readme
  }

  render() {
    return (
      <section ref={this.containerRef}>
        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.docsGenerator}
            {... markdownOptions}
          />
          <Footer />
        </section>
      </section>
    );
  }
}
