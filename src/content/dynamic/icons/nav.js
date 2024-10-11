import React, { Component } from "react";
import LinkIcons from '~/components/linkIcons';
import { NavLink } from "react-router-dom";
import packageJson from 'ROOT/package.json';

export class Nav extends Component {

  showVersion() {

    const dependencies = packageJson.dependencies['@alaskaairux/icons'];
    return `@alaskaairux/icons: ${dependencies}`;
  };

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" end className="tab link" to={`/icons`} >Icons</NavLink>
        <NavLink role="tab" end className="tab link" to={`/icons/guidelines`} >Design guidelines</NavLink>
        <NavLink role="tab" end className="tab link" to={`/icons/install`} >Install</NavLink>
        <NavLink role="tab" end className="tab link" to={`/icons/ways-to-use`} >Ways to use</NavLink>
        <NavLink role="tab" end className="tab link" to={`/deprecated-icons`} >Deprecated Icons</NavLink>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/Icons/issues"
          npm="https://www.npmjs.com/package/@alaskaairux/icons"
          code="https://github.com/AlaskaAirlines/Icons/tree/master/src/icons"
          version={this.showVersion()}
        />
      </div>
    )
  }
}
