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

// JS content files
import VersionZero from './content/dynamic/epics/projectVersionZero';
import UserResearch  from './content/dynamic/epics/projectUserResearch';
import DocSiteStrategy from './content/dynamic/epics/projectDocSite';
import PlannedWork from './content/dynamic/componentStatus/statusView';
import ComponentAudit from './content/dynamic/componentAudit/auditView';

// design tokens
import DesignTokens from './content/dynamic/designTokens/tokens';
import DeprecatedTokens from './content/dynamic/designTokens/deprecated';
import DesignTokensInstall from './content/dynamic/designTokens/install';

// color
import ColorOverview from './content/dynamic/color/overview';
import CoreDigitalPaletteUsage from './content/dynamic/color/coreUsage';
import PersonalityPaletteUsage from './content/dynamic/color/personalityUsage';

import ColorUsageLegacy from './content/dynamic/color/usage_legacy';
import ColorOverviewLegacy from './content/dynamic/color/overview_legacy';

// typography
import TypographyOverview from './content/dynamic/typography/overview';
import TypographyUsage from './content/dynamic/typography/usage';
import TypographyDeprecated from './content/dynamic/typography/deprecated';

// icons
import IconsOverview from './content/dynamic/icons/overview';
import IconsUsage from './content/dynamic/icons/usage.js';
import IconsInstall from './content/dynamic/icons/install.js';

// layout
import LayoutGrid from './content/dynamic/layout/grid';
import LayoutSpacing from './content/dynamic/layout/spacing';


// button
import AuroButton from './content/dynamic/button/button';
import AuroButtonApi from './content/dynamic/button/api';
import AuroButtonInstall from './content/dynamic/button/install';
import Button from './content/dynamic/button/legacy'; // legacy

// checkbox
import AuroCheckbox from './content/dynamic/checkbox/checkbox';
import AuroCheckboxApi from './content/dynamic/checkbox/api';
import AuroCheckboxInstall from './content/dynamic/checkbox/install';

// wcss
import WebCoreStyleSheets from './content/dynamic/wcss/wcss';
import WcssFeatures from './content/dynamic/wcss/features';
import WcssConventions from './content/dynamic/wcss/conventions';
import WcssFaq from './content/dynamic/wcss/faq';
import WcssTests from './content/dynamic/wcss/tests';

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

// toast
import Toast from './content/dynamic/toast/toast';
import ToastInstall from './content/dynamic/toast/install';
import ToastToaster from './content/dynamic/toast/toaster';

// Table
import AuroTable from './content/dynamic/table/table';
import AuroTableApi from './content/dynamic/table/api';
import AuroTableInstall from './content/dynamic/table/install';

// Header
import AuroHeader from './content/dynamic/header/header';
import AuroHeaderApi from './content/dynamic/header/api';
import AuroHeaderInstall from './content/dynamic/header/install';

// polyfills
import FocusVisible from './content/dynamic/polyfills/focusVisible';
import Webcomponentsjs from './content/dynamic/polyfills/webcomponentsjs';

// release Dashboard
import AllReleases from './content/dynamic/releaseDashboard/allReleases';
import ReleasesBySprint from './content/dynamic/releaseDashboard/releasesBySprint';
import ReleaseSummary from './content/dynamic/releaseDashboard/summaryDashboard';

// use Dashboard
import UseDashboard from './content/dynamic/useDashboard/useDashboard';

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
  ComponentsDocs,
  CssConventionsDocs,
  CustomPropertiesDocs,
  GovernanceDocs,
  IsTouchingDocs,
  JavascriptDemoDocs,
  SvelteDemoDocs,
  Layout,
  ReactDemoDocs,
  SlotsDocs,
  TechDetailsDocs,
  TestsDocs,
  VoiceTone,
  WhyCustomelementsDocs,


  // cleaned up markdown docs
  Philosophy,
  WhatIsWhat,
  GettingStartedDevsOverview,
  WCGenerator,
  ComplianceDocs,
  ContributingDocs,
  ShadyCSS,


} from './content/docsExport';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${API_KEY}`
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              <Route exact path="/component-status"><ComponentsDocs /></Route>

              <Route exact path="/epics/"><VersionZero /></Route>
              <Route exact path="/epics/version-zero"><VersionZero /></Route>
              <Route exact path="/epics/user-research"><UserResearch /></Route>
              <Route exact path="/epics/doc-site-strategy"><DocSiteStrategy /></Route>

              <Route exact path="/planned-work"><PlannedWork /></Route>
              <Route exact path="/audit/"><ComponentAudit /></Route>
              <Route exact path="/ado-use"><UseDashboard /></Route>

              {/* Getting Started/developers */}
              <Route exact path="/getting-started/developers/overview"><GettingStartedDevsOverview /></Route>
              <Route exact path="/getting-started/developers/common-definitions"><WhatIsWhat /></Route>
              <Route exact path="/getting-started/developers/what-is-what"><WhatIsWhat /></Route>
              <Route exact path="/getting-started/developers/generator"><WCGenerator /></Route>
              <Route exact path="/getting-started/developers/compliance"><ComplianceDocs /></Route>
              <Route exact path="/getting-started/developers/contributing"><ContributingDocs /></Route>
              <Route exact path="/getting-started/developers/governance"><GovernanceDocs /></Route>
              {/* Design Tokens */}
              <Route exact path="/getting-started/developers/design-tokens"><DesignTokens /></Route>
              <Route exact path="/getting-started/developers/design-tokens/install"><DesignTokensInstall /></Route>
              <Route exact path="/getting-started/developers/design-tokens/deprecated"><DeprecatedTokens /></Route>

              {/* Color */}
              <Route exact path="/color/overview"><ColorOverview /></Route>
              <Route exact path="/color/core-digital-palette-usage"><CoreDigitalPaletteUsage /></Route>
              <Route exact path="/color/personality-palette-usage"><PersonalityPaletteUsage /></Route>

              <Route exact path="/color/usage_legacy"><ColorUsageLegacy /></Route>
              <Route exact path="/color/overview_legacy"><ColorOverviewLegacy /></Route>

              {/* Typography */}
              <Route exact path="/typography/overview"><TypographyOverview /></Route>
              <Route exact path="/typography/usage"><TypographyUsage /></Route>
              <Route exact path="/typography/deprecated"><TypographyDeprecated /></Route>


              {/* Icons */}
              <Route exact path="/icons/overview"><IconsOverview /></Route>
              <Route exact path="/icons/usage"><IconsUsage /></Route>
              <Route exact path="/icons/install"><IconsInstall /></Route>


              {/* Layout */}
              <Route exact path="/core/layout"><Layout /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/layout/grid"><LayoutGrid /></Route>
              <Route exact path="/layout/spacing"><LayoutSpacing /></Route>

              {/* Voice */}
              <Route path="/core/voice-and-tone"><VoiceTone /></Route>

              {/* Auro Button */}
              <Route exact path="/components/auro/button"><AuroButton /></Route>
              <Route exact path="/components/auro/button/install"><AuroButtonInstall /></Route>
              <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route>
              {/* Legacy */}
              <Route exact path="/components/orion/button"><Button /></Route>

              {/* Auro Checkbox */}
              <Route exact path="/components/auro/checkbox"><AuroCheckbox /></Route>
              <Route exact path="/components/auro/checkbox/install"><AuroCheckboxInstall /></Route>
              <Route exact path="/components/auro/checkbox/api"><AuroCheckboxApi /></Route>
              {/* <Route exact path="/components/auro/checkbox/api"><AuroCheckboxApi /></Route> */}

              {/* Auro Table */}
              <Route exact path="/components/auro/table"><AuroTable /></Route>
              <Route exact path="/components/auro/table/install"><AuroTableInstall /></Route>
              <Route exact path="/components/auro/table/api"><AuroTableApi /></Route>

              {/* Auro Header */}
              <Route exact path="/components/auro/header"><AuroHeader /></Route>
              <Route exact path="/components/auro/header/install"><AuroHeaderInstall /></Route>
              <Route exact path="/components/auro/header/api"><AuroHeaderApi /></Route>

              {/* Auro Hyperlink */}
              <Route exact path="/components/auro/hyperlink"><AuroHyperlink /></Route>
              <Route exact path="/components/auro/hyperlink/install"><AuroHyperlinkInstall /></Route>
              <Route exact path="/components/auro/hyperlink/api"><AuroHyperlinkApi /></Route>
              <Route exact path="/components/auro/hyperlink/a11y"><AuroHyperlinkA11y /></Route>
              <Route exact path="/components/orion/hyperlink"><Hyperlink /></Route>

              {/* inputOptions */}
              <Route exact path="/components/orion/inputOptions/"><Options /></Route>
              <Route exact path="/components/orion/inputOptions/install"><OdsOptionsInstall /></Route>

              {/* toast */}
              <Route exact path="/components/orion/toast/"><Toast /></Route>
              <Route exact path="/components/orion/toast/install"><ToastInstall /></Route>
              <Route exact path="/components/orion/toast/toaster"><ToastToaster /></Route>

              {/* inputText */}
              <Route exact path="/components/orion/inputText/"><InputText /></Route>
              <Route exact path="/components/orion/inputText/install"><InputTextInstall /></Route>


              {/* Dev resources */}
              <Route exact path="/support/a11y"><A11yDocs /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/support/babelSupport"><BabelSupportDocs /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/support/browsersSupport"><BrowsersSupportDocs /></Route>
              <Route exact path="/support/slots"><SlotsDocs /></Route>
              <Route exact path="/support/techDetails"><TechDetailsDocs /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/support/tests"><TestsDocs /></Route>
              <Route exact path="/support/why"><WhyCustomelementsDocs /></Route> {/* not used */} {/* reevaluate content */}

              <Route exact path="/support/polyfills/focusvisible"><FocusVisible /></Route>
              <Route exact path="/support/polyfills/webcomponentsjs"><Webcomponentsjs /></Route>
              <Route exact path="/support/all-releases"><AllReleases /></Route>
              <Route exact path="/support/releases-by-sprint"><ReleasesBySprint /></Route>
              <Route exact path="/support/releases-summary"><ReleaseSummary /></Route>

              {/* Pollyfills */}
              {/* <Route exact path="./support/polyfills/focusvisible"><PolyfillDocs /></Route> */}

              {/* CSS */}
              <Route exact path="/support/css-conventions"><CssConventionsDocs /></Route>
              <Route exact path="/support/shadycss"><ShadyCSS /></Route>

              <Route exact path="/support/custom-properties"><CustomPropertiesDocs /></Route>
              <Route exact path="/support/isTouching"><IsTouchingDocs /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/webcorestylesheets"><WebCoreStyleSheets /></Route>

              <Route exact path="/webcorestylesheets/conventions"><WcssConventions /></Route>
              <Route exact path="/webcorestylesheets/faq"><WcssFaq /></Route>
              <Route exact path="/webcorestylesheets/tests"><WcssTests /></Route>
              <Route exact path="/webcorestylesheets/features"><WcssFeatures /></Route>

              {/* Process */}


              {/* Example Projects  */}
              {/* Content for these pages need to be updated and have better descriptions of project */}
              <Route exact path="/angularSetup"><AngularDemoDocs /></Route> {/* not used */}
              <Route exact path="/javascriptSetup"><JavascriptDemoDocs /></Route>
              <Route exact path="/reactSetup"><ReactDemoDocs /></Route>
              <Route exact path="/svelteSetup"><SvelteDemoDocs /></Route>


              <Route path="*"><NotFound /></Route>

            </Switch>
          </Router>
        </div>
        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default App;
