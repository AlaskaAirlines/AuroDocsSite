import React, { Component } from "react";
import { Nav } from './nav';
import LinkIcons from '../../../components/linkIcons';
import { getTokens } from './util';
import hawaiianAllTokens from '@aurodesignsystem/design-tokens/dist/hawaiian/JSObject--allTokens.js';

// Colors
const border = hawaiianAllTokens.color.border;
const brandColors = hawaiianAllTokens.color.brand;
const fareColors = hawaiianAllTokens.color.fare;
const pageColors = hawaiianAllTokens.color.page;
const statusColors = hawaiianAllTokens.color.status;
const surfaceColors = hawaiianAllTokens.color.surface;
const texticonColors = hawaiianAllTokens.color.texticon;

// Fonts
const fontWeightDisplay = hawaiianAllTokens.font.weight.display;
const fontWeightBodyDefault = hawaiianAllTokens.font.weight.body.default;
const fontWeightBodyLarge = hawaiianAllTokens.font.weight.body.large;
const fontWeightBodySmall = hawaiianAllTokens.font.weight.body.small;
const fontWeightBodyXsmall = hawaiianAllTokens.font.weight.body.xsmall;
const fontWeightBodyXxsmall = hawaiianAllTokens.font.weight.body.xxsmall;
const fontWeightHeadingH1 = hawaiianAllTokens.font.weight.heading.heading1;
const fontWeightHeadingH2 = hawaiianAllTokens.font.weight.heading.heading2;
const fontWeightHeadingH3 = hawaiianAllTokens.font.weight.heading.heading3;
const fontWeightHeadingH4 = hawaiianAllTokens.font.weight.heading.heading4;
const fontWeightHeadingH5 = hawaiianAllTokens.font.weight.heading.heading5;
const fontWeightHeadingH6 = hawaiianAllTokens.font.weight.heading.heading6;

class HawaiianTokens extends Component {
  render() {
    return (
      <section aag-theme="aag-theme-ha">

        <Nav />

        <h1 className="auro_heading auro_heading--display">Hawaiian Design Tokens</h1>

        <h2 className="auro_heading auro_heading--600">Colors</h2>

        <h3 className="auro_heading auro_heading--400">Border</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(border, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Brand</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(brandColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Fare</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(fareColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Page</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(pageColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Status</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(statusColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Surface</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(surfaceColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Text/Icon</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(texticonColors, [])}></auro-tokenlist>

        <h2 className="auro_heading auro_heading--600">Typography</h2>
        
        <h3 className="auro_heading auro_heading--400">Font Weight - Display</h3>
        <auro-tokenlist componentData={getTokens(fontWeightDisplay, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Font Weight - Body</h3>
        <auro-tokenlist componentData={getTokens(fontWeightBodyDefault, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightBodyLarge, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightBodySmall, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightBodyXsmall, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightBodyXxsmall, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Font Weight - Headings</h3>
        <auro-tokenlist componentData={getTokens(fontWeightHeadingH1, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightHeadingH2, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightHeadingH3, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightHeadingH4, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightHeadingH5, [])}></auro-tokenlist>
        <auro-tokenlist componentData={getTokens(fontWeightHeadingH6, [])}></auro-tokenlist>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/AuroDesignTokens"
          npm="https://www.npmjs.com/package/@aurodesignsystem/design-tokens"
          code="https://github.com/AlaskaAirlines/AuroDesignTokens/tree/master/src"
        />
      </section>
    );
  }
}

export default HawaiianTokens;
