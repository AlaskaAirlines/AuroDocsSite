import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/layout/grid`} activeClassName="is-active">Grid</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/layout/spacing`} activeClassName="is-active">Spacing</NavLink>
      </div>
    )
  }
}
