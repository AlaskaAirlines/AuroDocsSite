import React, { Component } from "react";
import { Nav } from './nav';
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

  render() {
    return (
      <section>

        <Nav />

        <h1 className="auro_heading auro_heading--display">Deprecated tokens list</h1>
        <p className="auro_baseParagraph">The following is a list of deprecated tokens. Adjacent from a deprecated token will be its new Auro token.<br/>
        All deprecated tokens will be removed with the next  major release. </p>

        <h2 className="auro_heading auro_heading--700">Post 3.0 deprecated tokens</h2>
        <p>The following tokens have been scheduled for deprecation. Please note the version of deprecation notice.</p>
        <auro-tokenlist type="deprecated" version componentData={this._getTokens(deprecated3_0, [])}></auro-tokenlist>
      </section>
    );
  }
}

export default DeprecatedTokens;
