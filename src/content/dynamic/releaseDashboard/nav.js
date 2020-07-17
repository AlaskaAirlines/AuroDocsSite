import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/support/releases-summary`} activeClassName="is-active">Release Summary</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/support/releases-by-sprint`} activeClassName="is-active">Releases by Sprint</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/support/all-releases`} activeClassName="is-active">All Releases</NavLink>
      </div>
    )
  }
}
