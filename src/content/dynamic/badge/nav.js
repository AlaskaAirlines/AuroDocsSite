import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/badge`} activeClassName="is-active">Badge</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/badge/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/badge/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/badge/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-badge/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-badge"
          code="https://github.com/AlaskaAirlines/auro-badge/blob/master/src/auro-badge.js"
        />
      </div>
    )
  }
}
