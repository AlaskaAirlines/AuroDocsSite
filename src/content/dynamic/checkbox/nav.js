import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox`} activeClassName="is-active">Checkbox</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/orion/inputOptions`} activeClassName="is-active">Legacy</NavLink>
      </div>
    )
  }
}
