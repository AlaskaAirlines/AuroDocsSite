import React, { Component } from "react";
import LinkIcons from '../../../components/linkIcons';
import _getTokens from "../../../functions/getTokens";
import allTokens from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--allTokens.js';
import "@alaskaairux/ods-swatch/dist/auro-tokens-list";

const animation = allTokens.animation;
const breakpoint = allTokens.breakpoint;
const depth = allTokens.depth;
const size = allTokens.size;
const border = allTokens.border;
const unitless = allTokens.unitless;

class DeprecatedTokens extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-design-tokens'];

    return `@alaskaairux/orion-design-tokens: ${dependencies}`;
  };

  render() {
    return (
      <section>
        <h1 className="auro_heading auro_heading--display">Auro Design Tokens</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-design-tokens"
          code="https://github.com/AlaskaAirlines/OrionDesignTokens/tree/master/src"
          version={this.showVersion()}
        />
        <p className="auro_baseParagraph">The following is a list of all non-color or non-type based Auro tokens</p>
        <h3 className="auro_heading auro_heading--600">Animation</h3>
        <auro-tokens-list componentData={_getTokens(animation, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Breakpoint</h3>
        <auro-tokens-list componentData={_getTokens(breakpoint, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Depth</h3>
        <auro-tokens-list componentData={_getTokens(depth, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Size</h3>
        <auro-tokens-list unit="rem" componentData={_getTokens(size, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Borders</h3>
        <auro-tokens-list unit="rem" componentData={_getTokens(border, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Unitless values</h3>
        <auro-tokens-list componentData={_getTokens(unitless, [])}></auro-tokens-list>
      </section>
    );
  }
}

export default DeprecatedTokens;
