import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/nav`} activeClassName="is-active">Nav</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/nav/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/nav/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/nav/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/nav/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-nav/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-nav"
          code="https://github.com/AlaskaAirlines/auro-nav/blob/master/src/auro-nav.js"
        />

      </div>
    )
  }
}
