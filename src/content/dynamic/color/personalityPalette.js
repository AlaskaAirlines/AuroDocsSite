import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import getTokens from "~/functions/getTokens"
import overview from './personalityPalette.md'
import { Nav} from './nav.js';
import data from '@aurodesignsystem/design-tokens/dist/tokens/JSData--color.js'
import ExternalLink from '@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react';

const midnight = data.color.brand.midnight;
const atlas = data.color.brand.atlas;
const breeze = data.color.brand.breeze;
const tropical = data.color.brand.tropical;
const alpine = data.color.brand.alpine;
const flamingo = data.color.brand.flamingo;
const canyon = data.color.brand.canyon;
const goldcoast = data.color.brand.goldcoast;
const neutral = data.color.brand.neutral;
const gray = data.color.brand.gray;

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

  render() {
    return (
      <section className="auro_baseType">
        <Nav />

        <h1 className="auro_heading auro_heading--display">Digital Personality Brand Palette</h1>

        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.overviewBuild}
            {... markdownOptions}/>
        </section>

        <h3 className="auro_heading auro_heading--400">Midnight</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(midnight, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Atlas</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(atlas, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Breeze</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(breeze, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Tropical</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(tropical, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Alpine</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(alpine, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Flamingo</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(flamingo, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Canyon</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(canyon, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Goldcoast</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(goldcoast, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Neutral</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(neutral, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Gray</h3>
        <auro-tokenlist swatchType="circle" componentData={getTokens(gray, [])}></auro-tokenlist>
      </section>
    );
  }
}

export default ColorsOverview;
