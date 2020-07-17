import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab"  className="tab link" to={`/components/orion/inputText`} activeClassName="is-active">Legacy</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/orion/inputText/install`} activeClassName="is-active">Install</NavLink>
      </div>
    )
  }
}
