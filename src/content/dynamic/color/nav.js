import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/color/overview`} >Overview</NavLink>
        <NavLink role="tab" end className="tab link" to={`/color/digital-palette`} >Digital Palette</NavLink>
        <NavLink role="tab" end className="tab link" to={`/color/personality-palette`} >Personality Palette</NavLink>
      </div>
    )
  }
}
