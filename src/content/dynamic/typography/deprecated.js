import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import deprecated from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--deprecated.js';
import _getTokens from "functions/getTokens";
import 'highlight.js/styles/github.css';
import { Nav } from './nav';

const weight = deprecated.weight;
const scale = deprecated.size.scale;
const fontSize = deprecated.size.font;
const deprecatedType = {...weight, ...scale, ...fontSize }

class Typography extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-web-core-style-sheets'];

    return `@alaskaairux/orion-web-core-style-sheets: ${dependencies}`;
  };

  render() {
    return (
      <section id="typography">
        <Nav />

        <h1 className="auro_heading auro_heading--display">Deprecated Tokens</h1>
        <p className="auro_baseParagraph">The following tokens have been deperecated and all projects should discontinue use.</p>

        <auro-tokens-list deprecated componentData={_getTokens(deprecatedType, [])}></auro-tokens-list>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-web-core-style-sheets"
          code="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/src/_baseline.scss"
          docs="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#heading"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default Typography;
