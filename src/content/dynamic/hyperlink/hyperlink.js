import React, { Component } from "react";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import { Nav } from './nav';

class Hyperlink extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-hyperlink'];

    return `@alaskaairux/ods-hyperlink: ${dependencies}`;
  };

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

        <h1 className="auro_heading auro_heading--display">Auro Hyperlink</h1>

        <p>Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the <code>auro-hyperlink</code> Auro component can be used.</p>
        <p>See <auro-hyperlink href="https://www.npmjs.com/package/@alaskaairux/ods-hyperlink" target="_blank">instructions</auro-hyperlink> for more information as how to install and full API for the <code>ods-hyperlink</code> Auro base element.</p>
        <p>The current state of <code>auro-hyperlink</code> is engineered to deprecate the ods- namespace and assist engineers to transition to Auro. </p>

        <h2 className="auro_heading auro_heading--700">Default States</h2>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink>No href</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink>No href</auro-hyperlink>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/">Default w/href</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink href="/">Default w/href</auro-hyperlink>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/" target="_blank">External href</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink href="/" target="_blank">External href</auro-hyperlink>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">Nav style</h2>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/" nav>Nav href</auro-hyperlink>
        </div>

        <h2 className="auro_heading auro_heading--700">Relative vs absolute URLs and https enforcement</h2>
        <p>By default the auro-hyperlink will assume that the url passed is an absolute URL to <code>www.alaskaair.com</code></p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/route-map">Absolute URL to route map</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`// Web component example
<auro-hyperlink href="/route-map">Absolute URL to route map</auro-hyperlink>

// Output code in shadow DOM element
<a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>Absolute URL to route map</slot></a>`}
        </Highlight>

        <p>Defining the absolute URL will render the same results regardless of protocol.</p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="http://www.alaskaair.com/route-map">http absolute URL to route map</auro-hyperlink> or
          <auro-hyperlink href="//www.alaskaair.com/route-map">no hypertext transfer protocol absolute URL to route map</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`// Web component example
<auro-hyperlink href="http://www.alaskaair.com/route-map">http absolute URL to route map</auro-hyperlink> or
<auro-hyperlink href="//www.alaskaair.com/route-map">no hypertext transfer protocol absolute URL to route map</auro-hyperlink>

// Output code in shadow DOM element
<a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>http absolute URL to route map</slot></a>
<a class="hyperlink" href="https://www.alaskaair.com/route-map"><slot>no hypertext transfer protocol absolute URL to route map</slot></a>`}
        </Highlight>

        <p>For relative URLs, use the <code>relative</code> property.</p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink relative href="#">Relative URL</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`// Web component example
<auro-hyperlink relative href="#">Relative URL</auro-hyperlink>

// Output code in shadow DOM element
<a class="hyperlink" href="#"><slot>Relative URL</slot></a>`}
        </Highlight>

        <p>For telephone/text URLs, the protocol will be supported.</p>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink> or <auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink href="sms:+18002527522">sms link</auro-hyperlink> or
<auro-hyperlink href="tel:+18002527522">telephone link</auro-hyperlink>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">Call To Action (cta) Button</h2>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink cta href="#">Default</auro-hyperlink> <auro-hyperlink cta href="" target="_blank" >Default</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink cta href="#">Default</auro-hyperlink>
<auro-hyperlink cta href="" target="_blank" >Default</auro-hyperlink>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink secondary cta href="#">Secondary</auro-hyperlink> <auro-hyperlink secondary cta href="#" target="_blank" >Secondary</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink secondary cta href="#">Secondary</auro-hyperlink>
<auro-hyperlink secondary cta href="#" target="_blank" >Secondary</auro-hyperlink>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">On Dark</h2>

        <div className="demo--inline exampleWrapper">
          <div className="ondark">
            <auro-hyperlink ondark href="/">On dark href</auro-hyperlink>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink ondark href="/">On dark href</auro-hyperlink>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <div className="ondark">
            <auro-hyperlink ondark nav href="/">On dark nav href</auro-hyperlink>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink ondark nav href="/">On dark nav href</auro-hyperlink>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <div className="ondark">
            <auro-hyperlink ondark target="_blank" href="/">External on dark href</auro-hyperlink>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink ondark target="_blank" href="/">External on dark href</auro-hyperlink>`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">Role: button</h2>

        <p>Aside from the standard hyperlink use-case, the <code>auro-hyperlink</code> element is intended to be used for <code>button</code> situations as illustrated below.</p>

        <p>Assuming the role of button, auro-hyperlink also will track the <code>aria-pressed</code> state.</p>

        <p>Note: any <code>href</code> will be ignored when using role button. A click-event must be passed to the element as illustrated in the example below.</p>

        <div className="exampleWrapper">
          <auro-hyperlink href="http://www.alaskaair.com" role="button" onClick={this.sayHello} onKeyDown={this.handleKeyPress}>
            Cancel button
          </auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {
`<auro-hyperlink
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
}`
}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-hyperlink"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink/blob/master/src/ods-hyperlink.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default Hyperlink;
