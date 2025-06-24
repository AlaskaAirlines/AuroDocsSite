import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import content from './overview.md'
import { Nav} from './nav.js';


class Colors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentBuild: null
    }

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

  render() {
    return (
      <section className="auro_baseType">
        <Nav />
        <auro-header level="1">Overview</auro-header>

        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.contentBuild}
            {... markdownOptions}/>
        </section>

        <auro-header level="2" display="600">The Old Way: CSS Rules</auro-header>

        <p className="auro_baseParagraph">
          The Auro Design System typography was previously applied using CSS rules with custom properties. This method required inline styles or custom CSS to apply typography styles to elements.
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
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
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
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
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
      </section>
    );
  }
}

export default Colors;
