import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/loader`} activeClassName="is-active">Loader</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/loader/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/loader/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/loader/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-loader/loader"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-loader"
          code="https://github.com/AlaskaAirlines/auro-loader/blob/master/src/auro-loader.js"
        />

      </div>
    )
  }
}
