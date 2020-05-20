import React, { Component } from "react";
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import 'highlight.js/styles/github.css';

class Options extends Component {

  constructor(props) {
    super(props);
    this.state = {
      radios: ' "" ',
      checkboxes: ' [] '
    }

    this.radios = React.createRef()
    this.checkboxes = React.createRef()
  };

  componentDidMount() {
    this.radios.current.addEventListener('input', (e) => {
      this.setState({radios: JSON.stringify(e.target.value)})
    } )

    this.checkboxes.current.addEventListener('input', (e) => {
      this.setState({checkboxes: JSON.stringify(e.target.value)})
    } )
  }


  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-inputoptions'];

    return `@alaskaairux/ods-inputoptions: ${dependencies}`;
  };

  render() {
    return (
      <section id="inputOptions">

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-inputoptions"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-ods-inputoptions"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-inputoptions/blob/master/src/ods-ods-inputoptions.js"
          version={this.showVersion()}
        />
        <h1 className="auro_heading auro_heading--display">ODS Input Options</h1>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of options types and styles. The following examples illustrate common input option uses followed up by code examples.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-ods-inputoptions" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-ods-inputoptions</code> Orion base element.</p>
          <p>Illustrated in this example is a stand-alone use of <code>ods-ods-inputoptions</code>.</p>
        </div>

        <h2 className="auro_heading auro_heading--700">Install</h2>
        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-inputoptions`}
        </Highlight>

        <p>Default radio buttons</p>
        <p className="dataSelected">You selected: <span>{this.state.radios}</span></p>
        <div className="exampleWrapper">
          <ods-inputoptions id="rdo" type="radio" name="radios1" label="Form label goes here" for="radio1" componentData='[
            { "id": "radio1", "value": "yes", "label": "Yes" },
            { "id": "radio2", "value": "no", "label": "No" },
            { "id": "radio3", "value": "maybe", "label": "Maybe" }
          ]' ref={this.radios}></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="radio" name="radios" label="Form label goes here" for="radio1" componentData='[
  { "id": "radio1", "value": "yes", "label": "Yes" },
  { "id": "radio2", "value": "no", "label": "No" },
  { "id": "radio3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>

        <p>Pre-selected radio button options</p>
        <div className="exampleWrapper">
        <ods-inputoptions type="radio" name="radios2" label="Form label goes here" for="radio1" componentData='[
            { "id": "radio1", "value": "yes", "label": "Yes", "checked": true  },
            { "id": "radio2", "value": "no", "label": "No" },
            { "id": "radio3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="radio" name="radios" label="Form label goes here" for="radio1" componentData='[
  { "id": "radio1", "value": "yes", "label": "Yes", "checked": true },
  { "id": "radio2", "value": "no", "label": "No" },
  { "id": "radio3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>

        <p>Disabled radio button option</p>
        <div className="exampleWrapper">
        <ods-inputoptions disabled type="radio" name="radios3" label="Form label goes here" for="radio1" componentData='[
            { "id": "radio1", "value": "yes", "label": "Yes" },
            { "id": "radio2", "value": "no", "label": "No" },
            { "id": "radio3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="radio" name="radios" label="Form label goes here" for="radio1" componentData='[
  { "id": "radio1", "value": "yes", "label": "Yes" },
  { "id": "radio2", "value": "no", "label": "No" },
  { "id": "radio3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>

        <p>Horizontal radio buttons (max 3) option</p>
        <div className="exampleWrapper">
        <ods-inputoptions horizontal type="radio" name="radios4" label="Form label goes here" for="radio1" componentData='[
            { "id": "radio1", "value": "yes", "label": "Yes" },
            { "id": "radio2", "value": "no", "label": "No" },
            { "id": "radio3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="radio" horizontal name="radios" label="Form label goes here" for="radio1" componentData='[
  { "id": "radio1", "value": "yes", "label": "Yes" },
  { "id": "radio2", "value": "no", "label": "No" },
  { "id": "radio3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>

        <p>Radio buttons error</p>
        <div className="exampleWrapper">
        <ods-inputoptions type="radio" error="There is an error" name="radios5" label="Form label goes here" for="radio1" componentData='[
            { "id": "radio1", "value": "yes", "label": "Yes" },
            { "id": "radio2", "value": "no", "label": "No" },
            { "id": "radio3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="radio" error="There is an error" name="radios" label="Form label goes here" for="radio1" componentData='[
  { "id": "radio1", "value": "yes", "label": "Yes" },
  { "id": "radio2", "value": "no", "label": "No" },
  { "id": "radio3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>





        <p>Default checkboxes</p>
        <p className="dataSelected">You selected: <span>{this.state.checkboxes}</span></p>
        <div className="exampleWrapper">
        <ods-inputoptions type="checkbox" name="cbxs1" label="Form label goes here" for="cbx1" componentData='[
            { "id": "cbx1", "value": "yes", "label": "Yes" },
            { "id": "cbx2", "value": "no", "label": "No" },
            { "id": "cbx3", "value": "maybe", "label": "Maybe" }
          ]' ref={this.checkboxes}></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="cbx" name="cbxs" label="Form label goes here" for="cbx1" componentData='[
  { "id": "cbx1", "value": "yes", "label": "Yes" },
  { "id": "cbx2", "value": "no", "label": "No" },
  { "id": "cbx3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>


        <p>Pre-selected checkbox options</p>
        <div className="exampleWrapper">
        <ods-inputoptions type="checkbox" name="cbxs2" label="Form label goes here" for="cbx1" componentData='[
            { "id": "cbx1", "value": "yes", "label": "Yes", "checked": true  },
            { "id": "cbx2", "value": "no", "label": "No" },
            { "id": "cbx3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="checkbox" name="cbxs" label="Form label goes here" for="cbx1" componentData='[
  { "id": "cbx1", "value": "yes", "label": "Yes", "checked": true },
  { "id": "cbx2", "value": "no", "label": "No" },
  { "id": "cbx3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>




        <p>Disabled checkbox option</p>
        <div className="exampleWrapper">
        <ods-inputoptions disabled type="checkbox" name="cbxs3" label="Form label goes here" for="cbx1" componentData='[
            { "id": "cbx1", "value": "yes", "label": "Yes" },
            { "id": "cbx2", "value": "no", "label": "No" },
            { "id": "cbx3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="checkbox" name="cbxs" label="Form label goes here" for="cbx1" componentData='[
  { "id": "cbx1", "value": "yes", "label": "Yes" },
  { "id": "cbx2", "value": "no", "label": "No" },
  { "id": "cbx3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>




        <p>Horizontal checkbox (max 3) option</p>
        <div className="exampleWrapper">
        <ods-inputoptions horizontal type="checkbox" name="cbxs4" label="Form label goes here" for="cbx1" componentData='[
            { "id": "cbx1", "value": "yes", "label": "Yes" },
            { "id": "cbx2", "value": "no", "label": "No" },
            { "id": "cbx3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="checkbox" horizontal name="cbxs" label="Form label goes here" for="cbx1" componentData='[
  { "id": "cbx1", "value": "yes", "label": "Yes" },
  { "id": "cbx2", "value": "no", "label": "No" },
  { "id": "cbx3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>


        <p>Checkbox error</p>
        <div className="exampleWrapper">
        <ods-inputoptions error="There is an error" type="checkbox" name="cbxs5" label="Form label goes here" for="cbx1" componentData='[
            { "id": "cbx1", "value": "yes", "label": "Yes" },
            { "id": "cbx2", "value": "no", "label": "No" },
            { "id": "cbx3", "value": "maybe", "label": "Maybe" }
          ]'></ods-inputoptions>
        </div>

        <Highlight className='html afterCode'>
          {`
<ods-inputoptions type="checkbox" error="There is an error" name="cbxs" label="Form label goes here" for="cbx1" componentData='[
  { "id": "cbx1", "value": "yes", "label": "Yes" },
  { "id": "cbx2", "value": "no", "label": "No" },
  { "id": "cbx3", "value": "maybe", "label": "Maybe" }
]'></ods-inputoptions>
          `}
        </Highlight>






      </section>
    );
  }
}

export default Options;
