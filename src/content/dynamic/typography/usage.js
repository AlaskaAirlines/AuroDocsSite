import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import header from '~/assets/typography/header.png';
import allTokens from '@aurodesignsystem/design-tokens/dist/legacy/auro-classic/JSObject--deprecated.js';
import _getTokens from "~/functions/getTokens";
import '~/sass/markdown.scss';
import { Nav } from './nav.js';
import packageJson from 'ROOT/package.json';

class Typography extends Component {

  showVersion() {

    const dependencies = packageJson.dependencies['@aurodesignsystem/webcorestylesheets'];

    return `@aurodesignsystem/webcorestylesheets: ${dependencies}`;
  };

  render() {
    return (
      <section id="typography">
        <Nav/>
        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />


        <auro-header level="1" display="display">Usage</auro-header>

        The Auro Design System typography includes for font groups:
        <ul>
          <li><strong>body</strong> - used for all general / default text.</li>
          <li><strong>heading</strong> - used in the `auro-header` component and for applying to `h1`, `h2`, etc. elements directly.</li>
          <li><strong>display</strong> - used for text content that should render like a heading but is technically not a heading when considering the semantic layout of the page.</li>
          <li><strong>accent</strong> - used for other text content that should standout on the page.</li>
        </ul>

        <auro-header level="2" display="700">Examples</auro-header>

        <auro-header level="3" display="500">Body</auro-header>

        <auro-header level="5" display="400">body-lg</auro-header>

        <div className="exampleWrapper body-lg">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">body-default</auro-header>

        <div className="exampleWrapper body-default">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">body-md</auro-header>

        <div className="exampleWrapper body-md">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">body-sm</auro-header>

        <div className="exampleWrapper body-sm">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">body-xs</auro-header>

        <div className="exampleWrapper body-xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">body-2xs</auro-header>

        <div className="exampleWrapper body-2xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="3" display="500">Headings</auro-header>

        <auro-header level="5" display="400">heading-xl</auro-header>

        <div className="exampleWrapper heading-xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">heading-lg</auro-header>

        <div className="exampleWrapper heading-lg">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">heading-md</auro-header>

        <div className="exampleWrapper heading-md">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">heading-sm</auro-header>

        <div className="exampleWrapper heading-sm">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">heading-xs</auro-header>

        <div className="exampleWrapper heading-xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">heading-2xs</auro-header>

        <div className="exampleWrapper heading-2xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="3" display="500">Display</auro-header>

        <auro-header level="5" display="400">display-2xl</auro-header>

        <div className="exampleWrapper display-2xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">display-xl</auro-header>

        <div className="exampleWrapper display-xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">display-lg</auro-header>

        <div className="exampleWrapper display-lg">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">display-md</auro-header>

        <div className="exampleWrapper display-md">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">display-sm</auro-header>

        <div className="exampleWrapper display-sm">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">display-xs</auro-header>

        <div className="exampleWrapper display-xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="3" display="500">Accent</auro-header>

        <auro-header level="5" display="400">accent-2xl</auro-header>

        <div className="exampleWrapper accent-2xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">accent-xl</auro-header>

        <div className="exampleWrapper accent-xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">accent-lg</auro-header>

        <div className="exampleWrapper accent-lg">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">accent-md</auro-header>

        <div className="exampleWrapper accent-md">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">accent-sm</auro-header>

        <div className="exampleWrapper accent-sm">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">accent-xs</auro-header>

        <div className="exampleWrapper accent-xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>

        <auro-header level="5" display="400">accent-2xx</auro-header>

        <div className="exampleWrapper accent-2xs">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </div>
      </section>
    );
  }
}

export default Typography;
