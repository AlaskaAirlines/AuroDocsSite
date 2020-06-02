import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/color/overview`} activeClassName="is-active">Overview</NavLink>
        <NavLink exact className="tab link" to={`/color/usage`} activeClassName="is-active">Usage</NavLink>
      </div>
    )
  }
}
