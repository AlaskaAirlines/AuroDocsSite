import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/table`} activeClassName="is-active">Table</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/table/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/table/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/table/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/table/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-table/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-table"
          code="https://github.com/AlaskaAirlines/auro-table/blob/master/src/auro-table.js"
        />

      </div>
    )
  }
}
