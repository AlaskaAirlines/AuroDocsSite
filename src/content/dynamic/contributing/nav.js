import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/contributing`} activeClassName="is-active">Contributing</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/upstream`} activeClassName="is-active">Upstream management</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/git-workflow`} activeClassName="is-active">Git workflow</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/conventional-commits`} activeClassName="is-active">Conventional Commits</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/linear-history`} activeClassName="is-active">Linear history</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/how-labels-work`} activeClassName="is-active">How labels work</NavLink>
      </div>
    )
  }
}
