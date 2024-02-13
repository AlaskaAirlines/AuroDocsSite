import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alert`} activeClassName="is-active">Alert</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alert/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alert/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alert/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/alert/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-alerts/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-alert"
          code="https://github.com/AlaskaAirlines/auro-alerts/blob/initialBuild/src/auro-alerts.js"
        />
      </div>
    )
  }
}
