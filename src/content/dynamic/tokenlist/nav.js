import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist`} activeclassname="is-active">Tokenlist</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist/install`} activeclassname="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist/api`} activeclassname="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/tokenlist/releases`} activeclassname="is-active">Releases</NavLink>
      </div>
    )
  }
}
