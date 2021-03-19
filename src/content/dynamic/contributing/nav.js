import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/contributing`} activeClassName="is-active">Contributing</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/issues-prs-labels`} activeClassName="is-active">Issues, Prs and labels</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/upstream`} activeClassName="is-active">Upstream management</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/git-workflow`} activeClassName="is-active">Git workflow</NavLink>
      </div>
    )
  }
}
