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

        <Highlight className='js afterCode openCode'>
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

        <Highlight className='html afterCode openCode'>
          {`
  <auro-button onClick={() => this.toggleDialog('#demo1')}>
    Open Dialog
  </auro-button>

`}
        </Highlight>

        <auro-header level="2" display="700">The structure</auro-header>

        <p>The structure of the dialog itself consists of three slots. The <code>header</code>, <code>content</code> and <code>footer</code> slots. See the scaffolding example below for adding content to the component.</p>

        <Highlight className='html afterCode openCode'>
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
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="demo--inline exampleWrapper auro_containedButtons">
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
        </auro-accordion>



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
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
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
        </auro-accordion>



        {/* Decoupled dialog experiences */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Dialog with decoupled experiences</auro-header>

        <p>For use case where the size of the dialog on desktop should not influence the size of the dialog on mobile, the combination API of <code>sm lg</code> and <code>md lg</code> can be used.</p>

        <p>The use of these combinations will set the first value to the dialog for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen depending on the length of the conent.</p>

        <p>See the following examples.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#smLgDialog')}>Open [sm lg] dialog</auro-button>
          <auro-button onClick={() => this.toggleDialog('#smMdDialog')}>Open [md lg] dialog</auro-button>
        </div>

        <auro-dialog id="smLgDialog" sm lg>
          <span slot="header">Small Modal Dialog</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDialogClose('#smLgDialog')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-dialog>

        <auro-dialog id="smMdDialog" md lg>
          <span slot="header">Medium Modal Dialog</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDialogClose('#smMdDialog')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-dialog>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDialog('#smLgDialog')}>Open [sm lg] dialog</auro-button>
  <auro-button onClick={() => this.toggleDialog('#smMdDialog')}>Open [md lg] dialog</auro-button>
</div>

<auro-dialog id="smLgDialog" sm lg>
  <span slot="header">Small Modal Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDialogClose('#smLgDialog')}>I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-dialog>

<auro-dialog id="smMdDialog" md lg>
  <span slot="header">Medium Modal Dialog</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDialogClose('#smMdDialog')}>I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-dialog>`}
          </Highlight>
        </auro-accordion>



        {/* Unformatted dialog experiences */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Unformatted dialog</auro-header>

        <p>For use case where the use of a dialog is to be more freeform, but the experience and base tooling for the dialog are still requested, there is the <code>unformatted</code> property.</p>

        <p>This property can be used in combination of any other use case of the dialog, but it will render a unformatted dialog window allowing for full customization of content within the scope of the window. </p>

        <auro-header level="3" display="500">Responsive padding</auro-header>
        <p>Part of the dialog design spec is its responsive padding. To take advantage of this for your content within the scope of the dialog, be sure to use the selector <code>unformattedWrapper</code> that can be imported from the package here;</p>

        <pre>
          <code className="html afterCode hljs openCode">
            import '@alaskaairux/auro-interruption/dist/style-blank.css'
          </code>
        </pre>

        <auro-header level="3" display="500">Accessibility</auro-header>
        <p>Within the scope of the auro-dialog there is <code>aria-labelledby="dialog-header"</code>. To make proper use of this, in an unformatted dialog, the developer is required to add <code>id="dialog-header"</code> to the content header within the dialog content.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#unformattedMdDialog')}>Unformatted Medium Dialog</auro-button>
        </div>

        <auro-dialog id="unformattedMdDialog" unformatted md lg ondark>
          <span slot="content">
            <img style={{display: "block", width: "100%"}} src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
            <div class="unformattedWrapper">
              <h1 id="dialog-header">This is a header</h1>
              These are words that are slotted into the scope of the custom element.
            </div>
          </span>
        </auro-dialog>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`import '@alaskaairux/auro-interruption/dist/style-blank.css'

<auro-button onClick={() => this.toggleDialog('#unformattedMdDialog')}>Unformatted Medium Dialog</auro-button>

<auro-dialog id="unformattedMdDialog" unformatted md lg ondark>
  <span slot="content">
    <img style={{display: "block", width: "100%"}} src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="dialog-header">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
    </div>
  </span>
</auro-dialog>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroDialog;
