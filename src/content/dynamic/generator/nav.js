import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/generator/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/generator/api`} >Installer API</NavLink>
        <NavLink role="tab" end className="tab link" to={`/generator/releases`} >Releases</NavLink>
        <NavLink role="tab" end className="tab link" to={`/generator/define-api`} >API dev guide</NavLink>
        <NavLink role="tab" end className="tab link" to={`/generator/best-practice`} >Best practices</NavLink>
        {/* <NavLink role="tab" end className="tab link" to={`/generator/upgrade`} >Update repo</NavLink> */}
        {/* <NavLink role="tab" end className="tab link" to={`/aurolabs/minors`} >auroLabs</NavLink> */}
        <LinkIcons
          github="https://github.com/AlaskaAirlines/WC-Generator/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/wc-generator"
          code="https://github.com/AlaskaAirlines/WC-Generator"
        />
      </div>
    )
  }
}
