import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/sidenav`} activeClassName="is-active">SideNav</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/sidenav/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/sidenav/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/sidenav/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-sidenav/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-sidenav"
          code="https://github.com/AlaskaAirlines/auro-sidenav/blob/main/src/auro-sidenav.js"
        />

      </div>
    )
  }
}
