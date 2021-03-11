import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/component-status`} activeClassName="is-active">Component Status</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/audit`} activeClassName="is-active">Priorities</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/wip`} activeClassName="is-active">Work in Progress</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/prioritized`} activeClassName="is-active">Prioritized issues</NavLink> */}
        <NavLink role="tab" exact className="tab link" to={`/help-wanted`} activeClassName="is-active">Help Wanted / Bugs</NavLink>
      </div>
    )
  }
}
