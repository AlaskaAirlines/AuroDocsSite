import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroIcon extends Component {

  // constructor(props) {
  //   super(props);
  // };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-icon'];

    return `@alaskaairux/auro-icon: ${dependencies}`;
  };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Icon</auro-header>

        <p>Icons can be used to represent concepts or provide context to options and/or actions within an experience.</p>
        <p>The <code>auro-icon</code> web component comes pre-configured with all the available <auro-hyperlink href="/icons/usage" relative>Auro Icons</auro-hyperlink>. Simply add the <code>category</code> and <code>name</code> of the icon for quick and easy results.</p>

        <auro-header level="2" display="700">Default component</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-icon category="terminal" name="plane-diag-fill"></auro-icon>`}
        </Highlight>

        <auro-header level="2" display="700">Default component with a11y test</auro-header>
        <p>If assistive technologies are needed to read back a description of the icon, simply add content within the element that will be hidden from view, but read back by screen readers.</p>
        <div className="demo--inline exampleWrapper">
          <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-icon category="terminal" name="plane-diag-fill">Icon: plane-diag-fill</auro-icon>`}
        </Highlight>

        <auro-header level="2" display="700">Icons illustrating visual state</auro-header>
        <p>Mono-color icons support the following attributes to illustrate visual state. Primary, emphasis, accent, disabled, error, success, and advisory.</p>
        <p>See the <auro-hyperlink href="/components/auro/icon/api" relative>API</auro-hyperlink>for details and use cases.</p>
        <div className="demo--inline exampleWrapper">
          <auro-icon category="terminal" name="plane-diag-fill" primary></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" emphasis></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" accent></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" disabled></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" error></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
          <auro-icon category="terminal" name="plane-diag-fill" advisory></auro-icon>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-icon category="terminal" name="plane-diag-fill" primary></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" emphasis></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" accent></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" disabled></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" error></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
<auro-icon category="terminal" name="plane-diag-fill" advisory></auro-icon>`}
        </Highlight>

        <auro-header level="2" display="700">Custom color</auro-header>
        <p>Auro icon's by default inherit their color from the parent element. The auro-icon web component is no different. If there is a need to color an icon other than the pre-defined uses, simply address the <code>color</code> CSS property in a parent element.</p>

        <div className="demo--inline exampleWrapper">
          <span className="orange">
            <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
          </span>
        </div>
        <Highlight className='html afterCode'>
          {`<span className="orange">
  <auro-icon category="terminal" name="plane-diag-fill"></auro-icon>
</span>`}
        </Highlight>

        <auro-header level="2" display="700">Custom size</auro-header>
        <p>Auro icon's by default are set to the value of the <code>--auro-size-lg</code> token. To customize your icon's size if needed, simply create a new CSS selector for the parent element and redefine its value. </p>

        <div className="demo--inline exampleWrapper">
          <span className="customIconSize">
            <auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
          </span>
        </div>
        <Highlight className='html afterCode'>
          {`.customIconSize {
  --auro-size-lg: 10rem;
}

<span className="customIconSize">
  <auro-icon category="terminal" name="plane-diag-fill" success></auro-icon>
</span>`}
        </Highlight>


        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-icon"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-icon"
          code="https://github.com/AlaskaAirlines/auro-icon/blob/master/src/auro-icon.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroIcon;
