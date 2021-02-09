import React, { Component } from "react";
import { Nav } from './nav';
import LinkIcons from 'components/linkIcons';
import deprecated from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--deprecated.js'; // See note
import deprecated3_0 from '@alaskaairux/design-tokens/dist/tokens/JSObject--deprecated.js';

/*
  Future note: for future deprecation look at getting data from external source
  https://unpkg.com/@alaskaairux/orion-design-tokens@2.12.3/dist/tokens/JSObject--deprecated.js
*/

class DeprecatedTokens extends Component {

  _getTokens = (primary, tokenSet) => {

    if (primary.hasOwnProperty('value') && primary.hasOwnProperty('name')) {
      tokenSet.push(
        { "token": primary['name'], "version": primary['version'], "tokenvalue": primary['value'], "reference": primary['reference'] }
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

        <Nav />

        <h1 className="auro_heading auro_heading--display">Deprecated tokens list</h1>
        <p className="auro_baseParagraph">The following is a list of deprecated Orion tokens. Adjacent from a deprecated token will be its new Auro token.</p>
        <p className="auro_baseParagraph">All deprecated tokens will be removed with the next  major release. </p>

        <h2 className="auro_heading auro_heading--700">Post 3.0 deprecated tokens</h2>
        <p>The following tokens have been scheduled for deprecation. Please note the version of deprecation notice.</p>
        <auro-tokens-list deprecated version componentData={this._getTokens(deprecated3_0, [])}></auro-tokens-list>

        <h2 className="auro_heading auro_heading--700">Pre 3.0 deprecated tokens</h2>
        <auro-alerts warning>
          This list of deprecated tokens will be removed from the site at the end of Q2.21.
        </auro-alerts>

        <p>The following tokens have been fully deprecated and do not exist in any post 3.0 version.</p>

        <auro-tokens-list deprecated componentData={this._getTokens(deprecated, [])}></auro-tokens-list>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionDesignTokens"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-design-tokens"
          code="https://github.com/AlaskaAirlines/OrionDesignTokens/tree/master/src"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default DeprecatedTokens;
