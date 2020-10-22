import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';
import closelg from '@alaskaairux/orion-icons/dist/icons/close-lg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/interface/chevron-right_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/interface/chevron-left_es6.js';

class Buttons extends Component {

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-button'];

    return `@alaskaairux/ods-button: ${dependencies}`;
  };

  render() {
    return (
      <section id="buttons">

        <Nav />

        <h1 className="auro_heading auro_heading--display">Orion Button</h1>

        <p class="content--deprecated">Deprecated: See <auro-hyperlink href="/components/auro/button" relative>auro-button</auro-hyperlink> for updated element use. </p>

        <h2 className="auro_heading auro_heading--800">Button use cases</h2>

        <p>The <code>ods-button</code> element should be used in situations where users may:</p>
        <ul>
          <li>submit a form</li>
          <li>begin a new task</li>
          <li>trigger a new UI element to appear on the page</li>
          <li>specify a new or next step in a process</li>
        </ul>

        <h2 className="auro_heading auro_heading--800">Buttons are not Hyperlinks</h2>
        <p>In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the <code>ods-hyperlink</code> element be used.</p>

        <h2 className="auro_heading auro_heading--700">Orion Button states</h2>

        <div className="exampleWrapper">
          <ods-button>default</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button>default</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button buttontype="secondary">secondary</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button buttontype="secondary">default</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button isactive>is active</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button isactive>is active</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button flowtype="complete">complete</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button flowtype="complete">complete</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button disabled>disabled</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button disabled>disabled</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button theme="classic">classic default</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button theme="classic">classic default</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button buttontype="secondary" theme="classic">classic secondary</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button buttontype="secondary" theme="classic">classic secondary</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button disabled buttontype="secondary" theme="classic">disabled classic secondary</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button disabled buttontype="secondary" theme="classic">classic secondary</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button responsive>default</ods-button>
        </div>

        {/* responsive examples */}

        <Highlight className='html afterCode'>
          {`<ods-button responsive>default</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button responsive reverse>default</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button responsive reverse>default</ods-button>`}
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>When needed, <code>ods-button</code> supports the use case of multiple buttons in a parent container.</p>
          <p>Container Buttons require a parent container with the class of <code>ods-containedButtons</code>. Each use of <code>ods-button</code> requires the addition of the <code>outercontext</code> boolean attribute on the element. Please see the following code examples.</p>
          <p>For more information on <code>ods-containedButtons</code> see <ods-hyperlink inline href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#ods-utility-css-.ods-containedButtons" target="_blank">Orion Web Core Style Sheets</ods-hyperlink> for more information.</p>
        </div>

        {/* multi buttons examples */}

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button>default</ods-button>
            <ods-button condensed>condensed</ods-button>
            <ods-button isactive>active</ods-button>
            <ods-button flowtype="complete">complete</ods-button>
            <ods-button disabled>disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button>Default</ods-button>
  <ods-button condensed>Condensed</ods-button>
  <ods-button isactive>Active</ods-button>
  <ods-button disabled>Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons ods-containedButtons--reverse">
            <ods-button theme="classic">default</ods-button>
            <ods-button condensed theme="classic">condensed</ods-button>
            <ods-button isactive theme="classic">active</ods-button>
            <ods-button disabled theme="classic">disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons ods-containedButtons--reverse">
  <ods-button theme="classic">Default</ods-button>
  <ods-button condensed theme="classic">Condensed</ods-button>
  <ods-button isactive theme="classic">Active</ods-button>
  <ods-button disabled theme="classic">Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button buttontype="secondary">default</ods-button>
            <ods-button buttontype="secondary" condensed>condensed</ods-button>
            <ods-button buttontype="secondary" isactive>active</ods-button>
            <ods-button buttontype="secondary" disabled>disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button buttontype="secondary">Default</ods-button>
  <ods-button buttontype="secondary" condensed>Condensed</ods-button>
  <ods-button buttontype="secondary" isactive>Active</ods-button>
  <ods-button buttontype="secondary" disabled>Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button buttontype="secondary" theme="classic">default</ods-button>
            <ods-button buttontype="secondary" condensed theme="classic">condensed</ods-button>
            <ods-button buttontype="secondary" isactive theme="classic">active</ods-button>
            <ods-button buttontype="secondary" disabled theme="classic">disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button buttontype="secondary" theme="classic">Default</ods-button>
  <ods-button buttontype="secondary" condensed theme="classic">Condensed</ods-button>
  <ods-button buttontype="secondary" isactive theme="classic">Active</ods-button>
  <ods-button buttontype="secondary" disabled theme="classic">Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons ods-containedButtons--reverse">
            <ods-hyperlink role="button">Cancel</ods-hyperlink>
            <ods-button>primary offer</ods-button>
            <ods-button buttontype="secondary">secondary offer</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons ods-containedButtons--reverse">
  <ods-hyperlink role="button">Cancel</ods-hyperlink>
  <ods-button>primary offer</ods-button>
  <ods-button buttontype="secondary">secondary offer</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons ods-containedButtons--reverse">
            <ods-hyperlink role="button">Cancel</ods-hyperlink>
            <ods-button>save</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons ods-containedButtons--reverse">
  <ods-hyperlink role="button">Cancel</ods-hyperlink>
  <ods-button>Default button</ods-button>
</div>`
          }
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The following examples illustrate how to use Orion Icons with the ods-button custom element.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/orion-icons" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>Orion Icons</code> library of assets.</p>
        </div>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button svgIconLeft={chevronleft.svg}>previous step</ods-button>
            <ods-button svgIconRight={chevronright.svg}>previous step</ods-button>
            <ods-button svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/chevronright_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/chevronleft_es6.js';

<div className="ods-containedButtons">
  <ods-button svgIconLeft={chevronleft.svg}>previous step</ods-button>
  <ods-button svgIconRight={chevronright.svg}>previous step</ods-button>
  <ods-button svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button theme="classic" svgIconLeft={chevronleft.svg}>previous step</ods-button>
            <ods-button theme="classic" svgIconRight={chevronright.svg}>previous step</ods-button>
            <ods-button theme="classic" svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/chevronright_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/chevronleft_es6.js';

<div className="ods-containedButtons">
  <ods-button svgIconLeft={chevronleft.svg}>previous step</ods-button>
  <ods-button theme="classic" svgIconRight={chevronright.svg}>previous step</ods-button>
  <ods-button theme="classic" svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
</div>`
          }
        </Highlight>


      </section>
    );
  }
}

export default Buttons;
