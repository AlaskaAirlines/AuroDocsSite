import React, { Component } from "react";
import { Nav } from './nav';
import 'highlight.js/styles/github.css';
import Highlight from 'react-highlight';


class Toast extends Component {

  render() {
    return (
      <section id="toast">

        <Nav />
        <h1 className="auro_heading auro_heading--display">ODS Toast</h1>

        <p>A Toast serves as a feedback and confirmation interaction feedback after a user has taken action within an interface.</p>
        <p>See <auro-hyperlink href="http://auro.alaskaair.com/components/orion/toast/install">ODS Toast</auro-hyperlink> for more information as how to install and full API for icon use.</p>

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
