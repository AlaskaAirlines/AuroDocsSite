import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LinkIcons from '../../../components/linkIcons';
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
        <div role="tablist" className="ods-tablist tabList">
          <NavLink exact className="tab link" to={`/getting-started/developers/design-tokens`} activeClassName="is-active">Design Tokens</NavLink>
          <NavLink exact className="tab link" to={`/getting-started/developers/design-tokens/install`} activeClassName="is-active">Install</NavLink>
          <NavLink exact className="tab link" to={`/getting-started/developers/design-tokens/deprecated`} activeClassName="is-active">Deprecated</NavLink>
        </div>
        <h1 className="auro_heading auro_heading--display">Deprecated tokens list</h1>
        <p className="auro_baseParagraph">The following is a list of deprecated Orion tokens. Adjacent from a deprecated token will be its new Auro token.</p>
        <p className="auro_baseParagraph">All deprecated tokens will be removed with the next  major release. </p>
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
