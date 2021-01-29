import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroButtons extends Component {

  helloThere = () => {
    alert('Hello There!')
  }

  render() {
    return (
      <section id="buttons">

        <Nav />

        <h2 className="auro_heading auro_heading--display">Button</h2>

        <p>The Auro Design System fully supports a wide range of buttons styles and use cases. The following examples illustrate common button uses followed up by code examples.</p>
        <p>See <auro-hyperlink relative inline href="/components/auro/button/install">install instructions</auro-hyperlink> for more information as how to install and full API for the <code>auro-button</code> Auro base element.</p>
        <p>Illustrated in this example is a stand-alone use of <code>auro-button</code>.</p>

        <h3 className="auro_heading auro_heading--800">Button use cases</h3>

        <p>The <code>auro-button</code> element should be used in situations where users may:</p>
        <ul>
          <li>submit a form</li>
          <li>begin a new task</li>
          <li>trigger a new UI element to appear on the page</li>
          <li>specify a new or next step in a process</li>
        </ul>

        <h3 className="auro_heading auro_heading--800">Buttons are not Hyperlinks</h3>
        <p>In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the <auro-hyperlink href="/components/auro/hyperlink" relative>auro-hyperlink</auro-hyperlink> element be used.</p>

        <auro-header level="2" display="700">Default types</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-button>Primary</auro-button>
          <auro-button disabled>Primary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button>Primary</auro-button>
<auro-button disabled>Primary</auro-button>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-button secondary>Secondary</auro-button>
          <auro-button secondary disabled>Secondary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button secondary>Secondary</auro-button>
<auro-button secondary disabled>Secondary</auro-button>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper">
          <auro-button tertiary>Tertiary</auro-button>
          <auro-button tertiary disabled>Tertiary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button tertiary>Tertiary</auro-button>
<auro-button tertiary disabled>Tertiary</auro-button>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button>Primary</auro-button>
          <auro-button secondary>Secondary</auro-button>
          <auro-button tertiary>Tertiary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div class="exampleWrapper auro_containedButtons">
  <auro-button>Primary</auro-button>
  <auro-button secondary>Secondary</auro-button>
  <auro-button tertiary>Tertiary</auro-button>
</div>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Icon support</auro-header>

        <p>Adding icons to the auro-button component is as easy as nesting any other HTML. The <auro-hyperlink href="/components/auro/icon">auro-icon component</auro-hyperlink> has access to all the icons listed in the <auro-hyperlink href="/icons/usage">Auro Icons library</auro-hyperlink> for quick and easy use. </p>

        <p>Be sure to use the <code>customcolor</code> attribute on the auro-icon component to allow colors set in your parent element to pass through to the icon.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button>
            Activate WiFi
            <auro-icon customcolor category="in-flight" name="wifi"></auro-icon>
          </auro-button>
          <auro-button secondary>
            <auro-icon customcolor category="interface" name="arrow-left"></auro-icon>
            Previous action
          </auro-button>
          <auro-button tertiary>
            Love this ...
            <auro-icon customcolor category="interface" name="heart-filled"></auro-icon>
          </auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button>
  Activate WiFi
  <auro-icon customcolor category="in-flight" name="wifi"></auro-icon>
</auro-button>

<auro-button secondary>
  <auro-icon customcolor category="interface" name="arrow-left"></auro-icon>
  Previous action
</auro-button>

<auro-button tertiary>
  Love this ...
  <auro-icon customcolor category="interface" name="heart-filled"></auro-icon>
</auro-button>`}
          </Highlight>
        </auro-accordion>

        <h2 className="auro_heading auro_heading--700">Auro Button - fluid</h2>

        <div className="demo--inline exampleWrapper">
          <auro-button fluid>Primary</auro-button>
          <auro-button secondary fluid>Secondary</auro-button>
          <auro-button tertiary fluid>Tertiary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="demo--inline exampleWrapper">
  <auro-button fluid>Primary</auro-button>
  <auro-button secondary fluid>Secondary</auro-button>
  <auro-button tertiary fluid>Tertiary</auro-button>
</div>`}
          </Highlight>
        </auro-accordion>

        <h2 className="auro_heading auro_heading--700">Auro Button - onDark</h2>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button ondark>Primary</auro-button>
          <auro-button ondark disabled>Primary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button ondark>Primary</auro-button>
<auro-button ondark disabled>Primary</auro-button>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button secondary ondark>Secondary</auro-button>
          <auro-button secondary ondark disabled>Secondary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight class="spaceAfterCode">
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button secondary ondark>Secondary</auro-button>
<auro-button secondary ondark disabled>Secondary</auro-button>`}
          </Highlight>
        </auro-accordion>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button tertiary ondark>Tertiary</auro-button>
          <auro-button tertiary ondark disabled>Tertiary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-button tertiary ondark>Tertiary</auro-button>
<auro-button tertiary ondark disabled>Tertiary</auro-button>`}
          </Highlight>
        </auro-accordion>

        <h2 className="auro_heading auro_heading--700">Auro Button - fluid</h2>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button fluid ondark>Primary</auro-button>
          <auro-button secondary fluid ondark>Secondary</auro-button>
          <auro-button tertiary fluid ondark>Tertiary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="demo--inline exampleWrapper--ondark">
  <auro-button fluid ondark>Primary</auro-button>
  <auro-button secondary fluid ondark>Secondary</auro-button>
  <auro-button tertiary fluid ondark>Tertiary</auro-button>
</div>`}
          </Highlight>
        </auro-accordion>

        <h2 className="auro_heading auro_heading--700">Auro Button - pass function to button</h2>

        <p>The following is an example of a click event function being passed into the web component.</p>

        <div className="demo--inline exampleWrapper">
          <auro-button onClick={this.helloThere}>Primary</auro-button>
          <auro-button onClick={this.helloThere} disabled>Primary</auro-button>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`
helloThere = () => {
  alert('Hello There!')
}

<auro-button onClick={this.helloThere}>Primary</auro-button>
<auro-button onClick={this.helloThere} disabled>Primary</auro-button>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroButtons;
