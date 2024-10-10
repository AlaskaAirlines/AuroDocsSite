import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/layout/grid`} activeclassname="is-active">Grid</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/layout/spacing`} activeclassname="is-active">Spacing</NavLink>
      </div>
    )
  }
}
