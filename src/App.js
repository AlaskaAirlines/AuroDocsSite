import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
import AuroButton from './content/auro-button';
import AuroHyperlink from './content/auro-hyperlink';
import Button from './content/button';
import ColorsPage from './content/colors';
import ColorDigitalPersonality from './content/digitalPersonality';
import Hyperlink from './content/hyperlink';
import AuroIcons from './content/auroIcons';
import InputText from './content/inputtext';
import Options from './content/options';
import Toast from './content/toast';
import Typography from './content/typography';
import DeprecatedTokens from './content/pages/deprecated/tokens';
import DesignTokens from './content/pages/designTokens/tokens';


// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';


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
            <Redirect exact from="/" to="philosophy" />
            <Route path="/philosophy"><Philosophy /></Route>

            {/* Getting Started */}
            <Route path="/gettingStarted/devs"><GettingStartedDevs /></Route>
            <Route path="/generator"><Generator /></Route>

            {/* Auro Core */}
            <Route path="/designTokens/tokens"><DesignTokens /></Route>
            <Route path="/tokens/docs"><DesignTokensDocs /></Route>
            <Route path="/deprecated/tokens"><DeprecatedTokens /></Route>

            {/* Color */}
            <Route path="/colors"><ColorsPage /></Route>
            <Route path="/color/designGuidlines"><ColorDesignGuidlines /></Route> {/* not used */} {/* reevaluate content */}
            <Route path="/color/digitalPersonality"><ColorDigitalPersonality /></Route>
            <Route path="/color/trasnparancy"><ColorTransparent /></Route>

            {/* Typography */}
            <Route path="/typography"><Typography /></Route>
            <Route path="/type/designGuidlines"><TypeDesignGuidlines /></Route>

            {/* Icons */}
            <Route path="/auroIcons"><AuroIcons /></Route>
            <Route path="/icon/designGuidlines"><IconsDesign /></Route>

            {/* Layout */}
            <Route path="/layout"><Layout /></Route> {/* not used */} {/* reevaluate content */}
            <Route path="/grid"><Grid /></Route>
            <Route path="/gridDesignGuidlines"><GridDesignGuidlines /></Route>
            <Route path="/spacing"><Spacing /></Route>

            {/* Voice */}
            <Route path="/voiceandtone"><VoiceTone /></Route>

            {/* Auro Components */}
            <Route path="/auro-button"><AuroButton /></Route>
            <Route path="/auroButtonDocs"><AuroButtonDocs /></Route>
            <Route path="/auro-hyperlink"><AuroHyperlink /></Route>
            <Route path="/auroHyperlinkDocs"><AuroHyperlinkDocs /></Route>

            {/* Orion Components */}
            <Route path="/ods-button"><Button /></Route>
            <Route path="/ods-hyperlink"><Hyperlink /></Route>
            <Route path="/ods-options"><Options /></Route>
            <Route path="/ods-toast"><Toast /></Route> {/* not used */} {/* reevaluate content */}
            <Route path="/ods-inputtext"><InputText /></Route>

            {/* Dev resources */}
            <Route path="/docs/a11y"><A11yDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route path="/docs/babelSupport"><BabelSupportDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route path="/docs/browsersSupport"><BrowsersSupportDocs /></Route>
            <Route path="/docs/components"><ComponentsDocs /></Route>
            <Route path="/docs/slots"><SlotsDocs /></Route>
            <Route path="/docs/techDetails"><TechDetailsDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route path="/docs/tests"><TestsDocs /></Route>
            <Route path="/docs/why"><WhyCustomelementsDocs /></Route> {/* not used */} {/* reevaluate content */}

            {/* Pollyfills */}
            <Route path="/docs/focusVisible"><FocusVisibleDocs /></Route>
            <Route path="/docs/polyfill"><PolyfillDocs /></Route>

            {/* CSS */}
            <Route path="/docs/cssConventions"><CssConventionsDocs /></Route>
            <Route path="/docs/customProperties"><CustomPropertiesDocs /></Route>
            <Route path="/docs/isTouching"><IsTouchingDocs /></Route>
            <Route path="/webcorestylesheets"><WebCoreStyleSheets /></Route>

            {/* Process */}
            <Route path="/docs/compliance"><ComplianceDocs /></Route>
            <Route path="/docs/contributing"><ContributingDocs /></Route>
            <Route path="/docs/governance"><GovernanceDocs /></Route>

            {/* Example Projects  */}
            {/* Content for these pages need to be updated and have better descriptions of project */}
            <Route path="/angularSetup"><AngularDemoDocs /></Route> {/* not used */}
            <Route path="/javascriptSetup"><JavascriptDemoDocs /></Route> {/* not used */}
            <Route path="/reactSetup"><ReactDemoDocs /></Route> {/* not used */}

          </Switch>
        </Router>
      </div>
      <Footer />
    </main>
  )
}

export default App;
