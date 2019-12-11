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
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-design-tokens"
          code="https://github.com/AlaskaAirlines/OrionDesignTokens/tree/master/src"
          version={this.showVersion()}
        />

        <h1 className="heading heading--max">Deprecated Tokens</h1>
        <p className="util_fontWeightLight">The following list is a display of the current state of Design Tokens that have been declaired as deprecated and are scheduled to be removed from upcoming major releases. </p>
        <p>Please be sure to update your use of these tokes as soon as possible as not to run into upgrading issues. </p>

        <h2 className="heading heading--xl">Tokens list</h2>

        <auro-tokens-list componentData={this._getTokens(deprecated, [])}></auro-tokens-list>

        <auro-tokens-list deprecated componentData={this._getTokens(deprecated, [])}></auro-tokens-list>

      </section>
    );
  }
}

export default DeprecatedTokens;
