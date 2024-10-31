import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import overview from './overview.md'
import { Nav } from './nav.js';
import header from '~/assets/color/header.png';
import ExternalLink from '@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react';

class ColorsOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overviewBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  UNSAFE_componentWillMount() {
    fetch(overview).then((response) => response.text()).then((text) => {
      this.setState({
        overviewBuild: text
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
        return <a href={props.href} class="externalLink" target="_blank" rel="noopener noreferrer">
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

        <h1 className="auro_heading auro_heading--display">Overview</h1>

        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.overviewBuild}
            remarkPlugins={[remarkGfm,remarkRehype]}
            rehypePlugins={[[rehypeExternalLinks, {content: { type: 'text' , value: '' }}], rehypeHighlight,rehypeRaw]}
            components={{
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default ColorsOverview;
