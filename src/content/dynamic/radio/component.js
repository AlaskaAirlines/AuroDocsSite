import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroRadioButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorText: null
    }
  };

  render() {
    return (
      <section id="buttons">

        <Nav />

        <h2 className="auro_heading auro_heading--display">Radio input type</h2>

        <p>The auro-radio component is rendered as a small circle, which is filled or highlighted when selected. Only one auro-radio component in a given radio-button-group can be selected at the same time.</p>

        <h2 className="auro_heading auro_heading--700">Radio button with label</h2>

        <p>The auro-radio component is designed to be a single component for the use of creating an input type radio with an associated label that meets all use case and accessibility standards.</p>

        <blockquote>
          Note: The examples below illustrate a single placed radio button, but any use of a radio button does require the <code>auro-radio-group</code> tags.
        </blockquote>

        <h3 className="auro_heading auro_heading--500">Default radio button</h3>
        <div className="demo--inline exampleWrapper">
          <auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio id="radio1" label="Yes" name="radioDemo" value="yes"></auro-radio>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Checked</h3>
        <div className="demo--inline exampleWrapper">
          <auro-radio id="radio2" label="No" name="radioDemo" value="no" checked="true"></auro-radio>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio id="radio2" label="No" name="radioDemo" value="no" checked="true"></auro-radio>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Error</h3>
        <div className="demo--inline exampleWrapper">
          <auro-radio id="radio3" label="Oops" name="radioDemo" value="oops" error></auro-radio>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio id="radio3" label="Oops" name="radioDemo" value="oops" error></auro-radio>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Disabled</h3>
        <div className="demo--inline exampleWrapper">
          <auro-radio id="radio3" label="Nope" name="radioDemo" value="nope" disabled></auro-radio>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio id="radio3" label="Nope" name="radioDemo" value="nope" disabled></auro-radio>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Radio button group</h3>
        <p>The auro-radio component is designed to work in concert with the auro-radio-group component. </p>

        <blockquote>
          Note: the use of the <code>slot="legend"</code> is required. This slot will populate the <code>fieldset</code>'s <code>legend</code> element. Ignoring this part of the API will break necessary accessibility features.
        </blockquote>

        <div className="demo--inline exampleWrapper">
          <auro-radio-group required>
            <span slot="legend">Form label goes here</span>
            <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
            <auro-radio id="radio11" label="No" name="radioDemoA" value="no"></auro-radio>
            <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
          </auro-radio-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio-group required>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
  <auro-radio id="radio11" label="No" name="radioDemoA" value="no"></auro-radio>
  <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
</auro-radio-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Disabled radio group</h3>
        <p>The auro-checkbox component is designed to work in concert with the auro-checkbox-group component and supports a whole-group <code>disabled</code> mode.</p>

        <div className="demo--inline exampleWrapper">
          <auro-radio-group disabled>
            <span slot="legend">Form label goes here</span>
            <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
            <auro-radio id="radio11" label="No" name="radioDemoA" value="no" checked></auro-radio>
            <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
          </auro-radio-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio-group disabled>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
  <auro-radio id="radio11" label="No" name="radioDemoA" value="no" checked></auro-radio>
  <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
</auro-radio-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Disabled radio inputs </h3>
        <p>The auro-checkbox supports individual <code>disabled</code> inputs. </p>
        <div className="demo--inline exampleWrapper">
          <auro-radio-group required>
            <span slot="legend">Form label goes here</span>
            <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
            <auro-radio id="radio11" label="No" name="radioDemoA" value="no" disabled></auro-radio>
            <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
          </auro-radio-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio-group required>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
  <auro-radio id="radio11" label="No" name="radioDemoA" value="no" disabled></auro-radio>
  <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
</auro-radio-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Radio group with error</h3>
        <p>The auro-radio component is designed to work in concert with the auro-radio-group component. </p>
        <div className="demo--inline exampleWrapper">
          <auro-radio-group required error="This is an error message">
            <span slot="legend">Form label goes here</span>
            <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
            <auro-radio id="radio11" label="No" name="radioDemoA" value="no" checked></auro-radio>
            <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
          </auro-radio-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio-group required error="This is an error message">
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
  <auro-radio id="radio11" label="No" name="radioDemoA" value="no" checked></auro-radio>
  <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
</auro-radio-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Horizontal radio group</h3>
        <p>Using the <code>horizontal</code> attribute will render the checkbox options on a horizontal line.</p>
        <div className="demo--inline exampleWrapper">
        <auro-radio-group horizontal required>
          <span slot="legend">Form label goes here</span>
          <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
          <auro-radio id="radio11" label="No" name="radioDemoA" value="no"></auro-radio>
          <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
        </auro-radio-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-radio-group horizontal required>
  <span slot="legend">Form label goes here</span>
  <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
  <auro-radio id="radio11" label="No" name="radioDemoA" value="no"></auro-radio>
  <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
</auro-radio-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Horizontal radio group limitation</h3>
        <p>Using the <code>horizontal</code> attribute has a limit of 3 options. Beyond three, options will be listed in vertically. </p>
        <div className="demo--inline exampleWrapper">
          <auro-radio-group horizontal required>
            <span slot="legend">Form label goes here</span>
            <auro-radio id="radio10" label="Yes" name="radioDemoA" value="yes"></auro-radio>
            <auro-radio id="radio11" label="No" name="radioDemoA" value="no"></auro-radio>
            <auro-radio id="radio12" label="Maybe" name="radioDemoA" value="maybe"></auro-radio>
            <auro-radio id="radio13" label="Someday" name="radioDemoA" value="someday"></auro-radio>
            <auro-radio id="radio14" label="Is this a test?" name="radioDemoA" value="is this a test"></auro-radio>
          </auro-radio-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group horizontal>
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option One</auro-checkbox>
  <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option Two</auro-checkbox>
  <auro-checkbox id="optionThree" name="exampleOptions" value="option two">Option Three</auro-checkbox>
  <auro-checkbox id="optionFour" name="exampleOptions" value="option Four">Option Three</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroRadioButton;
