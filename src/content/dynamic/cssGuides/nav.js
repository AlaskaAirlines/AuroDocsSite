import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/css/conventions`} activeClassName="is-active">CSS conventions</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/css/custom-element-css`} activeClassName="is-active">CSS & custom elements</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/css/guidelines`} activeClassName="is-active">Style guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/css/linter`} activeClassName="is-active">Stylelint rules</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/css/idiomatic-css`} activeClassName="is-active">Idiomatic CSS</NavLink>
      </div>
    )
  }
}
