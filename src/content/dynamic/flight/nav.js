import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flight`} activeClassName="is-active">Flight</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flight/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flight/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flight/dot`} activeClassName="is-active">DoT compliance</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flight/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
