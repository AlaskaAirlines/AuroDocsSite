import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/generator/api`} activeClassName="is-active">Installer API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/define-api`} activeClassName="is-active">Auro API development guide</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/generator/upgrade`} activeClassName="is-active">Migrate to new install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/aurolabs/minors`} activeClassName="is-active">Getting started</NavLink>
      </div>
    )
  }
}
