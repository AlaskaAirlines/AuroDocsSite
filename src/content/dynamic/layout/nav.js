import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/layout/grid`} >Grid</NavLink>
        <NavLink role="tab" end className="tab link" to={`/layout/spacing`} >Spacing</NavLink>
      </div>
    )
  }
}
