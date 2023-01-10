import React, { Component } from "react";
import LinkIcons from 'components/linkIcons';
import Highlight from 'react-highlight';
import header from 'assets/typography/header.png';
import allTokens from '@alaskaairux/design-tokens/dist/tokens/JSObject--allTokens.js';
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

        <auro-header level="1" display="display">Typography Usage</auro-header>
        <auro-header level="3" display="600">Overview</auro-header>
        <p className="auro_baseParagraph">Typography carries content and builds hierarchy and structure within an experience. Our typography is simple and clear, never jarring or overly striking</p>

        <auro-header level="3" display="600">Accessibility</auro-header>
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

        <auro-header level="2" display="600">Design Tokens</auro-header>
        <p className="auro_baseParagraph">We use design tokens to represent the decisions of Auro's visual language. We store font specifications using variable names instead of hard-coded typography values.</p>

        <auro-header level="2" display="600">Auro header styles</auro-header>
        <p>Header styles can be added to a project via the <auro-hyperlink href="/webcorestylesheets" relative>Auro Web Core Style Sheet package</auro-hyperlink>. Plase be sure to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#headings-css" target="_blank"> API documentation.</auro-hyperlink></p>

        <auro-header level="2" display="600">Auro header component</auro-header>
        <p>See <auro-hyperlink href="/components/auro/header" relative>auro-header component</auro-hyperlink> for an easy to use web componet.</p>

        <auro-header level="2" display="800">Headings</auro-header>
        <div className="indention util_type--secondary">
          <p>Due to the combination of Orion selectors with Auro selectors, this demo is using the <code>$prefix</code> option to name-space the Auro selectors.</p>
          <p>See the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#scope-prefix-variable-prefix" target="_blank">WCSS docs for more info</auro-hyperlink>.</p>
        </div>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--display">.auro_heading--display</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--display">.auro_heading--display</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--800">.auro_heading--800</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--800">.auro_heading--800</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--700">.auro_heading--700</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--700">.auro_heading--700</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--600">.auro_heading--600</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--600">.auro_heading--600</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--500 util_stackMarginXxxs--bottom">.auro_heading--500</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--500">.auro_heading--500</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--400">.auro_heading--400</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--400">.auro_heading--400</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>

        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--300">.auro_heading--300</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 class="auro_heading auro_heading--300">.auro_heading--300</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>

        <auro-header level="2" display="800">Paragraph style</auro-header>
        <p>Paragraph styles can be added to a project via the <auro-hyperlink href="/webcorestylesheets" relative>Auro Web Core Style Sheet package</auro-hyperlink>. Be sure to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#essentials-css-#{$sym}#{$prefix}html#{$scope}" target="_blank">type essentials API docs.</auro-hyperlink></p>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_baseParagraph">Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<p class="baseParagraph">Basic text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`}
          </Highlight>
          <br/>
        </auro-accordion>

        <auro-header level="2" display="800">Fine print support</auro-header>
        <p>Auro's <code>.fineprint</code> selector support is intended to be used in cases where bulk copy is to be smaller than the more obvious larger print it accompanies. Fine print copy typically advertises or otherwise describes or partially describes a commercial product or service.</p>

        <p>Support for the <code>.fineprint</code> is included in the <auro-hyperlink target="_blank" href="https://alaskaairlines.github.io/WebCoreStyleSheets/#essentials-css-#{$scope}.#{$prefix}fineprint">essentials file</auro-hyperlink> of Auro's Web Core Style Sheets.</p>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_fineprint">Basic fine print text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<p class="fineprint">Basic fine print text example. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`}
          </Highlight>
          <br/>
        </auro-accordion>

        <auro-header level="2" display="800">Utility type selectors</auro-header>
        <p>Utility type styles can be added to a project via the <auro-hyperlink href="/webcorestylesheets" relative>Auro Web Core Style Sheet package</auro-hyperlink>. Plase be sure to review the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-font" target="_blank"> utility-font API documentation.</auro-hyperlink></p>

        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--lg">.auro_util_body--lg</p>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<p class="auro_util_body--lg">.auro_util_body--lg`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--sm">.auro_util_body--sm</p>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<p class="auro_util_body--sm">.auro_util_body--sm`}
          </Highlight>
          <br/>
        </auro-accordion>


        <div className="exampleWrapper auro_baseType">
          <p className="auro_util_body--xs">.auro_util_body--xs</p>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<p class="auro_util_body--xs">.auro_util_body--xs`}
          </Highlight>
          <br/>
        </auro-accordion>


        <auro-header level="2" display="800">Custom spacing</auro-header>
        <p>The Header styles come with spacing baked in. This is to help auto stack content and components without additional effort. But there are times where customizing this spacing is required. To help with this, please refer to the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#mixin-auro_spacing" target="_blank">Auro spacing utility</auro-hyperlink> section of Web Core Style Sheets. </p>

        <p>When using utility selectors, the <code>!important</code> flag is sometimes required. Please see <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-variable-important" target="_blank">how to use the important flag</auro-hyperlink> in Web Core Style Sheets.</p>

        <p>The example below illustrates how you can adjust the spacing around a header element using Auro utility selectors. </p>
        <div className="exampleWrapper">
          <h1 className="auro_heading auro_heading--500 util_stackMarginXxxs--bottom util_stackMarginXxxs--top">.auro_heading--500</h1>
        </div>
        <auro-accordion lowProfile noProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<h1 className="auro_heading auro_heading--500 util_stackMarginXxxs--bottom util_stackMarginXxxs--top">.auro_heading--500</h1>`}
          </Highlight>
          <br/>
        </auro-accordion>


        <auro-header level="2" display="800">Design tokens</auro-header>
        <p>Please see <auro-hyperlink href="/getting-started/developers/design-tokens/install" relative>install docs</auro-hyperlink> for more information.</p>
        <auro-header level="3" display="500">Font families</auro-header>
        <auro-tokenlist componentData={_getTokens(font, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading defaults</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeadingDefault, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading display</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeadingDisplay, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading 800</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeading800, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading 700</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeading700, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading 600</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeading600, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading 500</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeading500, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading 400</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeading400, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Heading 300</auro-header>
        <auro-tokenlist componentData={_getTokens(textHeading300, [])}></auro-tokenlist>

        <auro-header level="3" display="500">Body (default, lg, sm, xs)</auro-header>
        <auro-tokenlist componentData={_getTokens(textBody, [])}></auro-tokenlist>

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
