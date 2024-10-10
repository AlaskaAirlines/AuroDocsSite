import React, { Component } from "react";
import ExternalLink from '@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react';

export class MarkdownPageWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentBuild: null,
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
    this.linkRenderer = this.linkRenderer.bind(this);
  };

  // supporting function for headingRenderer function
  flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this.flatten, text)
  }

  // function to set ID on heading element in MD document
  headingRenderer(props) {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(this.flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
  }

  // function to re-write anchor element based on type of URL
  linkRenderer(props) {
    let pattern = /^((http|https|ftp):\/\/)/;
    let relativePattern = /^..\/..\/..\/+/;

    if (relativePattern.test(props.href)) {
      // console.log(props.href)

      let url = props.href
      url = url.replace(relativePattern, 'https://github.com/stylelint/stylelint/blob/master/')

      console.log(url)
    }

    if (pattern.test(props.href)) {

      // filter out links that are set to internal URLs
      if (props.href.includes("auro.alaskaair.com")) {

        let url = props.href
        url = url.replace(/^.*\/\/[^/]+/, '')
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

  styleLintLinks(props) {
    let pattern = /^((http|https|ftp):\/\/)/;
    let relativePattern = /^..\/..\/..\/+/;

    if (relativePattern.test(props.href)) {

      let url = props.href
      url = url.replace(relativePattern, 'https://github.com/stylelint/stylelint/blob/master/')

      return <a href={url} target="_blank" className="externalLink" rel="noopener noreferrer">
        {props.children}
        <ExternalLink />
      </a>
    }

    if (pattern.test(props.href)) {

      // filter out links that are set to internal URLs
      if (props.href.includes("auro.alaskaair.com")) {

        let url = props.href
        url = url.replace(/^.*\/\/[^/]+/, '')
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
}
