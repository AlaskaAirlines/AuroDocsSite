import React, { Component } from "react";
import "@alaskaairux/ods-inputtext";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';

class InputText extends Component {

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-inputtext'];
    return `@alaskaairux/ods-inputtext: ${dependencies}`;
  };

  render() {
    return (
      <section id="inputtext">

        <LinkIcons
          github="https://github.com/AlaskaAirlines/ods-inputtext"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-inputtext"
          code="https://github.com/AlaskaAirlines/ods-inputtext/blob/master/src/ods-inputtext.js"
          version={this.showVersion()}
        />
        <h1 className="auro_heading auro_heading--display">ODS InputText</h1>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>InputText provides users a way to enter data into a form. The following examples illustrate common inputtext uses followed up by code examples.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-inputtext" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-inputtext</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-inputtext</code>.</p>
        </div>

        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-inputtext`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-inputtext label="First name" helptext="Enter your first name" required></ods-inputtext>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" helptext="Enter your first name" required></ods-inputtext>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-inputtext label="First name" value="Alaska" required></ods-inputtext>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" value="Alaska" required></ods-inputtext>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-inputtext label="First name"></ods-inputtext>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name"></ods-inputtext>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-inputtext type="email" label="Email" required></ods-inputtext>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-inputtext type="email" label="Email" required></ods-inputtext>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-inputtext label="First name" disabled required></ods-inputtext>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" disabled required></ods-inputtext>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-inputtext label="First name" value="Alaska" error="This name already exists" required></ods-inputtext>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-inputtext label="First name" value="Alaska" error="This name already exists" required></ods-inputtext>`}
        </Highlight>
      </section>
    );
  }
}

export default InputText;
