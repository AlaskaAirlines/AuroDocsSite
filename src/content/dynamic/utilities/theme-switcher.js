import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import content from './theme-switcher.md'
// import { Nav } from './nav.js';
import header from './grid_header.png';
import devMode from './dev-mode.png';
import openExtensions from './openExtensions.png';
import installedButton from './installedButton.png';
import pinExtension from './pinExtension.png';
import app from './app.png';
import file from './aurothemeswitcher.zip'

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentBuild: null
    }

    this.flatten = this.flatten.bind(this);
    this.headingRenderer = this.headingRenderer.bind(this);
  };

  UNSAFE_componentWillMount() {
    fetch(content).then((response) => response.text()).then((text) => {
      this.setState({
        contentBuild: text
      })
    })
  }

  flatten(text, child) {
    return typeof child === 'string'
      ? text + child
      : React.Children.toArray(child.props.children).reduce(this.flatten, text)
  }

  headingRenderer(props) {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(this.flatten, '')
    const slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, {id: slug}, props.children)
  }

  render() {
    return (
      <section className="auro_baseType">
        {/* <Nav /> left in just incase you want to have nav eventually */}

        <auro-header>Auro Theme Switcher</auro-header>

        <img className="util_stackMarginXl--bottom" src={header} alt="page header" />

        <h2 level="3">Overview</h2>

        <p>
          This utility is a theme switcher for the purpose of validating the look and feel of a page with the chosen theme applied.
        </p>
        <p>
          The Readiness Test theme is for use in testing which elements on the rendered page are not styled by the theme. Once applied, the theme will hide (make transparent) all rendered elements that will correctly respond to a published theme. Any elements that are still seen on the page are using color value that should be updated to the latest design token definintions or are Auro components that should be updatd to the latest version.
        </p>

        <h2 level="3">Installation</h2>

        <ol>
          <li>
            Download the Auro Theme Switcher <a href={file} download>here</a>.
          </li>
          <li>
            Unzip the downloaded <code>aurothemeswitcher.zip</code> file.
          </li>
          <li>
            Open Google Chrome
          </li>
          <li>
            Enter <code>chrome://extensions/</code> in the URL navigation bar.
          </li>
          <li>
            Enable <code>Developer Mode</code> in Google Chrome Extensions.<br />
            <img src={devMode} />
          </li>
          <li>
            Click on <code>Load unpacked</code>.
          </li>
          <li>
            Select the unzipped folder in the file chooser.
          </li>
          <li>
            The Auro Theme Switcher extension will now appear in the Google Chrome Extensions list.
          </li>
          <li>
            Open the Google Chrome Extensions toolbar.<br />
            <img src={openExtensions} />
          </li>
          <li>
            Pin the Auro Theme Switcher extension to the Google Chrome Extensions toolbar.<br />
            <img src={pinExtension} />
          </li>
          <li>
            You can now open the Auro Theme Switcher extension by clicking on the Auro icon in the Google Chrome Extensions toolbar.
            <img src={installedButton} />
          </li>
        </ol>

        <h2 level="3">How to use</h2>

        <img src={app} />

        <ol>
          <li>
            Open the Auro Theme Switcher extension by clicking on the Auro icon in the Google Chrome Extensions toolbar.
          </li>
          <li>
            Select the desired theme from the dropdown list.
          </li>
          <li>
            Click the <code>APPLY</code> button.
          </li>
          <li>
            The page will now display with the selected theme applied.
          </li>
          <li>
            To return to the default theme, click the <code>RESET</code> button.
          </li>
        </ol>
        
        <section className="auro-markdown">
          <ReactMarkdown
            children={this.state.contentBuild}
            {... markdownOptions}/>
        </section>
      </section>
    );
  }
}

export default ThemeSwitcher;
