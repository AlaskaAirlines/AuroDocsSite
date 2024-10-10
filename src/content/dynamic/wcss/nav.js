import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets`} activeclassname="is-active">WCSS</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/features`} activeclassname="is-active">WCSS features</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/tests`} activeclassname="is-active">Sass unit tests</NavLink>
      </div>
    )
  }
}
