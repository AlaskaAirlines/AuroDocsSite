import React, { Component } from "react";
import "@alaskaairux/ods-hyperlink";
import "@alaskaairux/ods-hyperlink/dist/auro-hyperlink";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import '../sass/App.scss';

class Hyperlink extends Component {
  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-hyperlink'];

    return `@alaskaairux/ods-hyperlink: ${dependencies}`;
  };

  sayHello() {
    console.log('Hello, you clicked the button!');
  }

  handleKeyPress = (event) => {
    if(event.keyCode === 13){
      console.log('Win for a11y! The return key submits!')
    }
    else if(event.keyCode === 32){
      console.log('Win for a11y! The spacebar submits!')
    }
  }

  render() {
    return (
      <section id="hyperlinks">
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-hyperlink"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink/blob/master/src/ods-hyperlink.js"
          version={this.showVersion()}
        />
        <h1 className="auro_heading auro_heading--display">Auro Hyperlink</h1>

        <p>Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the <code>auro-hyperlink</code> Auro component can be used.</p>
        <p>See <auro-hyperlink href="https://www.npmjs.com/package/@alaskaairux/ods-hyperlink" target="_blank">instructions</auro-hyperlink> for more information as how to install and full API for the <code>ods-hyperlink</code> Orion base element.</p>
        <p>The current state of <code>ods-hyperlink</code> is engineered to deprecate the ods- namespace and assist engineers to transition to Auro. </p>

        <Highlight className='install'>
          {
`$npm i @alaskaairux/ods-hyperlink
import "@alaskaairux/ods-hyperlink/dist/auro-hyperlink";`}
        </Highlight>

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

        <div className="demo--inline exampleWrapper">
          <auro-hyperlink href="/" nav>Nav href</auro-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-hyperlink href="/" nav>Nav href</auro-hyperlink>`}
        </Highlight>

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
  console.log('Hello, you clicked the button!');
}

handleKeyPress = (event) => {
  if(event.keyCode === 13){
    console.log('Win for a11y! The return key submits!')
  }
  else if(event.keyCode === 32){
    console.log('Win for a11y! The spacebar submits!')
  }
}`
}
        </Highlight>
      </section>
    );
  }
}

export default Hyperlink;
