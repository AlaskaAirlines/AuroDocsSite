import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel`} activeClassName="is-active">Carousel</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel/api`} activeClassName="is-active">API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/components/auro/carousel/releases`} activeClassName="is-active">Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-carousel/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/auro-carousel"
          code="https://github.com/AlaskaAirlines/auro-carousel/blob/master/src/auro-carousel.js"
        />
      </div>
    )
  }
}
