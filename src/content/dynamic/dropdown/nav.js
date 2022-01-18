import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dropdown`} activeClassName="is-active">Dropdown</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dropdown/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dropdown/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dropdown/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dropdown/figma`} activeClassName="is-active">Design Support</NavLink>
      </div>
    )
  }
}
