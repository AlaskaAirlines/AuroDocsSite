import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from '~/components/CodeBlock';
import guidelines from './guidelines.md'
import { Nav} from './nav.js';


class Colors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      personalityBuild: null,
      guidelinesBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  UNSAFE_componentWillMount() {
    fetch(guidelines).then((response) => response.text()).then((text) => {
      this.setState({
        guidelinesBuild: text
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

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.guidelinesBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default Colors;
