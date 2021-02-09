import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/color/overview`} activeClassName="is-active">Overview</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/color/digital-palette`} activeClassName="is-active">Digital Palette</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/color/personality-palette`} activeClassName="is-active">Personality Palette</NavLink>
      </div>
    )
  }
}
