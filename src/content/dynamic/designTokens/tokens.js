import React, { Component } from "react";
import ThemePage from './components/ThemePage';
import { NavLink } from "react-router-dom";

class DesignTokens extends Component {

  render() {
    return (
      <ThemePage showFooter={false}>
        <h1 className="auro_heading auro_heading--display">Auro Design Tokens</h1>

        <p>Design tokens are named values that store visual design data, such as spacing, color, typography, animation, and layering.</p>

        <p>Tokens can represent anything that can be defined by design—for example, color as a Hex or RGB value, space defined by pixels or REMs, indexes represented as numbers, and animations as curves. Used in place of hard-coded values within a project, design tokens ensure consistency across all of Alaska's digital products.</p>

        <p>Auro design tokens define a single source of truth. When included in any digital product—whether a web app, native app, or design file—they establish a foundation from which any project can confidently scale while remaining in sync across the enterprise.</p>

        <p>Tokens are stored as JSON data and can be output as CSS custom properties, Sass, native iOS and Android, among many others. Tokens are represented here as <auro-hyperlink target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" rel="noopener noreferrer">CSS custom properties</auro-hyperlink>.</p>

        <p>See <NavLink className="link" to={`/getting-started/developers/design-tokens/install`} >Install</NavLink> for a full listing of currently supported output types.</p>
      </ThemePage>
    );
  }
}

export default DesignTokens;
