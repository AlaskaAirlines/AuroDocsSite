import React, { Component } from "react";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import { Nav } from './nav';

class InputText extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-inputtext'];
    return `@alaskaairux/ods-inputtext: ${dependencies}`;
  };

  render() {
    return (
      <section id="inputtext">
        <Nav />

        <p class="content--deprecated">Deprecated: See <auro-hyperlink href="/components/auro/input" relative>auro-input</auro-hyperlink> for updated element use. </p>
        <h1 className="auro_heading auro_heading--display">ODS InputText</h1>

        <h2 className="auro_heading auro_heading--500">Basic use, required by default</h2>
        <div className="exampleWrapper">
          <ods-inputtext label="First name" helptext="Enter your first name" required id="firstName01"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" helptext="Enter your first name" required id="firstName01"></ods-inputtext>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--500">Preset value</h2>
        <div className="exampleWrapper">
          <ods-inputtext label="First name" value="James" helptext="Enter your first name" required id="firstName02"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" value="James" helptext="Enter your first name" required id="firstName02"></ods-inputtext>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--500">Optional</h2>
        <div className="exampleWrapper">
          <ods-inputtext label="Middle name" helptext="Enter your middle name" id="midddleName01"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext label="Middle name" helptext="Enter your middle name" id="midddleName01"></ods-inputtext>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--500">Required with email specific error feedback</h2>
        <div className="exampleWrapper">
          <ods-inputtext type="email" label="Email" required id="email01" helptext="Please enter your email address"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext type="email" label="Email" required id="email01" helptext="Please enter your email address"></ods-inputtext>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--500">Password</h2>
        <div className="exampleWrapper">
          <ods-inputtext type="password" label="Password" required id="password01" helptext="Please enter your password"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext type="password" label="Password" required id="password01" helptext="Please enter your password"></ods-inputtext>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--500">Disabled state</h2>
        <div className="exampleWrapper">
          <ods-inputtext label="First name" disabled required id="firstName03" helptext="Please enter your first name"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" disabled required id="firstName03" helptext="Please enter your first name"></ods-inputtext>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--500">Error state</h2>
        <div className="exampleWrapper">
          <ods-inputtext label="First name" value="James" error="This name already exists" required id="firstName04"></ods-inputtext>
        </div>
        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" value="James" error="This name already exists" required id="firstName04"></ods-inputtext>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/ods-inputtext"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-inputtext"
          code="https://github.com/AlaskaAirlines/ods-inputtext/blob/master/src/ods-inputtext.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default InputText;
