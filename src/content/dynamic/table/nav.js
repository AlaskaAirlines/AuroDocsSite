import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink exact className="tab link" to={`/components/auro/table`} activeClassName="is-active">Table</NavLink>
        <NavLink exact className="tab link" to={`/components/auro/table/install`} activeClassName="is-active">Install</NavLink>
        <NavLink exact className="tab link" to={`/components/auro/table/api`} activeClassName="is-active">API</NavLink>
      </div>
    )
  }
}
