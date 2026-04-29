import React, { createRef } from "react";
import { Nav } from './nav';
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import { MarkdownPageWrapper } from '~/components/markdownPageWrapper';
import Footer from '~/components/footer';

const markdownContent = 'https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/refs/tags/v3.17.4/docs/focus-visible.md';

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

class FocusVisible extends MarkdownPageWrapper {

  constructor(props) {
    super(props);
    this.containerRef = createRef();
  }

  // function to get text from MD document
  UNSAFE_componentWillMount() {
    fetch(markdownContent).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })
  }

  componentDidMount() {
    addCopyButtons(this.containerRef.current);
  }

  componentDidUpdate() {
    addCopyButtons(this.containerRef.current);
  }

  render() {
    return (
      <section className="auro_baseType">
        <Nav />
        <section className="auro-markdown" ref={this.containerRef}>
          <ReactMarkdown
            children={this.state.contentBuild}
            {... markdownOptions}/>
          <Footer />
        </section>
      </section>
    );
  }
}

export default FocusVisible;
