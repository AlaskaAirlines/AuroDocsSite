import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import data from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--allTokens.js';
import _getTokens from "../functions/getTokens"
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';
import personality from '../content/pages/digitalPersonality/digital-personality.md'
import guidelines from '../content/pages/colors/designGuidelines.md'


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
      personalityBuild: null,
      guidelinesBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  componentWillMount() {
    fetch(personality).then((response) => response.text()).then((text) => {
      this.setState({
        personalityBuild: text
      })
    })

    fetch(guidelines).then((response) => response.text()).then((text) => {
      this.setState({
        guidelinesBuild: text
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
        <h1 className="auro_heading auro_heading--display">Overview</h1>

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.personalityBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer
            }}/>
        </section>

        <h3 className="auro_heading auro_heading--600">Midnight</h3>
        <p>Midnight reinforces our confident tone and builds off of our wordmark color. This color is most effective in situations that call for being bold and brand-forward.</p>
        <p>Use Midnight sparingly. Refer to the Design Guidelines section for more information on using Midnight.</p>

        <auro-tokens-list swatch componentData={_getTokens(midnight, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Atlas</h3>
        <p>Use Atlas for interactions on a light background. Don't use Atlas for non-interactive elements: this can dilute the experience and cause confusion for guests.</p>
        <auro-tokens-list swatch componentData={_getTokens(atlas, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Breeze</h3>
        <p>Use Breeze for interactions on a dark background. Don't use Breeze for non-interactive elements: this can dilute the experience and cause confusion for guests.</p>
        <auro-tokens-list swatch componentData={_getTokens(breeze, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Tropical</h3>
        <p>Tropical enhances our interface with a vibrant, electric tone analogous to our blue hues. This tone should be used only to compliment or highlight other content.</p>
        <auro-tokens-list swatch componentData={_getTokens(tropical, [])}></auro-tokens-list>

        <h2 className="auro_heading auro_heading--800">Conversational colors</h2>
        <p>Our conversational colors add warmth and energy to our experience. Each color evokes or elicits a specific emotion.</p>
        <p>Use these colors sparingly, and only when they support and reinforce the content and intended function.</p>

        <h3 className="auro_heading auro_heading--600">Alpine</h3>
        <p>Alpine carries a tone of friendly sophistication.</p>
        <auro-tokens-list swatch componentData={_getTokens(alpine, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Flamingo</h3>
        <p>Flamingo is a playful and emotive color, and can be used to imply warmth and affection.</p>
        <auro-tokens-list swatch componentData={_getTokens(flamingo, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Canyon</h3>
        <p>Canyon is a bold color that captures excitement. This color is most effective when appealing to the adventure and discovery of travel.</p>
        <auro-tokens-list swatch componentData={_getTokens(canyon, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Goldcoast</h3>
        <p>Goldcoast inspires joy. It is a way to capture the fun of travel in our interfaces. Use Goldcoast to highlight content that might otherwise be lost on the page. Most complimentary to our blue hues, consider Goldcoast to add depth and contrast.</p>
        <auro-tokens-list swatch componentData={_getTokens(goldcoast, [])}></auro-tokens-list>

        <section className="auro-markdown">
          <ReactMarkdown
            source={this.state.guidelinesBuild}
            escapeHtml={false}
            renderers={{
              code: CodeBlock,
              heading: this.headingRenderer
            }}/>
        </section>

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
