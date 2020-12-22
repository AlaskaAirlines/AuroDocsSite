import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsBuildStatus: null
    }
  };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-header'];

    return `@alaskaairux/auro-header: ${dependencies}`;
  };

  render() {
    return (
      <section id="buttons">

        <Nav />

        <auro-header level="2" display="display">Header</auro-header>

        <p>The <code>auro-header</code> component is a simple component for rendering page or content headers without having to deal with font styling. Simply choose the level of the header want and the style type.</p>

        <p>The auro-header component is able to take any combination of options for heading levels and display options. See <auro-hyperlink href="/typography/usage" relative>Auro's header usage guidlines</auro-hyperlink> for additional examples sans web component dependency.</p>

        <auro-header level="3" display="800">Header use cases</auro-header>
        <p>The <code>auro-header</code> element should be used in situations where users may:</p>
        <ul>
          <li>page header</li>
          <li>content / paragraph header</li>
        </ul>

        <auro-header level="2" display="700">Defaults</auro-header>
        <p>The auro-header will default to the <code>h1</code> element with the <code>header--display</code> style.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header>Hello World!</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header>Hello World!</auro-header>`}
          </Highlight>
        </auro-accordion>

        <p>Changing the header level does not change the header style. This example will output an <code>h3</code> header element with the default <code>header--display</code> style.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3">Hello World!</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="3">Hello World!</auro-header>`}
          </Highlight>
        </auro-accordion>

        <p>Or vice-versa. This example will output an <code>h1</code> header element with the <code>header--800</code> style.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header display="800">Hello World!</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header display="800">Hello World!</auro-header>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Header examples</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-header level="2" display="600">Hello World!</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="2" display="600">Hello World!</auro-header>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3" display="500">Hello World!</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="3" display="500">Hello World!</auro-header>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-header level="5" display="400">Hello World!</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="5" display="400">Hello World!</auro-header>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="600">Adjust margins</auro-header>
        <p>In some cases the margin between elements may need to be adjusted. To do this, the <code>auro-header</code> component supports adjusting either the <code>top</code>, <code>bottom</code> or <code>both</code> margins. This coupled with the <code>size</code> prop, developers have a <auro-hyperlink href="/components/auro/header/api" relative>full range of options.</auro-hyperlink></p>

        <p>The following example shows how you can update the <code>bottom</code> margin to use the <code>xs</code> size setting.</p>

        <p>Also note the use of the <code>util_stackMarginNone--top</code> utility selector on the <code>ol</code> from <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-layout-mixin-auro_spacing" target="_blank">Web Core Style Sheets</auro-hyperlink>.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="2" display="500" margin="bottom" size="xs">Hello World!</auro-header>
          <ol className="util_stackMarginNone--top">
            <li>... thing</li>
            <li>thing ...</li>
          </ol>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="2" display="500" margin="bottom" size="xs">Hello World!</auro-header>
<ol className="util_stackMarginNone--top">
  <li>... thing</li>
  <li>thing ...</li>
</ol>`}
          </Highlight>
        </auro-accordion>

        <p>The following example shows how you can update <code>both</code> margins to use the <code>xl</code> size setting.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="2" display="500" margin="both" size="xl">Hello World!</auro-header>
          <ol className="util_stackMarginNone--top">
            <li>... thing</li>
            <li>thing ...</li>
          </ol>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="2" display="500" margin="both" size="xl">Hello World!</auro-header>
<ol className="util_stackMarginNone--top">
  <li>... thing</li>
  <li>thing ...</li>
</ol>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="600">Color inheritance</auro-header>
        <p>If there is a CSS selector that has the color definition you want to use with the header, simply wrap the header in a <code>div</code> or <code>span</code> and the auro-header component will inherit the color. </p>

        <div className="demo--inline exampleWrapper">
          <div className="error--on-light">
            <auro-header level="3" display="700">There has been an error</auro-header>
          </div>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="error--on-light">
  <auro-header level="3" display="700">There has been an error</auro-header>
</div>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="600">Direct color use</auro-header>
        <p>If it's preferred not to wrap the header component in another element, use the <code>color</code> property to set the color value directly on the header element.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3" display="700" color="var(--auro-color-border-active-on-light)">On the journey together</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="3" display="700" color="var(--auro-color-border-active-on-light)">
  On the journey together
</auro-header>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="600">Classic environment support</auro-header>
        <p>One of the challenges of using a design system is coping with legacy CSS that surrounds the new component. While web components are encapsulated, things like <code>font-size</code> will pierce the shadow DOM. To help combat this, the <code>auro-header</code> component supports a <code>fixed</code> attribute. Setting <code>fixed</code> will over-ride the component&#39;s dependency on REM values and use pixel values instead. </p>

        <p>This feature should only to be used within environments where the REM values cannot be used. </p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3" display="700" fixed>On the journey together</auro-header>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-header level="3" display="700" fixed>
  On the journey together
</auro-header>`}
          </Highlight>
        </auro-accordion>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-header"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-header"
          code="https://github.com/AlaskaAirlines/auro-header/blob/master/src/auro-header.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroHeader;
