import React, { Component } from "react";
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import "@alaskaairux/ods-button";
import 'highlight.js/styles/github.css';
import '../sass/App.scss';

import closelg from '@alaskaairux/orion-icons/dist/icons/close-lg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/interface/chevron-right_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/interface/chevron-left_es6.js';
import stepoutlg from '@alaskaairux/orion-icons/dist/icons/step-out-lg_es6.js';

import ReactMarkdown from 'react-markdown';
import buildStatus from '@alaskaairux/ods-button/docs/BUILD_STATUS.md'

class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsBuildStatus: null
    }
  };

  componentWillMount() {
    fetch(buildStatus).then((response) => response.text()).then((text) => {
      this.setState({
        docsBuildStatus: text
      })
    })
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-button'];

    return `@alaskaairux/ods-button: ${dependencies}`;
  };

  render() {
    return (
      <section id="buttons">
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-button"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button/blob/master/src/ods-button.js"
          version={this.showVersion()}
        />
        <h1 className="heading heading--max">Buttons</h1>

        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsBuildStatus} escapeHtml={false}/>
        </section>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of buttons styles and use cases. The following examples illustrate common button uses followed up by code examples.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-button" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-button</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-button</code>.</p>
        </div>

        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-button`}
        </Highlight>

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
            <ods-button svgIconRight={stepoutlg.svg} flowtype="complete">move data</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/chevronright_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/chevronleft_es6.js';
import stepoutlg from '@alaskaairux/orion-icons/dist/icons/stepoutlg_es6.js';

<div className="ods-containedButtons">
  <ods-button svgIconLeft={chevronleft.svg}>previous step</ods-button>
  <ods-button svgIconRight={chevronright.svg}>previous step</ods-button>
  <ods-button svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
  <ods-button svgIconRight={stepoutlg.svg} flowtype="complete">move data</ods-button>
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
