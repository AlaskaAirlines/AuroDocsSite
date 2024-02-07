import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/banner`} activeClassName="is-active">Banner</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/banner/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/banner/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/banner/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-banner/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-banner"
          code="https://github.com/AlaskaAirlines/auro-banner/blob/main/src/auro-banner.js"
        />

      </div>
    )
  }
}