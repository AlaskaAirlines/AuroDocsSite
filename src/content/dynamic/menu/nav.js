import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/menu`} activeClassName="is-active">Menu</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/menu/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/menu/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/menu/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/menu/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-menu/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-menu"
          code="https://github.com/AlaskaAirlines/auro-menu/blob/master/src/auro-menu.js"
        />

      </div>
    )
  }
}
