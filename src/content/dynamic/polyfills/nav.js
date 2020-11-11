import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/support/polyfills/focusvisible`} activeClassName="is-active">Focus Visible</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/support/polyfills/webcomponentsjs`} activeClassName="is-active">Webcomponentsjs</NavLink>
      </div>
    )
  }
}
