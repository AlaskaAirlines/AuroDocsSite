import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties.css';
import '../sass/icons.scss';
import '../sass/App.scss';

import IconList from './iconList';


class Icons extends Component {

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-icons'];
    return `@alaskaairux/orion-icons: ${dependencies}`;
  };

  render() {
    return (
      <section id="icons">
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionIcons"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-icons"
          code="https://github.com/AlaskaAirlines/OrionIcons/tree/master/src/icons"
          version={this.showVersion()}
        />
        <h1 className="heading heading--max">Orion Icons</h1>


        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of icons for different use cases. The following examples illustrate common icon uses.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/orion-icons" target="_blank">Orion Icons</ods-hyperlink> for more information as how to install and full API for icon use.</p>
        </div>

        <IconList />

      </section>
    );
  }
}

export default Icons;
