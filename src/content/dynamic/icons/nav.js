import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import { NavLink } from "react-router-dom";

export class Nav extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/icons'];
    return `@alaskaairux/icons: ${dependencies}`;
  };

  render() {
    return (
      <div role="tablist" className="tabList">
        <NavLink role="tab" exact className="tab link" to={`/icons`} activeClassName="is-active">Icons</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/guidelines`} activeClassName="is-active">Design guidelines</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/install`} activeClassName="is-active">Install</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/icons/ways-to-use`} activeClassName="is-active">Ways to use</NavLink>
        <NavLink role="tab" exact className="tab link" to={`/deprecated-icons`} activeClassName="is-active">Deprecated Icons</NavLink>

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
