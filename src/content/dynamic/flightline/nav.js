import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flightline`} activeClassName="is-active">Flightline</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flightline/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flightline/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/flightline/dot`} activeClassName="is-active">DoT Compliance</NavLink>
      </div>
    )
  }
}