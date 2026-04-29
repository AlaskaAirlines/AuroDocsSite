import React, { Component, createRef } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import content from './overview.md'
import { Nav} from './nav.js';
import Footer from '~/components/footer';

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

class Colors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentBuild: null
    }
    this.containerRef = createRef();
    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  UNSAFE_componentWillMount() {
    fetch(content).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })
  }

  flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this.flatten, text)
  }

  headingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(this.flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
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
        <auro-header level="1">Overview</auro-header>
          <ReactMarkdown
            children={this.state.contentBuild}
            {... markdownOptions}/>
        <auro-header level="2" display="600">The Old Way: CSS Rules</auro-header>
        <p className="auro_baseParagraph">
          The Auro Design System typography was previously done using CSS selectors with various rules and CSS variable values to apply typography styles to elements.
          While this approach worked, it was less maintainable and made it harder to update typography styles across a site.
        </p>
        <pre>
          <code className="language-html">
            {`
  <html>
    <head>
      <link href="https://.../webcorestylesheets@latest/dist/bundled/themes/alaska.global.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://.../design-tokens@latest/dist/themes/alaska/CSSCustomProperties--alaska.css">
      <style>
        body {
          font-family: var(--ds-font-family-default);
          font-variant-ligatures: no-common-ligatures;
          font-size: var(--ds-text-body-size-default);
          font-weight: var(--ds-text-body-default-weight);
          line-height: var(--ds-text-body-height-default);
        }

        p {
          font-family: var(--ds-font-family-default);
          font-variant-ligatures: no-common-ligatures;
          font-size: var(--ds-text-body-size-lg);
          font-weight: var(--ds-text-body-lg-weight);
          line-height: var(--ds-text-body-height-lg);
        }
      </style>
    </head>
    <body>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
      </p>
    </body>
  </html>
            `}
          </code>
        </pre>
        <p className="auro_baseParagraph">
          This example shows a simple page that links both the Auro Web Core Style Sheets and the Auro Design Tokens. It then uses inline CSS to set the body font and paragraph styles.
          The body uses the default font family, size, weight, and line height, while the paragraph uses a larger font size and weight.
        </p>
        <auro-header level="3" display="600">The New Way: HTML Classes</auro-header>
        <p className="auro_baseParagraph">
          The Auro Design System has transitioned to using HTML classes to apply typography styles. This new approach allows for easier maintenance and updates, as styles can be applied directly through classes rather than inline CSS or custom properties.
          It also improves readability and consistency across the site.
        </p>
        <pre>
          <code className="language-html">
            {`
  <html>
    <head>
      <link href="https://.../webcorestylesheets@latest/dist/bundled/themes/alaska.global.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://.../design-tokens@latest/dist/themes/alaska/CSSCustomProperties--alaska.css">
    </head>
    <body class="body-default">
      <p class="body-lg">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
      </p>
    </body>
  </html>
            `}
          </code>
        </pre>
        <p className="auro_baseParagraph">
          This example shows the same page, but now it uses classes to apply typography styles. The body uses the <code>body-default</code> class for the default font family, size, weight, and line height, while the paragraph uses the <code>body-lg</code> class for a larger font size and weight.
          This approach is more maintainable and allows for easier updates to typography styles across the site.
        </p>
        <Footer />
        </section>
      </section>
    );
  }
}

export default Colors;
