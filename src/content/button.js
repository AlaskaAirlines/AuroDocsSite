import React, { Component } from "react";
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import "@alaskaairux/ods-button/dist/ods-button";
import 'highlight.js/styles/github.css';
import '../sass/App.scss';

import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/chevronright_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/chevronleft_es6.js';
import stepoutlg from '@alaskaairux/orion-icons/dist/icons/stepoutlg_es6.js';

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

        <section className="ods-markdown">
          <ReactMarkdown source={this.state.docsBuildStatus} escapeHtml={false}/>
        </section>

        <h1 className="heading heading--max">Buttons</h1>

        <div className="indention indention--warning util_fontWeightLight util_type--secondary">
          <p><strong>ALERT: </strong>There appears to be a bug with <strong>Safari</strong> where the CSS pseudo selector <code>:first-child</code> is not being honered when used within a HTML custom element. The expected style is to have the first letter of the string inside the button to always be UPPERCASE regardless of the casing of the content entered into the <code>slot</code> of the element. </p>

          <p>The work-around until this bug is resolved is to simply use proper casing when entering content into the <code>slot</code> of the custom elememnt.</p>
        </div>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of buttons styles and use cases. The following examples illustrate common button uses followed up by code examples.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-button" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-button</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-button</code>.</p>
        </div>

        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-button`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button>
            default
          </ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button>default</ods-button>`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button theme="classic">classic default</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button theme="classic">classic default</ods-button>`}
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>When needed, <code>ods-button</code> supports the use case of multiple buttons in a parent container.</p>
          <p>Container Buttons require a parent container with the class of <code>ods-containedButtons</code>. Each use of <code>ods-button</code> requires the addition of the <code>outercontext</code> boolean attribute on the element. Please see the following code examples.</p>
          <p>For more information on <code>ods-containedButtons</code> see <ods-hyperlink inline href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#ods-utility-css-.ods-containedButtons" target="_blank">Orion Web Core Style Sheets</ods-hyperlink> for more information.</p>
        </div>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext>default</ods-button>
            <ods-button outercontext condensed>condensed</ods-button>
            <ods-button outercontext isactive>active</ods-button>
            <ods-button outercontext disabled>disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button outercontext>Default</ods-button>
  <ods-button outercontext condensed>Condensed</ods-button>
  <ods-button outercontext isactive>Active</ods-button>
  <ods-button outercontext disabled>Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext theme="classic">default</ods-button>
            <ods-button outercontext condensed theme="classic">condensed</ods-button>
            <ods-button outercontext isactive theme="classic">active</ods-button>
            <ods-button outercontext disabled theme="classic">disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button outercontext theme="classic">Default</ods-button>
  <ods-button outercontext condensed theme="classic">Condensed</ods-button>
  <ods-button outercontext isactive theme="classic">Active</ods-button>
  <ods-button outercontext disabled theme="classic">Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext flowtype="complete">complete</ods-button>
            <ods-button outercontext isactive flowtype="complete">active complete</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button outercontext flowtype="complete">Complete</ods-button>
  <ods-button outercontext isactive flowtype="complete">Active complete</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext buttontype="secondary">default</ods-button>
            <ods-button outercontext buttontype="secondary" condensed>condensed</ods-button>
            <ods-button outercontext buttontype="secondary" isactive>active</ods-button>
            <ods-button outercontext buttontype="secondary" disabled>disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button outercontext buttontype="secondary">Default</ods-button>
  <ods-button outercontext buttontype="secondary" condensed>Condensed</ods-button>
  <ods-button outercontext buttontype="secondary" isactive>Active</ods-button>
  <ods-button outercontext buttontype="secondary" disabled>Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext buttontype="secondary" theme="classic">default</ods-button>
            <ods-button outercontext buttontype="secondary" condensed theme="classic">condensed</ods-button>
            <ods-button outercontext buttontype="secondary" isactive theme="classic">active</ods-button>
            <ods-button outercontext buttontype="secondary" disabled theme="classic">disabled</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-button outercontext buttontype="secondary" theme="classic">Default</ods-button>
  <ods-button outercontext buttontype="secondary" condensed theme="classic">Condensed</ods-button>
  <ods-button outercontext buttontype="secondary" isactive theme="classic">Active</ods-button>
  <ods-button outercontext buttontype="secondary" disabled theme="classic">Disabled</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-hyperlink role="button">Cancel</ods-hyperlink>
            <ods-button outercontext>primary offer</ods-button>
            <ods-button outercontext buttontype="secondary">secondary offer</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-hyperlink role="button">Cancel</ods-hyperlink>
  <ods-button>primary offer</ods-button>
  <ods-button buttontype="secondary">secondary offer</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-hyperlink role="button">Cancel</ods-hyperlink>
            <ods-button outercontext>save</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-hyperlink role="button">Cancel</ods-hyperlink>
  <ods-button outercontext>Default button</ods-button>
</div>`
          }
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The following examples illustrate how to use Orion Icons with the ods-button custom element.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/orion-icons" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>Orion Icons</code> library of assets.</p>
        </div>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext svgIconLeft={chevronleft.svg}>previous step</ods-button>
            <ods-button outercontext svgIconRight={chevronright.svg}>previous step</ods-button>
            <ods-button outercontext svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
            <ods-button outercontext svgIconRight={stepoutlg.svg} flowtype="complete">move data</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/chevronright_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/chevronleft_es6.js';
import stepoutlg from '@alaskaairux/orion-icons/dist/icons/stepoutlg_es6.js';

<div className="ods-containedButtons">
  <ods-button outercontext svgIconLeft={chevronleft.svg}>previous step</ods-button>
  <ods-button outercontext svgIconRight={chevronright.svg}>previous step</ods-button>
  <ods-button outercontext svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
  <ods-button outercontext svgIconRight={stepoutlg.svg} flowtype="complete">move data</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext theme="classic" svgIconLeft={chevronleft.svg}>previous step</ods-button>
            <ods-button outercontext theme="classic" svgIconRight={chevronright.svg}>previous step</ods-button>
            <ods-button outercontext theme="classic" svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import chevronright from '@alaskaairux/orion-icons/dist/icons/chevronright_es6.js';
import chevronleft from '@alaskaairux/orion-icons/dist/icons/chevronleft_es6.js';

<div className="ods-containedButtons">
  <ods-button outercontext svgIconLeft={chevronleft.svg}>previous step</ods-button>
  <ods-button outercontext theme="classic" svgIconRight={chevronright.svg}>previous step</ods-button>
  <ods-button outercontext theme="classic" outercontext svgIconLeft={closelg.svg} buttontype="secondary">remove</ods-button>
</div>`
          }
        </Highlight>
      </section>
    );
  }
}

export default Buttons;
