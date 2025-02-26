import React, { Component } from "react";
import ThemePage from './components/ThemePage';
import TokenSection from "./components/TokenSection";
import alaskaClassicAllTokens from '@aurodesignsystem/design-tokens/dist/alaska-classic/JSObject--allTokens.js';

// Categories
const { color, font } = alaskaClassicAllTokens;

// Colors
const colorTokens = [
  { title: "Border", tokens: color.border },
  { title: "Brand", tokens: color.brand },
  { title: "Fare Brand", tokens: color.farebrand },
  { title: "OneWorld", tokens: color.farebrand.oneworld },
  { title: "Page Background", tokens: color.pagebackground },
  { title: "Status", tokens: color.status },
  { title: "Surface", tokens: color.surface },
  { title: "Text & Icon", tokens: color.texticon }
];

// Typography
const fontWeightTokens = [
  { title: "Body", tokens: font.weight.body },
  { title: "Display", tokens: font.weight.display },
  { title: "Heading", tokens: font.weight.heading }
];

class AlaskaClassicTokens extends Component {
  render() {
    return (
      <ThemePage theme="asc">
        <h1 className="auro_heading auro_heading--display">Alaska Classic Design Tokens</h1>

        <p>The Alaska Classic theme uses the v5.x token names with the deprecated Auro Classic values.</p>

        <p>It serves as a gateway to the v5.x tokens, facilitating a smooth transition for Auro components, leading to an eventual switch to the new "Alaska" theme.</p>

        <h2 className="auro_heading auro_heading--600">Colors</h2>
        <TokenSection 
          tokens={colorTokens}
          headingLevel="h3"
          headingClass="auro_heading auro_heading--400"
          tokenListProps={{
            swatchType: "rectangle",
            swatch: true
          }}
        />

        <h2 className="auro_heading auro_heading--600">Typography</h2>

        <h3 className="auro_heading auro_heading--500">Font Weight</h3>
        <TokenSection 
          tokens={fontWeightTokens}
          headingLevel="h4"
          headingClass="auro_heading auro_heading--400"
        />
      </ThemePage>
    );
  }
}

export default AlaskaClassicTokens;
