import React, { Component } from "react";
import ThemePage from './components/ThemePage';
import TokenSection from "./components/TokenSection";
import EngineeringTokensNotice from "./components/EngineeringTokenNotice";
import alaskaAllTokens from '@aurodesignsystem/design-tokens/dist/alaska/JSObject--allTokens.js';

// Categories
const { color, font, component } = alaskaAllTokens;

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

// Component tokens
const componentTokens = [
  { title: "Component", tokens: component }
];

class AlaskaTokens extends Component {
  render() {
    return (
      <ThemePage theme="as">
        <h1 className="auro_heading auro_heading--display">Alaska Design Tokens</h1>

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

        <EngineeringTokensNotice />
        <TokenSection 
          tokens={componentTokens}
          headingLevel="h4"
          headingClass="auro_heading auro_heading--400"
        />
      </ThemePage>
    );
  }
}

export default AlaskaTokens;
