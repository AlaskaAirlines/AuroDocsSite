import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import icons from '../assets/icons/icons.png';

import IconList from './iconList';


class Icons extends Component {

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/icons'];
    return `@alaskaairux/icons: ${dependencies}`;
  };

  render() {
    return (
      <section id="icons">
        <h1 className="auro_heading auro_heading--display">Icons</h1>
        <img className="util_stackMarginXl--bottom" src={icons} alt="page header" />

        <h2 className="auro_heading auro_heading--600">Overview</h2>
        <p className="auro_baseParagraph">Our icons are friendly, flat, and minimal. We use a mix of rounded corners and right angles, intentional open lines, and an unfilled outline style to create our easy-breezy vibe. </p>

        <p className="auro_baseParagraph">UI icons symbolize commands, navigation, utility, or common actions. Use icons to reinforce visual context and enhance usability. </p>

        <IconList />

        <LinkIcons
          github="https://github.com/AlaskaAirlines/Icons"
          npm="https://www.npmjs.com/package/@alaskaairux/icons"
          code="https://github.com/AlaskaAirlines/Icons/tree/master/src/icons"
          version={this.showVersion()}
        />

      </section>
    );
  }
}

export default Icons;
