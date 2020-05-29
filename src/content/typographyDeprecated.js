import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import Highlight from 'react-highlight';
import deprecated from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--deprecated.js';
import _getTokens from "../functions/getTokens";
import 'highlight.js/styles/github.css';

const weight = deprecated.weight;
const scale = deprecated.size.scale;
const fontSize = deprecated.size.font;
const deprecatedType = {...weight, ...scale, ...fontSize }

class Typography extends Component {

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-web-core-style-sheets'];

    return `@alaskaairux/orion-web-core-style-sheets: ${dependencies}`;
  };

  render() {
    return (
      <section id="typography">
        <h1 className="auro_heading auro_heading--display">Deprecated</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-web-core-style-sheets"
          code="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/src/_baseline.scss"
          docs="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#heading"
          version={this.showVersion()}
        />
        <p className="auro_baseParagraph">The following selectors have been deperecated and all projects should discontinue use. Please see the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#%E2%80%A0deprecated-css-.heading" target="_blank">WCSS doc site</auro-hyperlink> for cross reference information.</p>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--max">.heading--max</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="heading heading--max">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--xxl">.heading--xxl</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="heading heading--xxl">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--xl">.heading--xl</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="heading heading--xl">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_type--xl">.util_type--xl</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="util_type--xl">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--lg">.heading--lg</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="heading heading--lg">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_type--lg">.util_type--lg</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="util_type--lg">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_type--secondary">.util_type--secondary</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="util_type--secondary">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_fontWeightLight">.util_fontWeightLight</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="util_fontWeightLight">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p>Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p>Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`}
        </Highlight>


        <h2 className="auro_heading auro_heading--800">Deprecated Tokens </h2>
        <p className="auro_baseParagraph">The following tokens have been deperecated and all projects should discontinue use.</p>

        <auro-tokens-list deprecated componentData={_getTokens(deprecatedType, [])}></auro-tokens-list>
      </section>
    );
  }
}

export default Typography;
