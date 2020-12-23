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
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-avatar></auro-avatar>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Component size option</auro-header>
        <p>The auro-avatar component supports a <code>sm</code> avatar size.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar sm></auro-avatar>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-avatar sm></auro-avatar>`}
          </Highlight>
        </auro-accordion>


        <auro-header level="2" display="700">Airport Codes</auro-header>
        <p>The auro-avatar supports auto generation of pre-defined images using the <code>code</code> attribute.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar code="anc"></auro-avatar>
          <auro-avatar code="mke" sm></auro-avatar>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-avatar code="anc"></auro-avatar>
<auro-avatar code="mke" sm></auro-avatar>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Custom images</auro-header>
        <p>The auro-avatar supports placement of custom images using the <code>img</code> attribute.</p>
        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
          <auro-avatar img="https://picsum.photos/200?random=1" sm></auro-avatar>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-avatar img="https://picsum.photos/200?random=0"></auro-avatar>
<auro-avatar img="https://picsum.photos/200?random=1" sm></auro-avatar>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Accessibility options</auro-header>
        <p>The auro-avatar component is hidden from screen readers by default. The placement of altText using the  <code>alt</code> attribute in conjunction with the <code>ariaVisible</code> attribute will make the avatar visible to screen readers. </p>

        <div className="demo--inline exampleWrapper avatarDemo">
          <auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-avatar code="pdx" ariaVisible alt="iconic image of Portland, OR"></auro-avatar>`}
          </Highlight>
        </auro-accordion>


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
