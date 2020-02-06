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
  CallbackDocs,
  ContributingDocs,
  CustomPropertiesDocs,
  FocusVisibleDocs,
  IsTouchingDocs,
  PollyfillDocs,
  TechDetailsDocs,
  TestsDocs,
  ReactDemoDocs,
  AngularDemoDocs,
  JavascriptDemoDocs,
  DigitalPersonality,
  AuroHyperlinkDocs
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
            <Redirect exact from="/" to="colors" />
            <Route path="/deprecated/tokens"><DeprecatedTokens /></Route>
            <Route path="/designTokens/tokens"><DesignTokens /></Route>
            <Route path="/colors"><Colors /></Route>
            <Route path="/typography"><Typography /></Route>
            <Route path="/icons"><Icons /></Route>
            <Route path="/hyperlink"><Hyperlink /></Route>
            <Route path="/auro-hyperlink"><AuroHyperlink /></Route>
            <Route path="/auroHyperlinkDocs"><AuroHyperlinkDocs /></Route>
            <Route path="/auro-button"><AuroButton /></Route>
            <Route path="/button"><Button /></Route>
            <Route path="/options"><Options /></Route>
            <Route path="/toast"><Toast /></Route>
            <Route path="/complexcontent"><ComplexContent /></Route>
            <Route path="/generator"><Generator /></Route>
            <Route path="/webcorestylesheets"><WebCoreStyleSheets /></Route>
            <Route path="/A11yDocs"><A11yDocs /></Route>
            <Route path="/AltBuildDocs"><AltBuildDocs /></Route>
            <Route path="/BabelSupportDocs"><BabelSupportDocs /></Route>
            <Route path="/BrowsersSupportDocs"><BrowsersSupportDocs /></Route>
            <Route path="/CallbackDocs"><CallbackDocs /></Route>
            <Route path="/ContributingDocs"><ContributingDocs /></Route>
            <Route path="/CustomPropertiesDocs"><CustomPropertiesDocs /></Route>
            <Route path="/FocusVisibleDocs"><FocusVisibleDocs /></Route>
            <Route path="/IsTouchingDocs"><IsTouchingDocs /></Route>
            <Route path="/PollyfillDocs"><PollyfillDocs /></Route>
            <Route path="/TechDetailsDocs"><TechDetailsDocs /></Route>
            <Route path="/TestsDocs"><TestsDocs /></Route>
            <Route path="/ReactSetup"><ReactDemoDocs /></Route>
            <Route path="/AngularSetup"><AngularDemoDocs /></Route>
            <Route path="/JavascriptSetup"><JavascriptDemoDocs /></Route>
            <Route path="/DigitalPersonality"><DigitalPersonality /></Route>
            <Route path="/Typography" ><Typography /></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
