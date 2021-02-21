import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroAlerts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorText: null
    }
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
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts >This is a default error with no error type specified.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Single-line alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error>Transaction failed.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts error>Transaction failed.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Warning</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>Session timed out. Look for a confirmation email to verify your transaction.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts warning>Session timed out. Look for a confirmation email to verify your transaction.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Information</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts information>You are confirmed on Flight 20 to Aruba.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts information>You are confirmed on Flight 20 to Aruba.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Success</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts success>Your status with Flight 20 to Aruba had been updated.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts success>Your status with Flight 20 to Aruba had been updated.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Multiline Alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error>
            <p>This is error message 1.</p>
            <p>This is error message 2.</p>
          </auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts error>
  <p>This is error message 1.</p>
  <p>This is error message 2.</p>
</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Warning</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>
            <p>This is warning message 1.</p>
            <p>This is warning message 2.</p>
          </auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts warning>
  <p>This is warning message 1.</p>
  <p>This is warning message 2.</p>
</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Information</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts information>
            <p>This is information message 1.</p>
            <p>This is information message 2.</p>
          </auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts information>
  <p>This is information message 1.</p>
  <p>This is information message 2.</p>
</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Success</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts success>
            <p>This is success message 1.</p>
            <p>This is success message 2.</p>
          </auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts success>
  <p>This is success message 1.</p>
  <p>This is success message 2.</p>
</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">No icon alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts noIcon error>Transaction failed.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts noIcon error>Transaction failed.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Warning</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts noIcon warning>Session timed out. Look for a confirmation email to verify your transaction.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts noIcon warning>Session timed out. Look for a confirmation email to verify your transaction.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Information</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts noIcon information>You are confirmed on Flight 20 to Aruba.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts noIcon information>You are confirmed on Flight 20 to Aruba.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Success</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts noIcon success>Your status with Flight 20 to Aruba had been updated.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts noIcon success>Your status with Flight 20 to Aruba had been updated.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="700">Fixed pixels</auro-header>

        <p>There are scenarios where the styles of a component do not appear as intended due to a dependency on <code>16px</code> root font size. In order to address this, use the <code>fixed</code> feature to update the default <code>REM</code> values with fixed <code>px</code> values.</p>

        <div className="demo--inline exampleWrapper">
          <auro-alerts warning fixed>This is warning message</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts warning fixed>This is warning message</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="700">a11y Alerts</auro-header>

        <auro-header level="3" display="500">Hidden visually and from screen readers</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error hidden>This content will be hidden visually and from screen readers.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts error hidden>This content will be hidden visually and from screen readers.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Hidden visually</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will still pick it up.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will still pick it up.</auro-alerts>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="3" display="500">Hidden from screen readers</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts information hiddenAudible>This content will be hidden from screen readers.</auro-alerts>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-alerts information hiddenAudible>This content will be hidden from screen readers.</auro-alerts>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroAlerts;
