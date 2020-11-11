import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio`} activeClassName="is-active">Radio Button</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/orion/inputOptions`} activeClassName="is-active">Legacy</NavLink>
      </div>
    )
  }
}
