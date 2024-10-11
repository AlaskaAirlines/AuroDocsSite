import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff`} >Intro</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff/parent`} >Parent Story</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff/review`} >Design Review</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff/symbolize`} >Symbolize</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff/development`} >Development</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff/labels`} >Manage Labels</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/handoff/close`} >Close Process</NavLink>
      </div>
    )
  }
}
