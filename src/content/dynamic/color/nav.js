import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/color/overview`} activeclassname="is-active">Overview</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/color/digital-palette`} activeclassname="is-active">Digital Palette</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/color/personality-palette`} activeclassname="is-active">Personality Palette</NavLink>
      </div>
    )
  }
}
