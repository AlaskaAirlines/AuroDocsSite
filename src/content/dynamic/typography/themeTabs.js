import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { THEMES } from "~/config/themes";

/**
 * Theme tabs for Typography Usage.
 */
export default class ThemeTabs extends Component {
  render() {
    return (
      <div role="tablist" className="tabList util_stackMarginMd--bottom">
        {THEMES.map(theme => (
          <NavLink 
            key={theme.slug}
            role="tab" 
            end 
            className="tab link" 
            to={`/typography/usage/${theme.slug}`}
          >
            {theme.displayName}
          </NavLink>
        ))}
      </div>
    );
  }
}
