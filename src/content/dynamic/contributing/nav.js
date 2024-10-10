import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/contributing`} activeclassname="is-active">Contributing</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/issues-prs-labels`} activeclassname="is-active">Issues, PRs and labels</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/upstream`} activeclassname="is-active">Upstream management</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/definition-of-done`} activeclassname="is-active">Definition of Done</NavLink>
      </div>
    )
  }
}
