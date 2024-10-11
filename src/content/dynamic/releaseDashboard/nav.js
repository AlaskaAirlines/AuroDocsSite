import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/support/releases-summary`} >Release Summary</NavLink>
        <NavLink role="tab" end className="tab link" to={`/support/releases-by-sprint`} >Releases by Sprint</NavLink>
      </div>
    )
  }
}
