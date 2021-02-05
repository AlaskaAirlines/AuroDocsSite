import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/contributing`} activeClassName="is-active">Contributing</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/contributing/upstream`} activeClassName="is-active">Upstream management</NavLink>
      </div>
    )
  }
}
