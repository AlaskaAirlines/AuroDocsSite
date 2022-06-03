import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/select`} activeClassName="is-active">Select</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/select/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/select/api`} activeClassName="is-active">API</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/components/auro/select/figma`} activeClassName="is-active">Design support</NavLink> */}
        <NavLink role="tab" exact className="tab link" to={`/components/auro/select/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-select/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-select"
          code="https://github.com/AlaskaAirlines/auro-select/blob/master/src/auro-select.js"
        />

      </div>
    )
  }
}
