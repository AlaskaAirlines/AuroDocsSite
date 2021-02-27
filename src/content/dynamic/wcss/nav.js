import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets`} activeClassName="is-active">WCSS</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/features`} activeClassName="is-active">WCSS Features</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/tests`} activeClassName="is-active">Sass unit tests</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/conventions`} activeClassName="is-active">CSS Conventions</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/linter`} activeClassName="is-active">stylelint rules</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/faq`} activeClassName="is-active">F.A.Q.</NavLink> */}
      </div>
    )
  }
}
