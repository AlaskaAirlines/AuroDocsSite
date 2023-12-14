import React, { Component } from "react";
import { Nav } from './nav.js';
import DeprecatedIconList from './deprecatedIconList';

class Icons extends Component {

  render() {
    return (
      <section id="icons">
        <Nav />
        <auro-header level="1" display="display">Deprecated Icons</auro-header>
        <p className="auro_baseParagraph">Over time, things change. And sadly some things must go away. Please monitor this list of icons as they will be removed with the next MAJOR release of Auro icons. </p>
        <DeprecatedIconList />
      </section>
    );
  }
}

export default Icons;
