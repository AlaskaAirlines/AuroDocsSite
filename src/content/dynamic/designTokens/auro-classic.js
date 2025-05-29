import React, { Component } from "react";
import ThemePage from './components/ThemePage';
import TokenSection from "./components/TokenSection";
import auroClassicAllTokens from '@aurodesignsystem/design-tokens/dist/auro-classic/JSObject--allTokens';

// Auro Classic custom properties
import '@aurodesignsystem/design-tokens/dist/auro-classic/CSSCustomProperties.css';

// Categories
const {
  animation,
  elevation,
  gridBreakpoint: breakpoint,
  gridColumn,
  gridGutter,
  gridMargin,
  depth,
  size,
  border,
  unitless,
  color,
  font,
  text
} = auroClassicAllTokens;

// Config
const generalTokens = [
  { title: "Animation", tokens: animation },
  { title: "Elevation", tokens: elevation },
  { title: "Borders", tokens: border },
  { title: "Breakpoints", tokens: breakpoint },
  { title: "Grid Columns", tokens: gridColumn },
  { title: "Grid Gutters", tokens: gridGutter, props: { unit: "rem" } },
  { title: "Grid Margins", tokens: gridMargin },
  { title: "Depth", tokens: depth },
  { title: "Size", tokens: size },
  { title: "Unitless values", tokens: unitless }
];

// Colors
const colorTokens = [
  { title: "Background", tokens: color.background },
  { title: "Base", tokens: color.base },
  { title: "Border", tokens: color.border },
  { title: "Brand", tokens: color.brand },
  { title: "Container", tokens: color.container },
  { title: "Icons", tokens: color.icon },
  { title: "Text", tokens: color.text },
  { title: "Tier status", tokens: color.tier },
  { title: "Utility", tokens: color.utility }
];

// Typography
const typographyTokens = [
  { title: "Font families", tokens: font },
  { title: "Body (default, lg, sm, etc...)", tokens: text.body },
  { title: "Heading defaults", tokens: text.heading.default },
  { title: "Heading display", tokens: text.heading.display },
  { title: "Heading 800", tokens: text.heading[800] },
  { title: "Heading 700", tokens: text.heading[700] },
  { title: "Heading 600", tokens: text.heading[600] },
  { title: "Heading 500", tokens: text.heading[500] },
  { title: "Heading 400", tokens: text.heading[400] },
  { title: "Heading 300", tokens: text.heading[300] }
];

const warningStyle = {
  color: 'red',
};

class AuroClassicTokens extends Component {
  render() {
    return (
      <ThemePage>
        <h1 className="auro_heading auro_heading--display">Auro Classic Design Tokens</h1>

        <p><span style={warningStyle}>DEPRECATED</span>: The <strong>color tokens</strong> from Auro Classic are deprecated and provided solely for backward compatibility with existing content. Other design tokens remain supported.</p>
        <p>Please use v6 or later tokens for all new&nbsp;development.</p>

        <div className="auro_heading auro_heading--600 version-indicator">v4.x Tokens</div>

        <TokenSection tokens={generalTokens} />

        <h2 className="auro_heading auro_heading--600">Colors</h2>

        <p><span style={warningStyle}>DEPRECATED</span>: The <strong>color tokens</strong> from Auro Classic are deprecated and provided solely for backward compatibility with existing content.</p>
        <p>Please use v6 or later tokens for all new&nbsp;development.</p>

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
        <TokenSection 
          tokens={typographyTokens}
          headingLevel="h3"
          headingClass="auro_heading auro_heading--400"
        />
      </ThemePage>
    );
  }
}

export default AuroClassicTokens;
