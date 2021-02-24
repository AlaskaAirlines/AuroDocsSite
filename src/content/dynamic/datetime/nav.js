import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime`} activeClassName="is-active">Date/Time</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
