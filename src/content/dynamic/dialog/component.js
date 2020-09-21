import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
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
    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDialogClose = (elName) => {
    let dialog = document.querySelector(elName);
    dialog.removeAttribute("open");
  }

  render() {
    return (
      <section id="dialog">

        <Nav />

        <auro-header level="2" display="display">Dialog</auro-header>

        <p>The auro-dialog component is an interactive component. The component is best used when there is a requirement that the user must be made aware of the content being shown..</p>
        <p>The auro-dialog component also supports a modal (blocking) state where the user must interact with the content of the dialog in order to continue.</p>
        <p>Auro holds the opinions of the <auro-hyperlink href="https://www.nngroup.com/articles/modal-nonmodal-dialog/" target="_blank">Nielsen Norman Group</auro-hyperlink> on dialogs and modal use to be true.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-dialog</code> element should be used in situations where users may:</p>
        <ul>
          <li>Be prompted to take an action before doing anything else or going back</li>
          <li>Be prompted to view content with the option of closing it</li>
        </ul>

        <auro-header level="2" display="700">The setup</auro-header>

        <p>Triggering the dialog relies on functions being installed. See the following example code that is installed into this demo.</p>

        <Highlight className='js afterCode'>
          {`
  toggleDialog = (elName) => {
    let dialog = document.querySelector(elName);
    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDialogClose = (elName) => {
    let dialog = document.querySelector(elName);
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

        <auro-header level="2" display="700">Dialog (non-blocking)</auro-header>

        <p>The following example illustrates a non-blocking dialog experience. This dialog will allow the user to click outside the dialog itself to close it. Click in the X icon and there are two buttons that close the dialog as well.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#demo1')}>Open Dialog</auro-button>
        </div>

        <auro-dialog id="demo1">
          <span slot="header">Dialog (non-blocking)</span>
          <span slot="content">
            <p>Cheesecake cheeseburger roquefort. Squirty cheese pepper jack caerphilly blue castello macaroni cheese rubber cheese melted cheese brie. Squirty cheese pecorino st. agur blue cheese rubber cheese cut the cheese melted cheese when the cheese comes out everybody's happy fromage. Babybel hard cheese cheeseburger cow lancashire swiss.</p>
            <ul>
              <li>Caerphilly croque monsieur fondue</li>
              <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
              <li>Cheddar cheese and biscuits chalk and cheese</li>
            </ul>

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleDialogClose('#demo1')}>Save</auro-button>
              <auro-button secondary onClick={() => this.toggleDialogClose('#demo1')}>Cancel</auro-button>
            </div>
          </span>
        </auro-dialog>

        <Highlight className='html afterCode'>
          {`
<auro-button onClick={() => this.toggleDialog('#demo1')}>Open Dialog</auro-button>

<auro-dialog id="demo1">
  <span slot="header">Dialog (non-blocking)</span>
  <span slot="content">
    <p>Cheesecake cheeseburger roquefort. Squirty cheese pepper jack caerphilly blue castello macaroni cheese rubber cheese melted cheese brie. Squirty cheese pecorino st. agur blue cheese rubber cheese cut the cheese melted cheese when the cheese comes out everybody's happy fromage. Babybel hard cheese cheeseburger cow lancashire swiss.</p>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
    </ul>

  </span>
  <span slot="footer">
    <div className="auro_containedButtons">
      <auro-button onClick={() => this.toggleDialogClose('#demo1')}>Save</auro-button>
      <auro-button secondary onClick={() => this.toggleDialogClose('#demo1')}>Cancel</auro-button>
    </div>
  </span>
</auro-dialog>`}
        </Highlight>

        <p>The following example illustrates a non-blocking dialog experience. This dialog will allow the user to click outside the dialog itself or click in the X icon to close.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#demo2')}>Open Dialog</auro-button>
        </div>

        <auro-dialog id="demo2">
          <span slot="header">Dialog (non-blocking)</span>
          <span slot="content">
            <p>Mozzarella gouda stinking bishop. Squirty cheese croque monsieur who moved my cheese fromage frais monterey jack fromage pepper jack mascarpone.</p>
            <ul>
              <li>Danish fontina when the cheese comes out everybody's happy fromage</li>
              <li>Croque monsieur camembert de normandie cauliflower cheese cheese on toast</li>
            </ul>
          </span>
        </auro-dialog>

        <Highlight className='html afterCode'>
          {`
  <auro-button onClick={() => this.toggleDialog('#demo1')}>Open Dialog</auro-button>

  <auro-dialog id="demo1">
    <span slot="header">Dialog (non-blocking)</span>
    <span slot="content">
      <p>Mozzarella gouda stinking bishop. Squirty cheese croque monsieur who moved my cheese fromage frais monterey jack fromage pepper jack mascarpone.</p>
      <ul>
        <li>Danish fontina when the cheese comes out everybody's happy fromage</li>
        <li>Croque monsieur camembert de normandie cauliflower cheese cheese on toast</li>
      </ul>
    </span>
  </auro-dialog>`}
        </Highlight>




        <auro-header level="2" display="700">Modal Dialog (blocking)</auro-header>

        <p>A modal dialog is used with the intent to restrict the actions of the user to the scope of the dialog. These scenarios are to be used with caution as this will trap the user within the experience. A <code>button</code>, or other element with a close action must be provided to allow the user to dismiss the modal dialog.</p>

        <p>To create a modal dialog, use the <code>modal</code> attribute on the dialog component.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleDialog('#demo3')}>Open Modal Dialog</auro-button>
        </div>

        <auro-dialog id="demo3" modal>
          <span slot="header">Modal Dialog (blocking)</span>
          <span slot="content">
            <p>Cheddar cheese and biscuits chalk and cheese. Boursin cauliflower cheese bocconcini goat blue castello bocconcini fromage frais croque monsieur. Cheeseburger bavarian bergkase croque monsieur the big cheese monterey jack manchego halloumi lancashire. Cow airedale cheese on toast gouda.</p>
            <ul>
              <li>St. agur blue cheese cottage cheese mozzarella</li>
              <li>Who moved my cheese cheesecake cheese triangles</li>
              <li>Cheese strings lancashire halloumi</li>
            </ul>
          </span>
          <span slot="footer">
            <auro-button onClick={() => this.toggleDialogClose('#demo3')}>Next
              <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
            </auro-button>
          </span>
        </auro-dialog>

        <Highlight className='html afterCode'>
          {`
  <auro-button onClick={() => this.toggleDialog('#demo3')}>Blocking Diualog</auro-button>

  <auro-dialog id="demo3" blocking>
  <span slot="header">Blocking Dialog</span>
  <span slot="content">
    <p>Cheddar cheese and biscuits chalk and cheese. Boursin cauliflower cheese bocconcini goat blue castello bocconcini fromage frais croque monsieur. Cheeseburger bavarian bergkase croque monsieur the big cheese monterey jack manchego halloumi lancashire. Cow airedale cheese on toast gouda.</p>
    <ul>
      <li>St. agur blue cheese cottage cheese mozzarella</li>
      <li>Who moved my cheese cheesecake cheese triangles</li>
      <li>Cheese strings lancashire halloumi</li>
    </ul>
  </span>
  <span slot="footer">
    <auro-button onClick={() => this.toggleDialogClose('#demo3')}>Next
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
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
