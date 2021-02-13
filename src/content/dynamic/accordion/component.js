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

        <p>Use the auro-accordion to allow users to toggle/expand additional content based on a trigger. </p>
        <p>The auro-accordion allows for stacked containers with nested items that expand and collapse when triggered.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>Use the <code>auro-accordion</code> element to:</p>
        <ul>
          <li>Hide/show long sub-content based on headline trigger</li>
          <li>Use is for in-page content only when content length is distracting to the specific experience</li>
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
        <p>Using the <code>subTrigger</code> slot users can add a sub-title to the trigger part of the component. </p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion>
            <span slot="trigger">Cookie Policy</span>
            <span slot="subTrigger">Your privacy information</span>
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

        <auro-header level="2" display="700">Accordion w/secondary type option</auro-header>
        <p>Using the <code>secondaryType</code> property, the exposed content will use the <code>secondary</code> type style.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion secondaryType>
            <span slot="trigger">Cookie Policy</span>
            <span slot="subTrigger">Your privacy information</span>
            <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
          </auro-accordion>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion secondaryType>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Accordion w/chromeless option</auro-header>
        <p>Using the <code>chromeless</code> property, the accordion will remove the default border chrome for a more streamline look.n This can be paired with the <code>noProfile</code> option to remove outer padding of the accordion.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion chromeless>
              <span slot="trigger">Cookie Policy</span>
              <span slot="subTrigger">Your privacy information</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion chromeless noProfile>
              <span slot="trigger">Cookie Policy</span>
              <span slot="subTrigger">Your privacy information</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion id="cookiePolicyCode" lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion chromeless>
  <span slot="trigger">Cookie Policy</span>
  <span slot="subTrigger">Your privacy information</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion chromeless noProfile>
  <span slot="trigger">Cookie Policy</span>
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
                <auro-radio id="radio3" label="Extended (Standard plus pre-flight status and arrival)" name="notifications" value="Extended"></auro-radio>
              </auro-radio-group>

              <p>By enabling flight notifications, I agree to the terms and conditions.</p>

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
    <auro-radio id="radio3" label="Extended (Standard plus pre-flight status and arrival)" name="notifications" value="Extended"></auro-radio>
  </auro-radio-group>

  <p>By enabling flight notifications, I agree to the terms and conditions.</p>

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
        <p>Options for alternate style accordions. Using alternate properties like <code>lowProfile</code> for a thinner look then <code>justifyLeft</code> or <code>justifyRight</code> to reposition the accordion trigger. </p>
        <p>The <code>subTrigger</code> slot is NOT supported with the <code>lowProfile</code> property.</p>
        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion lowProfile>
              <span slot="trigger">Cookie Policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile justifyRight>
              <span slot="trigger">Cookie Policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile justifyLeft>
              <span slot="trigger">Cookie Policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion lowProfile>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile justifyLeft>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">No profile accordion</auro-header>
        <p>The <code>noProfile</code> option is an extension of the <code>lowProfile</code> property. Additionally this  works with the <code>justifyLeft</code> or <code>justifyRight</code> properties. The main difference is that this accordion version removes the outer padding. </p>

        <div className="demo--inline exampleWrapper">
          <auro-accordion-group>
            <auro-accordion lowProfile noProfile>
              <span slot="trigger">Cookie Policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile noProfile justifyRight>
              <span slot="trigger">Cookie Policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
            <auro-accordion lowProfile noProfile justifyLeft>
              <span slot="trigger">Cookie Policy</span>
              <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
            </auro-accordion>
          </auro-accordion-group>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion lowProfile noProfile>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile noProfile justifyRight>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>

<auro-accordion lowProfile noProfile justifyRight>
  <span slot="trigger">Cookie Policy</span>
  <p><auro-hyperlink href="/content/legal/privacy-policy">Review cookie policy</auro-hyperlink> to learn or withdraw your consent to all or some of the cookies our website uses.</p>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Shade accordion</auro-header>
        <p>The <code>shade</code> feature allows for an alternate accordion experience that allows for full width placement and the content restricts at <code>768px</code>. Clicking or tapping the trigger exposes the content within the shade. Alternatively from the standard accordion, the <code>shade</code> displays over any content beneath. </p>

        The following example illustrates a baseline <code>shade</code> accordion.

        <div className="demo--inline exampleWrapper" style={{"overflow": "unset"}}>
          <auro-accordion id="shade01" shade>
            <span slot="trigger">
              Elite benefits extension
            </span>
            <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
            <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
          </auro-accordion>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion id="shade01" shade>
  <span slot="trigger">
    Elite benefits extension
  </span>
  <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
  <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>


        <p>The following example illustrates the <code>informational</code> accent styling. Additional styles include <code>warning</code> and <code>error</code>. Also notice the use of the <code>justifyLeft</code> attribute to align the toggle carrot to the left. Conversely, <code>justifyRight</code> is also supported.</p>

        <p>The <code>trigger</code> slot allows for the placement of HTML content, for example the <code>auro-icon</code> and the use of the <code>h3</code>. Headings <code>h1</code> through <code>h4</code> are supported for the <code>trigger</code> slot for semantic use. The style of the trigger will remain consistent.</p>

        <div className="demo--inline exampleWrapper" style={{"overflow": "unset"}}>
          <auro-accordion id="shade01" shade information justifyLeft>
            <h3 slot="trigger">
              <auro-icon category="alert" name="information-filled" customColor style={{"color": "var(--auro-color-alert-notification-on-light)", "margin": "0 var(--auro-size-xxs) 0 0"}}></auro-icon>
              Elite benefits extension
            </h3>
            <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
            <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
          </auro-accordion>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion id="shade01" shade information justifyLeft>
  <h3 slot="trigger">
    <auro-icon category="alert" name="information-filled" customColor style={{"color": "var(--auro-color-alert-notification-on-light)", "margin": "0 var(--auro-size-xxs) 0 0"}}></auro-icon>
    Elite benefits extension
  </h3>
  <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
  <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper" style={{"overflow": "unset"}}>
          <auro-accordion id="shade01" shade warning>
            <h3 slot="trigger">
              <auro-icon category="alert" name="warning-filled" customColor style={{"color": "var(--auro-color-alert-warning-on-light)", "margin": "0 var(--auro-size-xxs) 0 0"}}></auro-icon>
              Elite benefits extension
            </h3>
            <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
            <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
          </auro-accordion>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion id="shade01" shade warning>
  <h3 slot="trigger">
    <auro-icon category="alert" name="warning-filled" customColor style={{"color": "var(--auro-color-alert-warning-on-light)", "margin": "0 var(--auro-size-xxs) 0 0"}}></auro-icon>
    Elite benefits extension
  </h3>
  <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
  <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper" style={{"overflow": "unset"}}>
          <auro-accordion id="shade01" shade error justifyRight>
            <h3 slot="trigger">
              <auro-icon category="alert" name="error" customColor style={{"color": "var(--auro-color-alert-error-on-light)", "margin": "0 var(--auro-size-xxs) 0 0"}}></auro-icon>
              Elite benefits extension
            </h3>
            <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
            <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
          </auro-accordion>
        </div>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-accordion id="shade01" shade error justifyRight>
  <h3 slot="trigger">
    <auro-icon category="alert" name="error" customColor style={{"color": "var(--auro-color-alert-error-on-light)", "margin": "0 var(--auro-size-xxs) 0 0"}}></auro-icon>
    Elite benefits extension
  </h3>
  <p>We're extending your elite status! Whatever your status is at the end of 2020 – we'll give it to you for 2021. That means you’ll get the chance to unlock even more benefits as we move closer to our oneworld® launch in summer 2021.*</p>
  <small>*Alaska Airlines has announced its intention to join oneworld® alliance in 2021.</small>
</auro-accordion>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroAccordion;
