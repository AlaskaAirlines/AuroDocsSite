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

        <h2 className="auro_heading auro_heading--display">Alerts</h2>

        <p>The <code>auro-alerts</code> component is a simple component for rendering notifications for errors, warnings, and information without having to worry about styling. Simply add the attribute for the type of alert you want and use <code>p</code> tags for each line if you need multiple lines in the alert. </p>

        <h2 className="auro_heading auro_heading--700">Alerts use cases</h2>

        <p>The <code>auro-alerts</code> element should be used in situations where users may:</p>
        <ul>
          <li>Show error messages</li>
          <li>Show warning messages</li>
          <li>Show informational messages</li>
        </ul>

        <h2 className="auro_heading auro_heading--700">Single Line Alerts</h2>

        <h3 className="auro_heading auro_heading--500">Error</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error>There is an error ... check that out</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error>There is an error ... check that out</auro-alerts>`}
        </Highlight>

        <h3 className="auro_heading auro_heading--500">Warning</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning>Hey, there is something wrong, but it's ok</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning>Hey, there is something wrong, but it's ok</auro-alerts>`}
        </Highlight>

        <h3 className="auro_heading auro_heading--500">Information</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts information>Just letting you know, don't look in your closet.</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts information>Just letting you know, don't look in your closet.</auro-alerts>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">Multi Line Alerts</h2>

        <h3 className="auro_heading auro_heading--500">Error</h3>
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

        <h3 className="auro_heading auro_heading--500">Warning</h3>
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

        <h3 className="auro_heading auro_heading--500">Information</h3>
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

        <h2 className="auro_heading auro_heading--700">a11y Alerts</h2>

        <h3 className="auro_heading auro_heading--500">Hidden Visually and From Screen Readers</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts error hidden>This content will be hidden visually and from screen readers</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts error hidden>This content will be hidden visually and from screen readers</auro-alerts>`}
        </Highlight>

        <h3 className="auro_heading auro_heading--500">Hidden Visually</h3>
        <div className="demo--inline exampleWrapper">
          <auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will pick it up..</auro-alerts>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-alerts warning hiddenVisually>This content will be hidden visually, but screen readers will pick it up..</auro-alerts>`}
        </Highlight>

        <h3 className="auro_heading auro_heading--500">Hidden From Screen Readers</h3>
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
