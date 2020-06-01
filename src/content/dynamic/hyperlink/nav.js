import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/components/auro/hyperlink`} activeClassName="is-active">Hyperlink</NavLink>
        <NavLink exact className="tab link" to={`/components/auro/hyperlink/install`} activeClassName="is-active">Install</NavLink>
        <NavLink exact className="tab link" to={`/components/auro/hyperlink/api`} activeClassName="is-active">API</NavLink>
        <NavLink exact className="tab link" to={`/components/orion/hyperlink`} activeClassName="is-active">Legacy</NavLink>
      </div>
    )
  }
}
