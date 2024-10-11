import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/components/auro/[component]`} >[component]</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/[component]/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/[component]/api`} >API</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/[component]/figma`} >Design support</NavLink>
        <NavLink role="tab" end className="tab link" to={`/components/auro/[component]/releases`} >Releases</NavLink>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-[component]/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-[component]"
          code="https://github.com/AlaskaAirlines/auro-[component]/blob/master/src/auro-[component].js"
        />

      </div>
    )
  }
}
