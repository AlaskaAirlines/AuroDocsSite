import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import ContentExample from './contentExample.js';
import 'highlight.js/styles/github.css';
import '@alaskaairux/auro-interruption/dist/style-unformatted.css'

class AuroDialog extends Component {

  constructor(props) {
    super(props);

    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleDialogClose = this.toggleDialogClose.bind(this);

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDrawerClose = this.toggleDrawerClose.bind(this);
  };

  toggleDialog = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = 'hidden';
    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDialogClose = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = '';
    dialog.removeAttribute("open");
  }

  toggleDrawer = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = 'hidden';
    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDrawerClose = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = '';
    dialog.removeAttribute("open");
  }

  render() {
    return (
      <section id="dialog">

        <Nav />

        <auro-header level="2" display="display">Interruption</auro-header>

        <p>Auro supports two interruptive components - <code>auro-dialog</code> and <code>auro-drawer</code>. Both are intrusive interactive components, not passive. The components are best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the dialog content.</p>

        <p>Both components also support a modal (blocking) state where the user must interact with the content of the component in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.</p>


        <p>Auro holds the opinions of the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> on dialog and modal use to be true.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-dialog</code> and <code>auro-drawer</code> components should be used in situations where users may:</p>
        <ul>
          <li>Be prompted to take an action before doing anything else or going back</li>
          <li>Be prompted to view content with the option of closing it</li>
        </ul>


        {/* Standard Dialog example */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Dialog example</auro-header>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#defaultDialog')}>Open default dialog</auro-button>
        </div>

        <auro-dialog id="defaultDialog">
          <span slot="header">Default Dialog</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDialogClose('#defaultDialog')}>Close</auro-button>
            </div>
          </span>
        </auro-dialog>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`
<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDialog('#defaultDialog')}>Open default dialog</auro-button>
</div>

<auro-dialog id="defaultDialog">
  <span slot="header">Default Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-dialog>
            `}
          </Highlight>
        </auro-accordion>

        <p>Read the <auro-hyperlink href="http://auro.alaskaair.com/components/auro/interruption/dialog">auro-dialog</auro-hyperlink> documentation for detailed instructions on implementations.</p>

        {/* Standard Drawer example */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Drawer example</auro-header>

        <div className="demo--inline exampleWrapper auro_containedButtons">
        <auro-button onClick={() => this.toggleDrawer('#defaultDrawer')}>Open default drawer</auro-button>
        </div>

        <auro-drawer id="defaultDrawer">
          <span slot="header">Default Drawer</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDrawerClose('#defaultDrawer')}>Close</auro-button>
            </div>
          </span>
        </auro-drawer>

        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`
<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDrawer('#defaultDrawer')}>Open default drawer</auro-button>
</div>

<auro-drawer id="defaultDrawer">
  <span slot="header">Default Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-drawer>
            `}
          </Highlight>
        </auro-accordion>

        <p>Read the <auro-hyperlink href="http://auro.alaskaair.com/components/auro/interruption/drawer">auro-drawer</auro-hyperlink> documentation for detailed instructions on implementations.</p>
      </section>
    );
  }
}

export default AuroDialog;
