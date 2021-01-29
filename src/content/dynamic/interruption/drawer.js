import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import ContentExample from './contentExample.js';
import 'highlight.js/styles/github.css';
import '@alaskaairux/auro-interruption/dist/style-unformatted.css'

class AuroDialog extends Component {

  constructor(props) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleDrawerClose = this.toggleDrawerClose.bind(this);
  };

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

        <auro-header level="2" display="display">Drawer</auro-header>

        <p>The auro-drawer component is an intrusive interactive component, not passive. The component is best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the dialog content.</p>
        <p>The auro-drawer component also supports a modal (blocking) state where the user must interact with the content of the dialog in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.</p>
        <p>Auro holds the opinions of the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> on dialog and modal use to be true.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-drawer</code> element should be used in situations where users may:</p>
        <ul>
          <li>Be prompted to take an action before doing anything else or going back</li>
          <li>Be prompted to view content with the option of closing it</li>
        </ul>

        <auro-header level="2" display="700">The setup</auro-header>

        <p>Triggering the drawer relies on functions being installed. See the following example code that is installed into this demo.</p>

        <p>Notice the use of <code>body.style.overflow = 'hidden';</code>. This is an a11y feature that will lock the background scroll when the dialog is open. These events need to be triggered for this to work. The auro-drawer component's built-in close feature for modal dialogs is also pre-configured to address this. </p>

        <p>If for any reason this feature is unwanted, simple remove this reference and the dialog will scroll as expected. NOTE: This comes highly unrecommended.</p>

        <Highlight className='js afterCode openCode'>
          {`
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

`}
        </Highlight>

        <p>Once the JavaScript is added to the scope of the experience, the next part is adding a trigger. In this example, the button component will toggle a dialog with the ID of <code>#demo1</code>.</p>

        <Highlight className='html afterCode openCode'>
          {`  <auro-button onClick={() => this.toggleDrawer('#demo1')}>Open Dialog</auro-button>`}
        </Highlight>

        <auro-header level="2" display="700">The structure</auro-header>

        <p>The structure of the dialog itself consists of three slots. The <code>header</code>, <code>content</code> and <code>footer</code> slots. See the scaffolding example below for adding content to the component.</p>

        <Highlight className='html afterCode openCode'>
          {`
  <auro-drawer id="[unique ID]">
    <span slot="header">[header content]</span>
    <span slot="content">
      [body content]
    </span>
    <span slot="footer">
      [footer content]
    </span>
  </auro-drawer>

`}
        </Highlight>

        <p>It should be noted that the <code>footer</code> slot is reserved for the placement of action buttons.</p>


        {/* Default Dialog examples */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Drawer slide-in options (left, default)</auro-header>

        <p>The auro-drawer supports two different entry options. Using the <code>left</code> attribute, the component supports this slide-in mode for both mobile and desktop experiences. </p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDrawer('#defaultDrawer')}>Open default drawer</auro-button>
          <auro-button onClick={() => this.toggleDrawer('#LeftDrawer')}>Open left drawer</auro-button>
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

        <auro-drawer id="LeftDrawer" left>
          <span slot="header">Left Drawer</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDrawerClose('#LeftDrawer')}>Close</auro-button>
            </div>
          </span>
        </auro-drawer>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`
<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDrawer('#defaultDrawer')}>Open default drawer</auro-button>
  <auro-button onClick={() => this.toggleDrawer('#leftDrawer')}>Open left drawer</auro-button>
</div>

<auro-drawer id="defaultDrawer">
  <span slot="header">Default Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-drawer>

<auro-drawer id="leftDrawer" left>
  <span slot="header">Left Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-drawer>`}
          </Highlight>
        </auro-accordion>



        {/* Standard Dialog examples */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Drawer size options (sm, md)</auro-header>

        <p>The auro-drawer supports three different sizes. A default drawer is equal to the large size drawer. Using the <code>sm</code> and <code>md</code> attributes, the component supports these sizes for both mobile and desktop. </p>

        <p>The size attribute effects the <code>width</code> of the desktop drawer. Its <code>height</code> is always 100%. On mobile, the <code>size</code> attribute effects the <code>maximum width</code> the drawer will use of the device screen.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDrawer('#defaultDrawer')}>Open default drawer</auro-button>
          <auro-button onClick={() => this.toggleDrawer('#mediumDrawer')}>Open medium drawer</auro-button>
          <auro-button onClick={() => this.toggleDrawer('#smallDrawer')}>Open small drawer</auro-button>
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

        <auro-drawer id="mediumDrawer" md>
          <span slot="header">Medium Dialog</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDrawerClose('#mediumDrawer')}>Close</auro-button>
            </div>
          </span>
        </auro-drawer>

        <auro-drawer id="smallDrawer" sm>
          <span slot="header">Small Dialog</span>
          <span slot="content">
            <ContentExample />

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button secondary onClick={() => this.toggleDrawerClose('#smallDrawer')}>Close</auro-button>
            </div>
          </span>
        </auro-drawer>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`
<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDrawer('#defaultDrawer')}>Open default drawer</auro-button>
  <auro-button onClick={() => this.toggleDrawer('#mediumDrawer')}>Open medium drawer</auro-button>
  <auro-button onClick={() => this.toggleDrawer('#smallDrawer')}>Open small drawer</auro-button>
</div>

<auro-drawer id="defaultDrawer">
  <span slot="header">Default Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-drawer>

<auro-drawer id="mediumDrawer" md>
  <span slot="header">Medium Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-drawer>

<auro-drawer id="smallDrawer" sm>
  <span slot="header">Small Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
</auro-drawer>`}
          </Highlight>
        </auro-accordion>




        {/* Modal Dialog examples */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Modal Drawer and size options (sm, md, default)</auro-header>

        <p>The auro-drawer supports a modal drawer state that will lock a user into interacting with the modal drawer. To activate, use the <code>modal</code> attribute.</p>
        <p>When using this state, the modal drawer must include a button action to dismiss the modal dialog as the closing icon will not be available and the user will not be able to click outside the modal drawer to dismiss. </p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDrawer('#defaultModalDrawer')}>Open default drawer</auro-button>
          <auro-button onClick={() => this.toggleDrawer('#mediumModalDrawer')}>Open medium drawer</auro-button>
          <auro-button onClick={() => this.toggleDrawer('#smallModalDrawer')}>Open small drawer</auro-button>
        </div>

        <auro-drawer id="defaultModalDrawer" modal>
          <span slot="header">Default Modal Drawer</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDrawerClose('#defaultModalDrawer')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-drawer>

        <auro-drawer id="mediumModalDrawer" md modal>
          <span slot="header">Medium Modal Drawer</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDrawerClose('#mediumModalDrawer')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-drawer>

        <auro-drawer id="smallModalDrawer" sm modal>
          <span slot="header">Small Modal Drawer</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDrawerClose('#smallModalDrawer')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-drawer>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDrawer('#defaultModalDrawer')}>Open default modal</auro-button>
  <auro-button onClick={() => this.toggleDrawer('#mediumModalDrawer')}>Open medium modal</auro-button>
  <auro-button onClick={() => this.toggleDrawer('#smallModalDrawer')}>Open small modal</auro-button>
</div>

<auro-drawer id="defaultModalDrawer" modal>
  <span slot="header">Default Modal Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDrawerClose('#defaultModalDrawer')}>I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-drawer>

<auro-drawer id="mediumModalDrawer" md modal>
  <span slot="header">Medium Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDrawerClose('#mediumModalDrawer')}>I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-drawer>

<auro-drawer id="smallModalDrawer" sm modal>
  <span slot="header">Small Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDrawerClose('#smallModalDrawer')}>I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-drawer>`}
          </Highlight>
        </auro-accordion>




        {/* Decoupled dialog experiences */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Drawer with decoupled experiences</auro-header>

        <p>For use case where the size of the drawer on desktop should not influence the size of the drawer on mobile, the combination API of <code>sm lg</code> and <code>md lg</code> can be used.</p>

        <p>The use of these combinations will set the first value to the drawer for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen.</p>

        <p>See the following examples.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDrawer('#smLgDrawer')}>Open [sm lg] drawer</auro-button>
          <auro-button onClick={() => this.toggleDrawer('#smMdDrawer')}>Open [md lg] drawer</auro-button>
        </div>

        <auro-drawer id="smLgDrawer" sm lg>
          <span slot="header">Small Modal Drawer</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDrawerClose('#smLgDrawer')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-drawer>

        <auro-drawer id="smMdDrawer" md lg>
          <span slot="header">Medium Modal Drawer</span>
          <span slot="content">
            <ContentExample />
          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDrawerClose('#smMdDrawer')}>I understand
                <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
              </auro-button>
            </div>
          </span>
        </auro-drawer>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='html afterCode'>
            {`<div className="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick={() => this.toggleDrawer('#smLgDrawer')}>Open [sm lg] drawer</auro-button>
  <auro-button onClick={() => this.toggleDrawer('#smMdDrawer')}>Open [md lg] drawer</auro-button>
</div>

<auro-drawer id="smLgDrawer" sm lg>
  <span slot="header">Small Modal Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDrawerClose('#smLgDrawer')}>I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-drawer>

<auro-drawer id="smMdDrawer" md lg>
  <span slot="header">Medium Modal Drawer</span>
  <span slot="content">
    <ContentExample />
  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDrawerClose('#smMdDrawer')}>I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </span>
</auro-drawer>`}
          </Highlight>
        </auro-accordion>




        {/* Unformatted dialog experiences */}
        {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <auro-header level="2" display="700">Unformatted drawer</auro-header>

        <p>For use case where the use of a drawer is to be more freeform, but the experience and base tooling for the drawer are still requested, there is the <code>unformatted</code> property.</p>

        <p>This property can be used in combination of any other use case of the drawer, but it will render a unformatted drawer window allowing for full customization of content within the scope of the window. </p>

        <auro-header level="3" display="500">Responsive padding</auro-header>
        <p>Part of the drawer design spec is its responsive padding. To take advantage of this for your content within the scope of the drawer, be sure to use the selector <code>unformattedWrapper</code> that can be imported from the package here;</p>

        <pre>
          <code className="javascript afterCode hljs openCode">
            import '@alaskaairux/auro-interruption/dist/style-unformatted.css'
          </code>
        </pre>

        <auro-header level="3" display="500">Accessibility</auro-header>
        <p>Within the scope of the auro-drawer there is <code>aria-labelledby="dialog-header"</code>. To make proper use of this, in an unformatted drawer, the developer is required to add <code>id="dialog-header"</code> to the content header within the drawer content.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDrawer('#unformattedMdDrawer')}>Unformatted Medium Drawer</auro-button>
        </div>

        <auro-drawer id="unformattedMdDrawer" unformatted md lg ondark>
          <span slot="content">
            <img style={{display: "block", width: "100%"}} src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
            <div class="unformattedWrapper">
              <h1 id="dialog-header">This is a header</h1>
              These are words that are slotted into the scope of the custom element.
            </div>
          </span>
        </auro-drawer>
        <auro-accordion lowProfile justifyRight>
          <span slot="trigger">See code</span>
          <Highlight className='javascript afterCode'>
            {`import '@alaskaairux/auro-interruption/dist/style-blank.css'`}
          </Highlight>
          <Highlight className='html afterCode'>
            {`<auro-button onClick={() => this.toggleDrawer('#unformattedMdDrawer')}>Unformatted Medium Dialog</auro-button>

<auro-drawer id="unformattedMdDrawer" unformatted md lg ondark>
  <span slot="content">
    <img style={{display: "block", width: "100%"}} src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="dialog-header">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
    </div>
  </span>
</auro-drawer>`}
          </Highlight>
        </auro-accordion>
      </section>
    );
  }
}

export default AuroDialog;
