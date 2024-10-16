import React, { Component } from "react";
import '~/sass/markdown.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import ExternalLink from '@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react';

export class RawMarkdownWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsGenerator: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
    this.linkRenderer = this.linkRenderer.bind(this);
  };

  // function to get text from MD document
  UNSAFE_componentWillMount() {
    fetch(this.getMarkdown()).then((response) => response.text()).then((text) => {
      this.setState({
        docsGenerator: text
      })
    });
  }

  // supporting function for headingRenderer function
  flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this.flatten, text)
  }

  // function to set ID on heading element in MD document
  headingRenderer(props) {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(this.flatten, '')
    const slug = text.toLowerCase().replace(/\W/g, '-')
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
      <section>
        <article className="auro-markdown">
          <ReactMarkdown
            children={this.state.docsGenerator}
            remarkPlugins={[remarkGfm,remarkRehype]}
            rehypePlugins={[rehypeHighlight,rehypeRaw]}
            components={{
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}
          />
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
      <section>
        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.docsGenerator}
            remarkPlugins={[remarkGfm,remarkRehype]}
            rehypePlugins={[rehypeHighlight,rehypeRaw]}
            components={{
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}
          />
        </section>
      </section>
    );
  }
}
