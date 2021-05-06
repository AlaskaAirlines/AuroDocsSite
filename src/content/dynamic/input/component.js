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

        <p>Use the <code>auro-input</code> custom element to create basic single-line text fields. Supports type <code>text</code>, <code>password</code>, and <code>email</code> with validation, required input and error states.</p>

        <auro-header level="2" display="700">Default component</auro-header>

        <p>The default component supports the basic input <code>type="text"</code> structure. The <code>(optional)</code> label is provided to instruct the user that their input is not required.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input id="demo"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`/* For accessibility, always be sure to address the ID attribute  */
<auro-input id="demo"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>Use the <code>label</code> attribute to add content to the input label. Use the <code>helptext</code> attribute to add content under the input to assist the user with the type of input required. </p>

        <div className="demo--inline exampleWrapper">
          <auro-input label="Name" id="full-name" helptext="Please enter your full name"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input label="Name" id="full-name" helptext="Please enter your full name"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>Use the <code>required</code> attribute to enable input validation.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required label="Name" id="full-name" helptext="Please enter your full name"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input required label="Name" id="full-name" helptext="Please enter your full name"></auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>The default error return of <code>Please fill out this field</code> will be used if a custom <code>error</code> message is not added to the element on blur.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required label="Name" id="full-name" helptext="Please enter your full name" error="Please provide your full name."></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input
  required
  label="Name"
  id="full-name"
  helptext="Please enter your full name"
  error="Please provide your full name">
</auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Password</auro-header>

        <p>Use the <code>type="password"</code> attribute for a password style input.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required type="password" id="password" label="Password" helptext="Please enter a secure password."></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input
  required
  type="password"
  id="password"
  label="Password"
  helptext="Please enter a secure password.">
</auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Email</auro-header>

        <p>Use the <code>type="email"</code> attribute for a email style input.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input required type="email" label="Email address" id="email-address" helptext="Please enter your email address"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input
  required
  type="email"
  label="Email address"
  id="email-address"
  helptext="Please enter your email address">
</auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Credit Card</auro-header>

        <p>Use the <code>type="credit-card"</code> attribute for a credit card formatted input.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input type="credit-card" label="Card number" id="credit-card" helptext="Please enter your credit card number" required></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input
  type="credit-card"
  label="Card number"
  id="credit-card"
  helptext="Please enter your credit card number"
  required>
</auro-input>`}
          </Highlight>
        </auro-accordion>

        <p>Use the <code>type="credit-card"</code> and <code>icon</code> attributes for a credit card formatted input with credit card icon support.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input type="credit-card" label="Card number" id="credit-card" helptext="Please enter your credit card number" required icon></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`// Use 4147 3411 1111 1111 to see the Alaska Airline's credit card!
<auro-input
  type="credit-card"
  label="Card number"
  id="credit-card"
  helptext="Please enter your credit card number"
  required
  icon>
</auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Disabled</auro-header>

        <p>All use cases for auro-input support the <code>disabled</code> attribute.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input disabled required label="Address" id="address" helptext="Please enter your home address"></auro-input>
          <auro-input disabled required type="email" id="email-address" label="Email address" helptext="Please enter your email address"></auro-input>
          <auro-input disabled required type="password" id="password" label="Password" helptext="Please enter a secure password"></auro-input>
          <auro-input disabled required type="credit-card" id="credit-card" label="Card number" helptext="Please enter your credit card number"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input
  disabled
  required
  label="Address"
  id="address"
  helptext="Please enter your home address">
</auro-input>

<auro-input
  disabled
  required
  type="email"
  id="email-address"
  label="Email address"
  helptext="Please enter your email address">
</auro-input>

<auro-input
  disabled
  required
  type="password"
  id="password"
  label="Password"
  helptext="Please enter a secure password">
</auro-input>

<auro-input
  disabled
  required
  type="credit-card"
  id="credit-card"
  label="Card number"
  helptext="Please enter your credit card number">
</auro-input>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Disable auto validation</auro-header>

        <p>For use cases where the field is <code>required</code>, but live validation is not wanted, use the <code>noValidate</code> attribute.</p>

        <div className="demo--inline exampleWrapper">
          <auro-input noValidate required label="Address" id="address" helptext="Please enter your home address"></auro-input>
          <auro-input noValidate required type="email" id="email-address" label="Email address" helptext="Please enter your email address"></auro-input>
          <auro-input noValidate required type="credit-card" id="credit-card" label="Card number" helptext="Please enter your credit card number"></auro-input>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-input
  noValidate
  required
  label="Address"
  id="address"
  helptext="Please enter your home address">
</auro-input>

<auro-input
  noValidate
  required
  type="email"
  id="email-address"
  label="Email address"
  helptext="Please enter your email address">
</auro-input>

<auro-input
  noValidate
  required
  type="credit-card"
  id="credit-card"
  label="Card number"
  helptext="Please enter your credit card number">
</auro-input>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroInput;
