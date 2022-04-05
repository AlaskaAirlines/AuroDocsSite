import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/generator/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/api`} activeClassName="is-active">Installer API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/define-api`} activeClassName="is-active">API dev guide</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/best-practice`} activeClassName="is-active">Best practices</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/generator/upgrade`} activeClassName="is-active">Update repo</NavLink> */}
        {/* <NavLink role="tab" exact className="tab link" to={`/aurolabs/minors`} activeClassName="is-active">auroLabs</NavLink> */}
      </div>
    )
  }
}
