import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/orion/inputtext`} activeClassName="is-active">Legacy</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/orion/inputtext/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input`} activeClassName="is-active">See new auro-input</NavLink>
      </div>
    )
  }
}
