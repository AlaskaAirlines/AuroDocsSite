import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer`} activeClassName="is-active">Drawer</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-drawer/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-drawer"
          code="https://github.com/AlaskaAirlines/auro-drawer/blob/master/src/auro-drawer.js"
        />

      </div>
    )
  }
}
