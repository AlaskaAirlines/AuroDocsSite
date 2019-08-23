import React, { Component } from "react";
// import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties.css';
import '../sass/App.scss';

// eslint-disable-next-line import/no-webpack-loader-syntax
import Arrowdown from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/arrowdown.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Arrowup from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/arrowup.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Arrowleft from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/arrowleft.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Arrowright from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/arrowright.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Chevrondown from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/chevrondown.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Chevronleft from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/chevronleft.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Chevronright from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/chevronright.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Chevronup from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/chevronup.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Classiccheckmark from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/classiccheckmark.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Close from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/close.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Stepout from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/stepout.svg';

class Icons extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ...
  //   }
  // };

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/orion-icons'];
    return `@alaskaairux/orion-icons: ${dependencies}`;
  };

  render() {
    return (
      <section id="icons">

        <h1 className="heading heading--max">Orion Icons</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionIcons"
          npm="https://www.npmjs.com/package/@alaskaairux/orion-icons"
          code="https://github.com/AlaskaAirlines/OrionIcons/tree/master/src/icons"
          version={this.showVersion()}
        />

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>The Orion Design System fully supports a wide range of icons for different use cases. The following examples illustrate common icon uses.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/orion-icons" target="_blank">Orion Icons</ods-hyperlink> for more information as how to install and full API for icon use.</p>
        </div>

        <div className="iconsWrapper">
          <div title="arrowdown.svg">
            <Arrowdown />
            <span>arrowdown.svg</span>
          </div>
          <div title="arrowdup.svg">
            <Arrowup />
            <span>arrowdup.svg</span>
          </div>
          <div title="arrowleft.svg">
            <Arrowleft />
            <span>arrowleft.svg</span>
          </div>
          <div title="arrowright.svg">
            <Arrowright />
            <span>arrowright.svg</span>
          </div>
          <div title="chevrondown.svg">
            <Chevrondown />
            <span>chevrondown.svg</span>
          </div>
          <div title="chevronleft.svg">
            <Chevronleft />
            <span>chevronleft.svg</span>
          </div>
          <div title="chevronright.svg">
            <Chevronright />
            <span>chevronright.svg</span>
          </div>
          <div title="chevronup.svg">
            <Chevronup />
            <span>chevronup.svg</span>
          </div>
          <div title="classiccheckmark.svg" className="classicCheckMark">
            <Classiccheckmark />
            <span>classiccheckmark.svg</span>
          </div>
          <div title="close.svg" className="close">
            <Close />
            <span>close.svg</span>
          </div>
          <div title="stepout.svg">
            <Stepout />
            <span>stepout.svg</span>
          </div>
        </div>

      </section>
    );
  }
}

export default Icons;
