import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/support/releases-by-sprint`} activeClassName="is-active">Releases by Sprint</NavLink>
        <NavLink exact className="tab link" to={`/support/releases-by-project`} activeClassName="is-active">Releases by Project</NavLink>
      </div>
    )
  }
}
