import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input`} activeClassName="is-active">Input</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
