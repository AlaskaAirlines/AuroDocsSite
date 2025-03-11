import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/component-status`} >Auro Status</NavLink>
        {/* <NavLink role="tab" end className="tab link" to={`/wip`} >All open issues</NavLink> */}
        <NavLink role="tab" end className="tab link" to={`/bugs`} >Bugs</NavLink>
        <NavLink role="tab" end className="tab link" to={`/not-reviewed`} >Not reviewed</NavLink>
        {/* <NavLink role="tab" end className="tab link" to={`/open-pull-request`} >Open PRs</NavLink> */}
      </div>
    )
  }
}
