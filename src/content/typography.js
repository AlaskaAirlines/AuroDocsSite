import React, { Component } from "react";
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import LinkIcons from '../components/linkIcons';
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import '../sass/App.scss';
import header from '../assets/typography/header.png';

class Typography extends Component {
  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-web-core-style-sheets'];

    return `@alaskaairux/orion-web-core-style-sheets: ${dependencies}`;
  };

  render() {
    return (
      <section id="typography">
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-web-core-style-sheets"
          code="https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/blob/master/src/_baseline.scss"
          docs="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#heading"
          version={this.showVersion()}
        />
        <h1 className="auro_heading auro_heading--display">Typography</h1>

        <img className="util_stackMarginXl--bottom util_marginBottom--xl" src={header} alt="page header" />

        <h2 className="auro_heading auro_heading--600">Overview</h2>
        <p className="auro_baseParagraph">Typography carries content and builds hierarchy and structure within an experience. Our typography is simple and clear, never jarring or overly striking</p>

        <h2 className="auro_heading auro_heading--600">Accessibility</h2>
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

        <h2 className="auro_heading auro_heading--600">Design Tokens</h2>
        <p className="auro_baseParagraph">We use design tokens to represent the decisions of Auro's visual language. We store font specifications using variable names instead of hard-coded typography values.</p>

        <h2 className="auro_heading auro_heading--600">Headings</h2>
        <div className="indention util_fontWeightLight util_type--secondary">
          <p>Due to the combination of Orion selectors with Auro selectors, this demo is using the <code>$prefix</code> option to name-space the Auro selectors.</p>
          <p>See the <ods-hyperlink inline href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#variable-prefix" target="_blank">WCSS docs for more info</ods-hyperlink>.</p>
        </div>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--display">.auro_heading--display</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--display">.auro_heading--display</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--800">.auro_heading--800</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--800">.auro_heading--800</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--700">.auro_heading--700</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--700">.auro_heading--700</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--600">.auro_heading--600</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--600">.auro_heading--600</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--500">.auro_heading--500</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--500">.auro_heading--500</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--400">.auro_heading--400</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--400">.auro_heading--400</h1>`}
        </Highlight>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--300">.auro_heading--300</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="auro_heading auro_heading--300">.auro_heading--300</h1>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--600">Paragraph style</h2>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_baseParagraph">Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="auro_baseParagraph">Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--600">Utility type selectors</h2>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--lg">.auro_util_body--lg</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="auro_util_body--lg">.auro_util_body--lg`}
        </Highlight>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--sm">.auro_util_body--sm</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="auro_util_body--sm">.auro_util_body--sm`}
        </Highlight>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--xs">.auro_util_body--xs</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="auro_util_body--xs">.auro_util_body--xs`}
        </Highlight>



        <h2 className="auro_heading auro_heading--600">Deprecated selectors </h2>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--max">.heading--max</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--max">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--xxl">.heading--xxl</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--xxl">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--xl">.heading--xl</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--xl">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_type--xl">.util_type--xl</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_type--xl">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <h1 className="heading heading--lg">.heading--lg</h1>
        </div>
        <Highlight className='html afterCode'>
          {`<h1 className="heading heading--lg">heading--xl</h1>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_type--lg">.util_type--lg</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_type--lg">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_type--secondary">.util_type--secondary</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_type--secondary">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
          <p className="util_fontWeightLight">.util_fontWeightLight</p>
        </div>
        <Highlight className='html afterCode'>
          {`<p className="util_fontWeightLight">.util_type--lg</p>`}
        </Highlight>

        <div className="exampleWrapper--deprecated">
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
