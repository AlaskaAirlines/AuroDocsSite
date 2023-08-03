import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input`} activeClassName="is-active">Input</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/input/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-input/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-input"
          code="https://github.com/AlaskaAirlines/auro-input/blob/master/src/auro-input.js"
        />

      </div>
    )
  }
}
