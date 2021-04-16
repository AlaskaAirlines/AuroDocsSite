import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets`} activeClassName="is-active">WCSS</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/features`} activeClassName="is-active">WCSS features</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/custom-element-css`} activeClassName="is-active">CSS & custom elements</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/conventions`} activeClassName="is-active">CSS conventions</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/guidelines`} activeClassName="is-active">Style guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/tests`} activeClassName="is-active">Sass unit tests</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/linter`} activeClassName="is-active">Stylelint rules</NavLink>

        {/* <NavLink role="tab" exact className="tab link" to={`/webcorestylesheets/faq`} activeClassName="is-active">F.A.Q.</NavLink> */}
      </div>
    )
  }
}
