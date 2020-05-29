import React, { Component } from "react";
import { ButtonNav } from './buttonNav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';
import buildStatus from '@alaskaairux/ods-button/docs/BUILD_STATUS.md'

class AuroButtons extends Component {

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
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-button'];

    return `@alaskaairux/ods-button: ${dependencies}`;
  };

  render() {
    return (
      <section id="buttons">

        <ButtonNav />

        <h1 className="auro_heading auro_heading--display">Auro Button</h1>

        <p>The Auro Design System fully supports a wide range of buttons styles and use cases. The following examples illustrate common button uses followed up by code examples.</p>
        <p>See <auro-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-button" target="_blank">instructions</auro-hyperlink> for more information as how to install and full API for the <code>auro-button</code> Auro base element.</p>
        <p>Illustrated in this example is a stand-alone use of <code>auro-button</code>.</p>

        <h2 className="auro_heading auro_heading--800">Button use cases</h2>

        <p>The <code>auro-button</code> element should be used in situations where users may:</p>
        <ul>
          <li>submit a form</li>
          <li>begin a new task</li>
          <li>trigger a new UI element to appear on the page</li>
          <li>specify a new or next step in a process</li>
        </ul>

        <h2 className="auro_heading auro_heading--800">Buttons are not Hyperlinks</h2>
        <p>In cases were the action of the button would not fit the criteria above, it is most likely a Hyperlink. In that situation it is recommended that the <code>auro-hyperlink</code> element be used.</p>

        <h2 className="auro_heading auro_heading--700">Default States</h2>

        <div className="demo--inline exampleWrapper">
          <auro-button>Primary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-button>Primary</auro-button>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-button secondary>Secondary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-button secondary>Secondary</auro-button>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-button tertiary>Tertiary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-button tertiary>Tertiary</auro-button>`}
        </Highlight>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button>Primary</auro-button>
          <auro-button secondary>Secondary</auro-button>
          <auro-button tertiary>Tertiary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`
<div class="exampleWrapper auro_containedButtons">
    <auro-button>Primary</auro-button>
    <auro-button secondary>Secondary</auro-button>
    <auro-button tertiary>Tertiary</auro-button>
</div>`}
        </Highlight>

        <h1 className="auro_heading auro_heading--700">Auro Button - Default States onDark</h1>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button ondark>Primary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-button ondark>Primary</auro-button>`}
        </Highlight>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button secondary ondark>Secondary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-button secondary ondark>Secondary</auro-button>`}
        </Highlight>

        <div className="demo--inline exampleWrapper--ondark">
          <auro-button tertiary ondark>Tertiary</auro-button>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-button tertiary ondark>Tertiary</auro-button>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-button"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button/blob/master/src/auro-button.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroButtons;
