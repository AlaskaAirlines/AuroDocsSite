import React, { Component } from "react";
import { Nav } from './nav';
import Highlight from 'react-highlight';
import LinkIcons from 'components/linkIcons';
import 'highlight.js/styles/github.css';

class AuroModal extends Component {

  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalClose = this.toggleModalClose.bind(this);
  };

  showVersion() {
    const pjson = require('../../../../package.json');
    const dependencies = pjson.dependencies['@alaskaairux/auro-modal'];

    return `@alaskaairux/auro-modal: ${dependencies}`;
  };

  toggleModal = (elName) => {
    let modal = document.querySelector(elName);
    modal.removeAttribute("open");
    modal.setAttribute("open", true);
  }

  toggleModalClose = (elName) => {
    let modal = document.querySelector(elName);
    modal.removeAttribute("open");
  }

  render() {
    return (
      <section id="modal">

        <Nav />

        <auro-header level="2" display="display">Modal</auro-header>

        <p>The auro-modal component is an interactive component, such as a dismissible alert, inspector, or sub-window.</p>

        <auro-header level="2" display="700">Component use cases</auro-header>

        <p>The <code>auro-modal</code> element should be used in situations where users may:</p>
        <ul>
          <li>Be prompted to take an action before doing anything else or going back</li>
          <li>Be prompted to view content with the option of closing it</li>
        </ul>

        <auro-header level="2" display="700">The setup</auro-header>

        <p>Triggering the modal relies on functions being installed into the page itself. See the following example code that is installed into this demo.</p>

        <Highlight className='js afterCode'>
          {`
  toggleModal = (elName) => {
    let modal = document.querySelector(elName);
    modal.removeAttribute("open");
    modal.setAttribute("open", true);
  }

  toggleModalClose = (elName) => {
    let modal = document.querySelector(elName);
    modal.removeAttribute("open");
  }

`}
        </Highlight>

        <p>Once the JavaScript is added to the scope of the experience, the next part is adding a trigger. In this example, the button component will toggle a modal with the ID of <code>#demo1</code>.</p>

        <Highlight className='html afterCode'>
          {`<auro-button onClick={() => this.toggleModal('#demo1')}>Open Modal</auro-button>`}
        </Highlight>

        <auro-header level="2" display="700">The structure</auro-header>

        <p>The structure of the modal itself consists of three slots. The <code>header</code>, <code>content</code> and <code>footer</code> slots. See the scaffolding example below for adding content to the component.</p>

        <Highlight className='html afterCode'>
          {`
<auro-modal id="[unique ID]">
  <span slot="header">[header content]</span>
  <span slot="content">
    [body content]
  </span>
  <span slot="footer">
    [footer content]
  </span>
</auro-modal>
`}
        </Highlight>

        <p>It should be noted that the <code>footer</code> slot is reserved for the placement of action buttons.</p>

        <auro-header level="2" display="700">Non-Blocking Modal</auro-header>

        <p>The following example illustrates a Non-Blocking modal. This modal will allow for the user to click outside the modal itself to close it. Click in the X icon and there are two buttons that close the modal as well.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleModal('#demo1')}>Non-Blocking Modal</auro-button>
        </div>

        <auro-modal id="demo1">
          <span slot="header">This is a Non-Blocking Modal</span>
          <span slot="content">
            <p>Stated in the name, this modal interaction is a Non-Blocking Modal. This means that the user will be able to exit the modal by either,</p>
            <ul>
              <li>Clicking the X icon the upper right</li>
              <li>Clicking the CLOSE button</li>
              <li>Clicking anywhere outside the modal</li>
            </ul>

          </span>
          <span slot="footer">
            <div className="auro_containedButtons">
              <auro-button onClick={() => this.toggleModalClose('#demo1')}>Save</auro-button>
              <auro-button secondary onClick={() => this.toggleModalClose('#demo1')}>Cancel</auro-button>
            </div>
          </span>
        </auro-modal>

        <Highlight className='html afterCode'>
          {`
  <auro-button onClick={() => this.toggleModal('#demo1')}>Non-Blocking Modal</auro-button>

  <auro-modal id="demo1">
    <span slot="header">This is a Non-Blocking Modal</span>
    <span slot="content">
      <p>Stated in the name, this modal interaction is a Non-Blocking Modal. This means that the user will be able to exit the modal by either,</p>
      <ul>
        <li>Clicking the X icon the upper right</li>
        <li>Clicking the CLOSE button</li>
        <li>Clicking anywhere outside the modal</li>
      </ul>

    </span>
    <span slot="footer">
      <div className="auro_containedButtons">
        <auro-button onClick={() => this.toggleModalClose('#demo1')}>Save</auro-button>
        <auro-button secondary onClick={() => this.toggleModalClose('#demo1')}>Cancel</auro-button>
      </div>
    </span>
  </auro-modal>`}
        </Highlight>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleModal('#demo2')}>Non-Blocking Modal w/o footer</auro-button>
        </div>

        <auro-modal id="demo2">
          <span slot="header">This is a Non-Blocking Modal</span>
          <span slot="content">
            <p>Stated in the name, this modal interaction is a Non-Blocking Modal. This means that the user will be able to exit the modal by either,</p>
            <ul>
              <li>Clicking the X icon the upper right</li>
              <li>Clicking anywhere outside the modal</li>
            </ul>
          </span>
        </auro-modal>

        <Highlight className='html afterCode'>
          {`
  <auro-button onClick={() => this.toggleModal('#demo1')}>Non-Blocking Modal</auro-button>

  <auro-modal id="demo1">
    <span slot="header">This is a Non-Blocking Modal</span>
    <span slot="content">
      <p>Stated in the name, this modal interaction is a Non-Blocking Modal. This means that the user will be able to exit the modal by either,</p>
      <ul>
        <li>Clicking the X icon the upper right</li>
        <li>Clicking the CLOSE button</li>
      </ul>
    </span>
  </auro-modal>`}
        </Highlight>




        <auro-header level="2" display="700">Blocking Modal</auro-header>

        <p>The Blocking modal is used when the intent is to restrict the actions of the user to the scope of the modal. These scenarios are to be used with caution as this will trap the user within the experience. A <code>button</code> with a close action must be provided to allow the user to dismiss the Blocking Modal.</p>

        <p>To create a Blocking Modal, use the <code>blocking</code> attribute on the modal component.</p>

        <div className="demo--inline exampleWrapper auro_containedButtons">
          <auro-button onClick={() => this.toggleModal('#demo3')}>Blocking Modal</auro-button>
        </div>

        <auro-modal id="demo3" blocking>
          <span slot="header">Blocking Modal</span>
          <span slot="content">
            <p>A Blocking Modal on the other hand is restrictive. As the name implies, this modal will stop a user from moving forward unless they interact with the content of the modal. The rules are,</p>
            <ul>
              <li>Users are not allowed to dismiss the modal by clicking an X icon</li>
              <li>Users cannot dismiss the modal by clicking outside of the modal</li>
              <li>Users must select from the options permitted to move forward</li>
            </ul>
          </span>
          <span slot="footer">
            <auro-button onClick={() => this.toggleModalClose('#demo3')}>Ok, let me out!</auro-button>
          </span>
        </auro-modal>

        <Highlight className='html afterCode'>
          {`
  <auro-button onClick={() => this.toggleModal('#demo3')}>Blocking Modal</auro-button>

  <auro-modal id="demo3" blocking>
  <span slot="header">Blocking Modal</span>
  <span slot="content">
    <p>A Blocking Modal on the other hand is restrictive. As the name implies, this modal will stop a user from moving forward unless they interact with the content of the modal. The rules are,</p>
    <ul>
      <li>Users are not allowed to dismiss the modal by clicking an X icon</li>
      <li>Users cannot dismiss the modal by clicking outside of the modal</li>
      <li>Users must select from the options permitted to move forward</li>
    </ul>
  </span>
  <span slot="footer">
    <auro-button onClick={() => this.toggleModalClose('#demo3')}>Ok, let me out!</auro-button>
  </span>
</auro-modal>`}
        </Highlight>

        <LinkIcons
          github="https://github.com/AlaskaAirlines/auro-modal"
          npm="https://www.npmjs.com/package/@alaskaairux/auro-modal"
          code="https://github.com/AlaskaAirlines/auro-modal/blob/master/src/auro-modal.js"
          version={this.showVersion()}
        />
      </section>
    );
  }
}

export default AuroModal;
