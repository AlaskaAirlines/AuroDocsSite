import React, { Component } from "react";
import LinkIcons from '../../../components/linkIcons';
import _getTokens from "../../../functions/getTokens";
import allTokens from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--allTokens.js';

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
        <p>Auro Design Tokens. Named values that store visual design data. Spacing, color, typography, animation, layering, etc. Tokens may represent anything that can be defined by design. Color as a Hex or RGB value. Space defined by pixels or REMs. Indexes illustrated as a number and an animation as a curve. Used in the place of hard-coded values within a project, Design Tokens ensure consistency across all of Alaska's digital products. </p>
        <p>Auro Design Tokens define a single source of truth. When included in any digital product, web app, native app, design file, they define a platform from which any project may spring from with the confidence that it always be in sync at scale across the enterprise. </p>

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

export default DeprecatedTokens;
