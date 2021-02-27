import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/card`} activeClassName="is-active">Card</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/banner`} activeClassName="is-active">Banner</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/card/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/card/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/card/releases`} activeClassName="is-active">Releases</NavLink>
      </div>
    )
  }
}
