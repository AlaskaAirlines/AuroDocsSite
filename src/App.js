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

// design tokens
import DesignTokens from './content/dynamic/designTokens/tokens';
import DeprecatedTokens from './content/dynamic/designTokens/deprecated';
import DesignTokensInstall from './content/dynamic/designTokens/install';

// button
import AuroButton from './content/dynamic/button/button';
import AuroButtonApi from './content/dynamic/button/api';
import AuroButtonInstall from './content/dynamic/button/install';
import Button from './content/dynamic/button/legacy'; // legacy

// hyperlink
import AuroHyperlink from './content/dynamic/hyperlink/hyperlink';
import AuroHyperlinkInstall from './content/dynamic/hyperlink/install';
import AuroHyperlinkApi from './content/dynamic/hyperlink/api';
import AuroHyperlinkA11y from './content/dynamic/hyperlink/a11y';
import Hyperlink from './content/dynamic/hyperlink/legacy'; // legacy

// input options
import Options from './content/dynamic/inputOptions/legacy'; // legacy
import OdsOptionsInstall from './content/dynamic/inputOptions/install';

// input text
import InputText from './content/dynamic/inputText/legacy';
import InputTextInstall from './content/dynamic/inputText/install';

// polyfills
import FocusVisible from './content/dynamic/polyfills/focusVisible';
import Webcomponentsjs from './content/dynamic/polyfills/webcomponentsjs';

// The following files need to be moved to a better directory structure
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import ColorsPage from './content/colors';
import ColorDigitalPersonality from './content/digitalPersonality';
import AuroIcons from './content/auroIcons';
import Typography from './content/typography';
import TypographyDeprecated from './content/typographyDeprecated';


// imported block components
import Footer from './components/footer';
import Header from './components/header';
import SideNav from './components/side-nav';

// import resources for markdown docs from ./src/content/docs
// then add the appropiate Route below
import {
  A11yDocs,
  AngularDemoDocs,
  BabelSupportDocs,
  BrowsersSupportDocs,
  ColorTransparent,
  ComponentsDocs,
  CssConventionsDocs,
  CustomPropertiesDocs,
  AuroIconsInfo,
  Grid,
  GovernanceDocs,
  IsTouchingDocs,
  IconsDesign,
  JavascriptDemoDocs,
  Layout,
  ReactDemoDocs,
  SlotsDocs,
  Spacing,
  TechDetailsDocs,
  TestsDocs,
  TypeDesignGuidlines,
  VoiceTone,
  WhyCustomelementsDocs,
  WebCoreStyleSheets,


  // cleaned up markdown docs
  Philosophy,
  GettingStartedDevsOverview,
  WCGenerator,
  ComplianceDocs,
  ContributingDocs,


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

            {/* Getting Started/developers */}
            <Route exact path="/getting-started/developers/overview"><GettingStartedDevsOverview /></Route>
            <Route exact path="/getting-started/developers/generator"><WCGenerator /></Route>
            <Route exact path="/getting-started/developers/compliance"><ComplianceDocs /></Route>
            <Route exact path="/getting-started/developers/contributing"><ContributingDocs /></Route>
            <Route exact path="/getting-started/developers/governance"><GovernanceDocs /></Route>
            {/* Design Tokens */}
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

            {/* Auro Button */}
            <Route exact path="/components/auro/button"><AuroButton /></Route>
            <Route exact path="/components/auro/button/install"><AuroButtonInstall /></Route>
            <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route>
            {/* Legacy */}
            <Route exact path="/components/orion/button"><Button /></Route>

            {/* Auro Hyperlink */}
            <Route exact path="/components/auro/hyperlink"><AuroHyperlink /></Route>
            <Route exact path="/components/auro/hyperlink/install"><AuroHyperlinkInstall /></Route>
            <Route exact path="/components/auro/hyperlink/api"><AuroHyperlinkApi /></Route>
            <Route exact path="/components/auro/hyperlink/a11y"><AuroHyperlinkA11y /></Route>
            <Route exact path="/components/orion/hyperlink"><Hyperlink /></Route>

            {/* inputOptions */}
            <Route exact path="/components/orion/inputOptions/"><Options /></Route>
            <Route exact path="/components/orion/inputOptions/install"><OdsOptionsInstall /></Route>

            {/* inputText */}
            <Route exact path="/components/orion/inputText/"><InputText /></Route>
            <Route exact path="/components/orion/inputText/install"><InputTextInstall /></Route>


            {/* Dev resources */}
            <Route exact path="/support/a11y"><A11yDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/support/babelSupport"><BabelSupportDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/support/browsersSupport"><BrowsersSupportDocs /></Route>
            <Route exact path="/support/components"><ComponentsDocs /></Route>
            <Route exact path="/support/slots"><SlotsDocs /></Route>
            <Route exact path="/support/techDetails"><TechDetailsDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/support/tests"><TestsDocs /></Route>
            <Route exact path="/support/why"><WhyCustomelementsDocs /></Route> {/* not used */} {/* reevaluate content */}

            <Route exact path="/support/polyfills/focusvisible"><FocusVisible /></Route>
            <Route exact path="/support/polyfills/webcomponentsjs"><Webcomponentsjs /></Route>

            {/* Pollyfills */}
            {/* <Route exact path="./support/polyfills/focusvisible"><PolyfillDocs /></Route> */}

            {/* CSS */}
            <Route exact path="/support/css-conventions"><CssConventionsDocs /></Route>
            <Route exact path="/support/custom-properties"><CustomPropertiesDocs /></Route>
            <Route exact path="/support/isTouching"><IsTouchingDocs /></Route> {/* not used */} {/* reevaluate content */}
            <Route exact path="/webcorestylesheets"><WebCoreStyleSheets /></Route>

            {/* Process */}


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
