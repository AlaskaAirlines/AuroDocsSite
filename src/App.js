import React from 'react';

// This import is only needed to support legacy Orion Web Components
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';

// Required for Auro Web Components
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';

import AuroButton from './content/auro-button';
import AuroHyperlink from './content/auro-hyperlink';
import Button from './content/button';
import ColorsPage from './content/colors';
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
  ColorTransparent,
  ComponentsDocs,
  ContributingDocs,
  ComplianceDocs,
  CssConventionsDocs,
  CustomPropertiesDocs,
  ColorDesignGuidlines,
  DesignTokensDocs,
  FocusVisibleDocs,
  GettingStartedDevs,
  Grid,
  GridDesignGuidlines,
  GovernanceDocs,
  IsTouchingDocs,
  IconsDesign,
  JavascriptDemoDocs,
  Layout,
  Philosophy,
  PolyfillDocs,
  ReactDemoDocs,
  SlotsDocs,
  Spacing,
  TechDetailsDocs,
  TestsDocs,
  TypeDesignGuidlines,
  VoiceTone
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
            <Redirect exact from="/" to="philosophy" />
            <Route path="/angularSetup"><AngularDemoDocs /></Route>
            <Route path="/auro-button"><AuroButton /></Route>
            <Route path="/auroButtonDocs"><AuroButtonDocs /></Route>
            <Route path="/auro-hyperlink"><AuroHyperlink /></Route>
            <Route path="/auroHyperlinkDocs"><AuroHyperlinkDocs /></Route>
            <Route path="/ods-button"><Button /></Route>
            <Route path="/colors"><ColorsPage /></Route>
            <Route path="/color/designGuidlines"><ColorDesignGuidlines /></Route>
            <Route path="/color/digitalPersonality"><ColorDigitalPersonality /></Route>
            <Route path="/color/trasnparancy"><ColorTransparent /></Route>
            <Route path="/designTokens/tokens"><DesignTokens /></Route>
            <Route path="/tokens/docs"><DesignTokensDocs /></Route>
            <Route path="/deprecated/tokens"><DeprecatedTokens /></Route>

            <Route path="/docs/a11y"><A11yDocs /></Route>
            <Route path="/docs/babelSupport"><BabelSupportDocs /></Route>
            <Route path="/docs/browsersSupport"><BrowsersSupportDocs /></Route>
            <Route path="/docs/components"><ComponentsDocs /></Route>
            <Route path="/docs/compliance"><ComplianceDocs /></Route>
            <Route path="/docs/contributing"><ContributingDocs /></Route>
            <Route path="/docs/customProperties"><CustomPropertiesDocs /></Route>
            <Route path="/docs/cssConventions"><CssConventionsDocs /></Route>
            <Route path="/docs/focusVisible"><FocusVisibleDocs /></Route>
            <Route path="/docs/governance"><GovernanceDocs /></Route>
            <Route path="/docs/isTouching"><IsTouchingDocs /></Route>
            <Route path="/docs/polyfill"><PolyfillDocs /></Route>
            <Route path="/docs/slots"><SlotsDocs /></Route>
            <Route path="/docs/tests"><TestsDocs /></Route>
            <Route path="/docs/techDetails"><TechDetailsDocs /></Route>

            <Route path="/generator"><Generator /></Route>
            <Route path="/gettingStarted/devs"><GettingStartedDevs /></Route>
            <Route path="/grid"><Grid /></Route>
            <Route path="/gridDesignGuidlines"><GridDesignGuidlines /></Route>
            <Route path="/ods-hyperlink"><Hyperlink /></Route>
            <Route path="/icons"><Icons /></Route>
            <Route path="/icon/designGuidlines"><IconsDesign /></Route>
            <Route path="/ods-inputtext"><InputText /></Route>
            <Route path="/javascriptSetup"><JavascriptDemoDocs /></Route>
            <Route path="/ods-options"><Options /></Route>
            <Route path="/layout"><Layout /></Route>
            <Route path="/philosophy"><Philosophy /></Route>
            <Route path="/reactSetup"><ReactDemoDocs /></Route>
            <Route path="/spacing"><Spacing /></Route>
            <Route path="/ods-toast"><Toast /></Route>
            <Route path="/typography"><Typography /></Route>
            <Route path="/type/designGuidlines"><TypeDesignGuidlines /></Route>
            <Route path="/voiceandtone"><VoiceTone /></Route>
            <Route path="/webcorestylesheets"><WebCoreStyleSheets /></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
