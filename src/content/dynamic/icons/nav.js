import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/icons/overview`} activeClassName="is-active">Overview</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/usage`} activeClassName="is-active">Usage</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/install`} activeClassName="is-active">Install</NavLink>
      </div>
    )
  }
}
