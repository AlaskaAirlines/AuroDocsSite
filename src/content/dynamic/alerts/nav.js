import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alerts`} activeClassName="is-active">Alerts</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alerts/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alerts/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alerts/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
