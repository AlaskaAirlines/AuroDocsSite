import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup`} activeClassName="is-active">lockup</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/lockup/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
