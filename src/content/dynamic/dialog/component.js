import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import ContentExample from './contentExample.js';
import 'highlight.js/styles/github.css';

class AuroDialog extends Component {

  constructor(props) {
    super(props);

    this.toggleDialog = this.toggleDialog.bind(this);
    this.toggleDialogClose = this.toggleDialogClose.bind(this);
  };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-dialog'];

    return `@alaskaairux/auro-dialog: ${dependencies}`;
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

  render() {
    return (
      <section id="dialog">

        <Nav />

        <auro-header level="2" display="display">Dialog</auro-header>

        <p>The auro-dialog component is an intrusive interactive component, not passive. The component is best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the dialog content.</p>
        <p>The auro-dialog component also supports a modal (blocking) state where the user must interact with the content of the dialog in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.</p>
        <p>Auro holds the opinions of the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> on dialog and modal use to be true.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-dialog</code> element should be used in situations where users may:</p>
        <ul>
          <li>Be prompted to take an action before doing anything else or going back</li>
          <li>Be prompted to view content with the option of closing it</li>
        </ul>

        <auro-header level="2" display="700">The setup</auro-header>

        <p>Triggering the dialog relies on functions being installed. See the following example code that is installed into this demo.</p>

        <p>Notice the use of <code>body.style.overflow = 'hidden';</code>. This is an a11y feature that will lock the background scroll when the dialog is open. These events need to be triggered for this to work. The auro-dialog component's built-in close feature for modal dialogs is also pre-configured to address this. </p>

        <p>If for any reason this feature is unwanted, simple remove this reference and the dialog will scroll as expected. NOTE: This comes highly unrecommended.</p>

        <Highlight className='js afterCode'>
          {`
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
`}
        </Highlight>

        <p>Once the JavaScript is added to the scope of the experience, the next part is adding a trigger. In this example, the button component will toggle a dialog with the ID of <code>#demo1</code>.</p>

        <Highlight className='html afterCode'>
          {`<auro-button onClick={() => this.toggleDialog('#demo1')}>Open Dialog</auro-button>`}
        </Highlight>

        <auro-header level="2" display="700">The structure</auro-header>

        <p>The structure of the dialog itself consists of three slots. The <code>header</code>, <code>content</code> and <code>footer</code> slots. See the scaffolding example below for adding content to the component.</p>

        <Highlight className='html afterCode'>
          {`
<auro-dialog id="[unique ID]">
  <span slot="header">[header content]</span>
  <span slot="content">
    [body content]
  </span>
  <span slot="footer">
    [footer content]
  </span>
</auro-dialog>
`}
        </Highlight>

        <p>It should be noted that the <code>footer</code> slot is reserved for the placement of action buttons.</p>


        {/* Standard Dialog examples */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Dialog size options (sm, md, default)</auro-header>

        <p>The auro-dialog supports three different sizes. A default dialog is equal to the large size dialog. Using the <code>sm</code> and <code>md</code> attributes, the component supports these sizes for both mobile and desktop. </p>

        <p>The size attribute effects the <code>width</code> of the desktop dialog. Its <code>height</code> is dictated by the content. On mobile, the <code>size</code> attribute effects the <code>maximum height</code> the dialog will use of the device screen. Its width will be 100%.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#defaultDialog')}>Open default dialog</auro-button>
          <auro-button onClick={() => this.toggleDialog('#mediumDialog')}>Open medium dialog</auro-button>
          <auro-button onClick={() => this.toggleDialog('#smallDialog')}>Open small dialog</auro-button>
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

        <auro-dialog id="mediumDialog" md>
          <span slot="header">Medium Dialog</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDialogClose('#mediumDialog')}>Close</auro-button>
            </div>
          </span>
        </auro-dialog>

        <auro-dialog id="smallDialog" sm>
          <span slot="header">Small Dialog</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDialogClose('#smallDialog')}>Close</auro-button>
            </div>
          </span>
        </auro-dialog>

        <Highlight className='html afterCode'>
          {`
<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDialog('#defaultDialog')}>Open default dialog</auro-button>
  <auro-button onClick={() => this.toggleDialog('#mediumDialog')}>Open medium dialog</auro-button>
  <auro-button onClick={() => this.toggleDialog('#smallDialog')}>Open small dialog</auro-button>
</div>

<auro-dialog id="defaultDialog">
  <span slot="header">Default Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-dialog>

<auro-dialog id="mediumDialog" md>
  <span slot="header">Medium Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-dialog>

<auro-dialog id="smallDialog" sm>
  <span slot="header">Small Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-dialog>`}
        </Highlight>



        {/* Modal Dialog examples */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Modal Dialog and size options (sm, md, default)</auro-header>

        <p>The auro-dialog supports a modal dialog state that will lock a user into interacting with the modal dialog. To activate, use the <code>modal</code> attribute.</p>
        <p>When using this state, the modal dialog must include a button action to dismiss the modal dialog as the closing icon will not be available and the user will not be able to click outside the modal dialog to dismiss. </p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#defaultModalDialog')}>Open default modal</auro-button>
          <auro-button onClick={() => this.toggleDialog('#mediumModalDialog')}>Open medium modal</auro-button>
          <auro-button onClick={() => this.toggleDialog('#smallModalDialog')}>Open small modal</auro-button>
        </div>

        <auro-dialog id="defaultModalDialog" modal>
          <span slot="header">Default Modal Dialog</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDialogClose('#defaultModalDialog')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-dialog>

        <auro-dialog id="mediumModalDialog" md modal>
          <span slot="header">Medium Modal Dialog</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDialogClose('#mediumModalDialog')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-dialog>

        <auro-dialog id="smallModalDialog" sm modal>
          <span slot="header">Small Modal Dialog</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDialogClose('#smallModalDialog')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-dialog>

        <Highlight className='html afterCode'>
          {`<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDialog('#defaultModalDialog')}>Open default modal</auro-button>
  <auro-button onClick={() => this.toggleDialog('#mediumModalDialog')}>Open medium modal</auro-button>
  <auro-button onClick={() => this.toggleDialog('#smallModalDialog')}>Open small modal</auro-button>
</div>

<auro-dialog id="defaultModalDialog" modal>
  <span slot="header">Default Modal Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDialogClose('#defaultModalDialog')}>I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-dialog>

<auro-dialog id="mediumModalDialog" md modal>
  <span slot="header">Medium Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDialogClose('#mediumModalDialog')}>I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-dialog>

<auro-dialog id="smallModalDialog" sm modal>
  <span slot="header">Small Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDialogClose('#smallModalDialog')}>I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-dialog>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-dialog"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-dialog"
          code="https://github.com/AlaskaAirlines/auro-dialog/blob/master/src/auro-dialog.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroDialog;
