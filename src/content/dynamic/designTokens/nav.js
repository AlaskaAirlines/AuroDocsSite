import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/design-tokens`} activeclassname="is-active">Design Tokens</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/design-tokens/install`} activeclassname="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/design-tokens/deprecated`} activeclassname="is-active">Deprecated</NavLink>
      </div>
    )
  }
}
