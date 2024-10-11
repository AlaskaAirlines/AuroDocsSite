import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/support/polyfills/focusvisible`} >Focus Visible</NavLink>
        <NavLink role="tab" end className="tab link" to={`/support/polyfills/webcomponentsjs`} >Webcomponentsjs</NavLink>
      </div>
    )
  }
}
