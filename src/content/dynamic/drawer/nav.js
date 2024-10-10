import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer`} activeclassname="is-active">Drawer</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer/install`} activeclassname="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer/api`} activeclassname="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/drawer/releases`} activeclassname="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-drawer/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-drawer"
          code="https://github.com/AlaskaAirlines/auro-drawer/blob/master/src/auro-drawer.js"
        />

      </div>
    )
  }
}
