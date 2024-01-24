import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dialog`} activeClassName="is-active">Dialog</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dialog/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dialog/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/dialog/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-dialog/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-dialog"
          code="https://github.com/AlaskaAirlines/auro-dialog/blob/master/src/auro-dialog.js"
        />

      </div>
    )
  }
}
