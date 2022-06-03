import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup`} activeClassName="is-active">lockup</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-lockup/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-lockup"
          code="https://github.com/AlaskaAirlines/auro-lockup/blob/master/src/auro-lockup.js"
        />

      </div>
    )
  }
}
