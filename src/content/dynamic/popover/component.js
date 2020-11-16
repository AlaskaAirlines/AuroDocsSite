import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';
// eslint-disable-next-line import/no-webpack-loader-syntax
import WiFi from '-!svg-react-loader!@alaskaairux/icons/dist/icons/in-flight/wifi.svg';

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

        <p>The Auro Design System fully supports top and bottom-placement popovers. The following examples illustrate common popover uses followed up by code examples.</p>
        <p>The auro-popover element is meant to be used when the interaction and it's content is passive. A popover is not to be used for cases where the user must adjust their focus and acknowledge the presented content. For these cases, please see the <auro-hyperlink href="/components/auro/dialog" relative>auro-dialog</auro-hyperlink> element.</p>
        <p>See <auro-hyperlink relative inline href="/components/auro/popover/install">install instructions</auro-hyperlink> for more information as how to install and full API for the <code>auro-popover</code> element.</p>

        <auro-header level="3" display="800">Popover use cases</auro-header>

        <p>The <code>auro-popover</code> element should be used in situations where users may:</p>
        <ul>
          <li>interact with an element to get clarification on content offering</li>
          <li>provide definition to iconic imagery</li>
          <li>when helper text is required</li>
        </ul>

        <p>Auro popover allows two ways to layout the HTML. Please see the following examples. </p>

        <auro-header level="3" display="700">Using slots, internal to component</auro-header>
        <p>In these examples the structure of the HTML uses the <code>slot</code> element to pull the trigger HTML into the scope of the outer shadow DOM element.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
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
            <auro-icon id="plugIcon" category="in-flight" name="plug" slot="trigger"></auro-icon>
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

// Using React component
<auro-popover for="wifiIcon">
  This flight offers WiFi service
  <WiFi id="wifiIcon" slot="trigger"/>
</auro-popover>

// Using auro-icon
<auro-popover for="plugIcon" placement="bottom">
  This flight offers seat power service
  <auro-icon id="plugIcon" category="in-flight" name="plug" slot="trigger"></auro-icon>
</auro-popover>

<auro-popover for="hyperlink">
  This is a link, but I think you already knew that.
  <auro-hyperlink id="hyperlink" href="#" slot="trigger">Hello world!</auro-hyperlink>
</auro-popover>
          `}
        </Highlight>


        <auro-header level="2" display="700">Using disconnected elements</auro-header>
        <p>In these examples the trigger can be external to the scope of the popover component allowing for a disconnected HTML structure.</p>

        <p>NOTE: The popover element is hidden visually, but not set ot <code>display: none</code> for accessibility reasons. This is important to know in this setup because the <code>auro-popover</code> element may take up physical space depending on your layout solution.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">

          <auro-button id="button3">Popover Test</auro-button>
          <auro-popover for="button3">Top popover content!</auro-popover>

          <auro-button id="button4">Popover Test</auro-button>
          <auro-popover for="button4" placement="bottom">bottom popover content!</auro-popover>

          <WiFi id="wifiIcon2" />
          <auro-popover for="wifiIcon2">This flight offers WiFi service</auro-popover>

          <auro-icon id="plugIcon2" category="in-flight" name="plug"></auro-icon>
          <auro-popover for="plugIcon2" placement="bottom">This flight offers seat power service</auro-popover>


          <auro-hyperlink id="hyperlink2" href="#">Hello world!</auro-hyperlink>
          <auro-popover for="hyperlink2">This is a link, but I think you already knew that.</auro-popover>

        </div>

        <Highlight className='html afterCode'>
          {`
<auro-popover for="button3">Top popover content!</auro-popover>
<auro-button id="button3">Popover Test</auro-button>

<auro-popover for="button4" placement="bottom">bottom popover content!</auro-popover>
<auro-button id="button4">Popover Test</auro-button>

// Using React component
<WiFi id="wifiIcon2" />
<auro-popover for="wifiIcon2">This flight offers WiFi service</auro-popover>

// Using auro-icon
<auro-icon id="plugIcon2" category="in-flight" name="plug"></auro-icon>
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
