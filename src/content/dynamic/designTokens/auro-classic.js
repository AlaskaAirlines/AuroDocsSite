import React, { Component } from "react";
import { Nav } from './nav';
import LinkIcons from '../../../components/linkIcons';
import { getTokens } from './util';
import auroClassicAllTokens from '@aurodesignsystem/design-tokens/dist/auro-classic/JSObject--allTokens';

// Auro Classic custom properties
import '@aurodesignsystem/design-tokens/dist/auro-classic/CSSCustomProperties.css';

const animation = auroClassicAllTokens.animation;
const elevation = auroClassicAllTokens.elevation;
const breakpoint = auroClassicAllTokens.gridBreakpoint;
const gridColumn = auroClassicAllTokens.gridColumn;
const gridGutter = auroClassicAllTokens.gridGutter;
const gridMargin = auroClassicAllTokens.gridMargin;
const depth = auroClassicAllTokens.depth;
const size = auroClassicAllTokens.size;
const border = auroClassicAllTokens.border;
const unitless = auroClassicAllTokens.unitless;

const backgroundColors = auroClassicAllTokens.color.background;
const baseColors = auroClassicAllTokens.color.base;
const borderColors = auroClassicAllTokens.color.border;
const brandColors = auroClassicAllTokens.color.brand;
const containerColors = auroClassicAllTokens.color.container;
const iconColors = auroClassicAllTokens.color.icon;
const textColors = auroClassicAllTokens.color.text;
const tierColors = auroClassicAllTokens.color.tier;
const utilityColors = auroClassicAllTokens.color.utility;

const font = auroClassicAllTokens.font;
const textBody = auroClassicAllTokens.text.body;
const textHeadingDefault = auroClassicAllTokens.text.heading.default;
const textHeadingDisplay = auroClassicAllTokens.text.heading.display;
const textHeading800 = auroClassicAllTokens.text.heading[800];
const textHeading700 = auroClassicAllTokens.text.heading[700];
const textHeading600 = auroClassicAllTokens.text.heading[600];
const textHeading500 = auroClassicAllTokens.text.heading[500];
const textHeading400 = auroClassicAllTokens.text.heading[400];
const textHeading300 = auroClassicAllTokens.text.heading[300];

class AuroClassicTokens extends Component {
  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Auro Classic Design Tokens</h1>
        <div className="auro_heading auro_heading--600 version-indicator">v4.x Tokens</div>

        <h2 className="auro_heading auro_heading--600">Animation</h2>
        <auro-tokenlist componentData={getTokens(animation, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Elevation</h2>
        <auro-tokenlist componentData={getTokens(elevation, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Borders</h2>
        <auro-tokenlist componentData={getTokens(border, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Breakpoints</h2>
        <auro-tokenlist componentData={getTokens(breakpoint, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Grid Columns</h2>
        <auro-tokenlist componentData={getTokens(gridColumn, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Grid Gutters</h2>
        <auro-tokenlist unit="rem" componentData={getTokens(gridGutter, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Grid Margins</h2>
        <auro-tokenlist componentData={getTokens(gridMargin, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Colors</h2>

        <h3 className="auro_heading auro_heading--400">Background</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(backgroundColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Base</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(baseColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Border</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(borderColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Brand</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(brandColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Container</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(containerColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Icons</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(iconColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Text</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(textColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Tier status</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(tierColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Utility</h3>
        <auro-tokenlist cssprefix="ds" swatchType="rectangle" swatch componentData={getTokens(utilityColors, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Depth</h2>
        <auro-tokenlist componentData={getTokens(depth, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Size</h2>
        <auro-tokenlist componentData={getTokens(size, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Typography</h2>
        <h3 className="auro_heading auro_heading--400">Font families</h3>
        <auro-tokenlist componentData={getTokens(font, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Body (default, lg, sm, etc...)</h3>
        <auro-tokenlist componentData={getTokens(textBody, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading defaults</h3>
        <auro-tokenlist componentData={getTokens(textHeadingDefault, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading display</h3>
        <auro-tokenlist componentData={getTokens(textHeadingDisplay, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading 800</h3>
        <auro-tokenlist componentData={getTokens(textHeading800, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading 700</h3>
        <auro-tokenlist componentData={getTokens(textHeading700, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading 600</h3>
        <auro-tokenlist componentData={getTokens(textHeading600, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading 500</h3>
        <auro-tokenlist componentData={getTokens(textHeading500, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading 400</h3>
        <auro-tokenlist componentData={getTokens(textHeading400, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Heading 300</h3>
        <auro-tokenlist componentData={getTokens(textHeading300, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Unitless values</h2>
        <auro-tokenlist componentData={getTokens(unitless, [])}></auro-tokenlist>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/AuroDesignTokens"
          npm="https://www.npmjs.com/package/@aurodesignsystem/design-tokens"
          code="https://github.com/AlaskaAirlines/AuroDesignTokens/tree/master/src"
        />
      </section>
    );
  }
}

export default AuroClassicTokens;
