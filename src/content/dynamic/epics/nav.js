import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/epics/version-zero`} >Version Zero</NavLink>
        <NavLink role="tab" end className="tab link" to={`/epics/user-research`} >User Definition</NavLink>
        <NavLink role="tab" end className="tab link" to={`/epics/doc-site-strategy`} >Doc Site Strategy</NavLink>
      </div>
    )
  }
}
