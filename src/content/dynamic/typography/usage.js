import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import Highlight from 'react-highlight';
import header from 'assets/typography/header.png';
import allTokens from '@alaskaairux/orion-design-tokens/dist/tokens/JSObject--allTokens.js';
import _getTokens from "functions/getTokens";
import 'highlight.js/styles/github.css';
import { Nav } from './nav.js';

const font = allTokens.font;
const textBody = allTokens.text.body;
const textHeadingDefault = allTokens.text.heading.default;
const textHeadingDisplay = allTokens.text.heading.display;
const textHeading800 = allTokens.text.heading[800];
const textHeading700 = allTokens.text.heading[700];
const textHeading600 = allTokens.text.heading[600];
const textHeading500 = allTokens.text.heading[500];
const textHeading400 = allTokens.text.heading[400];
const textHeading300 = allTokens.text.heading[300];

class Typography extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-web-core-style-sheets'];

    return `@alaskaairux/orion-web-core-style-sheets: ${dependencies}`;
  };

  render() {
    return (
      <section id="typography">
        <Nav/>
        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <h1 className="auro_heading auro_heading--display">Typography Usage</h1>


        <h3 className="auro_heading auro_heading--600">Overview</h3>
        <p className="auro_baseParagraph">Typography carries content and builds hierarchy and structure within an experience. Our typography is simple and clear, never jarring or overly striking</p>

        <h3 className="auro_heading auro_heading--600">Accessibility</h3>
        <p className="auro_baseParagraph">To ensure that usage of typography complies with accessibility guidelines:</p>

        <ul>
          <li>Use h1-h6 to identify headings (<code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code> and <code>h1</code>)</li>
          <li>
            Use headings to label page regions
            <ul>
              <li>Use the aria-label attribute to associate headings with their page region, as described in the label page regions tutorial</li>
            </ul>
          </li>
        </ul>

        <p className="auro_baseParagraph">Assistive technologies skim the structure of a page:</p>
        <ul>
          <li>Use heading levels to allow users to navigate to or skip over specific sections</li>
          <li>Avoid skipping heading levels (e.g., <code>h2</code> to <code>h4</code> )</li>
        </ul>

        <h3 className="auro_heading auro_heading--600">Design Tokens</h3>
        <p className="auro_baseParagraph">We use design tokens to represent the decisions of Auro's visual language. We store font specifications using variable names instead of hard-coded typography values.</p>

        <h2 className="auro_heading auro_heading--800">Headings</h2>
        <div className="indention util_fontWeightLight util_type--secondary">
          <p>Due to the combination of Orion selectors with Auro selectors, this demo is using the <code>$prefix</code> option to name-space the Auro selectors.</p>
          <p>See the <auro-hyperlink href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#variable-prefix" target="_blank">WCSS docs for more info</auro-hyperlink>.</p>
        </div>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--display">.auro_heading--display</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--display">.auro_heading--display</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--800">.auro_heading--800</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--800">.auro_heading--800</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--700">.auro_heading--700</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--700">.auro_heading--700</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--600">.auro_heading--600</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--600">.auro_heading--600</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--500">.auro_heading--500</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--500">.auro_heading--500</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--400">.auro_heading--400</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--400">.auro_heading--400</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--300">.auro_heading--300</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 class="auro_heading auro_heading--300">.auro_heading--300</h1>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--800">Paragraph style</h2>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_baseParagraph">Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="auro_baseParagraph">Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--800">Utility type selectors</h2>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--lg">.auro_util_body--lg</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="auro_util_body--lg">.auro_util_body--lg`}
        </Highlight>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--sm">.auro_util_body--sm</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="auro_util_body--sm">.auro_util_body--sm`}
        </Highlight>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--xs">.auro_util_body--xs</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p class="auro_util_body--xs">.auro_util_body--xs`}
        </Highlight>

        <h2 className="auro_heading auro_heading--800">Design tokens</h2>

        <h3 className="auro_heading auro_heading--500">Font families</h3>
        <auro-tokens-list componentData={_getTokens(font, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading defaults</h3>
        <auro-tokens-list componentData={_getTokens(textHeadingDefault, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading display</h3>
        <auro-tokens-list componentData={_getTokens(textHeadingDisplay, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading 800</h3>
        <auro-tokens-list componentData={_getTokens(textHeading800, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading 700</h3>
        <auro-tokens-list componentData={_getTokens(textHeading700, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading 600</h3>
        <auro-tokens-list componentData={_getTokens(textHeading600, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading 500</h3>
        <auro-tokens-list componentData={_getTokens(textHeading500, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading 400</h3>
        <auro-tokens-list componentData={_getTokens(textHeading400, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Heading 300</h3>
        <auro-tokens-list componentData={_getTokens(textHeading300, [])}></auro-tokens-list>

        <h3 className="auro_heading auro_heading--500">Body (default, lg, sm, xs)</h3>
        <auro-tokens-list componentData={_getTokens(textBody, [])}></auro-tokens-list>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-web-core-style-sheets"
          code="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/src/_baseline.scss"
          docs="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#heading"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default Typography;
