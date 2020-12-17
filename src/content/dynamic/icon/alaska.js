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

        <auro-header level="2" display="display">Alaska</auro-header>

        <p>The auro-alaska custom element is more than just an easy-to-use placement of the official logo, but it also comes with automation that will produce the proper version of the logo depending on the size of the parent container. </p>

        <auro-header level="3" display="500">Install</auro-header>
        <pre><code className="html hljs">import "@alaskaairux/auro-icon/dist/auro-alaska";</code></pre>

        <auro-header level="2" display="700">Default component</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alaska style={{width: '192px'}}></auro-alaska>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-alaska style={{width: '192px'}}></auro-alaska>`}
        </Highlight>

        <p>Example with the <code>onDark</code> property.</p>
        <div className="demo--inline exampleWrapper--ondark">
          <auro-alaska style={{width: '192px'}} onDark></auro-alaska>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-alaska style={{width: '192px'}} onDark></auro-alaska>`}
        </Highlight>

        <auro-header level="2" display="700">Official logo with tagline</auro-header>
        <p>Using the <code>official</code> property will display the Alaska Airlines logo with the official tagline.</p>
        <div className="demo--inline exampleWrapper">
          <auro-alaska style={{width: '192px'}} official></auro-alaska>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-alaska style={{width: '192px'}} official></auro-alaska>`}
        </Highlight>

        <p>Example with the <code>onDark</code> property.</p>
        <div className="demo--inline exampleWrapper--ondark">
          <auro-alaska style={{width: '192px'}} onDark official></auro-alaska>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-alaska style={{width: '192px'}} onDark official></auro-alaska>`}
        </Highlight>

        <auro-header level="2" display="700">Auto scale support</auro-header>
        <p>The Alaska Airline logo has a preferred version of the logo depending in the size of the rendering. The auro-alaska custom element is auto-aware and will display the proper version of the logo depending on the size of the container automatically.</p>
        <div className="demo--inline exampleWrapper">
          <auro-alaska style={{width: '72px'}}></auro-alaska><br/>
          <auro-alaska style={{width: '108px'}}></auro-alaska><br/>
          <auro-alaska style={{width: '192px'}}></auro-alaska><br/>
          <auro-alaska style={{width: '528px'}}></auro-alaska>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-alaska style={{width: '72px'}}></auro-alaska>
<auro-alaska style={{width: '108px'}}></auro-alaska>
<auro-alaska style={{width: '192px'}}></auro-alaska>
<auro-alaska style={{width: '528px'}}></auro-alaska>`}
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
