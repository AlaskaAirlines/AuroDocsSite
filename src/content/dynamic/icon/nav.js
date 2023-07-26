import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/icon`} activeClassName="is-active">Icon</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/icon/alaska`} activeClassName="is-active">Alaska Logo</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/icon/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/icon/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/icon/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-icon/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-icon"
          code="https://github.com/AlaskaAirlines/auro-icon/blob/master/src/auro-icon.js"
        />

      </div>
    )
  }
}
