import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
import '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties.css';
import '../sass/icons.scss';
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
import Checkmarklg from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/checkmarklg.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Checkmarksml from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/checkmarksml.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Close from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/close.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Closelg from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/closelg.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Closesml from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/closesml.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Stepout from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/stepout.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Stepoutlg from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/stepoutlg.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Alert from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/alert.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Creditcard from '-!svg-react-loader!@alaskaairux/orion-icons/dist/icons/creditcard.svg';


class Icons extends Component {

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
          <div title="checkmarklg.svg" className="checkmark">
            <Checkmarklg />
            <span>checkmarklg.svg</span>
          </div>
          <div title="checkmarksml.svg" className="checkmark">
            <Checkmarksml />
            <span>checkmarksml.svg</span>
          </div>
          <div title="close.svg" className="close">
            <Close />
            <span>close.svg</span>
          </div>
          <div title="closelg.svg" className="close">
            <Closelg />
            <span>closelg.svg</span>
          </div>
          <div title="closesml.svg" className="close">
            <Closesml />
            <span>closesml.svg</span>
          </div>
          <div title="stepout.svg">
            <Stepout />
            <span>stepout.svg</span>
          </div>
          <div title="stepoutlg.svg">
            <Stepoutlg />
            <span>stepoutlg.svg</span>
          </div>
          <div title="alert.svg" className="alert">
            <Alert />
            <span>alert.svg</span>
          </div>
          <div title="creditcard.svg" className="creditCard">
            <Creditcard />
            <span>creditcard.svg</span>
          </div>
        </div>

      </section>
    );
  }
}

export default Icons;
