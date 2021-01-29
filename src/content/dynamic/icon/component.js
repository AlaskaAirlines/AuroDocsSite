import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroIcon extends Component {

  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Icon</auro-header>

        <auro-alerts information>NOTICE: auro-icon v3.0 is a breaking change and support for the Alaska Airlines logo has been moved to the new <auro-hyperlink href="/components/auro/icon/alaska" relative>auro-alaska</auro-hyperlink> custom element. </auro-alerts>

        <p>Icons can be used to represent concepts or provide context to options and/or actions within an experience.</p>
        <p>The <code>auro-icon</code> web component comes pre-configured with all the available <auro-hyperlink href="/icons/usage" relative>Auro Icons</auro-hyperlink>. Simply add the <code>category</code> and <code>name</code> of the icon for quick and easy results.</p>

        <auro-header level="2" display="700">Default component</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-icon category="terminal" name="plane-diag-fill"></auro-icon>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Default component with a11y description</auro-header>
        <p>If assistive technologies are needed to read back a description of the icon, simply add content within the element that will be hidden from view, but read back by screen readers.</p>
        <div className="demo--inline exampleWrapper">
          <auro-icon category="terminal" name="plane-diag-fill">Icon: plane-diag-fill</auro-icon>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-icon category="terminal" name="plane-diag-fill">Icon: plane-diag-fill</auro-icon>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Icons illustrating visual state</auro-header>
        <p>Mono-color icons support the following attributes to illustrate visual state. The <code>primary</code> attribute is assigned by default. Other attributes, <code>emphasis</code>, <code>accent</code>, <code>disabled</code>, <code>error</code>, <code>success</code>, and <code>advisory</code> are available.</p>
        <p>See the <auro-hyperlink href="/components/auro/icon/api" relative>API</auro-hyperlink>for details and use cases.</p>
        <div className="demo--inline exampleWrapper">
          <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" emphasis></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" accent></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" disabled></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" error></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" advisory></auro-icon>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" emphasis></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" accent></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" disabled></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" error></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" advisory></auro-icon>`}
          </Highlight>
        </auro-accordion>
        <p>All compatible with <code>ondark</code> attribute.</p>
        <div className="demo--inline exampleWrapper--ondark">
          <auro-icon category="terminal" name="plane-diag-fill" ondark></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" emphasis ondark></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" accent ondark></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" disabled ondark></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" error ondark></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" success ondark></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" advisory ondark></auro-icon>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-icon category="terminal" name="plane-diag-fill" ondark></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" emphasis ondark></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" accent ondark></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" disabled ondark></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" error ondark></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" success ondark></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" advisory ondark></auro-icon>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Custom color</auro-header>
        <p>The auro-icon by default apply the <code>primary</code> selector for color application. This can be over written using the defined API listed above. Custom colors are also allowed when using the <code>customColor</code> attribute and a parent element with a color setting.</p>

        <div className="demo--inline exampleWrapper">
          <span style={{color: 'orange'}}>
            <auro-icon category="terminal" name="plane-diag-fill" customColor></auro-icon>
          </span>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<span style={{color: 'orange'}}>
  <auro-icon category="terminal" name="plane-diag-fill" customColor></auro-icon>
</span>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Custom size</auro-header>
        <p>Auro icon's by default are set to the value of the <code>--auro-size-lg</code> token. To customize the icon size, add the <code>customSize</code> attribute and adjust the <code>width</code> of the parent element. </p>

        <div className="demo--inline exampleWrapper">
          <div style={{width: '30rem'}}>
            <auro-icon category="terminal" name="plane-diag-fill" success customSize></auro-icon>
          </div>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div style={{width: 30rem;}}>
  <auro-icon category="terminal" name="plane-diag-fill" success customSize></auro-icon>
</div>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroIcon;
