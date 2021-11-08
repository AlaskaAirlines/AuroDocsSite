import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist`} activeClassName="is-active">Tokenlist</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
