import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import { Nav} from './nav.js';
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExternalLink from '-!svg-react-loader!@alaskaairux/icons/dist/icons/interface/external-link-sm.svg';

import data from '@alaskaairux/design-tokens/dist/tokens/JSData--color.js'
import windows from 'assets/color/windows.png';
import transparentColors from './transparent.md';

const background = data.color.background;
const ui = data.color.ui;
const border = data.color.border;
const text = data.color.text;
const icon = data.color.icon;
const alert = data.color.alert;

class ColorsOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transparentColorsBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  componentWillMount() {
    fetch(transparentColors).then((response) => response.text()).then((text) => {
      this.setState({
        transparentColorsBuild: text
      })
    })
  }

  getColors = (color, background, colorSet) => {

    if (color.hasOwnProperty(background) && color.hasOwnProperty('name')) {
      colorSet.push(
        { "backgroundcolor": color['value'], "colorname": color['name'], "wcag": color['wcag'], "usage": color['usage'] }
      )
    }

    if (color instanceof Object) {
      for (let key in color) {
        this.getColors(color[key], background, colorSet)
      }
    }

    return JSON.stringify(colorSet);
  }

  getAvatars = (color, type, background, colorSet) => {

    if (color.hasOwnProperty(background) && color.hasOwnProperty('name')) {
      if (background === 'onDark') {
        colorSet.push(
          <auro-color-avatar
            avatartype={type}
            colorname={color['name']}
            ondark
            >
          </auro-color-avatar>
        )
      } else {
        colorSet.push(
          <auro-color-avatar
            avatartype={type}
            colorname={color['name']}
            >
          </auro-color-avatar>
        )
      }
    }

    if (color instanceof Object) {
      for (let key in color) {
        this.getAvatars(color[key], type, background, colorSet)
      }
    }

    return colorSet;
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
      if (props.href.includes("auro.alaskaair.com")) {

        let url = props.href
        url = url.replace(/^.*\/\/[^/]+/, '')
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

        <h1 className="auro_heading auro_heading--display">Digital Brand Palette</h1>

        <h2 className="auro_heading auro_heading--600">Background</h2>
        <img className="util_marginBottom--xl" src={windows} alt="page header" />
        <auro-swatch-list componentData={this.getColors(background, 'neutral', [])}></auro-swatch-list>

        <h2 className="auro_heading auro_heading--600">User Interaction</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(ui, 'ui', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this.getColors(ui, 'onLight', [])}></auro-swatch-list>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(ui, 'ui', 'onDark', [])}
        </div>
        <auro-swatch-list onDark componentData={this.getColors(ui, 'onDark', [])}></auro-swatch-list>

        <h2 className="auro_heading auro_heading--600">Border</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(border, 'border', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this.getColors(border, 'onLight', [])}></auro-swatch-list>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(border, 'border', 'onDark', [])}
        </div>
        <auro-swatch-list onDark componentData={this.getColors(border, 'onDark', [])}></auro-swatch-list>

        <h2 className="auro_heading auro_heading--600">Text</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>

        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(text, 'font', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this.getColors(text, 'onLight', [])}></auro-swatch-list>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(text, 'font', 'onDark', [])}
        </div>
        <auro-swatch-list onDark componentData={this.getColors(text, 'onDark', [])}></auro-swatch-list>

        <h2 className="auro_heading auro_heading--600">Icon</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(icon, 'icon', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this.getColors(icon, 'onLight', [])}></auro-swatch-list>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(icon, 'icon', 'onDark', [])}
        </div>
        <auro-swatch-list onDark componentData={this.getColors(icon, 'onDark', [])}></auro-swatch-list>

        <h2 className="auro_heading auro_heading--600">Alerts / Messaging</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(alert, 'alert', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this.getColors(alert, 'onLight', [])}></auro-swatch-list>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(alert, 'alert', 'onDark', [])}
        </div>
        <auro-swatch-list onDark componentData={this.getColors(alert, 'onDark', [])}></auro-swatch-list>

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.transparentColorsBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>
      </section>
    );
  }
}

export default ColorsOverview;
