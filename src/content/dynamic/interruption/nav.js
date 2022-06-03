import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/interruption`} activeClassName="is-active">Interruption</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/interruption/dialog`} activeClassName="is-active">Dialog</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/interruption/drawer`} activeClassName="is-active">Drawer</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/interruption/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/interruption/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/interruption/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-interruption/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-interruption"
          code="https://github.com/AlaskaAirlines/auro-interruption/blob/master/src/auro-dialog.js"
        />

      </div>
    )
  }
}
