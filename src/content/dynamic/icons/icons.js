import React, { Component } from "react";
import icons from 'assets/icons/icons.png';
import { Nav } from './nav.js';

class Icons extends Component {

  render() {
    return (
      <section id="icons">
        <Nav />
        <img className="util_stackMarginXl--bottom" src={icons} alt="page header" />

        <auro-header level="1" display="display">Icons</auro-header>

        <auro-header level="2" display="600">Overview</auro-header>

        <p className="auro_baseParagraph">Our icons are friendly, flat, and minimal. We use a mix of rounded corners and right angles, intentional open lines, and an unfilled outline style to create our easy-breezy vibe. </p>

        <p className="auro_baseParagraph">UI icons symbolize commands, navigation, utility, or common actions. Use icons to reinforce visual context and enhance usability. </p>

        <auro-header level="2" display="600">Icon Web Component</auro-header>

        <p>For quick application of Icons to any project, be sure to check out the <auro-hyperlink href="/components/auro/icon" relative>auro-icon</auro-hyperlink> component.</p>

        {/* <IconList /> */}

      </section>
    );
  }
}

export default Icons;
