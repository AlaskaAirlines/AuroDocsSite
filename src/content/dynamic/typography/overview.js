import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import content from './overview.md'
import { Nav} from './nav.js';
import header from './overview_header.jpg';


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
        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <h1 className="auro_heading auro_heading--display">Typography Overview</h1>
        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.contentBuild}
            {... markdownOptions}/>
        </section>
      </section>
    );
  }
}

export default Colors;
