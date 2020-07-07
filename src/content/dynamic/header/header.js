import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';
import buildStatus from '@alaskaairux/ods-button/docs/BUILD_STATUS.md'

class AuroHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docsBuildStatus: null
    }
  };

  componentWillMount() {
    fetch(buildStatus).then((response) => response.text()).then((text) => {
      this.setState({
        docsBuildStatus: text
      })
    })
  }

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-header'];

    return `@alaskaairux/auro-header: ${dependencies}`;
  };

  render() {
    return (
      <section id="buttons">

        <Nav />

        <auro-header level="2" display="display">Header</auro-header>

        <p>The auro-header component is a simple component for rendering page or content headers without having to deal with font styling. Simply choose the level of the header want and the style type.</p>

        <p>The auro-header component is able to take any combination of options for heading levels and display options. See <auro-hyperlink href="/typography/usage" relative>Auro's header usage guidlines</auro-hyperlink> for additional examples sans web component dependency.</p>

        <auro-header level="3" display="800">Header use cases</auro-header>
        <p>The <code>auro-header</code> element should be used in situations where users may:</p>
        <ul>
          <li>page header</li>
          <li>content / paragraph header</li>
        </ul>

        <auro-header level="2" display="700">Defaults</auro-header>
        <p>The auro-header will default to the <code>h1</code> element with the <code>header--display</code> style.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header>Hello World!</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header>Hello World!</auro-header>`}
        </Highlight>

        <p>Changing the header level does not change the header style. This example will output an <code>h3</code> header element with the default <code>header--display</code> style.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3">Hello World!</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header level="3">Hello World!</auro-header>`}
        </Highlight>

        <p>Or vice-versa. This example will output an <code>h1</code> header element with the <code>header--800</code> style.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header display="800">Hello World!</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header display="800">Hello World!</auro-header>`}
        </Highlight>

        <auro-header level="2" display="700">Header examples</auro-header>

        <div className="demo--inline exampleWrapper">
          <auro-header level="2" display="600">Hello World!</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header level="2" display="600">Hello World!</auro-header>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3" display="500">Hello World!</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header level="3" display="500">Hello World!</auro-header>`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <auro-header level="5" display="400">Hello World!</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header level="5" display="400">Hello World!</auro-header>`}
        </Highlight>

        <auro-header level="3" display="600">Color inheritance</auro-header>
        <p>If there is a CSS selector that has the color definition you want to use with the header, simply wrap the header in a <code>div</code> or <code>span</code> and the auro-header component will inherit the color. </p>

        <div className="demo--inline exampleWrapper">
          <div className="error--on-light">
            <auro-header level="3" display="700">There has been an error</auro-header>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {`<div className="error--on-light">
  <auro-header level="3" display="700">There has been an error</auro-header>
</div>`}
        </Highlight>

        <auro-header level="3" display="600">Direct color use</auro-header>
        <p>If it's prefered not to wrap the header component in another element, use the <code>color</code> property to set the color value directly on the header element.</p>

        <div className="demo--inline exampleWrapper">
          <auro-header level="3" display="700" color="var(--auro-color-border-active-on-light)">On the journey together</auro-header>
        </div>

        <Highlight className='html afterCode'>
          {`<auro-header level="3" display="700" color="var(--auro-color-border-active-on-light)">On the journey together</auro-header>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-header"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-header"
          code="https://github.com/AlaskaAirlines/auro-header/blob/master/src/auro-header.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroHeader;
