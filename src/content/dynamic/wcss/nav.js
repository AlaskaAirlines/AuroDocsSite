import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets`} activeClassName="is-active">WCSS</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/features`} activeClassName="is-active">WCSS Features</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/custom-element-css`} activeClassName="is-active">CSS & Custom Elements</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/conventions`} activeClassName="is-active">CSS Conventions</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/guidelines`} activeClassName="is-active">Style Guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/tests`} activeClassName="is-active">Sass Unit Tests</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/linter`} activeClassName="is-active">Stylelint Rules</NavLink>

        {/* <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/faq`} activeClassName="is-active">F.A.Q.</NavLink> */}
      </div>
    )
  }
}
