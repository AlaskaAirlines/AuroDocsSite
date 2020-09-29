import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroAvatar extends Component {

  // constructor(props) {
  //   super(props);
  // };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-avatar'];

    return `@alaskaairux/auro-avatar: ${dependencies}`;
  };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Avatar</auro-header>

        <p>The auro-avatar web component is used to represent an image.  </p>

        <auro-header level="2" display="700">Default component</auro-header>
        <p>The default component presents itself as a circle and default image placement.</p>
        <div className="demo--inline exampleWrapper">
          <auro-avatar></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Component size option</auro-header>
        <p>The auro-avatar component supports a <code>sm</code> avatar size.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar sm></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar sm></auro-avatar>`}
        </Highlight>


        <auro-header level="2" display="700">Airport Codes</auro-header>
        <p>The auro-avatar supports auto generation of pre-defined images using the <code>code</code> attribute.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar code="psp"></auro-avatar>
          <auro-avatar code="psp" sm></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar code="psp"></auro-avatar>
<auro-avatar code="psp" sm></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Custom images</auro-header>
        <p>The auro-avatar supports placement of custom images using the <code>img</code> attribute.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar img="https://bit.ly/3jaGMoE"></auro-avatar>
          <auro-avatar img="https://bit.ly/3jaGMoE" sm></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar img="https://bit.ly/3jaGMoE"></auro-avatar>
<auro-avatar img="https://bit.ly/3jaGMoE" sm></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Accessibility options</auro-header>
        <p>The auro-avatar component is hidden from screen readers by default. The placement of altText using the  <code>alt</code> attribute in conjunction with the <code>ariaVisible</code> attribute will make the avatar visible to screen readers. </p>

        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar code="psp" ariaVisible alt="iconic image of Palm Springs, CA"></auro-avatar>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-avatar code="psp" ariaVisible alt="iconic image of Palm Springs, CA"></auro-avatar>`}
        </Highlight>


        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-avatar"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-avatar"
          code="https://github.com/AlaskaAirlines/auro-avatar/blob/master/src/auro-avatar.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroAvatar;
