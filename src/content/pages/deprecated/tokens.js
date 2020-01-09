import React, { Component } from "react";
import LinkIcons from '../../../components/linkIcons';
import "@alaskaairux/ods-swatch/dist/auro-tokens-list";
import '../../../sass/App.scss';
import deprecated from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--deprecated.js';

class DeprecatedTokens extends Component {

  _getTokens = (primary, tokenSet) => {

    if (primary.hasOwnProperty('value') && primary.hasOwnProperty('name')) {
      tokenSet.push(
        { "token": primary['name'], "tokenvalue": primary['value'], "reference": primary['reference'] }
      )
    }

    if (primary instanceof Object) {
      for (let key in primary) {
        this._getTokens(primary[key], tokenSet)
      }
    }

    return JSON.stringify(tokenSet);
  }

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-design-tokens'];

    return `@alaskaairux/orion-design-tokens: ${dependencies}`;
  };

  render() {
    return (
      <section>
        <h1 className="auro_heading auro_heading--display">Deprecated tokens list</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-design-tokens"
          code="https://github.com/AlaskaAirlines/OrionDesignTokens/tree/master/src"
          version={this.showVersion()}
        />
        <p className="auro_baseParagraph">The following is a list of deprecated Orion tokens, and if applicable, an adjacent Auro token. All deprecated tokens will be removed with an upcoming major release. </p>

        <auro-tokens-list deprecated componentData={this._getTokens(deprecated, [])}></auro-tokens-list>

      </section>
    );
  }
}

export default DeprecatedTokens;
