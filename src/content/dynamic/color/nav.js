import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/color/overview`} activeClassName="is-active">Overview</NavLink>
        <NavLink exact className="tab link" to={`/color/core-digital-palette-usage`} activeClassName="is-active">Core Digital Palette Usage</NavLink>
        <NavLink exact className="tab link" to={`/color/personality-palette-usage`} activeClassName="is-active">Personality Palette Usage</NavLink>

{/*
        <NavLink exact className="tab link" to={`/color/overview_legacy`} activeClassName="is-active">Overview_legacy</NavLink>
        <NavLink exact className="tab link" to={`/color/usage_legacy`} activeClassName="is-active">Usage_legcy</NavLink> */}
      </div>
    )
  }
}
