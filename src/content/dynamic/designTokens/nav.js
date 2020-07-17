import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/design-tokens`} activeClassName="is-active">Design Tokens</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/design-tokens/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/getting-started/developers/design-tokens/deprecated`} activeClassName="is-active">Deprecated</NavLink>
      </div>
    )
  }
}
