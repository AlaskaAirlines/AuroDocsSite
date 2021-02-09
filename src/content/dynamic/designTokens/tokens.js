import React, { Component } from "react";
import { Nav } from './nav';
import LinkIcons from '../../../components/linkIcons';
import _getTokens from "../../../functions/getTokens";
import allTokens from '@alaskaairux/design-tokens/dist/tokens/JSObject--allTokens.js';

const animation = allTokens.animation;
const breakpoint = allTokens.breakpoint;
const depth = allTokens.depth;
const size = allTokens.size;
const border = allTokens.border;
const unitless = allTokens.unitless;
const alertColors = allTokens.color.alert;
const backgroundColors = allTokens.color.background;
const baseColors = allTokens.color.base;
const borderColors = allTokens.color.border;
const brandColors = allTokens.color.brand;
const iconColors = allTokens.color.icon;
const stateColors = allTokens.color.state;
const textColors = allTokens.color.text;
const uiColors = allTokens.color.ui;

const font = allTokens.font;
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

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/design-tokens'];

    console.log(allTokens)

    return `@alaskaairux/design-tokens: ${dependencies}`;
  };

  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Auro Design Tokens</h1>

        <p>Auro Design Tokens. Named values that store visual design data. Spacing, color, typography, animation, layering, etc. Tokens may represent anything that can be defined by design. Color as a Hex or RGB value. Space defined by pixels or REMs. Indexes illustrated as a number and an animation as a curve. Used in the place of hard-coded values within a project, Design Tokens ensure consistency across all of Alaska's digital products. </p>
        <p>Auro Design Tokens define a single source of truth. When included in any digital product, web app, native app, design file, they define a platform from which any project may spring from with the confidence that it always be in sync at scale across the enterprise. </p>

        <p>Tokens are stored as JSON data and can be output as CSS custom properties, Sass, native iOS and Android, among many others. Tokens are represented here as <auro-hyperlink target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS custom properties</auro-hyperlink>.

        See <auro-hyperlink href="/getting-started/developers/design-tokens/install">Design Tokens API</auro-hyperlink> for a full listing currently supported output types.</p>

        <auro-alerts warning>
          Be sure to review <auro-hyperlink relative href="/getting-started/developers/design-tokens/deprecated">updates to deprecated tokens</auro-hyperlink> for changes in use.
        </auro-alerts>

        <h3 className="auro_heading auro_heading--600">Animation</h3>
        <auro-tokens-list componentData={_getTokens(animation, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Borders</h3>
        <auro-tokens-list unit="rem" componentData={_getTokens(border, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Breakpoint</h3>
        <auro-tokens-list componentData={_getTokens(breakpoint, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Colors</h3>
        <h4 className="auro_heading auro_heading--400">Alert</h4>
        <auro-tokens-list swatch componentData={_getTokens(alertColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Background</h4>
        <auro-tokens-list swatch componentData={_getTokens(backgroundColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Base</h4>
        <auro-tokens-list swatch componentData={_getTokens(baseColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Border</h4>
        <auro-tokens-list swatch componentData={_getTokens(borderColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Brand</h4>
        <auro-tokens-list swatch componentData={_getTokens(brandColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Icons</h4>
        <auro-tokens-list swatch componentData={_getTokens(iconColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">State</h4>
        <auro-tokens-list swatch componentData={_getTokens(stateColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Text</h4>
        <auro-tokens-list swatch componentData={_getTokens(textColors, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">UI</h4>
        <auro-tokens-list swatch componentData={_getTokens(uiColors, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Depth</h3>
        <auro-tokens-list componentData={_getTokens(depth, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Size</h3>
        <auro-tokens-list unit="rem" componentData={_getTokens(size, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Typography</h3>
        <h4 className="auro_heading auro_heading--400">Font families</h4>
        <auro-tokens-list componentData={_getTokens(font, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Body (default, lg, sm, xs)</h4>
        <auro-tokens-list componentData={_getTokens(textBody, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading defaults</h4>
        <auro-tokens-list componentData={_getTokens(textHeadingDefault, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading display</h4>
        <auro-tokens-list componentData={_getTokens(textHeadingDisplay, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading 800</h4>
        <auro-tokens-list componentData={_getTokens(textHeading800, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading 700</h4>
        <auro-tokens-list componentData={_getTokens(textHeading700, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading 600</h4>
        <auro-tokens-list componentData={_getTokens(textHeading600, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading 500</h4>
        <auro-tokens-list componentData={_getTokens(textHeading500, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading 400</h4>
        <auro-tokens-list componentData={_getTokens(textHeading400, [])}></auro-tokens-list>

        <h4 className="auro_heading auro_heading--400">Heading 300</h4>
        <auro-tokens-list componentData={_getTokens(textHeading300, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--600">Unitless values</h3>
        <auro-tokens-list componentData={_getTokens(unitless, [])}></auro-tokens-list>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/AuroDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/design-tokens"
          code="https://github.com/AlaskaAirlines/AuroDesignTokens/tree/master/src"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default DeprecatedTokens;
