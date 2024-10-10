import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff`} activeclassname="is-active">Intro</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/parent`} activeclassname="is-active">Parent Story</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/review`} activeclassname="is-active">Design Review</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/symbolize`} activeclassname="is-active">Symbolize</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/development`} activeclassname="is-active">Development</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/labels`} activeclassname="is-active">Manage Labels</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/handoff/close`} activeclassname="is-active">Close Process</NavLink>
      </div>
    )
  }
}
