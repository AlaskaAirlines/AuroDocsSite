import React, { Component } from "react";
import { Nav } from './nav';
import LinkIcons from '../../../components/linkIcons';
import { getTokens } from './util';
import alaskaAllTokens from '@aurodesignsystem/design-tokens/dist/alaska/JSObject--allTokens.js';

// Colors
const borderColors = alaskaAllTokens.color.border;
const brandColors = alaskaAllTokens.color.brand;
const fareColors = alaskaAllTokens.color.fare;
const pageColors = alaskaAllTokens.color.page;
const statusColors = alaskaAllTokens.color.status;
const surfaceColors = alaskaAllTokens.color.surface;
const texticonColors = alaskaAllTokens.color.texticon;

// Fonts
const fontWeightBody = alaskaAllTokens.font.weight.body;
const fontWeightDisplay = alaskaAllTokens.font.weight.display;
const fontWeightHeading = alaskaAllTokens.font.weight.heading;

class AlaskaTokens extends Component {
  render() {
    return (
      <section aag-theme="aag-theme-as">

        <Nav />

        <h1 className="auro_heading auro_heading--display">Alaska Design Tokens</h1>

        <h2 className="auro_heading auro_heading--600">Colors</h2>

        <h3 className="auro_heading auro_heading--400">Border</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(borderColors, [])}></auro-tokenlist>

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

        <h3 className="auro_heading auro_heading--400">Text & Icon</h3>
        <auro-tokenlist swatchType="rectangle" swatch componentData={getTokens(texticonColors, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--600">Typography</h3>
        
        <h3 className="auro_heading auro_heading--400">Font Weights - Body</h3>
        <auro-tokenlist componentData={getTokens(fontWeightBody, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Font Weight - Display</h3>
        <auro-tokenlist componentData={getTokens(fontWeightDisplay, [])}></auro-tokenlist>

        <h3 className="auro_heading auro_heading--400">Font Weights - Heading</h3>
        <auro-tokenlist componentData={getTokens(fontWeightHeading, [])}></auro-tokenlist>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/AuroDesignTokens"
          npm="https://www.npmjs.com/package/@aurodesignsystem/design-tokens"
          code="https://github.com/AlaskaAirlines/AuroDesignTokens/tree/master/src"
        />
      </section>
    );
  }
}

export default AlaskaTokens;