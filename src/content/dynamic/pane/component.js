import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';
import './style.scss';

class AuroPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }

  render() {
    return (
      <section id="carousel">

        <Nav />

        <auro-header level="2" display="display">Pane</auro-header>

        <p>Use auro-pane to display selectable shoulder dates and associated prices. </p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-pane</code> element should be used in situations where users may:</p>
        <ul>
          <li>Select a date to see available flight options</li>
          <li>See multiple dates with price and availability information</li>
        </ul>

        <auro-header level="2" display="700">Display date</auro-header>
        <p>Default using <code>date</code> attribute</p>
        <div className="demo--inline exampleWrapper paneContainer">
          <auro-pane date="2020-09-20"></auro-pane>
          <auro-pane date="2020-09-21" selected></auro-pane>
          <auro-pane date="2020-09-22" disabled></auro-pane>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-pane date="2020-09-20"></auro-pane>
<auro-pane date="2020-09-21" selected></auro-pane>
<auro-pane date="2020-09-22" disabled></auro-pane>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Display date and price</auro-header>
        <p>Default using both <code>date</code> and <code>price</code> attributes.</p>
        <div className="demo--inline exampleWrapper paneContainer">
          <auro-pane date="2020-09-20" price="$500"></auro-pane>
          <auro-pane date="2020-09-21" price="$501" selected></auro-pane>
          <auro-pane date="2020-09-22" price="" disabled></auro-pane>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-pane date="2020-09-10" price="$500"></auro-pane>
<auro-pane date="2020-09-21" price="$501" selected></auro-pane>
<auro-pane date="2020-09-22" price="" disabled></auro-pane>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Use sm size</auro-header>
        <p>Use the <code>sm</code> attribute to main the small UI that is consistent with mobile and desktop.</p>
        <div className="demo--inline exampleWrapper paneContainer">
          <auro-pane sm date="2020-09-20" price="$500"></auro-pane>
          <auro-pane sm date="2020-09-21" price="$501" selected></auro-pane>
          <auro-pane sm date="2020-09-22" price="" disabled></auro-pane>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-pane sm date="2020-09-10" price="$500"></auro-pane>
<auro-pane sm date="2020-09-21" price="$501" selected></auro-pane>
<auro-pane sm date="2020-09-22" price="" disabled></auro-pane>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroPane;
