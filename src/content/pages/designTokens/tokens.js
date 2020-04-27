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
        <p>Design tokens represent the design decisions needed to construct and maintain a design system — spacing, color, typography, animation, etc. — represented as data.  These can represent anything defined by design: color as an RGB value, and opacity as a number, animation ease, etc.</p>
        <p>Note that design tokens:</p>
        <ul>
          <li>May not have a long lifespan</li>
          <li>May alter the value more frequently</li>
          <li>May be used for a wide variety of purposes</li>
        </ul>
        <p className="auro_baseParagraph">Please see <auro-hyperlink relative href="/colors">Colors</auro-hyperlink> or <auro-hyperlink relative href="/typography">Typography</auro-hyperlink> for their individual sets of tokens.</p>
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
