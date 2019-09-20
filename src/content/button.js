import React, { Component } from "react";
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
// import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import "@alaskaairux/ods-button/dist/ods-button";
import 'highlight.js/styles/github.css';
import '../sass/App.scss';

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

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of buttons styles and use cases. The following examples illustrate common button uses followed up by code examples.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-button" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-button</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-button</code>.</p>
        </div>

        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-button`}
        </Highlight>

        <div className="exampleWrapper">
          <ods-button>Default</ods-button>
        </div>

        <Highlight className='html afterCode'>
          {`<ods-button>Default</ods-button>`}
        </Highlight>

        {/* <div className="indention util_fontWeightLight util_type--secondary">
          <p>When needed, <code>ods-button</code> supports autofocus.</p>
          <p>Be sure not to touch the view, and this element should appear with the <code>:focus</code> UI.</p>
        </div>

        <div className="exampleWrapper">
          <ods-button autofocus>Default</ods-button>
        </div> */}

        <Highlight className='html afterCode'>
          {`<ods-button autofocus>Default</ods-button>`}
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>When needed, <code>ods-button</code> supports the use case of multiple buttons in a parent container.</p>
          <p>Container Buttons require a parent container with the class of <code>ods-containedButtons</code>. Each use of <code>ods-button</code> requires the addition of the <code>outercontext</code> boolean attribute on the element. Please see the following code examples.</p>
          <p>For more information on <code>ods-containedButtons</code> see <ods-hyperlink inline href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#ods-utility-css-.ods-containedButtons" target="_blank">Orion Web Core Style Sheets</ods-hyperlink> for more information.</p>
        </div>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-button outercontext>Default</ods-button>
            <ods-button outercontext condensed>Condensed</ods-button>
            <ods-button outercontext isactive>Active</ods-button>
            <ods-button outercontext disabled>Disabled</ods-button>
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
            <ods-button outercontext flowtype="complete">Complete</ods-button>
            <ods-button outercontext isactive flowtype="complete">Active complete</ods-button>
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
            <ods-button outercontext buttontype="secondary">Default</ods-button>
            <ods-button outercontext buttontype="secondary" condensed>Condensed</ods-button>
            <ods-button outercontext buttontype="secondary" isactive>Active</ods-button>
            <ods-button outercontext buttontype="secondary" disabled>Disabled</ods-button>
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
            <ods-hyperlink role="button">Cancel</ods-hyperlink>
            <ods-button outercontext>Primary offer</ods-button>
            <ods-button outercontext buttontype="secondary">Secondary offer</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-hyperlink role="button">Cancel</ods-hyperlink>
  <ods-button>Primary offer</ods-button>
  <ods-button buttontype="secondary">Secondary offer</ods-button>
</div>`
          }
        </Highlight>

        <div className="exampleWrapper">
          <div className="ods-containedButtons">
            <ods-hyperlink role="button">Cancel</ods-hyperlink>
            <ods-button outercontext>Save</ods-button>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="ods-containedButtons">
  <ods-hyperlink role="button">Hyperlink button</ods-hyperlink>
  <ods-button outercontext>Default button</ods-button>
</div>`
          }

        </Highlight>
      </section>
    );
  }
}

export default Buttons;
