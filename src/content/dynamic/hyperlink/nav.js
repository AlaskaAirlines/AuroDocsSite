import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink`} activeClassName="is-active">Hyperlink</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/releases`} activeClassName="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/figma`} activeClassName="is-active">Design support</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/hyperlink/a11y`} activeClassName="is-active">Accessibility</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-hyperlink/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-hyperlink"
          code="https://github.com/AlaskaAirlines/auro-hyperlink/blob/master/src/auro-hyperlink.js"
        />

      </div>
    )
  }
}
