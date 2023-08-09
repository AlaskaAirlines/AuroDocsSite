import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/backtotop`} activeClassName="is-active">Back to Top</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/backtotop/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/backtotop/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/backtotop/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-backtotop/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-backtotop"
          code="https://github.com/AlaskaAirlines/auro-backtotop/blob/master/src/auro-backtotop.js"
        />
      </div>
    )
  }
}
