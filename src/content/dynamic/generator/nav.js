import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/generator/install`} activeclassname="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/api`} activeclassname="is-active">Installer API</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/releases`} activeclassname="is-active">Releases</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/define-api`} activeclassname="is-active">API dev guide</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/generator/best-practice`} activeclassname="is-active">Best practices</NavLink>
        {/* <NavLink role="tab" exact className="tab link" to={`/generator/upgrade`} activeclassname="is-active">Update repo</NavLink> */}
        {/* <NavLink role="tab" exact className="tab link" to={`/aurolabs/minors`} activeclassname="is-active">auroLabs</NavLink> */}
        <LinkIcons
          github="https://github.com/AlaskaAirlines/WC-Generator/issues"
          npm="https://www.npmjs.com/package/@aurodesignsystem/wc-generator"
          code="https://github.com/AlaskaAirlines/WC-Generator"
        />
      </div>
    )
  }
}
