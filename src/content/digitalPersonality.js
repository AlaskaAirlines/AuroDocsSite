import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import "@alaskaairux/ods-swatch/dist/auro-swatch-list";
import "@alaskaairux/ods-swatch/dist/auro-tokens-list";
import "@alaskaairux/ods-swatch/dist/auro-color-avatar";
import data from '@alaskaairux/orion-design-tokens/dist/tokens/JSData--color.js'

import ReactMarkdown from 'react-markdown';
import buildStatus from '../content/pages/digitalPersonality/digital-personality.md'


const midnight = data.color.brand.midnight;
const atlas = data.color.brand.atlas;
const breeze = data.color.brand.breeze;
const tropical = data.color.brand.tropical;
const alpine = data.color.brand.alpine;
const flamingo = data.color.brand.flamingo;
const canyon = data.color.brand.canyon;
const goldcoast = data.color.brand.goldcoast;

class Colors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsBuildStatus: null
    }
  };

  componentWillMount() {
    fetch(buildStatus).then((response) => response.text()).then((text) => {
      this.setState({
        docsBuildStatus: text
      })
    })
  }

  _getColors = (color, background, colorSet) => {

    if (color.hasOwnProperty(background) && color.hasOwnProperty('name')) {
      colorSet.push(
        { "backgroundcolor": color['value'], "colorname": color['name'], "wcag": color['wcag'], "usage": color['usage'] }
      )
    }

    if (color instanceof Object) {
      for (let key in color) {
        this._getColors(color[key], background, colorSet)
      }
    }

    return JSON.stringify(colorSet);
  }

  _getAvatars = (color, type, background, colorSet) => {

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
        this._getAvatars(color[key], type, background, colorSet)
      }
    }

    return colorSet;
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-design-tokens'];

    return `@alaskaairux/orion-design-tokens: ${dependencies}`;
  };

  render() {
    return (
      <section className="auro_baseType">
        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsBuildStatus} escapeHtml={false}/>
        </section>

        <h3 className="auro_heading auro_heading--600">Midnight</h3>
        <p>Midnight reinforces our confident tone and builds off of our wordmark color. This color is most effective in situations that call for being bold and brand-forward.</p>
        <p>Use Midnight sparingly. Refer to the Design Guidelines section for more information on using Midnight.</p>
        <auro-swatch-list componentData={this._getColors(midnight, 'neutral', [])}></auro-swatch-list>

        <h3 className="auro_heading auro_heading--600">Atlas</h3>
        <p>Use Atlas for interactions on a light background. Don't use Atlas for non-interactive elements: this can dilute the experience and cause confusion for guests.</p>
        <auro-swatch-list componentData={this._getColors(atlas, 'neutral', [])}></auro-swatch-list>

        <h3 className="auro_heading auro_heading--600">Breeze</h3>
        <p>Use Breeze for interactions on a dark background. Don't use Breeze for non-interactive elements: this can dilute the experience and cause confusion for guests.</p>
        <auro-swatch-list componentData={this._getColors(breeze, 'neutral', [])}></auro-swatch-list>

        <h3 className="auro_heading auro_heading--600">Tropical</h3>
        <p>Tropical enhances our interface with a vibrant, electric tone analogous to our blue hues. This tone should be used only to compliment or highlight other content.</p>
        <auro-swatch-list componentData={this._getColors(tropical, 'neutral', [])}></auro-swatch-list>

        <h2 className="auro_heading auro_heading--800">Conversational colors</h2>
        <p>Our conversational colors add warmth and energy to our experience. Each color evokes or elicits a specific emotion.</p>
        <p>Use these colors sparingly, and only when they support and reinforce the content and intended function.</p>

        <h3 className="auro_heading auro_heading--600">Alpine</h3>
        <p>Alpine carries a tone of friendly sophistication.</p>
        <auro-swatch-list componentData={this._getColors(alpine, 'neutral', [])}></auro-swatch-list>

        <h3 className="auro_heading auro_heading--600">Flamingo</h3>
        <p>Flamingo is a playful and emotive color, and can be used to imply warmth and affection.</p>
        <auro-swatch-list componentData={this._getColors(flamingo, 'neutral', [])}></auro-swatch-list>

        <h3 className="auro_heading auro_heading--600">Canyon</h3>
        <p>Canyon is a bold color that captures excitement. This color is most effective when appealing to the adventure and discovery of travel.</p>
        <auro-swatch-list componentData={this._getColors(canyon, 'neutral', [])}></auro-swatch-list>

        <h3 className="auro_heading auro_heading--600">Goldcoast</h3>
        <p>Goldcoast inspires joy. It is a way to capture the fun of travel in our interfaces. Use Goldcoast to highlight content that might otherwise be lost on the page. Most complimentary to our blue hues, consider Goldcoast to add depth and contrast.</p>
        <auro-swatch-list componentData={this._getColors(goldcoast, 'neutral', [])}></auro-swatch-list>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-design-tokens"
          code="https://github.com/AlaskaAirlines/OrionDesignTokens/tree/master/src"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default Colors;
