import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/components/auro/dialog`} >Dialog</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/dialog/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/dialog/api`} >API</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/dialog/releases`} >Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-dialog/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-dialog"
          code="https://github.com/AlaskaAirlines/auro-dialog/blob/master/src/auro-dialog.js"
        />

      </div>
    )
  }
}
