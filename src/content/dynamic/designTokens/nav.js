import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/getting-started/developers/design-tokens`} >Design Tokens</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/developers/design-tokens/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/developers/design-tokens/deprecated`} >Deprecated</NavLink>
      </div>
    )
  }
}
