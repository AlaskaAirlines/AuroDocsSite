import React, { Component } from "react";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import { Nav } from './nav';

class Hyperlink extends Component {

  sayHello() {
    alert('Hello, you clicked the button!');
  }

  handleKeyPress = (event) => {
    if(event.keyCode === 13){
      alert('Win for a11y! The return key submits!')
    }
    else if(event.keyCode === 32){
      alert('Win for a11y! The spacebar submits!')
    }
  }

  render() {
    return (
      <section id="hyperlinks">

        <Nav />

        <auro-header>Auro hyperlink</auro-header>

        <p>Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the <code>auro-hyperlink</code> component can be used.</p>
        <p>See <auro-hyperlink href="https://www.npmjs.com/package/@alaskaairux/auro-hyperlink" target="_blank">instructions</auro-hyperlink> for more information as how to install and full API for the <code>auro-hyperlink</code> Auro base element.</p>
        <p>The current state of <code>auro-hyperlink</code> is engineered to deprecate the ods- namespace and assist engineers to transition to Auro. </p>

        <auro-header level="2" display="700">Default states</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink>No href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink>No href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/">Default w/href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink href="/">Default w/href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/" target="_blank">External href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink href="/" target="_blank">External href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <auro-header display="700" level="2">Nav style</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/" nav>Nav href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink href="/" nav>Nav href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Relative vs absolute URLs and https enforcement</auro-header>
        <p>By default the auro-hyperlink will assume that the url passed is an absolute URL to <code>www.alaskaair.com</code></p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/route-map" nav>Absolute URL to route map</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`// Web component example
<auro-hyperlink href="/route-map" nav>Absolute URL to route map</auro-hyperlink>

// Output code in shadow DOM element
<a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>Absolute URL to route map</slot></a>`}
          </Highlight>
        </auro-accordion>

        <p>Defining the absolute URL will render the same results, regardless of protocol.</p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="http://www.alaskaair.com/route-map">http absolute URL to route map</auro-hyperlink> or
          <auro-hyperlink href="//www.alaskaair.com/route-map">no hypertext transfer protocol absolute URL to route map</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`// Web component example
<auro-hyperlink href="http://www.alaskaair.com/route-map">http absolute URL to route map</auro-hyperlink> or
<auro-hyperlink href="//www.alaskaair.com/route-map">no hypertext transfer protocol absolute URL to route map</auro-hyperlink>

// Output code in shadow DOM element
<a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>http absolute URL to route map</slot></a>
<a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>no hypertext transfer protocol absolute URL to route map</slot></a>`}
          </Highlight>
        </auro-accordion>

        <p>For relative URLs, use the <code>relative</code> property.</p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink nav relative href="#">Relative URL</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`// Web component example
<auro-hyperlink nav relative href="#">Relative URL</auro-hyperlink>

// Output code in shadow DOM element
<a class="hyperlink" href="#"><slot>Relative URL</slot></a>`}
          </Highlight>
        </auro-accordion>

        <p>For telephone/text URLs, the protocol will be supported.</p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink> or <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink> or
<auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>



        <auro-header level="2" display="700">Call to action (cta) buttons</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-hyperlink cta href="#">Default</auro-hyperlink> <auro-hyperlink cta href="" target="_blank" >Default</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink cta href="#">Default</auro-hyperlink>
<auro-hyperlink cta href="" target="_blank" >Default</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink secondary cta href="#">Secondary</auro-hyperlink> <auro-hyperlink secondary cta href="#" target="_blank" >Secondary</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink secondary cta href="#">Secondary</auro-hyperlink>
<auro-hyperlink secondary cta href="#" target="_blank" >Secondary</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>




        <auro-header level="2" display="700">On dark</auro-header>
        <div className="demo--inline exampleWrapper--ondark">
          <auro-hyperlink ondark href="/">On dark href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink ondark href="/">On dark href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-hyperlink ondark nav href="/">On dark nav href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink ondark nav href="/">On dark nav href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-hyperlink ondark target="_blank" href="/">External on dark href</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink ondark target="_blank" href="/">External on dark href</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-hyperlink cta ondark href="#" relative>Default onDark</auro-hyperlink>
          <auro-hyperlink cta ondark href="#" relative target="_blank">Default onDark</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink cta ondark href="#" relative>Default onDark</auro-hyperlink>
<auro-hyperlink cta ondark href="#" relative target="_blank">Default onDark</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-hyperlink cta ondark secondary href="#" relative>Default onDark</auro-hyperlink>
          <auro-hyperlink cta ondark secondary href="#" relative target="_blank">Default onDark</auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink cta ondark secondary href="#" relative>Default onDark</auro-hyperlink>
<auro-hyperlink cta ondark secondary href="#" relative target="_blank">Default onDark</auro-hyperlink>`}
          </Highlight>
        </auro-accordion>




        <auro-header level="2" display="700">Role: button</auro-header>
        <p>Aside from the standard hyperlink use-case, the <code>auro-hyperlink</code> element is intended to be used for <code>button</code> situations as illustrated below.</p>

        <p>Assuming the role of button, auro-hyperlink also will track the <code>aria-pressed</code> state.</p>

        <p>Note: any <code>href</code> will be ignored when using role button. A click-event must be passed to the element as illustrated in the example below.</p>

        <div className="exampleWrapper">
          <auro-hyperlink href="http://www.alaskaair.com" role="button" onClick={this.sayHello} onKeyDown={this.handleKeyPress}>
            Cancel button
          </auro-hyperlink>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-hyperlink
  href="http://www.alaskaair.com"
  role="button"
  onClick={this.sayHello}
  onKeyDown={this.handleKeyPress}
>
  Cancel button
</auro-hyperlink>

// supporting javascript //

sayHello() {
  alert('Hello, you clicked the button!');
}

handleKeyPress = (event) => {
  if(event.keyCode === 13){
    alert('Win for a11y! The return key submits!')
  }
  else if(event.keyCode === 32){
    alert('Win for a11y! The spacebar submits!')
  }
}`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Usage guidelines</auro-header>

        <auro-header level="3" display="600">Free space nav hyperlink</auro-header>

        <p>When using the auro-hyperlink custom element, make sure to understand the context of placement. When using the hyperlink element in an open space for the purpose of navigation use the <code>nav</code> property. This will ensure that the hyperlink does not have an underline.</p>

        <p>
          <auro-alerts noIcon error>
            <div className="demo--inline exampleWrapper">
              <auro-hyperlink href="/">Free space navigation style hyperlink</auro-hyperlink>
            </div>
          </auro-alerts>
        </p>

        <p>
          <auro-alerts noIcon success>
            <div className="demo--inline exampleWrapper">
              <auro-hyperlink href="/" nav>Free space navigation style hyperlink</auro-hyperlink>
            </div>
          </auro-alerts>
        </p>

        <auro-header level="3" display="600">Hyperlink in content</auro-header>

        <p>When using the Auro hyperlink custom element in context with other content, for accessibility purposes, the hyperlink is to appear with an underline. This is the default experience with <code>auro-hyperlink</code></p>

        <p>
          <auro-alerts noIcon error>
            <div className="demo--inline exampleWrapper">
              This is a paragraph with an inline <auro-hyperlink style={{"display": "inline-block"}}href="/" nav>anchor tag</auro-hyperlink> for navigation.
            </div>
          </auro-alerts>
        </p>

        <p>
          <auro-alerts noIcon success>
            <div className="demo--inline exampleWrapper">
              This is a paragraph with an inline <auro-hyperlink href="/">anchor tag</auro-hyperlink> for navigation.
            </div>
          </auro-alerts>
        </p>

      </section>
    );
  }
}

export default Hyperlink;
