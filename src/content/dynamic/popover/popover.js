import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import WiFi from '-!svg-react-loader!@alaskaairux/icons/dist/icons/in-flight/wifi.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Plug from '-!svg-react-loader!@alaskaairux/icons/dist/icons/in-flight/plug.svg';

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

        <auro-header level="2" display="display">Popovers</auro-header>

        <p>The Auro Design System fully supports top and bottom-placement tooltips. The following examples illustrate common popover uses followed up by code examples.</p>
        <p>See <auro-hyperlink relative inline href="/components/auro/popover/install">install instructions</auro-hyperlink> for more information as how to install and full API for the <code>auro-popover</code> Auro base element.</p>
        <p>Illustrated in this example is a stand-alone use of <code>auro-popover</code>.</p>

        <auro-header level="3" display="800">Popover use cases</auro-header>

        <p>The <code>auro-popover</code> element should be used in situations where users may:</p>
        <ul>
          <li>hover over an element to get clarification</li>
          <li>provide definition to icons on hover</li>
          <li>when helper text is required for only desktop users</li>
        </ul>

        <p>Auro popover allows two ways to layout the HTML. Please see the following examples. </p>

        <auro-header level="3" display="700">Using slots, internal to component</auro-header>
        <p>In these examples the structure of the HTML uses the <code>slot</code> element to pull the trigger HTML into the scope of the outer shadow DOM element.</p>

        <div className="demo--inline exampleWrapper">
          <auro-popover for="button1">
            Top popover content!
            <auro-button id="button1" slot="trigger">Popover Test</auro-button>
          </auro-popover>

          <auro-popover for="button2" placement="bottom">
            Bottom popover content!
            <auro-button id="button2" slot="trigger">Popover Test</auro-button>
          </auro-popover>

          <auro-popover for="wifiIcon">
            This flight offers WiFi service
            <WiFi id="wifiIcon" slot="trigger"/>
          </auro-popover>

          <auro-popover for="plugIcon" placement="bottom">
            This flight offers seat power service
            <Plug id="plugIcon" slot="trigger"/>
          </auro-popover>

          <auro-popover for="hyperlink">
            This is a link, but I think you already knew that.
            <auro-hyperlink id="hyperlink" href="#" slot="trigger">Hello world!</auro-hyperlink>
          </auro-popover>
        </div>

        <Highlight className='html afterCode'>
          {`
<auro-popover for="button1">
  Top popover content!
  <auro-button id="button1" slot="trigger">Popover Test</auro-button>
</auro-popover>

<auro-popover for="button2" placement="bottom">
  Bottom popover content!
  <auro-button id="button2" slot="trigger">Popover Test</auro-button>
</auro-popover>

<auro-popover for="wifiIcon">
  This flight offers WiFi service
  <WiFi id="wifiIcon" slot="trigger"/>
</auro-popover>

<auro-popover for="plugIcon" placement="bottom">
  This flight offers seat power service
  <Plug id="plugIcon" slot="trigger"/>
</auro-popover>

<auro-popover for="hyperlink">
  This is a link, but I think you already knew that.
  <auro-hyperlink id="hyperlink" href="#" slot="trigger">Hello world!</auro-hyperlink>
</auro-popover>
          `}
        </Highlight>

        <auro-header level="2" display="700">Using disconnected elements</auro-header>
        <p>In these examples the trigger can be external to the scope of the popover component allowing for a disconnected HTML structure. </p>

        <div className="demo--inline exampleWrapper">
          <auro-popover for="button3">Top popover content!</auro-popover>
          <auro-button id="button3">Popover Test</auro-button>

          <auro-popover for="button4" placement="bottom">bottom popover content!</auro-popover>
          <auro-button id="button4">Popover Test</auro-button>

          <WiFi id="wifiIcon2" />
          <auro-popover for="wifiIcon2">This flight offers WiFi service</auro-popover>

          <Plug id="plugIcon2" />
          <auro-popover for="plugIcon2" placement="bottom">This flight offers seat power service</auro-popover>

          <auro-popover for="hyperlink2">This is a link, but I think you already knew that.</auro-popover>
          <auro-hyperlink id="hyperlink2" href="#">Hello world!</auro-hyperlink>

        </div>

        <Highlight className='html afterCode'>
          {`
<auro-popover for="button3">Top popover content!</auro-popover>
<auro-button id="button3">Popover Test</auro-button>

<auro-popover for="button4" placement="bottom">bottom popover content!</auro-popover>
<auro-button id="button4">Popover Test</auro-button>

<WiFi id="wifiIcon2" />
<auro-popover for="wifiIcon2">This flight offers WiFi service</auro-popover>

<Plug id="plugIcon2" />
<auro-popover for="plugIcon2" placement="bottom">This flight offers seat power service</auro-popover>

<auro-popover for="hyperlink2">This is a link, but I think you already knew that.</auro-popover>
<auro-hyperlink id="hyperlink2" href="#">Hello world!</auro-hyperlink>
          `}
        </Highlight>

        <p>Please reference <auro-hyperlink relative href="/icons/install">Auro Icons install instructions</auro-hyperlink>for more info on using icons.</p>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-popover"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-popover"
          code="https://github.com/AlaskaAirlines/auro-popover/blob/initialBuild/src/auro-popover.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroPopover;