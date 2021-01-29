import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroInput extends Component {

  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Input</auro-header>

        <p>The <code>auro-input</code> custom element tot create basic single-line text fields. Supports type <code>text</code>, <code>password</code>, and <code>email</code> with validation, required input and error states.</p>

        <auro-header level="2" display="700">Default component</auro-header>

        <p>The default component supports the basic input <code>type="text"</code> structure. The <code>(optional)</code> label is provided to instruct the user that their input is not required.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input ></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input></auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>Use the <code>label</code> attribute to add content to the input label. Use the <code>helptext</code> attribute to add content under the input to assist the user with the type of input required. </p>

        <div className="demo--inline exampleWrapper">
          <auro-input label="Name" helptext="Please enter your full name"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input label="Name" helptext="Please enter your full name"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>Use the <code>required</code> attribute to enable input validation.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required label="Name" helptext="Please enter your full name"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input required label="Name" helptext="Please enter your full name"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>The default error return of <code>Please fill out this field</code> will be used if a custom <code>error</code> message is not added to the element on blur.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required label="Name" helptext="Please enter your full name" error="Please provide your full name."></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input required label="Name" helptext="Please enter your full name" error="Please provide your full name"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Password</auro-header>

        <p>Use the <code>type="password"</code> attribute for a password style input.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required type="password" label="Password" helptext="Please enter a secure password."></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input required type="password" label="Password" helptext="Please enter a secure password."></auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Email</auro-header>

        <p>Use the <code>type="email"</code> attribute for a email style input.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required type="email" label="Email address" helptext="Please enter your email address"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input required type="email" label="Email address" helptext="Please enter your email address"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Disabled</auro-header>

        <p>All use cases for auro-input support the <code>disabled</code> attribute.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input disabled required label="Address" helptext="Please enter your home address"></auro-input>
          <auro-input disabled required type="email" label="Email address" helptext="Please enter your email address"></auro-input>
          <auro-input disabled required type="password" label="Password" helptext="Please enter a secure password"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input disabled required label="Address" helptext="Please enter your home address"></auro-input>
<auro-input disabled required type="email" label="Email address" helptext="Please enter your email address"></auro-input>
<auro-input disabled required type="password" label="Password" helptext="Please enter a secure password"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Disable auto validation</auro-header>

        <p>For use cases where the field is <code>required</code>, but live validation is not wanted, use the <code>noValidate</code> attribute.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input noValidate required label="Address" helptext="Please enter your home address"></auro-input>
          <auro-input noValidate required type="email" label="Email address" helptext="Please enter your email address"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input noValidate required label="Address" helptext="Please enter your home address"></auro-input>
<auro-input noValidate required type="email" label="Email address" helptext="Please enter your email address"></auro-input>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroInput;
