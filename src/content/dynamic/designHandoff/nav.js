import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff`} activeClassName="is-active">Intro</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/parent`} activeClassName="is-active">Parent Story</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/review`} activeClassName="is-active">Design Review</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/symbolize`} activeClassName="is-active">Symbolize</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/development`} activeClassName="is-active">Development</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/labels`} activeClassName="is-active">Manage Labels</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/close`} activeClassName="is-active">Close Process</NavLink>
      </div>
    )
  }
}
