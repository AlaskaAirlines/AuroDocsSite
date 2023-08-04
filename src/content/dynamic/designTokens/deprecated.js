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

        <h2 className="auro_heading auro_heading--700">Upcoming 4.0 release</h2>
        <p>In order to support new UI concepts coming in the near future, there are some MAJOR changes in the works leading up to a new 4.0 release of Auro Design Tokens.</p>
        <ul>
          <li>Updated npm name space to @aurodesignsystem</li>
          <li>100% removal of all the deprecated tokens listed below</li>
          <li>Releasing features to support themes and other color modes</li>
          <li>The removal of the <code>auro</code> token name prefix, e.g. <code>var(--auro-size-none)</code> will become <code>var(--ds-size-none)</code></li>
        </ul>

        <h2 className="auro_heading auro_heading--700">Post 3.0 deprecated tokens</h2>
        <p>The following tokens have been scheduled for deprecation. Please note the version of deprecation notice. These tokens will be DELETED with the upcoming 4.0 release.</p>
        <auro-tokenlist type="deprecated" version componentData={this._getTokens(deprecated3_0, [])}></auro-tokenlist>
      </section>
    );
  }
}

export default DeprecatedTokens;
