import React, { Component } from "react";
// import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
// import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
// import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
// import "@alaskaairux/ods-inputoptions/dist/ods-inputoptions";
import "@alaskaairux/ods-swatch/dist/ods-swatch";
// import 'highlight.js/styles/github.css';
import '../sass/App.scss';
import data from "../../node_modules/@alaskaairux/orion-design-tokens/dist/tokens/TokenColorVariables.js";

class Swatch extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...
  //   }
  // };

  componentDidMount() {
    const brand = data.color;
    Object.keys(brand).forEach(function(key) {
      // let data = brand[key];
      // console.log(Object.keys(data));
    });

    const brandBlue = data.color.brand.blue;

    Object.keys(brandBlue).forEach(function(key) {
      //let data = brandBlue[key];
      //console.log(Object.keys(data));
    });
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
            backgroundcolor={data.color.brand.blue.midnight.base.original.value}
            colorname={data.color.brand.blue.midnight.base.name}></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch backgroundcolor="0074c8" colorname="ColorBrandBlueAtlasBase"></ods-swatch>
          <ods-swatch backgroundcolor="176cff" colorname="ColorBrandBlueAtlasLighten"></ods-swatch>
          <ods-swatch backgroundcolor="0064c6" colorname="ColorBrandBlueAtlasDarken"></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch backgroundcolor="00C7e6" colorname="ColorBrandBlueBreezeBase"></ods-swatch>
          <ods-swatch backgroundcolor="17d8ff" colorname="ColorBrandBlueBreezeLighten"></ods-swatch>
          <ods-swatch backgroundcolor="00bae4" colorname="ColorBrandBlueBreezeDarken"></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch backgroundcolor="c0e585" colorname="ColorBrandGreenTropicalBase"></ods-swatch>
          <ods-swatch backgroundcolor="bff380" colorname="ColorBrandGreenTropicalLighten"></ods-swatch>
          <ods-swatch backgroundcolor="a6d36a" colorname="ColorBrandGreenTropicalDarken"></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch backgroundcolor="ffffff" colorname="ColorBaseWhite"></ods-swatch>
          <ods-swatch backgroundcolor="222222" colorname="ColorBaseOrca"></ods-swatch>
          <ods-swatch backgroundcolor="6e7783" colorname="ColorBaseShark"></ods-swatch>
          <ods-swatch backgroundcolor="9fabbb" colorname="ColorBaseManatee"></ods-swatch>
          <ods-swatch backgroundcolor="c8c9c7" colorname="ColorBaseFog"></ods-swatch>
          <ods-swatch backgroundcolor="f7f7f7" colorname="ColorBaseCloud"></ods-swatch>
          <ods-swatch backgroundcolor="e8e8e8" colorname="ColorBaseMist"></ods-swatch>
          <ods-swatch backgroundcolor="336787" colorname="ColorBaseDusk"></ods-swatch>
          <ods-swatch backgroundcolor="008568" colorname="ColorBaseGalapagos"></ods-swatch>
          <ods-swatch backgroundcolor="df0b37" colorname="ColorBaseChili"></ods-swatch>
          <ods-swatch backgroundcolor="def279" colorname="ColorBaseLimeaid"></ods-swatch>
          <ods-swatch backgroundcolor="e5ecf0" colorname="ColorBaseBeluga"></ods-swatch>
          <ods-swatch backgroundcolor="f26135" colorname="ColorBaseNemo"></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch backgroundcolor="f26135" colorname="ColorAccessibilityBorderActive"></ods-swatch>
        </div>

        <div className="util_swatchBox">
          <ods-swatch backgroundcolor="01426a" colorname="ColorBackgroundBookingBar"></ods-swatch>
          <ods-swatch backgroundcolor="01426a" colorname="ColorBackgroundFooter"></ods-swatch>
          <ods-swatch backgroundcolor="01426a" colorname="ColorBackgroundAccountDrawer"></ods-swatch>
          <ods-swatch backgroundcolor="01426a" colorname="ColorBackgroundLogo"></ods-swatch>
          <ods-swatch backgroundcolor="ffffff" colorname="ColorBackgroundHeadline"></ods-swatch>
          <ods-swatch backgroundcolor="ffffff" colorname="ColorBackgroundHeader"></ods-swatch>
          <ods-swatch backgroundcolor="f7f7f7" colorname="ColorBackgroundSectionSeperator"></ods-swatch>
          <ods-swatch backgroundcolor="df0b37" colorname="ColorBackgroundError"></ods-swatch>
          <ods-swatch backgroundcolor="def279" colorname="ColorBackgroundAlert"></ods-swatch>
          <ods-swatch backgroundcolor="e5ecf0" colorname="ColorBackgroundAdvisory"></ods-swatch>
          <ods-swatch backgroundcolor="336787" colorname="ColorBackgroundDarkRule"></ods-swatch>
          <ods-swatch backgroundcolor="c8c9c7" colorname="ColorBackgroundLightRule"></ods-swatch>
        </div>

      </section>
    );
  }
}

export default Swatch;
