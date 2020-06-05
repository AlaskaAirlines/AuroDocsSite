import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import CodeBlock from 'components/CodeBlock';
import getTokens from "functions/getTokens"
import overview from './personalityUsage.md'
import { Nav} from './nav.js';
import data from '@alaskaairux/orion-design-tokens/dist/tokens/JSData--color.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import ExternalLink from '-!svg-react-loader!@alaskaairux/icons/dist/icons/interface/external-link-sm.svg';

const midnight = data.color.brand.midnight;
const atlas = data.color.brand.atlas;
const breeze = data.color.brand.breeze;
const tropical = data.color.brand.tropical;
const alpine = data.color.brand.alpine;
const flamingo = data.color.brand.flamingo;
const canyon = data.color.brand.canyon;
const goldcoast = data.color.brand.goldcoast;

class ColorsOverview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overviewBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  componentWillMount() {
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

        <h1 className="auro_heading auro_heading--display">Digital Personality Palette Usage</h1>

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.overviewBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer,
              link: this.linkRenderer
            }}/>
        </section>

        <h3 className="auro_heading auro_heading--400">Midnight</h3>
        <auro-tokens-list swatch circle componentData={getTokens(midnight, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Atlas</h3>
        <auro-tokens-list swatch circle componentData={getTokens(atlas, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Breeze</h3>
        <auro-tokens-list swatch circle componentData={getTokens(breeze, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Tropical</h3>
        <auro-tokens-list swatch circle componentData={getTokens(tropical, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Alpine</h3>
        <auro-tokens-list swatch circle componentData={getTokens(alpine, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Flamingo</h3>
        <auro-tokens-list swatch circle componentData={getTokens(flamingo, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Canyon</h3>
        <auro-tokens-list swatch circle componentData={getTokens(canyon, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--400">Goldcoast</h3>
        <auro-tokens-list swatch circle componentData={getTokens(goldcoast, [])}></auro-tokens-list>
      </section>
    );
  }
}

export default ColorsOverview;
