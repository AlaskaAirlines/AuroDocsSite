import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import { Nav } from './nav.js';
import ExternalLink from '@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react';

import data from '@aurodesignsystem/design-tokens/dist/legacy/auro-classic/JSData--color.js'
import windows from '~/assets/color/windows.png';
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

  UNSAFE_componentWillMount() {
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
      if (background === 'inverse') {
        colorSet.push(
          <auro-tokenavatar
            key={color['name']}
            avatartype={type}
            colorname={color['name']}
            ondark
            >
          </auro-tokenavatar>
        )
      } else {
        colorSet.push(
          <auro-tokenavatar
            key={color['name']}
            avatartype={type}
            colorname={color['name']}
            >
          </auro-tokenavatar>
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

        <h1 className="auro_heading auro_heading--display">Digital Brand Palette</h1>

        <h2 className="auro_heading auro_heading--600">Background</h2>
        <img className="util_marginBottom--xl" src={windows} alt="page header" />
        <auro-tokendisplay componentData={this.getColors(background, 'neutral', [])}></auro-tokendisplay>

        <h2 className="auro_heading auro_heading--600">User Interaction</h2>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(ui, 'ui', 'default', [])}
        </div>
        <auro-tokendisplay componentData={this.getColors(ui, 'default', [])}></auro-tokendisplay>

        <h2 className="auro_heading auro_heading--600">Border</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(border, 'border', 'default', [])}
        </div>
        <auro-tokendisplay componentData={this.getColors(border, 'default', [])}></auro-tokendisplay>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(border, 'border', 'inverse', [])}
        </div>
        <auro-tokendisplay onDark componentData={this.getColors(border, 'inverse', [])}></auro-tokendisplay>

        <h2 className="auro_heading auro_heading--600">Text</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>

        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(text, 'font', 'default', [])}
        </div>
        <auro-tokendisplay  componentData={this.getColors(text, 'default', [])}></auro-tokendisplay >

        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(text, 'font', 'inverse', [])}
        </div>
        <auro-tokendisplay  onDark componentData={this.getColors(text, 'inverse', [])}></auro-tokendisplay >

        <h2 className="auro_heading auro_heading--600">Icon</h2>
        <h3 className="auro_heading auro_heading--400">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(icon, 'icon', 'default', [])}
        </div>
        <auro-tokendisplay componentData={this.getColors(icon, 'default', [])}></auro-tokendisplay>
        <h3 className="auro_heading auro_heading--400">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--2up">
          {this.getAvatars(icon, 'icon', 'inverse', [])}
        </div>
        <auro-tokendisplay onDark componentData={this.getColors(icon, 'inverse', [])}></auro-tokendisplay>

        <h2 className="auro_heading auro_heading--600">Alerts / Messaging</h2>
        <div className="avatarWrapper avatarWrapper--3up">
          {this.getAvatars(alert, 'alert', 'default', [])}
        </div>
        <auro-tokendisplay componentData={this.getColors(alert, 'default', [])}></auro-tokendisplay>

        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.transparentColorsBuild}
            {... markdownOptions}/>
        </section>
      </section>
    );
  }
}

export default ColorsOverview;
