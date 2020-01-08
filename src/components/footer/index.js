import React, { Component } from "react";

class Footer extends Component {
  showVersionTokens() {
    const pjson = require('../../../package.json');
    const tokensDependencies = pjson.dependencies['@alaskaairux/orion-design-tokens'];

    return `@alaskaairux/orion-design-tokens: ${tokensDependencies}`;
  };

  showVersionIcons() {
    const pjson = require('../../../package.json');
    const tokensDependencies = pjson.dependencies['@alaskaairux/orion-icons'];

    return `@alaskaairux/orion-icons: ${tokensDependencies}`;
  };

  render() {
    return (
      <footer>
        {/* <p>Global dependencies:</p>
        <small>{this.showVersionTokens()}</small><br/>
        <small>{this.showVersionIcons()}</small> */}
      </footer>
    );
  }
}

export default Footer;
