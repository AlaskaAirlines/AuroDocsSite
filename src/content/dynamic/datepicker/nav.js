import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datepicker`} activeClassName="is-active">Datepicker</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datepicker/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datepicker/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datepicker/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/datepicker/figma`} activeClassName="is-active">Design Support</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-datepicker/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-datepicker"
          code="https://github.com/AlaskaAirlines/auro-datepicker/blob/master/src/auro-datepicker.js"
        />

      </div>
    )
  }
}
