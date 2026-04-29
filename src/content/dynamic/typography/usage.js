import React, { Component } from "react";
import header from '~/assets/typography/header.png';
import _getTokens from "~/functions/getTokens";
import '~/sass/markdown.scss';
import { Nav } from './nav.js';
import packageJson from 'ROOT/package.json';
import ThemeTabs from './themeTabs';
import ThemedPreviewFrame from './ThemedPreviewFrame';
import Footer from '~/components/footer';

class Typography extends Component {

  showVersion() {
    const dependencies = packageJson.dependencies['@aurodesignsystem/webcorestylesheets'];

    return `@aurodesignsystem/webcorestylesheets: ${dependencies}`;
  };

  render() {
  const { theme, themeSlug } = this.props;
  const themeAttr = theme ? { 'data-aag-theme': `aag-theme-${theme}` } : {};
    return (
      <section id="typography" className="auro_baseType">
        <Nav/>
        <ThemeTabs />
        <section className="auro-markdown">
        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <auro-header level="1">Usage</auro-header>

        The Auro Design System typography includes four font groups:
        <ul>
          <li><strong>body</strong> - used for all general / default text.</li>
          <li><strong>heading</strong> - used in the `auro-header` component and for applying to `h1`, `h2`, etc. elements directly.</li>
          <li><strong>display</strong> - used for text content that should render like a heading but is technically not a heading when considering the semantic layout of the page.</li>
          <li><strong>accent</strong> - used for other text content that should standout on the page.</li>
        </ul>

        <auro-header level="2">Examples</auro-header>

        <ThemedPreviewFrame themeSlug={themeSlug} themeCode={theme} {...themeAttr}>
          <auro-header level="3">Body</auro-header>

          <auro-header level="5">body-lg</auro-header>

          <div className="exampleWrapper body-lg">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">body-default</auro-header>

          <div className="exampleWrapper body-default">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">body-sm</auro-header>

          <div className="exampleWrapper body-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">body-xs</auro-header>

          <div className="exampleWrapper body-xs">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">body-2xs</auro-header>

          <div className="exampleWrapper body-2xs">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="3">Headings</auro-header>

          <auro-header level="5">heading-xl</auro-header>

          <div className="exampleWrapper heading-xl">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">heading-lg</auro-header>

          <div className="exampleWrapper heading-lg">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">heading-md</auro-header>

          <div className="exampleWrapper heading-md">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">heading-sm</auro-header>

          <div className="exampleWrapper heading-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">heading-xs</auro-header>

          <div className="exampleWrapper heading-xs">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5">heading-2xs</auro-header>

          <div className="exampleWrapper heading-2xs">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="3">Display</auro-header>

          <auro-header level="5" display="display-2xl">display-2xl</auro-header>

          <div className="exampleWrapper display-2xl">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5" display="display-xl">display-xl</auro-header>

          <div className="exampleWrapper display-xl">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5" display="display-lg">display-lg</auro-header>

          <div className="exampleWrapper display-lg">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5" display="display-md">display-md</auro-header>

          <div className="exampleWrapper display-md">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5" display="display-sm">display-sm</auro-header>

          <div className="exampleWrapper display-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>

          <auro-header level="5" display="display-xs">display-xs</auro-header>

          <div className="exampleWrapper display-xs">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </div>
        </ThemedPreviewFrame>
        <Footer />
        </section>
      </section>
    );
  }
}

export default Typography;
