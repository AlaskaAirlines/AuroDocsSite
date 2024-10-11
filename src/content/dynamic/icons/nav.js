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
        <NavLink role="tab" exact className="tab link" to={`/icons`} activeclassname="is-active">Icons</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/guidelines`} activeclassname="is-active">Design guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/install`} activeclassname="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/ways-to-use`} activeclassname="is-active">Ways to use</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/deprecated-icons`} activeclassname="is-active">Deprecated Icons</NavLink>

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
