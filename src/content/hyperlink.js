import React, { Component } from "react";
import "@alaskaairux/ods-hyperlink/dist/ods-hyperlink";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import '../sass/App.scss';

class Hyperlink extends Component {
  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-hyperlink'];

    return `@alaskaairux/ods-hyperlink: ${dependencies}`;
  };

  render() {
    return (
      <section id="hyperlinks">
        <h1 className="heading heading--max">Hyperlink</h1>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-hyperlink"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink/blob/master/src/ods-hyperlink.js"
          version={this.showVersion()}
        />

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>Hyperlinks form the backbone of how users navigate through a site or app. The following example illustrates how the <code>ods-hyperlink</code> Orion component can be used.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-hyperlink" target="_blank">instructions</ods-hyperlink> for more information as how to install and full API for the <code>ods-hyperlink</code> Orion base element.</p>
        </div>

        <Highlight className='install'>
          {`$npm i @alaskaairux/ods-hyperlink`}
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <ods-hyperlink>No href</ods-hyperlink>
          <ods-hyperlink href="/">Default w/href</ods-hyperlink>
          <ods-hyperlink href="/" target="_blank">External href</ods-hyperlink>
          <p>These are words <ods-hyperlink href="/" target="_blank" inline>with inline external link</ods-hyperlink> to something and something <ods-hyperlink href="/" inline>internal</ods-hyperlink>.</p>
        </div>

        <Highlight className='html afterCode'>
          {
`<div className="demo--inline">
  <ods-hyperlink>No href</ods-hyperlink>
  <ods-hyperlink href="/">Default w/href</ods-hyperlink>
  <ods-hyperlink href="/" target="_blank">External href</ods-hyperlink>
  <p>These are words <ods-hyperlink href="/" target="_blank" inline>with inline external link</ods-hyperlink> to something and something <ods-hyperlink href="/" inline>internal</ods-hyperlink>.</p>
</div>`
          }
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>Aside from the standard hyperlink use-case, the <code>ods-hyperlink</code> element is intended to be used for <code>button</code> situations as illustrated below where the 'link' UI is desired.</p>
          <p>In this scenario an <code>href</code> no longer can be applied to the element. But a click-event must be passed to the element. In this example clicking on the 'link' will produce a default dialog box.</p>
        </div>

        <div className="exampleWrapper">
          <ods-hyperlink role="button">Cancel button</ods-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {
`<ods-hyperlink role="button">Cancel button</ods-hyperlink>`
          }
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>In special cases, the <code>ods-hyperlink</code> element can be used for a CTA 'button' look when the button UI is desired, but the semantic use is an anchor tag.</p>
          <p>In this scenario, by passing in the <code>cta</code> flag, the hyperlink presents itself as a button. As illustrated, this will also work with the <code>target="_blank"</code> feature.</p>
        </div>

        <div className="exampleWrapper">
          <ods-hyperlink cta href="#">Cancel button</ods-hyperlink>
          <ods-hyperlink cta target="_blank" href="#">Cancel button</ods-hyperlink>
        </div>

        <Highlight className='html afterCode'>
          {
`<ods-hyperlink cta href="#">Cancel button</ods-hyperlink>
<ods-hyperlink cta target="_blank" href="#">Cancel button</ods-hyperlink>`
          }
        </Highlight>

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>Aside from the standard hyperlink use-case, the <code>ods-hyperlink</code> element is intended to be used for <code>tab</code> situations as illustrated below where the 'tab' ui is desired.</p>
          <p>In this scenario an <code>href</code> no longer can be applied to the element. But a click-event must be passed to the element. In this example clicking on the 'link' will produce a default dialog box.</p>
          <p>When using the <code>role="tab"</code> style, it is required to wrap the tabs in a parent container with <code>role="tablist"</code> for a11y compliance. For Orion Design, you are required to apply the CSS class of <code>ods-tablist</code>. See <ods-hyperlink inline href="https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#ods-utility-css-.ods-tablist" target="_blank">Orion Web Core Style Sheets</ods-hyperlink> docs for more information.</p>
        </div>

        <div className="exampleWrapper">
          <div role="tablist" className="ods-tablist">
            <ods-hyperlink role="tab" tabisactive>Tab option 1</ods-hyperlink>
            <ods-hyperlink role="tab">Tab option 2</ods-hyperlink>
            <ods-hyperlink role="tab">Tab option 3</ods-hyperlink>
          </div>
        </div>

        <Highlight className='html afterCode'>
          {
`<div role="tablist" className="ods-tablist">
  <ods-hyperlink role="tab">Tab option 1</ods-hyperlink>
  <ods-hyperlink role="tab">Tab option 2</ods-hyperlink>
  <ods-hyperlink role="tab">Tab option 3</ods-hyperlink>
</div>`
          }
        </Highlight>
      </section>
    );
  }
}

export default Hyperlink;
