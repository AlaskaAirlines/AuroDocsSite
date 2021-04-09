import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/aurolabs`} activeClassName="is-active">AuroLabs: BETA</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/aurolabs/minors`} activeClassName="is-active">The Minors</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/aurolabs/majors`} activeClassName="is-active">The Majors</NavLink>
      </div>
    )
  }
}
