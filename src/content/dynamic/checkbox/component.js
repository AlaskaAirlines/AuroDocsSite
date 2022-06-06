import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroCheckbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorText: null
    }
  };

  componentDidMount() {
    // test for event listening
    document.getElementById('unchecked').addEventListener('change', function() { console.log('change event fired') });
    document.getElementById('unchecked').addEventListener('input', function() { console.log('input event fired') });
  }

  test = () => {
    const requiredGroup = document.getElementById('required');

    if (requiredGroup.getAttribute('required')) {
      const cboxes = document.getElementsByName('favThings');
      let required = false;
      let requiredList = [];

      for (let i = 0; i < cboxes.length; i++) {
        if (cboxes[i].checked) {
          required = true;
          requiredList.push(cboxes[i].value);
        }
      }

      if (!required) {
        this.setState({errorText : 'Sorry, you forgot to select a favorite thing.'})
      } else {
        this.setState({errorText : null})
        console.log(`${requiredList} ... these are a few of my favorite things`)
      }
    }
  }

  render() {
    return (
      <section id="buttons">

        <Nav />

        <h2 className="auro_heading auro_heading--display">Checkbox input type</h2>

        <p>Auro component type checkbox is rendered by default as styled boxes that are checked (ticked) when activated. A checkbox allows you to select single values for submission in a form (or not).</p>

        <h2 className="auro_heading auro_heading--700">Checkbox with label</h2>

        <p>The auro-checkbox component is designed to be a single component for the use of creating an input type checkbox with an associated lable that meets all use case and accessibility standards.</p>

        <h3 className="auro_heading auro_heading--500">Default checkbox</h3>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox id="unchecked" name="exampleOption" value="example checked option">Checkbox option</auro-checkbox>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox id="unchecked" name="exampleOption" value="example checked option">Checkbox option</auro-checkbox>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Checked</h3>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox id="checked" name="exampleOption" value="checked option" checked>Checkbox option</auro-checkbox>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox id="checked" name="exampleOption" value="checked option" checked>Checkbox option</auro-checkbox>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Error</h3>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox id="error" name="exampleOption" value="checked option" error>Checkbox option</auro-checkbox>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox id="error" name="exampleOption" value="checked option" error>Checkbox option</auro-checkbox>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Disabled</h3>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox id="disabled" name="exampleOption" value="checked option" disabled>Checkbox option</auro-checkbox>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox id="disabled" name="exampleOption" value="checked option" disabled>Checkbox option</auro-checkbox>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Checkbox Group</h3>
        <p>The auro-checkbox component is designed to work in concert with the auro-checkbox-group component. </p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group>
            <span slot="legend">Example group</span>
            <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
            <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option two</auro-checkbox>
          </auro-checkbox-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group>
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
  <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option two</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Disabled Checkbox Group</h3>
        <p>The auro-checkbox component is designed to work in concert with the auro-checkbox-group component. </p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group disabled>
            <span slot="legend">Example group</span>
            <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
            <auro-checkbox id="optionTwo" checked name="exampleOptions" value="option two">Option two</auro-checkbox>
          </auro-checkbox-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group disabled>
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
  <auro-checkbox id="optionTwo" checked name="exampleOptions" value="option two">Option two</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>

        <h3 className="auro_heading auro_heading--500">Disabled Checkbox within group</h3>
        <p>The auro-checkbox element also supports a single disabled option within a group.</p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group>
            <span slot="legend">Example group</span>
            <auro-checkbox id="optionOne" disabled name="exampleOptions" value="option one">Option one</auro-checkbox>
            <auro-checkbox id="optionTwo" checked name="exampleOptions" value="option two">Option two</auro-checkbox>
          </auro-checkbox-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group>
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" disabled name="exampleOptions" value="option one">Option one</auro-checkbox>
  <auro-checkbox id="optionTwo" checked name="exampleOptions" value="option two">Option two</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Checkbox Group with error</h3>
        <p>The auro-checkbox component is designed to work in concert with the auro-checkbox-group component. </p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group error="this is an error message">
            <span slot="legend">Example group</span>
            <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
            <auro-checkbox id="optionTwo" checked name="exampleOptions" value="option two">Option two</auro-checkbox>
          </auro-checkbox-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group error="this is an error message">
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
  <auro-checkbox id="optionTwo" checked name="exampleOptions" value="option two">Option two</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Horizontal Checkbox Group</h3>
        <p>Using the <code>horizontal</code> attribute will render the checkbox options on a horizontal line.</p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group horizontal>
            <span slot="legend">Example group</span>
            <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
            <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option two</auro-checkbox>
            <auro-checkbox id="optionThree" name="exampleOptions" value="option two">Option three</auro-checkbox>
          </auro-checkbox-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group horizontal>
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
  <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option two</auro-checkbox>
  <auro-checkbox id="optionThree" name="exampleOptions" value="option three">Option three</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Horizontal Checkbox Group limitation</h3>
        <p>Using the <code>horizontal</code> attribute has a limit of 3 options. Beyond three, options will be listed in vertically. </p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group horizontal>
            <span slot="legend">Example group</span>
            <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
            <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option two</auro-checkbox>
            <auro-checkbox id="optionThree" name="exampleOptions" value="option three">Option three</auro-checkbox>
            <auro-checkbox id="optionFour" name="exampleOptions" value="option four">Option four</auro-checkbox>
          </auro-checkbox-group>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-checkbox-group horizontal>
  <span slot="legend">Example group</span>
  <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Option one</auro-checkbox>
  <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Option two</auro-checkbox>
  <auro-checkbox id="optionThree" name="exampleOptions" value="option three">Option three</auro-checkbox>
  <auro-checkbox id="optionFour" name="exampleOptions" value="option four">Option four</auro-checkbox>
</auro-checkbox-group>`}
          </Highlight>
        </auro-accordion>


        <h3 className="auro_heading auro_heading--500">Working example</h3>
        <p>The following example illustrates an option where the group is set as <code>required</code> and the submit action will evaluate if the requirement is true or not.</p>
        <p>Accessibility: This component fully supports accessibility best-practices in regards to <code>aria-invlaid</code>, <code>aria-required</code> and <code>role="alert"</code>.</p>
        <div className="demo--inline exampleWrapper">
          <auro-checkbox-group id="required"
            required
            error={this.state.errorText}>
            <span slot="legend">These are a few of my favorite things</span>
            <auro-checkbox id="raindrops" name="favThings" value="Raindrops on roses">Raindrops on roses</auro-checkbox>
            <auro-checkbox id="whiskers" name="favThings" value="Whiskers on kittens">Whiskers on kittens</auro-checkbox>
            <auro-checkbox id="copper-kettles" name="favThings" value="Bright copper kettles">Bright copper kettles</auro-checkbox>
            <auro-checkbox id="woolen-mittens" name="favThings" value="Warm woolen mittens">Warm woolen mittens</auro-checkbox>
            <auro-checkbox id="paper-packages" name="favThings" value="Brown paper packages tied up with strings">Brown paper packages tied up with strings</auro-checkbox>
          </auro-checkbox-group>

          <auro-button onClick={this.test}>Submit your answer!</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`
test = () => {
  const requiredGroup = document.getElementById('required');

  if (requiredGroup.getAttribute('required')) {
    const cboxes = document.getElementsByName('favThings');
    let required = false;
    let requiredList = [];

    for (let i = 0; i < cboxes.length; i++) {
      if (cboxes[i].checked) {
        required = true;
        requiredList.push(cboxes[i].value);
      }
    }

    if (!required) {
      this.setState({errorText : 'Please select from the options above'})
    } else {
      this.setState({errorText : null})
      console.log(\`Your favorite things; \${requiredList}\`)
    }
  }
}

<auro-checkbox-group id="required"
  required
  error={this.state.errorText}>
  <span slot="legend">These are a few of my favorite things</span>
  <auro-checkbox id="raindrops" name="favThings" value="Raindrops on roses">Raindrops on roses</auro-checkbox>
  <auro-checkbox id="whiskers" name="favThings" value="Whiskers on kittens">Whiskers on kittens</auro-checkbox>
  <auro-checkbox id="copper-kettles" name="favThings" value="Bright copper kettles">Bright copper kettles</auro-checkbox>
  <auro-checkbox id="woolen-mittens" name="favThings" value="Warm woolen mittens">Warm woolen mittens</auro-checkbox>
  <auro-checkbox id="paper-packages" name="favThings" value="Brown paper packages tied up with strings">Brown paper packages tied up with strings</auro-checkbox>
</auro-checkbox-group>

<auro-button onClick={this.test}>Submit your answer!</auro-button>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroCheckbox;
