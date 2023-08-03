import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime`} activeClassName="is-active">Date/Time</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datetime/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-datetime/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-datetime"
          code="https://github.com/AlaskaAirlines/auro-datetime/blob/master/src/auro-datetime.js"
        />

      </div>
    )
  }
}
