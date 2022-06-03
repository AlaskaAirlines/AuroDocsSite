import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/background`} activeClassName="is-active">Background</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/background/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/background/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/background/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-background/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-background"
          code="https://github.com/AlaskaAirlines/auro-background/blob/master/src/auro-background.js"
        />
      </div>
    )
  }
}
