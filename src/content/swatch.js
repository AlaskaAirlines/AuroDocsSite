import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import "@alaskaairux/ods-swatch";
import '../sass/App.scss';
import data from "../../node_modules/@alaskaairux/orion-design-tokens/dist/tokens/TokenColorVariables.js";

const brand = data.color.brand;
const base = data.color.base;
const background = data.color.background;

class Swatch extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...
  //   }
  // };

  componentDidMount() {
    //const brand = data.color.brand;
    // Object.keys(brand).forEach(function(key) {
    //   let data = brand[key];
    //   console.log(Object.keys(data));
    // });

    // const brandBlue = data.color.brand.blue;
    // Object.keys(brandBlue).forEach(function(key) {
    //   let data = brandBlue[key];
    //   console.log(Object.keys(data));
    // });
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
          <ods-swatch
            backgroundcolor={brand.blue.midnight.base.value}
            colorname={brand.blue.midnight.base.name}></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch
            backgroundcolor={brand.blue.atlas.base.value}
            colorname={brand.blue.atlas.base.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={brand.blue.atlas.lighten.value}
            colorname={brand.blue.atlas.lighten.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={brand.blue.atlas.darken.value}
            colorname={brand.blue.atlas.darken.name}></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch
            backgroundcolor={brand.blue.breeze.base.value}
            colorname={brand.blue.breeze.base.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={brand.blue.breeze.lighten.value}
            colorname={brand.blue.breeze.lighten.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={brand.blue.breeze.darken.value}
            colorname={brand.blue.breeze.darken.name}></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch
            backgroundcolor={brand.green.tropical.base.value}
            colorname={brand.green.tropical.base.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={brand.green.tropical.lighten.value}
            colorname={brand.green.tropical.lighten.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={brand.green.tropical.darken.value}
            colorname={brand.green.tropical.darken.name}></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch
            backgroundcolor={base.white.value}
            colorname={base.white.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.orca.value}
            colorname={base.orca.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.shark.value}
            colorname={base.shark.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.manatee.value}
            colorname={base.manatee.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.fog.value}
            colorname={base.fog.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.cloud.value}
            colorname={base.cloud.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.mist.value}
            colorname={base.mist.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.dusk.value}
            colorname={base.dusk.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.galapagos.value}
            colorname={base.galapagos.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.chili.value}
            colorname={base.chili.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.limeade.value}
            colorname={base.limeade.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.beluga.value}
            colorname={base.beluga.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={base.nemo.value}
            colorname={base.nemo.name}></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch
            backgroundcolor={background.bookingBar.value}
            colorname={background.bookingBar.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.footer.value}
            colorname={background.footer.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.accountDrawer.value}
            colorname={background.accountDrawer.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.logo.value}
            colorname={background.logo.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.headline.value}
            colorname={background.headline.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.header.value}
            colorname={background.header.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.sectionSeperator.value}
            colorname={background.sectionSeperator.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.error.value}
            colorname={background.error.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.alert.value}
            colorname={background.alert.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.advisory.value}
            colorname={background.advisory.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.dark.rule.value}
            colorname={background.dark.rule.name}></ods-swatch>
          <ods-swatch
            backgroundcolor={background.light.rule.value}
            colorname={background.light.rule.name}></ods-swatch>
        </div>

      </section>
    );
  }
}

export default Swatch;
