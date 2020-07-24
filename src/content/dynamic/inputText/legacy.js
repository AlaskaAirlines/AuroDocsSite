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

        <h1 className="auro_heading auro_heading--display">ODS InputText</h1>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>InputText provides users a way to enter data into a form. The following examples illustrate common inputtext uses followed up by code examples.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-inputtext" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-inputtext</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-inputtext</code>.</p>
        </div>

        <h2 className="auro_heading auro_heading--700">Install</h2>

        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-inputtext`}
        </Highlight>

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
