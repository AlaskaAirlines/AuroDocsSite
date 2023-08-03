import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/combobox`} activeClassName="is-active">Combobox</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/combobox/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/combobox/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/combobox/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/combobox/figma`} activeClassName="is-active">Design Support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-combobox/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-combobox"
          code="https://github.com/AlaskaAirlines/auro-combobox/blob/master/src/auro-combobox.js"
        />

      </div>
    )
  }
}
