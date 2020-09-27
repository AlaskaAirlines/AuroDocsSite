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

        <p>The auro-avatar web component is used to represent an image, icon or user.  </p>

        <auro-header level="2" display="700">Default component</auro-header>
        <p>The default component presents itself as a square with a border and default icon placement.</p>
        <div className="demo--inline exampleWrapper">
          <auro-avatar></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Component shapes</auro-header>
        <p>Choose from either the <code>rounded</code> or <code>circle</code> shape options.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar rounded></auro-avatar>
          <auro-avatar circle></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar rounded></auro-avatar>
<auro-avatar circle></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Component shapes and sizes</auro-header>
        <p>In combination with  the <code>rounded</code> or <code>circle</code> shape options, auro-icon supports a <code>sm</code> avatar size.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar rounded sm></auro-avatar>
          <auro-avatar circle sm></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar rounded sm></auro-avatar>
<auro-avatar circle sm></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Custom icon avatars</auro-header>
        <p>Using the <code>slot</code> element, the auro-avatar supports inserting a custom icon with the auro-icon component.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar circle>
            <auro-icon category="in-flight" name="wifi"></auro-icon>
          </auro-avatar>
          <auro-avatar circle sm>
            <auro-icon category="interface" name="accessibility"></auro-icon>
          </auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar circle>
  <auro-icon category="in-flight" name="wifi"></auro-icon>
</auro-avatar>
<auro-avatar circle sm>
  <auro-icon category="interface" name="accessibility"></auro-icon>
</auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Initials</auro-header>
        <p>For users to display personalization with their initials, use the <code>slot</code> to enter the characters.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar circle>SJ</auro-avatar>
          <auro-avatar circle sm>JS</auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar circle>SJ</auro-avatar>
<auro-avatar circle sm>JS</auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Initials and icons on dark</auro-header>
        <p>The auro-avatar component will inherit the color style from a parent element.</p>
        <div className="demo--inline exampleWrapper--ondark avatarDemo avatarOndark">
          <auro-avatar circle>
            <auro-icon category="interface" name="location-stroke"></auro-icon>
          </auro-avatar>
          <auro-avatar circle sm>VH</auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<div style="color: white">
  <auro-avatar circle>
    <auro-icon category="interface" name="location-stroke"></auro-icon>
  </auro-avatar>
  <auro-avatar circle sm>VH</auro-avatar>
</div>`}
        </Highlight>

        <auro-header level="2" display="700">Airport Codes</auro-header>
        <p>The auro-avatar supports auto generation of pre-defined images using the <code>code</code> attribute.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
        <auro-avatar code="hln" rounded></auro-avatar>
        <auro-avatar code="anc"rounded sm></auro-avatar>
        <auro-avatar code="jfk" circle></auro-avatar>
        <auro-avatar code="psp"circle sm></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar code="hln" rounded></auro-avatar>
<auro-avatar code="anc"rounded sm></auro-avatar>
<auro-avatar code="jfk" circle></auro-avatar>
<auro-avatar code="psp"circle sm></auro-avatar>`}
        </Highlight>

        <auro-header level="2" display="700">Custom images</auro-header>
        <p>The auro-avatar supports placement of custom images using the <code>img</code> attribute.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar img="https://bit.ly/3jaGMoE" rounded></auro-avatar>
          <auro-avatar img="https://bit.ly/3jaGMoE" rounded sm></auro-avatar>
          <auro-avatar img="https://bit.ly/3jaGMoE" circle></auro-avatar>
          <auro-avatar img="https://bit.ly/3jaGMoE" circle sm></auro-avatar>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-avatar img="https://bit.ly/3jaGMoE" rounded></auro-avatar>
<auro-avatar img="https://bit.ly/3jaGMoE" rounded sm></auro-avatar>
<auro-avatar img="https://bit.ly/3jaGMoE" circle></auro-avatar>
<auro-avatar img="https://bit.ly/3jaGMoE" circle sm></auro-avatar>`}
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
