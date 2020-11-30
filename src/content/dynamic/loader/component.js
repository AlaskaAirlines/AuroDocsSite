import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroLoader extends Component {

  // constructor(props) {
  //   super(props);
  // };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-loader'];

    return `@alaskaairux/auro-loader: ${dependencies}`;
  };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">auro-loader</auro-header>

        <p>Things take time. Some times we just need to take a second for some data to show up. For this Auro supports the <code>auro-loader</code> custom element. This powerful element supports multiple modes for use. </p>

        <p>
          <code>Ringworm</code>, <code>Orbit</code>, <code>Pulse</code>, and <code>Laser</code>.
        </p>

        <p>And each of these modes support five size settings.</p>

        <p><code>default</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code></p>

        <p>For color support <code>auro-loader</code> supports <code>currentColor</code>. This allows for any color set on the parent element to influence the color of the loader.</p>

        <p>The <code>auro-loader</code> custom element also supports three pre-defined color modes.</p>

        <p>
          <code>onlight</code>, <code>ondark</code> and <code>white</code>.
        </p>

        <auro-header level="2" display="700">Loader gallery</auro-header>
        <p>See below all the modes of loaders this element supports. </p>
        <div className="demo--inline exampleWrapper">
          <auro-loader ringworm md></auro-loader>
          <auro-loader orbit md></auro-loader>
          <auro-loader pulse md></auro-loader>
          <auro-loader laser></auro-loader>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-loader ringworm md></auro-loader>
<auro-loader orbit md></auro-loader>
<auro-loader pulse md></auro-loader>
<auro-loader laser></auro-loader>`}
        </Highlight>

        <auro-header level="2" display="700">Loader sizes</auro-header>
        <p>The auro-loader element supports a scale of sizes.</p>
        <div className="demo--inline exampleWrapper">
          <auro-loader ringworm></auro-loader>
          <auro-loader ringworm sm></auro-loader>
          <auro-loader ringworm md></auro-loader>
          <auro-loader ringworm lg></auro-loader>
          <auro-loader ringworm xl></auro-loader>
        </div>
        <Highlight className='html afterCode'>
          {`          <auro-loader ringworm></auro-loader>
<auro-loader ringworm sm></auro-loader>
<auro-loader ringworm md></auro-loader>
<auro-loader ringworm lg></auro-loader>
<auro-loader ringworm xl></auro-loader>`}
        </Highlight>

        <auro-header level="2" display="700">Color support</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-loader pulse onlight md></auro-loader>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-loader orbit onlight md></auro-loader>`}
        </Highlight>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-loader pulse ondark md></auro-loader>
          <auro-loader pulse white md></auro-loader>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-loader pulse ondark md></auro-loader>
<auro-loader pulse white md></auro-loader>`}
        </Highlight>

        <auro-header level="2" display="700">Custom color support</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-loader class="orange" ringworm md></auro-loader>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-loader class="orange" ringworm md></auro-loader>`}
        </Highlight>

        <auro-header level="2" display="700">Custom animation speed</auro-header>
        <p>
          The <code>auro-loader</code> custom element has a CSS shadow part included in it's API. Create a custom selector using <code>::part(element)</code> and easily adjust the <code>animation-duration</code> as seen in the examples below.
        </p>
        <div className="demo--inline exampleWrapper--ondark">
          {/* <auro-loader class="slow" white orbit sm></auro-loader> */}
          <auro-loader class="slow" ondark orbit lg></auro-loader>
          <auro-loader class="fast" white orbit xl></auro-loader>
        </div>
        <Highlight className='css'>
          {`.slow::part(element) {
  animation-duration: 8s;
}

.fast::part(element) {
  animation-duration: 3s;
}`}
        </Highlight>
        <Highlight className='html afterCode'>
          {`<auro-loader class="slow" ondark orbit lg></auro-loader>
<auro-loader class="fast" white orbit xl></auro-loader>`}
        </Highlight>


        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-loader"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-loader"
          code="https://github.com/AlaskaAirlines/auro-loader/blob/master/src/auro-loader.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroLoader;
