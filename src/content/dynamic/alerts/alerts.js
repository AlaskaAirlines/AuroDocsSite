import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';
// import buildStatus from '@alaskaairux/ods-button/docs/BUILD_STATUS.md'

class AuroAlerts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorText: null
    }
  };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-alerts'];

    return `@alaskaairux/auro-alerts: ${dependencies}`;
  };

  render() {
    return (
      <section id="alerts">

        <Nav />

        <auro-header level="2" display="display">Alerts</auro-header>

        <p>The <code>auro-alerts</code> component renders errors, warnings, and other inline notifications with automated styling elements. Simply add the attribute for the alert type. If you need to present multiple lines in the same alert wrapper, use <code>p</code> tags for each line. </p>

        <auro-header level="2" display="700">Alerts use cases</auro-header>

        <p>Use the <code>auro-alerts</code> element to render:</p>
        <ul>
          <li>Error messages</li>
          <li>Warning messages</li>
          <li>Informational messages</li>
        </ul>

        <auro-header level="2" display="700">Default alert</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts >This is a default error with no error type specified.</auro-alerts>
        </div>

        <auro-header level="2" display="700">Single-line alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts error>Transaction failed.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error>Transaction failed.</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Warning</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>Session timed out. Look for a confirmation email to verify your transaction.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning>Session timed out. Look for a confirmation email to verify your transaction.</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Information</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts information>You are confirmed on Flight 20 to Aruba.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts information>You are confirmed on Flight 20 to Aruba.</auro-alerts>`}
        </Highlight>

        <auro-header level="2" display="700">Multiline Alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error>
            <p>This is error message 1.</p>
            <p>This is error message 2.</p>
          </auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error>
  <p>This is error message 1.</p>
  <p>This is error message 2.</p>
</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Warning</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>
            <p>This is warning message 1.</p>
            <p>This is warning message 2.</p>
          </auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning>
  <p>This is warning message 1.</p>
  <p>This is warning message 2.</p>
</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Information</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts information>
            <p>This is information message 1.</p>
            <p>This is information message 2.</p>
          </auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts information>
  <p>This is information message 1.</p>
  <p>This is information message 2.</p>
</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">a11y Alerts</auro-header>

        <h3 className="auro_heading auro_heading--500">Hidden visually and from screen readers</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error hidden>This content will be hidden visually and from screen readers.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error hidden>This content will be hidden visually and from screen readers.</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Hidden visually</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will still pick it up.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will still pick it up.</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Hidden from screen readers</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts information hiddenAudible>This content will be hidden from screen readers.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts information hiddenAudible>This content will be hidden from screen readers.</auro-alerts>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-alerts"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-alerts"
          code="https://github.com/AlaskaAirlines/auro-alerts/blob/initialBuild/src/auro-alerts.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroAlerts;
