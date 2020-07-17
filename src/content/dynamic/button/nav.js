import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/button`} activeClassName="is-active">Button</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/button/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/button/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/orion/button`} activeClassName="is-active">Legacy</NavLink>
      </div>
    )
  }
}
