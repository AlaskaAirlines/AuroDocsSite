import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroAccordion extends Component {

  render() {
    return (
      <section id="accordion">

        <Nav />

        <auro-header level="2" display="display">Accordion</auro-header>

        <p>Use the auro-accordion element to allow users to toggle/expand additional content based on a trigger. </p>
        <p>The auro-accordion allows for stacked containers with nested items that expand and collapse when triggered.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>Use the <code>auro-accordion</code> element to:</p>
        <ul>
          <li>Hide/show long sub-content based on headline trigger</li>
          <li>Use is for in-page content only when excessive content length is distracting to the specific experience</li>
        </ul>

        <auro-header level="2" display="700">Single accordion</auro-header>
        <p>The auro-accordion can be used as an individual element to hide/show content.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion>
            <span slot="trigger">Cookie Policy</span>
            <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
          </auro-accordion>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Accordion w/trigger sub-title</auro-header>
        <p>Use the <code>subTrigger</code> slot to add a sub-title to the trigger part of the component. </p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion>
            <span slot="trigger">Cookie policy</span>
            <span slot="subTrigger">Your privacy information</span>
            <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
          </auro-accordion>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Accordion w/secondary type option</auro-header>
        <p>Using the <code>secondaryType</code> property, the exposed content will use the <code>secondary</code> type style.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion secondaryType>
            <span slot="trigger">Cookie policy</span>
            <span slot="subTrigger">Your privacy information</span>
            <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
          </auro-accordion>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion secondaryType>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Accordion w/chromeless option</auro-header>
        <p>Using the <code>chromeless</code> property, the accordion will remove the default border chrome for a more streamlined look. This can be paired with the <code>noProfile</code> option to remove outer padding of the accordion.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion chromeless>
              <span slot="trigger">Cookie policy</span>
              <span slot="subTrigger">Your privacy information</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion chromeless noProfile>
              <span slot="trigger">Cookie policy</span>
              <span slot="subTrigger">Your privacy information</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion chromeless>
  <span slot="trigger">Cookie policy</span>
  <span slot="subTrigger">Your privacy information</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion chromeless noProfile>
  <span slot="trigger">Cookie policy</span>
  <span slot="subTrigger">Your privacy information</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Multi-content accordion</auro-header>
        <p>The auro-accordion multi-content use case requires the use of the <code>auro-accordion-group</code> component.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion id="flightNotice">
              <span slot="trigger">Flight notifications</span>

              <auro-radio-group required>
                <span slot="legend">Choose the level of notifications that’s best for you:</span>
                <auro-radio id="radio1" label="No notifications" name="notifications" value="No notifications" checked></auro-radio>
                <auro-radio id="radio2" label="Standard (flight delays, cancellations, and gate changes)" name="notifications" value="Standard"></auro-radio>
                <auro-radio id="radio3" label="Extended (standard notifications, plus pre-flight status and arrival)" name="notifications" value="Extended"></auro-radio>
              </auro-radio-group>

              <p>By enabling flight notifications, you agree to the terms and conditions.</p>

              <auro-button>Save</auro-button>
            </auro-accordion>

            <auro-accordion id="dealsPromotions">
              <span slot="trigger">Deals and promotions</span>

              <auro-checkbox-group>
                <span slot="legend">Please select an option if applicable</span>
                <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Deals and announcements</auro-checkbox>
                <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Insider newsletter</auro-checkbox>
              </auro-checkbox-group>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion-group>
<auro-accordion id="flightNotice">
  <span slot="trigger">Flight notifications</span>

  <auro-radio-group required>
    <span slot="legend">Choose the level of notifications that’s best for you:</span>
    <auro-radio id="radio1" label="No notifications" name="notifications" value="No notifications" checked></auro-radio>
    <auro-radio id="radio2" label="Standard (flight delays, cancellations, and gate changes)" name="notifications" value="Standard"></auro-radio>
    <auro-radio id="radio3" label="Extended (standard notifications, plus pre-flight status and arrival)" name="notifications" value="Extended"></auro-radio>
  </auro-radio-group>

  <p>By enabling flight notifications, you agree to the terms and conditions.</p>

  <auro-button>Save</auro-button>
</auro-accordion>

<auro-accordion id="dealsPromotions">
  <span slot="trigger">Deals and promotions</span>

  <auro-checkbox-group>
    <span slot="legend">Please select an option if applicable</span>
    <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Deals and announcements</auro-checkbox>
    <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Insider newsletter</auro-checkbox>
  </auro-checkbox-group>
</auro-accordion>
</auro-accordion-group>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Low profile accordion</auro-header>
        <p>Options for alternate-style accordions. Using alternate properties like <code>lowProfile</code> for a thinner look, then <code>justifyLeft</code> or <code>justifyRight</code> to reposition the accordion trigger. </p>
        <p>The <code>subTrigger</code> slot is NOT supported with the <code>lowProfile</code> property.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion lowProfile>
              <span slot="trigger">Cookie policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile justifyRight>
              <span slot="trigger">Cookie policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile justifyLeft>
              <span slot="trigger">Cookie policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion lowProfile>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile justifyLeft>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">No profile accordion</auro-header>
        <p>The <code>noProfile</code> option is an extension of the <code>lowProfile</code> property. Additionally this  works with the <code>justifyLeft</code> or <code>justifyRight</code> properties. The main difference is that this accordion version removes the outer padding. </p>

        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion lowProfile noProfile>
              <span slot="trigger">Cookie policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile noProfile justifyRight>
              <span slot="trigger">Cookie policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile noProfile justifyLeft>
              <span slot="trigger">Cookie policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion lowProfile noProfile>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile noProfile justifyRight>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile noProfile justifyRight>
  <span slot="trigger">Cookie policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Custom trigger content example</auro-header>
        <p>The following example illustrates how to use additional custom content in the accordion trigger.</p>
        <p>The <code>trigger</code> slot is styled to support <code>display: flex</code>, the user has the ability to style this node and adjust content justification. The <code>trigger</code> slot also supports any HTML. In this example, the <code>auro-badge</code> element is used and custom styles are attributed to it as well.</p>

        <div className="demo--inline exampleWrapper" style={{"overflow": "unset"}}>
          <auro-accordion id="dealsPromotions">
            <span slot="trigger" style={{justifyContent: 'space-between'}}>
              Deals and promotions
              <auro-badge label style={{'color': 'white', 'backgroundColor': 'var(--auro-color-alert-error-on-light)', 'borderColor': 'var(--auro-color-alert-error-on-light)'}}>please review selection</auro-badge>
            </span>

            <auro-checkbox-group required>
              <span slot="legend">Please select an option</span>
              <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Deals and announcements</auro-checkbox>
              <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Insider newsletter</auro-checkbox>
            </auro-checkbox-group>
          </auro-accordion>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion id="dealsPromotions">
  <span slot="trigger" style="justify-content: space-between">
    Deals and promotions
    <auro-badge label style="color: var(--auro-color-base-white);
      background-color: var(--auro-color-alert-error-on-light);
      border-color: var(--auro-color-alert-error-on-light)">please review selection</auro-badge>
  </span>

  <auro-checkbox-group required>
    <span slot="legend">Please select an option</span>
    <auro-checkbox id="optionOne" name="exampleOptions" value="option one">Deals and announcements</auro-checkbox>
    <auro-checkbox id="optionTwo" name="exampleOptions" value="option two">Insider newsletter</auro-checkbox>
  </auro-checkbox-group>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroAccordion;
