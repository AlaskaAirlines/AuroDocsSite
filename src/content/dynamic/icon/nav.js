import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/components/auro/icon`} >Icon</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/icon/alaska`} >Alaska Logo</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/icon/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/icon/api`} >API</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/icon/releases`} >Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-icon/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-icon"
          code="https://github.com/AlaskaAirlines/auro-icon/blob/master/src/auro-icon.js"
        />

      </div>
    )
  }
}
