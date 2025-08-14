import React, { Component } from "react";
import { NavLink } from "react-router-dom";

/**
 * Theme tabs for Typography Usage.
 */
export default class ThemeTabs extends Component {
  render() {
    return (
      <div role="tablist" className="tabList util_stackMarginMd--bottom">
        <NavLink role="tab" end className="tab link" to={`/typography/usage/alaska`}>Alaska</NavLink>
        <NavLink role="tab" end className="tab link" to={`/typography/usage/alaska-classic`}>Alaska Classic</NavLink>
        <NavLink role="tab" end className="tab link" to={`/typography/usage/hawaiian`}>Hawaiian</NavLink>
        <NavLink role="tab" end className="tab link" to={`/typography/usage/auro-1`}>Auro 1</NavLink>
        <NavLink role="tab" end className="tab link" to={`/typography/usage/auro-2`}>Auro 2</NavLink>
      </div>
    );
  }
}
