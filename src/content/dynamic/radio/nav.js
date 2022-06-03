import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio`} activeClassName="is-active">Radio input type</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/radio/figma`} activeClassName="is-active">Design support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-radio/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-radio"
          code="https://github.com/AlaskaAirlines/auro-radio/blob/master/src/auro-radio.js"
        />

      </div>
    )
  }
}
