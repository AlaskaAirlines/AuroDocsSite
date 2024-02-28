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
        <auro-alert type="warning">For inclusion with JavaScript based front-end development, due to ESM/SSR support requirements, the legacy file type <code>.js</code> and the name convention of <code>_es6.js</code> have been deprecated and will be removed in the next MAJOR release. All users are requested to use the <code>.mjs</code> file type.</auro-alert>
        <DeprecatedIconList />
      </section>
    );
  }
}

export default Icons;
