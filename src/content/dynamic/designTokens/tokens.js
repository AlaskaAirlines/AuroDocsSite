import React, { Component } from "react";
import { Nav } from './nav';
import LinkIcons from '../../../components/linkIcons';
import _getTokens from "../../../functions/getTokens";
import allTokens from '@aurodesignsystem/design-tokens/dist/tokens/JSObject--allTokens.js';

const animation = allTokens.animation;
const elevation = allTokens.elevation;
const breakpoint = allTokens.gridBreakpoint;
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
const tierColors = allTokens.color.tier;

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
    const dependencies = pjson.dependencies['@aurodesignsystem/design-tokens'];

    // console.log(allTokens)

    return `@aurodesignsystem/design-tokens: ${dependencies}`;
  };

  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Auro design tokens</h1>

        <p>Auro design tokens. Named values that store visual design data. Spacing, color, typography, animation, layering, etc. Tokens may represent anything that can be defined by design. Color as a Hex or RGB value. Space defined by pixels or REMs. Indexes illustrated as a number and an animation as a curve. Used in the place of hard-coded values within a project, Design Tokens ensure consistency across all of Alaska's digital products. </p>
        <p>Auro design tokens define a single source of truth. When included in any digital product, web app, native app, design file, they define a platform from which any project may spring from with the confidence that it always be in sync at scale across the enterprise. </p>

        <p>Tokens are stored as JSON data and can be output as CSS custom properties, Sass, native iOS and Android, among many others. Tokens are represented here as <auro-hyperlink target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS custom properties</auro-hyperlink>.

        See <auro-hyperlink href="/getting-started/developers/design-tokens/install">Design tokens API</auro-hyperlink> for a full listing currently supported output types.</p>

        <h2 className="auro_heading auro_heading--600">Upcoming 4.0 release</h2>
        <p><auro-alert type="warning">
          Be sure to review <auro-hyperlink relative href="/getting-started/developers/design-tokens/deprecated">updates to deprecated tokens</auro-hyperlink> for changes coming soon.
        </auro-alert></p>
        <p>In order to support new UI concepts coming in the near future, there are some MAJOR changes in the works leading up to a new 4.0 release of Auro Design Tokens.</p>

        <h3 className="auro_heading auro_heading--600">Animation</h3>
        <auro-tokenlist componentData={_getTokens(animation, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Elevation</h3>
        <auro-tokenlist componentData={_getTokens(elevation, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Borders</h3>
        <auro-tokenlist unit="rem" componentData={_getTokens(border, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Breakpoint</h3>
        <auro-tokenlist componentData={_getTokens(breakpoint, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Colors</h3>
        <h4 className="auro_heading auro_heading--400">Alert</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(alertColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Background</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(backgroundColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Base</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(baseColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Border</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(borderColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Brand</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(brandColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Tier status</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(tierColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Icons</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(iconColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">State</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(stateColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Text</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(textColors, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">UI</h4>
        <auro-tokenlist swatchType="rectangle" swatch componentData={_getTokens(uiColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Depth</h3>
        <auro-tokenlist componentData={_getTokens(depth, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Size</h3>
        <auro-tokenlist unit="rem" componentData={_getTokens(size, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Typography</h3>
        <h4 className="auro_heading auro_heading--400">Font families</h4>
        <auro-tokenlist componentData={_getTokens(font, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Body (default, lg, sm, etc...)</h4>
        <auro-tokenlist componentData={_getTokens(textBody, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading defaults</h4>
        <auro-tokenlist componentData={_getTokens(textHeadingDefault, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading display</h4>
        <auro-tokenlist componentData={_getTokens(textHeadingDisplay, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading 800</h4>
        <auro-tokenlist componentData={_getTokens(textHeading800, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading 700</h4>
        <auro-tokenlist componentData={_getTokens(textHeading700, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading 600</h4>
        <auro-tokenlist componentData={_getTokens(textHeading600, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading 500</h4>
        <auro-tokenlist componentData={_getTokens(textHeading500, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading 400</h4>
        <auro-tokenlist componentData={_getTokens(textHeading400, [])}></auro-tokenlist>

        <h4 className="auro_heading auro_heading--400">Heading 300</h4>
        <auro-tokenlist componentData={_getTokens(textHeading300, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Unitless values</h3>
        <auro-tokenlist componentData={_getTokens(unitless, [])}></auro-tokenlist>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/AuroDesignTokens"
          npm="https://www.npmjs.com/package/@aurodesignsystem/design-tokens"
          code="https://github.com/AlaskaAirlines/AuroDesignTokens/tree/master/src"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default DeprecatedTokens;
