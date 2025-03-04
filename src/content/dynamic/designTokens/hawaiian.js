import React, { Component } from "react";
import { Nav } from './nav';
import { FooterLinks } from "./components/FooterLinks";
import TokenSection from "./components/TokenSection";
import hawaiianAllTokens from '@aurodesignsystem/design-tokens/dist/hawaiian/JSObject--allTokens.js';

// Categories
const { color, font } = hawaiianAllTokens;

// Colors
const colorTokens = [
  { title: "Border", tokens: color.border },
  { title: "Brand", tokens: color.brand },
  { title: "Fare", tokens: color.fare },
  { title: "Page", tokens: color.page },
  { title: "Status", tokens: color.status },
  { title: "Surface", tokens: color.surface },
  { title: "Text/Icon", tokens: color.texticon }
];

// Typography
const fontWeightTokens = [
  { title: "Body", tokens: font.weight.body },
  { title: "Display", tokens: font.weight.display },
  { title: "Heading", tokens: font.weight.heading }
];

class HawaiianTokens extends Component {
  render() {
    return (
      <section aag-theme="aag-theme-ha">
        <Nav />

        <h1 className="auro_heading auro_heading--display">Hawaiian Design Tokens</h1>

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

        <FooterLinks />
      </section>
    );
  }
}

export default HawaiianTokens;
