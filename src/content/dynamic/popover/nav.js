import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/popover`} activeClassName="is-active">Popover</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/popover/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/popover/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/popover/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-popover/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-popover"
          code="https://github.com/AlaskaAirlines/auro-popover/blob/master/src/auro-popover.js"
        />

      </div>
    )
  }
}
