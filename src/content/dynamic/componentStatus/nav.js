import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/component-status`} activeClassName="is-active">Component Status</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/audit`} activeClassName="is-active">Audit</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/planned-work`} activeClassName="is-active">Planned Work</NavLink>
      </div>
    )
  }
}
