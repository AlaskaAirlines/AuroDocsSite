import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/skeleton`} activeClassName="is-active">Skeleton</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/skeleton/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/skeleton/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/skeleton/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
