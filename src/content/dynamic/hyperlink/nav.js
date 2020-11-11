import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink`} activeClassName="is-active">Hyperlink</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/a11y`} activeClassName="is-active">a11y</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/components/orion/hyperlink`} activeClassName="is-active">Legacy</NavLink> */}
      </div>
    )
  }
}
