import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

const headers=JSON.stringify(["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]);
const data=JSON.stringify([
  {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
  {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
  {"": "Team meeting", "Wednesday": "10:00am" },
  {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
])

class AuroTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsBuildStatus: null
    }
  };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-table'];

    return `@alaskaairux/auro-table: ${dependencies}`;
  };

  render() {
    return (
      <section id="table">

        <Nav />

        <h1 className="auro_heading auro_heading--display">Table</h1>

        <p>When needing to illusrtate non-dynamic tabular data, the Auro Table component serves a simple need.  Flexible layout. Simple to use JSON API. Responsive. </p>

        <h2 className="auro_heading auro_heading--700">Table use cases</h2>

        <p>The <code>auro-table</code> element should be used in situations where users may:</p>
        <ul>
          <li>Show static tabluar data</li>
        </ul>

        <h2 className="auro_heading auro_heading--700">Default table</h2>

        <div className="demo--inline exampleWrapper">
          <auro-table nowrap columnHeaders={headers} componentData={data}>Default text</auro-table>
        </div>

        <Highlight className='html afterCode'>
          {`
<auro-table
  nowrap
  columnHeaders='["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]'
  componentData='[
    {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
    {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
    {"": "Team meeting", "Wednesday": "10:00am" },
    {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
  ]'>
</auro-table>
`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">React and Svelte support</h2>

        <Highlight className='html afterCode'>
          {`
const headers=JSON.stringify(["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]);
const data=JSON.stringify([
  {"": "Dance class", "Monday": "5:00pm","Wednesday": "5:00pm" },
  {"": "Night classes", "Thursday": "7:00pm","Friday": "7:00pm" },
  {"": "Team meeting", "Wednesday": "10:00am" },
  {"": "Morning workout", "Monday": "8:00am", "Tuesday": "8:00am", "Wednesday": "8:00am", "Thursday": "8:00am", "Friday": "8:00am" }
])

<auro-table nowrap columnHeaders={headers} componentData={data}>Default text</auro-table>
`}
        </Highlight>

        <h2 className="auro_heading auro_heading--700">WCSS Support</h2>

        <p>For use cases where the general design of the Auro Table is needed, but the component is unseable, please use the <auro-hyperlink href="https://alaskaairlines.github.io/WebCoreStyleSheets/#utility-auro-css-#{$scope}.auro_table" target="_blank">.auro_table</auro-hyperlink> styles from the Web Core Style Sheets library.</p>

        <Highlight className='html afterCode'>
          {`
<table class="auro_table">
  <thead>
    <tr>
      <th>The table header</th>
      <th>The table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
  </tbody>
</table>
`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-table"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-table"
          code="https://github.com/AlaskaAirlines/auro-table/blob/master/src/auro-table.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroTable;