import React, { Component } from "react";
import LinkIcons from '../components/linkIcons';
// import "@alaskaairux/ods-swatch";
import "@alaskaairux/ods-swatch/dist/auro-swatch-list";
import "@alaskaairux/ods-swatch/dist/auro-color-avatar";
import '../sass/App.scss';
import data from '../../node_modules/@alaskaairux/orion-design-tokens/dist/tokens/JSData--color.js'
import header from '../assets/color/header.png';
import windows from '../assets/color/windows.png';

const background = data.color.background;
const border = data.color.border;
const midnight = data.color.brand.midnight;
const atlas = data.color.brand.atlas;
const breeze = data.color.brand.breeze;
const tropical = data.color.brand.tropical;
const alpine = data.color.brand.alpine;
const flamingo = data.color.brand.flamingo;
const canyon = data.color.brand.canyon;
const goldcoast = data.color.brand.goldcoast;
const alert = data.color.alert;
const icon = data.color.icon;
const text = data.color.text;
const ui = data.color.ui;

class Swatch extends Component {

  _getColors = (color, background, colorSet) => {

    if (color.hasOwnProperty(background) && color.hasOwnProperty('name')) {
      colorSet.push(
        { "backgroundcolor": color['value'], "colorname": color['name'], "wcag": color['wcag'], "usage": color['usage'] }
      )
    }

    if (color instanceof Object) {
      for (let key in color) {
        this._getColors(color[key], background, colorSet)
      }
    }

    return JSON.stringify(colorSet);
  }

  _getAvatars = (color, type, background, colorSet) => {

    if (color.hasOwnProperty(background) && color.hasOwnProperty('name')) {
      if (background === 'onDark') {
        colorSet.push(
          <auro-color-avatar
            avatartype={type}
            colorname={color['name']}
            ondark
            >
          </auro-color-avatar>
        )
      } else {
        colorSet.push(
          <auro-color-avatar
            avatartype={type}
            colorname={color['name']}
            >
          </auro-color-avatar>
        )
      }
    }

    if (color instanceof Object) {
      for (let key in color) {
        this._getAvatars(color[key], type, background, colorSet)
      }
    }

    return colorSet;
  }

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-swatch'];

    return `@alaskaairux/ods-swatch: ${dependencies}`;
  };

  render() {
    return (
      <section id="Swatch">
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-swatch"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-swatch"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-swatch/blob/master/src/ods-swatch.js"
          version={this.showVersion()}
        />

        <img className="util_marginBottom--xl" src={header} alt="page header" />

        <h1 className="heading heading--max">Color</h1>
        <p className="util_fontWeightLight">The colors within our digital experiences differs from our physical materials. What may appear vibrant on paper may seem dull and uninspired on a glowing screen. As a result, the colors we use within our digital experiences are adjusted to create a more vibrant and inspirational experiences for our guests. In addition to our core colors, an extended palette has been created to add warmth, deeper connection, and more human characteristics to the digital brand.</p>

        <h2 className="heading heading--xl">Accessibility</h2>
        <p className="util_fontWeightLight">We've chosen these colors to be accessed, understood, and used by all people regardless of their age, background, or ability. These colors meet or exceed color contrast <ods-hyperlink inline target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG AA accessibility standards</ods-hyperlink>. </p>

        <h2 className="heading heading--xl">Design Tokens</h2>
        <p className="util_fontWeightLight">We use design tokens to represent the design decisions of our visual language. Color specifications are stored using specific variable names, instead of hard-coded hex or RGBa values.</p>
        <p className="util_fontWeightLight">Below is a list of color tokens with their descriptions and values. Though web and mobile color tokens have identical hex values, the naming pattern differs. For example, color token names are:</p>

        <h2 className="heading heading--xl">Background</h2>
        <img className="util_marginBottom--xl" src={windows} alt="page header" />

        <auro-swatch-list componentData={this._getColors(background, 'neutral', [])}></auro-swatch-list>

        <h2 className="heading heading--xl">User Interaction</h2>
        <h3 className="heading heading--lg">For light backgrounds</h3>

        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(ui, 'ui', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this._getColors(ui, 'onLight', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(ui, 'ui', 'onDark', [])}
        </div>
        <auro-swatch-list darkmode componentData={this._getColors(ui, 'onDark', [])}></auro-swatch-list>

        <h2 className="heading heading--xl">Border</h2>
        <h3 className="heading heading--lg">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(border, 'border', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this._getColors(border, 'onLight', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(border, 'border', 'onDark', [])}
        </div>
        <auro-swatch-list darkmode componentData={this._getColors(border, 'onDark', [])}></auro-swatch-list>

        <h2 className="heading heading--xl">Text</h2>
        <h3 className="heading heading--lg">For light backgrounds</h3>

        <div className="avatarWrapper avatarWrapper--3up">
          {this._getAvatars(text, 'font', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this._getColors(text, 'onLight', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this._getAvatars(text, 'font', 'onDark', [])}
        </div>
        <auro-swatch-list darkmode componentData={this._getColors(text, 'onDark', [])}></auro-swatch-list>

        <h2 className="heading heading--xl">Icon</h2>
        <h3 className="heading heading--lg">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(icon, 'icon', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this._getColors(icon, 'onLight', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(icon, 'icon', 'onDark', [])}
        </div>
        <auro-swatch-list darkmode componentData={this._getColors(icon, 'onDark', [])}></auro-swatch-list>

        <h2 className="heading heading--xl">Alerts / Messaging</h2>
        <h3 className="heading heading--lg">For light backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--3up">
          {this._getAvatars(alert, 'alert', 'onLight', [])}
        </div>
        <auro-swatch-list componentData={this._getColors(alert, 'onLight', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">For dark backgrounds</h3>
        <div className="avatarWrapper avatarWrapper--4up">
          {this._getAvatars(alert, 'alert', 'onDark', [])}
        </div>
        <auro-swatch-list darkmode componentData={this._getColors(alert, 'onDark', [])}></auro-swatch-list>

        <h2 className="heading heading--xl">Digital Personality</h2>
        <p className="util_fontWeightLight">These digital personality tokens should be used within the <ods-hyperlink inline href="/DigitalPersonality">Digital personality</ods-hyperlink> guidelines.</p>

        <h3 className="heading heading--lg">Midnight</h3>
        <auro-swatch-list componentData={this._getColors(midnight, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Atlas</h3>
        <auro-swatch-list componentData={this._getColors(atlas, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Breeze</h3>
        <auro-swatch-list componentData={this._getColors(breeze, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Tropical</h3>
        <auro-swatch-list componentData={this._getColors(tropical, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Alpine</h3>
        <auro-swatch-list componentData={this._getColors(alpine, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Flamingo</h3>
        <auro-swatch-list componentData={this._getColors(flamingo, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Canyon</h3>
        <auro-swatch-list componentData={this._getColors(canyon, 'neutral', [])}></auro-swatch-list>

        <h3 className="heading heading--lg">Goldcoast</h3>
        <auro-swatch-list componentData={this._getColors(goldcoast, 'neutral', [])}></auro-swatch-list>


      </section>
    );
  }
}

export default Swatch;
