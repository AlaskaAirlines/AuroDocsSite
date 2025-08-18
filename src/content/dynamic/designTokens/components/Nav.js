import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { THEMES } from "~/config/themes";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/getting-started/developers/design-tokens`} >Design Tokens</NavLink>
        <NavLink role="tab" end className="tab link" to={`/getting-started/developers/design-tokens/install`} >Install</NavLink>
        {THEMES.map(theme => (
          <NavLink 
            key={theme.slug}
            role="tab" 
            end 
            className="tab link" 
            to={`/getting-started/developers/design-tokens/${theme.slug}`}
          >
            {theme.displayName}
          </NavLink>
        ))}
        <NavLink role="tab" end className="tab link" to={`/getting-started/developers/design-tokens/auro-classic`} >Auro Classic</NavLink>
      </div>
    )
  }
}
