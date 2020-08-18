import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';
// eslint-disable-next-line import/no-webpack-loader-syntax 
import LogoAS from '-!svg-react-loader!@alaskaairux/icons/dist/icons/logos/logo-AS.svg'; 

class AuroPopover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsBuildStatus: null
    }
  };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-popover'];

    return `@alaskaairux/auro-popover: ${dependencies}`;
  };


  render() {
    return (
      <section id="popovers">

        <Nav />

        <h2 className="auro_heading auro_heading--display">Popovers</h2>

        <p>The Auro Design System fully supports top and bottom-placement tooltips. The following examples illustrate common popover uses followed up by code examples.</p>
        <p>See <auro-hyperlink relative inline href="/components/auro/popover/install">install instructions</auro-hyperlink> for more information as how to install and full API for the <code>auro-popover</code> Auro base element.</p>
        <p>Illustrated in this example is a stand-alone use of <code>auro-popover</code>.</p>

        <h3 className="auro_heading auro_heading--800">Popover use cases</h3>

        <p>The <code>auro-popover</code> element should be used in situations where users may:</p>
        <ul>
          <li>hover over an element to get clarification</li>
          <li>provide definition to icons on hover</li>
          <li>when helper text is required for only desktop users</li>
        </ul>
        
        <h2 className="auro_heading auro_heading--700">All types</h2>

        <div className="demo--inline exampleWrapper">
          <auro-button id="button1">Test</auro-button>
          <auro-popover for="button1" placement="top">Test content!</auro-popover>
        </div>

        <Highlight className='html afterCode'>
          {`
            <auro-button id="button1">Test</auro-button>
            <auro-popover for="button1" placement="top"></auro-popover>
          `}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <LogoAS id="logo">Test</LogoAS>
          <auro-popover for="logo" placement="bottom">Other test content!</auro-popover>
        </div>

        <Highlight className='html afterCode'>
          {`
          <LogoEK id="logo">Test</LogoEK>
          <auro-popover for="logo" placement="bottom"></auro-popover>
          `}
        </Highlight>
      </section>
    );
  }
}

export default AuroPopover;
