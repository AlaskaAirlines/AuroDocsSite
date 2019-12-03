import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import "@alaskaairux/ods-swatch";
import '../sass/App.scss';
import data from "../../node_modules/@alaskaairux/orion-design-tokens/dist/tokens/TokenColorVariables.js";

const brand = data.color.brand;
const base = data.color.base;
const background = data.color.background;

class Swatch extends Component {

  _getColors = (color, colorSet) => {
    if (color.hasOwnProperty("name") && color.hasOwnProperty("value")) {
      colorSet.push(
        <ods-swatch
          key={color['name']}
          backgroundcolor={color['value']}
          colorname={color['name']}>
        </ods-swatch>
      )
    }

    if (color instanceof Object) {
      for (let key in color) {
        this._getColors(color[key], colorSet)
      }
    }

    return colorSet;
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-swatch'];

    return `@alaskaairux/ods-swatch: ${dependencies}`;
  };

  render() {
    return (
      <section id="Swatch">

        <h1 className="heading heading--max">Token Color Swatches</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-swatch"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-swatch"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-swatch/blob/master/src/ods-swatch.js"
          version={this.showVersion()}
        />

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of colors for different use cases. The following examples illustrate common swatch uses with color data.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-swatch" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-swatch</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-swatch</code>.</p>
        </div>

        <div className="util_swatchBox">
          {this._getColors(brand, [])}
        </div>

        <div className="util_swatchBox">
          {this._getColors(base, [])}
        </div>

        <div className="util_swatchBox">
          {this._getColors(background, [])}
        </div>

      </section>
    );
  }
}

export default Swatch;
