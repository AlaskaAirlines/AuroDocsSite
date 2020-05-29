import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './sass/index.scss';
import './sass/App.scss';

// Logo to appear in console
import './scripts/auro-consoleLogo';

// This import is only needed to support legacy Orion Web Components
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';

// Required for Auro Web Components
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

import AuroButton from './content/components/auro/button';
import AuroHyperlink from './content/auro-hyperlink';



// The following files need to be moved to a better directory structure
import Button from './content/button';
import ColorsPage from './content/colors';
import ColorDigitalPersonality from './content/digitalPersonality';
import Hyperlink from './content/hyperlink';
import AuroIcons from './content/auroIcons';
import InputText from './content/inputtext';
import Options from './content/options';
import Toast from './content/toast';
import Typography from './content/typography';
import TypographyDeprecated from './content/typographyDeprecated';
import DeprecatedTokens from './content/pages/deprecated/tokens';

import AuroButtonApi from './content/components/auro/buttonApi';
import AuroButtonInstall from './content/components/auro/buttonInstall';


import DesignTokens from './content/pages/designTokens/tokens';
import DesignTokensInstall from './content/pages/designTokens/install';

// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';


// import resources for markdown docs from ./src/content/docs
// then add the appropiate Route below
import {
  A11yDocs,
  AngularDemoDocs,
  // AuroButtonInfo,
  OdsButtonInfo,
  // AuroButtonApi,
  OdsButtonApi,
  AuroHyperlinkDocs,
  BabelSupportDocs,
  BrowsersSupportDocs,
  ColorTransparent,
  ComponentsDocs,
  ContributingDocs,
  ComplianceDocs,
  CssConventionsDocs,
  CustomPropertiesDocs,
  // DesignTokensDocs,
  AuroIconsInfo,
  FocusVisibleDocs,
  GettingStartedDevs,
  Grid,
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
  VoiceTone,
  WhyCustomelementsDocs,
  WebCoreStyleSheets,
  Generator
} from './content/docs';

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

            {/* Home */}
            <Route exact path='/' component={Philosophy} />
            <Route exact path="/philosophy"><Philosophy /></Route>

            {/* Getting Started */}
            <Route exact path="/getting-started/developers/overview"><GettingStartedDevs /></Route>
            <Route exact path="/getting-started/developers/generator"><Generator /></Route>

            {/* Auro Core */}
            <Route exact path="/getting-started/developers/design-tokens"><DesignTokens /></Route>
            <Route exact path="/getting-started/developers/design-tokens/install"><DesignTokensInstall /></Route>
            <Route exact path="/getting-started/developers/design-tokens/deprecated"><DeprecatedTokens /></Route>

            {/* Color */}
            <Route exact path="/core/color"><ColorsPage /></Route>
            <Route exact path="/core/color/digital-personality"><ColorDigitalPersonality /></Route>
            <Route exact path="/core/color/trasnparancy"><ColorTransparent /></Route>

            {/* Typography */}
            <Route exact path="/core/typography"><Typography /></Route>
            <Route exact path="/core/typography/deprecated"><TypographyDeprecated /></Route>
            <Route exact path="/core/typography/guidlines"><TypeDesignGuidlines /></Route>

            {/* Icons */}
            <Route exact path="/core/auro-icons"><AuroIcons /></Route>
            <Route exact path="/core/auro-icons/install"><AuroIconsInfo /></Route>
            <Route exact path="/core/auro-icons/guidlines"><IconsDesign /></Route>

            {/* Layout */}
            <Route exact path="/core/layout"><Layout /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/core/grid"><Grid /></Route>
            <Route exact path="/core/spacing"><Spacing /></Route>

            {/* Voice */}
            <Route path="/core/voice-and-tone"><VoiceTone /></Route>

            {/* Auro Components */}
            <Route exact path="/components/auro/button"><AuroButton /></Route>
            <Route exact path="/components/auro/button/install"><AuroButtonInstall /></Route>
            {/* <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route> */}
            <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route>
            <Route exact path="/components/auro/hyperlink"><AuroHyperlink /></Route>
            <Route exact path="/components/auro/hyperlink/info"><AuroHyperlinkDocs /></Route>

            {/* Orion Components */}
            <Route exact path="/components/orion/button"><Button /></Route>
            <Route exact path="/components/orion/button/info"><OdsButtonInfo /></Route>
            <Route exact path="/components/orion/button/api"><OdsButtonApi /></Route>
            <Route exact path="/components/orion/hyperlink"><Hyperlink /></Route>
            <Route exact path="/components/orion/options"><Options /></Route>
            <Route exact path="/components/orion/toast"><Toast /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/components/orion/inputtext"><InputText /></Route>

            {/* Dev resources */}
            <Route exact path="/support/a11y"><A11yDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/support/babelSupport"><BabelSupportDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/support/browsersSupport"><BrowsersSupportDocs /></Route>
            <Route exact path="/support/components"><ComponentsDocs /></Route>
            <Route exact path="/support/slots"><SlotsDocs /></Route>
            <Route exact path="/support/techDetails"><TechDetailsDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/support/tests"><TestsDocs /></Route>
            <Route exact path="/support/why"><WhyCustomelementsDocs /></Route> {/* not used */} {/* reevaluate content */}

            {/* Pollyfills */}
            <Route exact path="/support/focusVisible"><FocusVisibleDocs /></Route>
            <Route exact path="/support/polyfill"><PolyfillDocs /></Route>

            {/* CSS */}
            <Route exact path="/support/css-conventions"><CssConventionsDocs /></Route>
            <Route exact path="/support/custom-properties"><CustomPropertiesDocs /></Route>
            <Route exact path="/support/isTouching"><IsTouchingDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/webcorestylesheets"><WebCoreStyleSheets /></Route>

            {/* Process */}
            <Route exact path="/getting-started/developers/compliance"><ComplianceDocs /></Route>
            <Route exact path="/getting-started/developers/contributing"><ContributingDocs /></Route>
            <Route exact path="/getting-started/governance"><GovernanceDocs /></Route>

            {/* Example Projects  */}
            {/* Content for these pages need to be updated and have better descriptions of project */}
            <Route exact path="/angularSetup"><AngularDemoDocs /></Route> {/* not used */}
            <Route exact path="/javascriptSetup"><JavascriptDemoDocs /></Route> {/* not used */}
            <Route exact path="/reactSetup"><ReactDemoDocs /></Route> {/* not used */}

            <Route path="*"><NotFound /></Route>

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
