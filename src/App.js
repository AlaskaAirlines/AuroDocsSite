import React from 'react';

import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';

import AuroButton from './content/auro-button';
import AuroHyperlink from './content/auro-hyperlink';
import Button from './content/button';
import Colors from './content/colors';
import ColorDigitalPersonality from './content/digitalPersonality';
import DeprecatedTokens from './content/pages/deprecated/tokens';
import DesignTokens from './content/pages/designTokens/tokens';
import Footer from './components/footer';
import Generator from './content/generator';
import Header from './components/header';
import Hyperlink from './content/hyperlink';
import Icons from './content/icons';
import InputText from './content/inputtext';
import Options from './content/options';
import SideNav from './components/side-nav';
import Toast from './content/toast';
import Typography from './content/typography';
import WebCoreStyleSheets from './content/webcorestylesheets';

// import resources for markdown docs from ./src/content/docs
// then add the appropiate Route below
import {
  A11yDocs,
  AngularDemoDocs,
  AuroButtonDocs,
  AuroHyperlinkDocs,
  BabelSupportDocs,
  BrowsersSupportDocs,
  ComponentsDocs,
  ContributingDocs,
  CustomPropertiesDocs,
  ColorDesignGuidlines,
  FocusVisibleDocs,
  GettingStartedDevs,
  IsTouchingDocs,
  IconsDesign,
  JavascriptDemoDocs,
  Philosophy,
  PolyfillDocs,
  ReactDemoDocs,
  TechDetailsDocs,
  TestsDocs
} from './content/docs';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop';

import './sass/index.scss';
import './sass/App.scss';

import './scripts/orion';

function App() {
  return (
    <main className="main-wrapper">
      <Header />
      <div className="wrapper">
        <input id="menuCheckbox" type="checkbox" className="menuCheckbox util_displayHiddenVisually"></input>
        <label htmlFor="menuCheckbox" className="menuCheckbox--label">
          <img className="menuIcon" src="https://img.icons8.com/material/24/000000/menu--v1.png" alt="icon"></img>
          <img className="closeIcon" width="24" src="https://img.icons8.com/material/26/000000/multiply--v1.png" alt="icon"></img>
        </label>

        <Router>
          <ScrollToTop />
          <SideNav />
          <Switch>
            <Redirect exact from="/" to="Philosophy" />
            <Route path="/angularSetup"><AngularDemoDocs /></Route>
            <Route path="/auro-button"><AuroButton /></Route>
            <Route path="/auroButtonDocs"><AuroButtonDocs /></Route>
            <Route path="/auro-hyperlink"><AuroHyperlink /></Route>
            <Route path="/auroHyperlinkDocs"><AuroHyperlinkDocs /></Route>
            <Route path="/ods-button"><Button /></Route>
            <Route path="/colors"><Colors /></Route>
            <Route path="/color/designGuidlines"><ColorDesignGuidlines /></Route>
            <Route path="/color/digitalPersonality"><ColorDigitalPersonality /></Route>
            <Route path="/designTokens/tokens"><DesignTokens /></Route>
            <Route path="/deprecated/tokens"><DeprecatedTokens /></Route>

            <Route path="/docs/a11y"><A11yDocs /></Route>
            <Route path="/docs/babelSupport"><BabelSupportDocs /></Route>
            <Route path="/docs/browsersSupport"><BrowsersSupportDocs /></Route>
            <Route path="/docs/components"><ComponentsDocs /></Route>
            <Route path="/docs/contributing"><ContributingDocs /></Route>
            <Route path="/docs/customProperties"><CustomPropertiesDocs /></Route>
            <Route path="/docs/focusVisible"><FocusVisibleDocs /></Route>
            <Route path="/docs/isTouching"><IsTouchingDocs /></Route>
            <Route path="/docs/polyfill"><PolyfillDocs /></Route>
            <Route path="/docs/tests"><TestsDocs /></Route>
            <Route path="/docs/techDetails"><TechDetailsDocs /></Route>

            <Route path="/generator"><Generator /></Route>
            <Route path="/gettingStarted/devs"><GettingStartedDevs /></Route>
            <Route path="/ods-hyperlink"><Hyperlink /></Route>
            <Route path="/icons"><Icons /></Route>
            <Route path="/icon/designGuidlines"><IconsDesign /></Route>
            <Route path="/ods-inputtext"><InputText /></Route>
            <Route path="/javascriptSetup"><JavascriptDemoDocs /></Route>
            <Route path="/ods-options"><Options /></Route>
            <Route path="/philosophy"><Philosophy /></Route>
            <Route path="/reactSetup"><ReactDemoDocs /></Route>
            <Route path="/ods-toast"><Toast /></Route>
            <Route path="/typography"><Typography /></Route>
            <Route path="/webcorestylesheets"><WebCoreStyleSheets /></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
