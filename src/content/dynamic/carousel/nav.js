import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="ods-tablist tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel`} activeClassName="is-active">Carousel</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel/api`} activeClassName="is-active">API</NavLink>
      </div>
    )
  }
}