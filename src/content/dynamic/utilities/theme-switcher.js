import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import content from './theme-switcher.md'
// import { Nav } from './nav.js';
import header from './grid_header.png';
import file from './aurothemeswitcher.zip'


class ThemeSwitcher extends Component {

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
        {/* <Nav /> left in just incase you want to have nav eventually */}
        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <h1 className="auro_heading auro_heading--display">Theme Switcher</h1>

        <a href={file} download>Download Theme Switcher</a>
        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.contentBuild}
            {... markdownOptions}/>
        </section>
      </section>
    );
  }
}

export default ThemeSwitcher;
