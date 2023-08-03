import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox`} activeClassName="is-active">Checkbox input type</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/checkbox/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-checkbox/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-checkbox"
          code="https://github.com/AlaskaAirlines/auro-checkbox/blob/master/src/auro-checkbox.js"
        />

      </div>
    )
  }
}
