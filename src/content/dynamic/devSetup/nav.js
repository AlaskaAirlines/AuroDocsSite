import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/developer-setup/npm`} activeClassName="is-active">npm</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/developer-setup/windows`} activeClassName="is-active">Windows</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/developer-setup/macos`} activeClassName="is-active">macOS</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/developer-setup/linux`} activeClassName="is-active">Linux</NavLink>
      </div>
    )
  }
}
