import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroBadge extends Component {

  // constructor(props) {
  //   super(props);
  // };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-badge'];

    return `@alaskaairux/auro-badge: ${dependencies}`;
  };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Badge</auro-header>

        <p>HTML custom element for the use of drawing attention to additional interface information</p>

        <auro-header level="2" display="700">Default component</auro-header>
        <p>Default non-actionable badge element to display data.</p>
        <div className="demo--inline exampleWrapper">
          <auro-badge>Nonstop</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge>Nonstop</auro-badge>`}
        </Highlight>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-badge ondark>Nonstop</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge ondark>Nonstop</auro-badge>`}
        </Highlight>

        <auro-header level="2" display="700">Element with target property</auro-header>
        <p>Use the <code>target</code> property to convert the badge to a functional button. This this property will convert the badge to a clickable button element and the value of the button will be copied to the element's <code>value</code> attribute and a custom event will be fired when clicked.</p>
        <div className="demo--inline exampleWrapper">
          <auro-badge target>Nonstop</auro-badge>
          <auro-badge target disabled>1 stop</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge target disabled>Nonstop</auro-badge>
<auro-badge target disabled>1 stop</auro-badge>`}
        </Highlight>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-badge ondark target>Nonstop</auro-badge>
          <auro-badge ondark target disabled>1 stop</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge ondark target>Nonstop</auro-badge>
<auro-badge ondark target disabled>1 stop</auro-badge>`}
        </Highlight>

        <auro-header level="2" display="700">Elements with spacing property</auro-header>
        <p>Use the <code>space</code> property to allow for default spacing between elements.</p>
        <div className="demo--inline exampleWrapper">
          <auro-badge space>Nonstop</auro-badge>
          <auro-badge space>1 stop</auro-badge>
          <auro-badge space>2+ stops</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge space>Nonstop</auro-badge>
<auro-badge space>1 stop</auro-badge>
<auro-badge space>2+ stops</auro-badge>`}
        </Highlight>

        <auro-header level="2" display="700">Alert color options</auro-header>
        <p>Use the <code>error</code>, <code>success</code>, or <code>advisory</code> attributes for alternate alert experiences. </p>
        <div className="demo--inline exampleWrapper">
          <auro-badge space error>Nonstop</auro-badge>
          <auro-badge space success>1 stop</auro-badge>
          <auro-badge space advisory>2+ stops</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge space error>Nonstop</auro-badge>
<auro-badge space success>1 stop</auro-badge>
<auro-badge space advisory>2+ stops</auro-badge>`}
        </Highlight>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-badge space error ondark>Nonstop</auro-badge>
          <auro-badge space success ondark>1 stop</auro-badge>
          <auro-badge space advisory ondark>2+ stops</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge space error ondark>Nonstop</auro-badge>
<auro-badge space success ondark>1 stop</auro-badge>
<auro-badge space advisory ondark>2+ stops</auro-badge>`}
        </Highlight>

        <auro-header level="2" display="700">Pill option</auro-header>
        <p>Use the <code>pill</code> property in combination with <code>error</code>, <code>success</code>, or <code>advisory</code> attributes for alternate badge experiences. </p>
        <div className="demo--inline exampleWrapper">
          <auro-badge space pill>12</auro-badge>
          <auro-badge space error pill>184</auro-badge>
          <auro-badge space success pill>34</auro-badge>
          <auro-badge space advisory pill>99</auro-badge>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-badge space pill>12</auro-badge>
<auro-badge space error pill>184</auro-badge>
<auro-badge space success pill>34</auro-badge>
<auro-badge space advisory pill>99</auro-badge>`}
        </Highlight>


        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-badge"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-badge"
          code="https://github.com/AlaskaAirlines/auro-badge/blob/master/src/auro-badge.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroBadge;
