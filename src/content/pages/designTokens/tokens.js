import React, { Component } from "react";
import LinkIcons from '../../../components/linkIcons';
import "@alaskaairux/ods-swatch/dist/auro-tokens-list";
import '../../../sass/App.scss';
import allTokens from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--allTokens.js';

const animation = allTokens.animation;
const breakpoint = allTokens.breakpoint;
const depth = allTokens.depth;
const size = allTokens.size;
const border = allTokens.border;
const unitless = allTokens.unitless;
const font = allTokens.font;
// const text = allTokens.text;
const textBody = allTokens.text.body;
const textHeadingDefault = allTokens.text.heading.default;
const textHeadingDisplay = allTokens.text.heading.display;
const textHeading800 = allTokens.text.heading[800];
const textHeading700 = allTokens.text.heading[700];
const textHeading600 = allTokens.text.heading[600];
const textHeading500 = allTokens.text.heading[500];
const textHeading400 = allTokens.text.heading[400];
const textHeading300 = allTokens.text.heading[300];

class DeprecatedTokens extends Component {

  _getTokens = (primary, tokenSet) => {

    if (primary.hasOwnProperty('value') && primary.hasOwnProperty('name')) {
      tokenSet.push(
        { "token": primary['name'], "tokenvalue": primary['value'], "reference": primary['reference'] }
      )
    }

    if (primary instanceof Object) {
      for (let key in primary) {
        this._getTokens(primary[key], tokenSet)
      }
    }

    return JSON.stringify(tokenSet);
  }

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-design-tokens'];

    return `@alaskaairux/orion-design-tokens: ${dependencies}`;
  };

  render() {
    return (
      <section>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-design-tokens"
          code="https://github.com/AlaskaAirlines/OrionDesignTokens/tree/master/src"
          version={this.showVersion()}
        />

        <h1 className="auro_heading auro_heading--display">Auro Design Tokens</h1>
        <p className="auro_baseParagraph">The following is a list of all non-color based Auro tokens</p>
        <h3 className="auro_heading auro_heading--600">Animation</h3>
        <auro-tokens-list componentData={this._getTokens(animation, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Breakpoint</h3>
        <auro-tokens-list componentData={this._getTokens(breakpoint, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Depth</h3>
        <auro-tokens-list componentData={this._getTokens(depth, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Size</h3>
        <auro-tokens-list unit="rem" componentData={this._getTokens(size, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Borders</h3>
        <auro-tokens-list unit="rem" componentData={this._getTokens(border, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Unitless values</h3>
        <auro-tokens-list componentData={this._getTokens(unitless, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Font families</h3>
        <auro-tokens-list componentData={this._getTokens(font, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading defaults</h3>
        <auro-tokens-list componentData={this._getTokens(textHeadingDefault, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading display</h3>
        <auro-tokens-list componentData={this._getTokens(textHeadingDisplay, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading 800</h3>
        <auro-tokens-list componentData={this._getTokens(textHeading800, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading 700</h3>
        <auro-tokens-list componentData={this._getTokens(textHeading700, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading 600</h3>
        <auro-tokens-list componentData={this._getTokens(textHeading600, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading 500</h3>
        <auro-tokens-list componentData={this._getTokens(textHeading500, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading 400</h3>
        <auro-tokens-list componentData={this._getTokens(textHeading400, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Heading 300</h3>
        <auro-tokens-list componentData={this._getTokens(textHeading300, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Body (default, lg, sm, xs)</h3>
        <auro-tokens-list componentData={this._getTokens(textBody, [])}></auro-tokens-list>

      </section>
    );
  }
}

export default DeprecatedTokens;
