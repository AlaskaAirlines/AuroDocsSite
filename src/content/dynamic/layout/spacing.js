import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import content from './spacing.md'
import { Nav} from './nav.js';
import header from './spacing_header.png';
import ExternalLink from '@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react';

class Colors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
    this.linkRenderer = this.linkRenderer.bind(this);
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

  // function to re-write anchor element based on type of URL
  linkRenderer(props) {
    let pattern = /^((http|https|ftp):\/\/)/;

    if(pattern.test(props.href)) {

      // filter out links that are set to internal URLs
      if (props.href.toString().includes("auro.alaskaair.com")) {

        let url = props.href
        url = url.toString().replace(/^.*\/\/[^/]+/, '')
        return <a href={url}>{props.children}</a>
      }

      else {
        return <a href={props.href} target="_blank" className="externalLink" rel="noopener noreferrer">
          {props.children}
          <ExternalLink />
        </a>
      }
    }

    else if (!pattern.test(props.href)) {
      return <a href={props.href}>{props.children}</a>
    }
  }

  render() {
    return (
      <section className="auro_baseType">
        <Nav />
        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <h1 className="auro_heading auro_heading--display">Spacing</h1>
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
