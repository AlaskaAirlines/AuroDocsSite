import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class ButtonNav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/components/auro/button`} activeClassName="is-active">Button</NavLink>
        <NavLink exact className="tab link" to={`/components/auro/button/install`} activeClassName="is-active">Install</NavLink>
        <NavLink exact className="tab link" to={`/components/auro/button/api`} activeClassName="is-active">API</NavLink>
        <NavLink exact className="tab link" to={`/components/orion/button`} activeClassName="is-active">Legacy</NavLink>
      </div>
    )
  }
}
