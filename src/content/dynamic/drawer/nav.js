import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/components/auro/drawer`} >Drawer</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/drawer/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/drawer/api`} >API</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/drawer/releases`} >Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-drawer/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-drawer"
          code="https://github.com/AlaskaAirlines/auro-drawer/blob/master/src/auro-drawer.js"
        />

      </div>
    )
  }
}
