import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/header`} activeClassName="is-active">Header</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/header/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/header/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/header/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-header/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-header"
          code="https://github.com/AlaskaAirlines/auro-header/blob/master/src/auro-header.js"
        />

      </div>
    )
  }
}
