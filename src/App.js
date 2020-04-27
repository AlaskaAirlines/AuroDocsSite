import React from 'react';

import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';

import DeprecatedTokens from './content/pages/deprecated/tokens';
import DesignTokens from './content/pages/designTokens/tokens';
import Typography from './content/typography';
import Hyperlink from './content/hyperlink';
import AuroHyperlink from './content/auro-hyperlink';
import AuroButton from './content/auro-button';
import Options from './content/options';
import Colors from './content/colors';
import Icons from './content/icons';
import ComplexContent from './content/complexContent';
import Button from './content/button';
import Toast from './content/toast';
import InputText from './content/inputtext';
import Generator from './content/generator';
import Footer from './components/footer';
import Header from './components/header';
import WebCoreStyleSheets from './content/webcorestylesheets';
import SideNav from './components/side-nav';
import {
  A11yDocs,
  AltBuildDocs,
  BabelSupportDocs,
  BrowsersSupportDocs,
  ContributingDocs,
  CustomPropertiesDocs,
  FocusVisibleDocs,
  IsTouchingDocs,
  PolyfillDocs,
  TechDetailsDocs,
  TestsDocs,
  ReactDemoDocs,
  AngularDemoDocs,
  JavascriptDemoDocs,
  Philosophy,
  DigitalPersonality,
  AuroHyperlinkDocs,
  AuroButtonDocs
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
            <Route path="/a11yDocs"><A11yDocs /></Route>
            <Route path="/altBuildDocs"><AltBuildDocs /></Route>
            <Route path="/angularSetup"><AngularDemoDocs /></Route>
            <Route path="/auro-button"><AuroButton /></Route>
            <Route path="/auroButtonDocs"><AuroButtonDocs /></Route>
            <Route path="/auro-hyperlink"><AuroHyperlink /></Route>
            <Route path="/auroHyperlinkDocs"><AuroHyperlinkDocs /></Route>
            <Route path="/babelSupportDocs"><BabelSupportDocs /></Route>
            <Route path="/browsersSupportDocs"><BrowsersSupportDocs /></Route>
            <Route path="/ods-button"><Button /></Route>
            <Route path="/colors"><Colors /></Route>
            <Route path="/complexcontent"><ComplexContent /></Route>
            <Route path="/contributingDocs"><ContributingDocs /></Route>
            <Route path="/customPropertiesDocs"><CustomPropertiesDocs /></Route>
            <Route path="/designTokens/tokens"><DesignTokens /></Route>
            <Route path="/deprecated/tokens"><DeprecatedTokens /></Route>
            <Route path="/digitalPersonality"><DigitalPersonality /></Route>
            <Route path="/focusVisibleDocs"><FocusVisibleDocs /></Route>
            <Route path="/generator"><Generator /></Route>
            <Route path="/hyperlink"><Hyperlink /></Route>
            <Route path="/icons"><Icons /></Route>
            <Route path="/ods-inputtext"><InputText /></Route>
            <Route path="/isTouchingDocs"><IsTouchingDocs /></Route>
            <Route path="/javascriptSetup"><JavascriptDemoDocs /></Route>
            <Route path="/ods-options"><Options /></Route>
            <Route path="/polyfillDocs"><PolyfillDocs /></Route>
            <Route path="/philosophy"><Philosophy /></Route>
            <Route path="/reactSetup"><ReactDemoDocs /></Route>
            <Route path="/testsDocs"><TestsDocs /></Route>
            <Route path="/techDetailsDocs"><TechDetailsDocs /></Route>
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
