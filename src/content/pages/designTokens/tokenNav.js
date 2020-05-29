import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class TokenNav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/getting-started/developers/design-tokens`} activeClassName="is-active">Design Tokens</NavLink>
        <NavLink exact className="tab link" to={`/getting-started/developers/design-tokens/install`} activeClassName="is-active">Install</NavLink>
        <NavLink exact className="tab link" to={`/getting-started/developers/design-tokens/deprecated`} activeClassName="is-active">Deprecated</NavLink>
      </div>
    )
  }
}
