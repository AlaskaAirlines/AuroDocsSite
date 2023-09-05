import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/pane`} activeClassName="is-active">Pane</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/pane/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/pane/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/pane/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-pane/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-pane"
          code="https://github.com/AlaskaAirlines/auro-pane/blob/master/src/auro-pane.js"
        />

      </div>
    )
  }
}
