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

        <p>The <code>auro-alerts</code> component is a simple component for rendering notifications for errors, warnings, and information without having to worry about styling. Simply add the attribute for the type of alert you want and use <code>p</code> tags for each line if you need multiple lines in the alert. </p>

        <auro-header level="2" display="700">Alerts use cases</auro-header>

        <p>The <code>auro-alerts</code> element should be used in situations where users may:</p>
        <ul>
          <li>Show error messages</li>
          <li>Show warning messages</li>
          <li>Show informational messages</li>
        </ul>

        <auro-header level="2" display="700">Default Alert</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts >Default error with no error type</auro-alerts>
        </div>

        <auro-header level="2" display="700">Single Line Alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts error>There is an error ... check that out</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error>There is an error ... check that out</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Warning</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>This is a warning, something is wrong, but it's ok</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning>Hey, there is something wrong, but it's ok</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Information</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts information>Some helpful information, don't look in your closet.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts information>Just letting you know, don't look in your closet.</auro-alerts>`}
        </Highlight>

        <auro-header level="2" display="700">Multiline Alerts</auro-header>

        <auro-header level="3" display="500">Error</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error>
            <p>This is error message 1</p>
            <p>This is error message 2</p>
          </auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error>
  <p>This is error message 1</p>
  <p>This is error message 2</p>
</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Warning</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>
            <p>This is warning message 1</p>
            <p>This is warning message 2</p>
          </auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning>
  <p>This is warning message 1</p>
  <p>This is warning message 2</p>
</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Information</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-alerts information>
            <p>This is information message 1</p>
            <p>This is information message 2</p>
          </auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts information>
  <p>This is information message 1</p>
  <p>This is information message 2</p>
</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">a11y Alerts</auro-header>

        <h3 className="auro_heading auro_heading--500">Hidden Visually and From Screen Readers</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error hidden>This content will be hidden visually and from screen readers</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error hidden>This content will be hidden visually and from screen readers</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Hidden Visually</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will pick it up..</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will pick it up..</auro-alerts>`}
        </Highlight>

        <auro-header level="3" display="500">Hidden From Screen Readers</auro-header>
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
