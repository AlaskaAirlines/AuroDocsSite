import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/icons`} activeClassName="is-active">Icons</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/guidelines`} activeClassName="is-active">Design guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/ways-to-use`} activeClassName="is-active">Ways to use</NavLink>
      </div>
    )
  }
}
