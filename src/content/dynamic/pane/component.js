import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';
import './style.scss';

class AuroPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-pane'];

    return `@alaskaairux/auro-pane: ${dependencies}`;
  };

  

  render() {
    return (
      <section id="carousel">

        <Nav />

        <auro-header level="2" display="display">Carousel</auro-header>

        <p>Use auro-pane to display selectable shoulder dates and associated prices. </p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-pane</code> element should be used in situations where users may:</p>
        <ul>
          <li>Select a date to see available flight options</li>
          <li>See multiple dates with price and availability information</li>
        </ul>

        <auro-header level="2" display="700">Display date</auro-header>
        <div className="demo--inline exampleWrapper paneContainer">
          <auro-pane date="2020-09-20"></auro-pane>
          <auro-pane date="2020-09-21" selected></auro-pane>
          <auro-pane date="2020-09-22" disabled></auro-pane>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>`}
        </Highlight>

        <auro-header level="2" display="700">Display date and price</auro-header>
        <div className="demo--inline exampleWrapper paneContainer">
          <auro-pane date="2020-09-20" price="$500"></auro-pane>
          <auro-pane date="2020-09-21" price="$501" selected></auro-pane>
          <auro-pane date="2020-09-22" price="" disabled></auro-pane>
        </div>
        <Highlight className='html afterCode'>
          {`<auro-pane date="2020-09-10" price="$500"></auro-pane>
<auro-pane date="2020-09-21" price="$501" selected></auro-pane>
<auro-pane date="2020-09-22" price="" disabled></auro-pane>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-pane"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-pane"
          code="https://github.com/AlaskaAirlines/auro-pane/blob/master/src/auro-pane.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroPane;
