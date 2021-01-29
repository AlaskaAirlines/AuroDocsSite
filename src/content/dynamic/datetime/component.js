import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import 'highlight.js/styles/github.css';

class AuroDateTime extends Component {

  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <section id="component">

        <Nav />

        <auro-header level="2" display="display">Date/Time</auro-header>

        <p>The new auro-datetime web components makes it really easy to add dates to your web app with a simple HTML API.  </p>

        <auro-header level="2" display="700">Basic date</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="date"></auro-datetime>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime type="date"></auro-datetime>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Numeric date</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="numeric"></auro-datetime>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime type="numeric"></auro-datetime>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Basic time</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="time"></auro-datetime>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime type="time"></auro-datetime>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Basic date w/long weekday and month</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="date" month="long" weekday="long"></auro-datetime>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime type="date" month="long" weekday="long"></auro-datetime>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Time with options</auro-header>
        <p>See all <auro-hyperlink href="https://bugs.chromium.org/p/chromium/issues/detail?id=928068#c1" target="_blank">timezone options</auro-hyperlink></p>
        <div className="demo--inline exampleWrapper">
          <p>Current location: <auro-datetime type="time"></auro-datetime></p>
          <p>Mid-west: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
          <p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
          <p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<p>Current location: <auro-datetime type="time"></auro-datetime></p>
<p>Mid-west: <auro-datetime type="time" timezone="America/Chicago"></auro-datetime></p>
<p>East coast: <auro-datetime type="time" timezone="America/New_York"></auro-datetime></p>
<p>UTC: <auro-datetime type="time" timezone="UTC"></auro-datetime></p>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Set date with UTC time code</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime><br/>
<auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime utc="2020-09-22T01:38:22Z"></auro-datetime>
<auro-datetime weekday="long" month="long" utc="2020-09-22T01:38:22Z"></auro-datetime>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Set date with string</auro-header>
        <div className="demo--inline exampleWrapper">
          <auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
          <auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime><br/>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime setdate="August 19, 1975 23:15:30"></auro-datetime>
<auro-datetime weekday="long" month="long" setdate="August 19, 1975 23:15:30"></auro-datetime>`}
          </Highlight>
        </auro-accordion>

        <auro-header level="2" display="700">Combinations and slots</auro-header>
        <p>The auro-datetime component also supports a wide series of use cases and slots for positioning content. See the following examples for inspiration and use. </p>
        <div className="demo--inline exampleWrapper">
          <auro-datetime type="year">
            <span slot="pre">In </span>
            <span slot="post">
              day<auro-datetime type="day"></auro-datetime>
              of <auro-datetime type="month" month="long"></auro-datetime>
            </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
          </auro-datetime>
        </div>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<auro-datetime type="year">
  <span slot="pre">In </span>
  <span slot="post">
    day<auro-datetime type="day"></auro-datetime>
    of <auro-datetime type="month" month="long"></auro-datetime>
  </span>falls on a <auro-datetime type="weekday" weekday="long"></auro-datetime>
</auro-datetime>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroDateTime;
