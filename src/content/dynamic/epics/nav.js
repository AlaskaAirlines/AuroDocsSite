import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/epics/version-zero`} activeclassname="is-active">Version Zero</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/epics/user-research`} activeclassname="is-active">User Definition</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/epics/doc-site-strategy`} activeclassname="is-active">Doc Site Strategy</NavLink>
      </div>
    )
  }
}
