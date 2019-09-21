import React, { Component } from "react";
import "@alaskaairux/ods-toast/dist/ods-toast";
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';
import LinkIcons from '../components/linkIcons';
import '../sass/App.scss';

class Toast extends Component {

  showVersion() {
    const pjson = require('../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/ods-toast'];
    return `@alaskaairux/ods-toast: ${dependencies}`;
  };

  render() {
    return (
      <section id="toast">

        <h1 className="heading heading--max">Toast</h1>
        <LinkIcons
          github="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-toast"
          npm="https://www.npmjs.com/package/@alaskaairux/ods-toast"
          code="https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-toast/blob/master/src/ods-toast.js"
          version={this.showVersion()}
        />

        <div className="indention util_fontWeightLight util_type--secondary">
          <p>A Toast serves as a feedback and confirmation interaction feedback after a user has taken action within an interface.</p>
          <p>See <ods-hyperlink inline href="https://www.npmjs.com/package/@alaskaairux/ods-toast" target="_blank">ODS Toast</ods-hyperlink> for more information as how to install and full API for icon use.</p>
        </div>

        <div className="demo--inline exampleWrapper">
          <ods-toast title="This is a title" tabindex="0"></ods-toast>
        </div>

        <Highlight className='html afterCode'>
          {
`<ods-toast title="This is a title" tabindex="0"></ods-toast>`
          }
        </Highlight>

        <div className="demo--inline exampleWrapper">
          <ods-toast title="This is a title" message="This is a message" tabindex="0">
            <ods-hyperlink class="util_paddingLeft--none" href="#">Learn more</ods-hyperlink>
          </ods-toast>
        </div>

        <Highlight className='html afterCode'>
          {
`<ods-toast title="This is a title" message="This is a message" tabindex="0">
  <ods-hyperlink class="util_paddingLeft--none" href="#">Learn more</ods-hyperlink>
</ods-toast>`
          }
        </Highlight>

      </section>
    );
  }
}

export default Toast;
