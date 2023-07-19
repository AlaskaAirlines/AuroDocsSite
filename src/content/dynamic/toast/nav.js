import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/toast`} activeClassName="is-active">Toast</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/toast/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/toast/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/toast/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-toast/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-toast"
          code="https://github.com/AlaskaAirlines/auro-toast/blob/master/src/auro-toast.js"
        />

      </div>
    )
  }
}
