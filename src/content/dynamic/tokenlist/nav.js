import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/components/auro/tokenlist`} >Tokenlist</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/tokenlist/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/tokenlist/api`} >API</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/tokenlist/releases`} >Releases</NavLink>
      </div>
    )
  }
}
