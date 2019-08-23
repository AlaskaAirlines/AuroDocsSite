import React, { Component } from "react";
// import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import LinkIcons from '../components/linkIcons';
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import '../sass/App.scss';

class Typography extends Component {
  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-web-core-style-sheets'];

    return `@alaskaairux/orion-web-core-style-sheets: ${dependencies}`;
  };

  render() {
    return (
      <section id="typography">
        <h1 className="heading heading--max">Typography</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-web-core-style-sheets"
          code="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/src/_baseline.scss"
          docs="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#heading"
          version={this.showVersion()}
        />
        <div className="indention util_fontWeightLight util_type--secondary">
          <p>Basic typography is the conerstone of all web design. The Orion Design System fully supports a wide range of typography styles.</p>
          <p>All typography is based on the use of <code>AS Circular</code>, a custom font created for use with Alaska Airline's web brand. </p>
          <p>The following examples illustrate common typography uses followed up by a code example. All utility classes shown can be found in the <ods-hyperlink inline href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/" target="_blank">Orion Web Core Style Sheets</ods-hyperlink> documentation.</p>
        </div>

        <Highlight className='install'>
          {`$npm i @alaskaairux/orion-web-core-style-sheets`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="heading heading--max">Example .heading--max</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--max">Example heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="heading heading--xxl">Example .heading--xxl</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--xxl">Example heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="heading heading--xl">Example .heading--xl</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--xl">Example heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <p className="util_type--xl">Example .util_type--xl</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_type--xl">Example .util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="heading heading--lg">Example .heading--lg</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--lg">Example heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <p className="util_type--lg">Example .util_type--lg</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_type--lg">Example .util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper">
          <p className="util_type--secondary">Example .util_type--secondary</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_type--secondary">Example .util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper">
          <p className="util_fontWeightLight">Example .util_fontWeightLight</p>
        </div>

        <Highlight className='html afterCode'>
          {`<p className="util_fontWeightLight">Example .util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper">
          <p>Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p>Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`}
        </Highlight>
      </section>
    );
  }
}

export default Typography;
