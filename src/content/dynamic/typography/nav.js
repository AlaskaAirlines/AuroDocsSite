import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/typography/overview`} activeClassName="is-active">Overview</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/typography/usage`} activeClassName="is-active">Usage</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/typography/deprecated`} activeClassName="is-active">Deprecated</NavLink>
      </div>
    )
  }
}
