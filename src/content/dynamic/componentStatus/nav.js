import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/component-status`} activeClassName="is-active">Auro Status</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/wip`} activeClassName="is-active">All open issues</NavLink> */}
        <NavLink role="tab" exact className="tab link" to={`/help-wanted`} activeClassName="is-active">Help Wanted</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/bugs`} activeClassName="is-active">Bugs</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/not-reviewed`} activeClassName="is-active">Not reviewed</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/open-pull-request`} activeClassName="is-active">Open PRs</NavLink> */}
      </div>
    )
  }
}
