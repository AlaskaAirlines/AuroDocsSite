import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/webcorestylesheets`} >WCSS</NavLink>
        <NavLink role="tab" end className="tab link" to={`/webcorestylesheets/features`} >WCSS features</NavLink>
        <NavLink role="tab" end className="tab link" to={`/webcorestylesheets/tests`} >Sass unit tests</NavLink>
      </div>
    )
  }
}
