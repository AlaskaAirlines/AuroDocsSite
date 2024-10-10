import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/component-status`} activeclassname="is-active">Auro Status</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/wip`} activeclassname="is-active">All open issues</NavLink> */}
        <NavLink role="tab" exact className="tab link" to={`/help-wanted`} activeclassname="is-active">Help Wanted</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/bugs`} activeclassname="is-active">Bugs</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/not-reviewed`} activeclassname="is-active">Not reviewed</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/open-pull-request`} activeclassname="is-active">Open PRs</NavLink> */}
      </div>
    )
  }
}
