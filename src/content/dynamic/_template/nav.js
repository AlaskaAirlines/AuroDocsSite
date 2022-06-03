import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/[component]`} activeClassName="is-active">[component]</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/[component]/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/[component]/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/[component]/figma`} activeClassName="is-active">Design support</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/[component]/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-[component]/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-[component]"
          code="https://github.com/AlaskaAirlines/auro-[component]/blob/master/src/auro-[component].js"
        />

      </div>
    )
  }
}
