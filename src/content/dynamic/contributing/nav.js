import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/contributing`} >Contributing</NavLink>
        <NavLink role="tab" end className="tab link" to={`/contributing/issues-prs-labels`} >Issues, PRs and labels</NavLink>
        <NavLink role="tab" end className="tab link" to={`/contributing/upstream`} >Upstream management</NavLink>
        <NavLink role="tab" end className="tab link" to={`/definition-of-done`} >Definition of Done</NavLink>
      </div>
    )
  }
}
