import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/generator/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/getting-started`} activeClassName="is-active">Getting started</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/upgrade`} activeClassName="is-active">Migrate to new install</NavLink>
      </div>
    )
  }
}
