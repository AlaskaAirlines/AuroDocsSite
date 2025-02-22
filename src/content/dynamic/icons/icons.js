import React, { Component } from "react";
import icons from '~/assets/icons/icons.png';
import { Nav } from './nav.js';
import IconList from './iconList';

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

        <auro-alert type="warning">
          <p>For inclusion with JavaScript based front-end development, due to ESM/SSR support requirements, the legacy file type <code>.js</code> and the name convention of <code>_es6.js</code> have been deprecated and will be removed in the next MAJOR release. All users are requested to use the <code>.mjs</code> file type.</p>
          <p>Please see <auro-hyperlink relative href="/deprecated-icons">the deprecated icons list</auro-hyperlink> for more about these updates.</p>
        </auro-alert>

        <IconList />

      </section>
    );
  }
}

export default Icons;
