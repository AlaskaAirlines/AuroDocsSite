import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/epics/version-zero`} activeClassName="is-active">Version Zero</NavLink>
        <NavLink exact className="tab link" to={`/epics/user-research`} activeClassName="is-active">User Definition</NavLink>
        <NavLink exact className="tab link" to={`/epics/doc-site-strategy`} activeClassName="is-active">Doc Site Strategy</NavLink>
      </div>
    )
  }
}
