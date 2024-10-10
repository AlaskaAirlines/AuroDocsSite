import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/support/releases-summary`} activeclassname="is-active">Release Summary</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/support/releases-by-sprint`} activeclassname="is-active">Releases by Sprint</NavLink>
      </div>
    )
  }
}
