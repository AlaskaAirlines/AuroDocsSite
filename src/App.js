import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './sass/index.scss';
import './sass/App.scss';

// -=-=-=-=-=-=-=-=-=-=- LEGACY =-=-=-=-=-=-=-=-=-=-=-=-=
// Only needed for deprecated resources still in the site
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
// -=-=-=-=-=-=-=-=-=-=- LEGACY =-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=- New Hotness =-=-=-=-=-=-=-=-=-=-=-=
import '@alaskaairux/design-tokens/dist/tokens/CSSCustomProperties.css';

// Logo to appear in console
import './scripts/auro-consoleLogo';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// JS content files
import VersionZero from './content/dynamic/epics/projectVersionZero';
import UserResearch  from './content/dynamic/epics/projectUserResearch';
import DocSiteStrategy from './content/dynamic/epics/projectDocSite';
import PlannedWork from './content/dynamic/componentStatus/plannedWork';
import PrioritizedWork from './content/dynamic/componentStatus/prioritizedWork';
import HelpWanted from './content/dynamic/componentStatus/helpWanted';
import ComponentStatus from './content/dynamic/componentStatus/statusView';
import ComponentAudit from './content/dynamic/componentAudit/auditView';

// Design to dev handoff process
// import DesignHandoffIndex from './content/dynamic/designHandoff/index';
// import DesignHandoffParent from './content/dynamic/designHandoff/parent';
// import DesignHandoffDev from './content/dynamic/designHandoff/development';
// import DesignHandoffSym from './content/dynamic/designHandoff/symbolize';
// import DesignHandoffReview from './content/dynamic/designHandoff/review';
// import DesignHandoffLabels from './content/dynamic/designHandoff/labels';
// import DesignHandoffClose from './content/dynamic/designHandoff/close';

// Auro Labs
import AuroLabs from './content/dynamic/labs/aurolabs';
import AuroLabsMinors from './content/dynamic/labs/aurolabsMinors';
import AuroLabsMajors from './content/dynamic/labs/aurolabsMajors';

// WC-Generator
import GeneratorInstall from './content/dynamic/generator/install';
import GeneratorApi from './content/dynamic/generator/api';
import GeneratorUpgrade from './content/dynamic/generator/upgrade';
import DevelopmentSetup from './content/dynamic/generator/developmentSetup';

// Contributing
import Contributing from './content/dynamic/contributing/contributing';
import ContributingUpstream from './content/dynamic/contributing/upstream';
import ContribGitWorkflow from './content/dynamic/contributing/gitWorkflow';
import ContribIssuePrLabels from './content/dynamic/contributing/issuePrLables';

// design tokens
import DesignTokens from './content/dynamic/designTokens/tokens';
import DeprecatedTokens from './content/dynamic/designTokens/deprecated';
import DesignTokensInstall from './content/dynamic/designTokens/install';

// color
import ColorOverview from './content/dynamic/color/overview';
import CoreDigitalPalette from './content/dynamic/color/digitalPalette';
import PersonalityPalette from './content/dynamic/color/personalityPalette';

// import ColorUsageLegacy from './content/dynamic/color/usage_legacy';
// import ColorOverviewLegacy from './content/dynamic/color/overview_legacy';

// typography
import TypographyOverview from './content/dynamic/typography/overview';
import TypographyUsage from './content/dynamic/typography/usage';
import TypographyDeprecated from './content/dynamic/typography/deprecated';

// icons
import IconsGuidelines from './content/dynamic/icons/guidelines';
import Icons from './content/dynamic/icons/icons.js';
import IconsInstall from './content/dynamic/icons/install';
import IconsWaysToUse from './content/dynamic/icons/ways-to-use';

// layout
import LayoutGrid from './content/dynamic/layout/grid';
import LayoutSpacing from './content/dynamic/layout/spacing';

// card
import AuroCard from './content/dynamic/card/component';
import AuroBanner from './content/dynamic/card/banner';
import AuroCardApi from './content/dynamic/card/api';
import AuroCardInstall from './content/dynamic/card/install';
import AuroCardReleases from './content/dynamic/card/releases';

// datetime
import AuroDateTime from './content/dynamic/datetime/component';
import AuroDateTimeApi from './content/dynamic/datetime/api';
import AuroDateTimeInstall from './content/dynamic/datetime/install';
import AuroDateTimeReleases from './content/dynamic/datetime/releases';

// Accordion
import AuroAccordion from './content/dynamic/accordion/component';
import AuroAccordionApi from './content/dynamic/accordion/api';
import AuroAccordionInstall from './content/dynamic/accordion/install';
import AuroAccordionReleases from './content/dynamic/accordion/releases';

// Avatar
import AuroAvatar from './content/dynamic/avatar/component';
import AuroAvatarApi from './content/dynamic/avatar/api';
import AuroAvatarInstall from './content/dynamic/avatar/install';
import AuroAvatarReleases from './content/dynamic/avatar/releases';

// Interruption [dialog, drawer]
import AuroInterruption from './content/dynamic/interruption/component';
import AuroInterruptionDialog from './content/dynamic/interruption/dialog';
import AuroInterruptionDrawer from './content/dynamic/interruption/drawer';
import AuroInterruptionApi from './content/dynamic/interruption/api';
import AuroInterruptionInstall from './content/dynamic/interruption/install';
import AuroInterruptionReleases from './content/dynamic/interruption/releases';

// Icon
import AuroIcon from './content/dynamic/icon/component';
import AuroIconApi from './content/dynamic/icon/api';
import AuroIconInstall from './content/dynamic/icon/install';
import AuroIconReleases from './content/dynamic/icon/releases';
import AuroAlaska from './content/dynamic/icon/alaska';

// Alerts
import AuroAlerts from './content/dynamic/alerts/component';
import AuroAlertsApi from './content/dynamic/alerts/api';
import AuroAlertsInstall from './content/dynamic/alerts/install';
import AuroAlertsReleases from './content/dynamic/alerts/releases';

// Flight
import AuroFlight from './content/dynamic/flight/component';
import AuroFlightApi from './content/dynamic/flight/api';
import AuroFlightInstall from './content/dynamic/flight/install';
import AuroFlightDot from './content/dynamic/flight/dot';
import AuroFlightReleases from './content/dynamic/flight/releases';

// Flightline
import AuroFlightline from './content/dynamic/flightline/component';
import AuroFlightlineApi from './content/dynamic/flightline/api';
import AuroFlightlineInstall from './content/dynamic/flightline/install';
import AuroFlightlineDot from './content/dynamic/flightline/dot';
import AuroFlightlineReleases from './content/dynamic/flightline/releases';

// lockup
import AuroLockup from './content/dynamic/lockup/component';
import AuroLockupApi from './content/dynamic/lockup/api';
import AuroLockupInstall from './content/dynamic/lockup/install';
import AuroLockupReleases from './content/dynamic/lockup/releases';

// button
import AuroButton from './content/dynamic/button/component';
import AuroButtonApi from './content/dynamic/button/api';
import AuroButtonInstall from './content/dynamic/button/install';
import AuroButtonReleases from './content/dynamic/button/releases';

// badge
import AuroBadge from './content/dynamic/badge/component';
import AuroBadgeApi from './content/dynamic/badge/api';
import AuroBadgeInstall from './content/dynamic/badge/install';
import AuroBadgeReleases from './content/dynamic/badge/releases';

// input
import AuroInput from './content/dynamic/input/component';
import AuroInputApi from './content/dynamic/input/api';
import AuroInputInstall from './content/dynamic/input/install';
import AuroInputReleases from './content/dynamic/input/releases';

// loader
import AuroLoader from './content/dynamic/loader/component';
import AuroLoaderApi from './content/dynamic/loader/api';
import AuroLoaderInstall from './content/dynamic/loader/install';
import AuroLoaderReleases from './content/dynamic/loader/releases';

// carousel
import AuroCarousel from './content/dynamic/carousel/component';
import AuroCarouselApi from './content/dynamic/carousel/api';
import AuroCarouselInstall from './content/dynamic/carousel/install';
import AuroCarouselReleases from './content/dynamic/carousel/releases';

// pane
import AuroPane from './content/dynamic/pane/component';
import AuroPaneApi from './content/dynamic/pane/api';
import AuroPaneInstall from './content/dynamic/pane/install';
import AuroPaneReleases from './content/dynamic/pane/releases';

// checkbox
import AuroCheckbox from './content/dynamic/checkbox/component';
import AuroCheckboxApi from './content/dynamic/checkbox/api';
import AuroCheckboxInstall from './content/dynamic/checkbox/install';
import AuroCheckboxReleases from './content/dynamic/checkbox/releases';

// radio button
import AuroRadio from './content/dynamic/radio/component';
import AuroRadioApi from './content/dynamic/radio/api';
import AuroRadioInstall from './content/dynamic/radio/install';
import AuroRadioReleases from './content/dynamic/radio/releases';

// wcss
import WebCoreStyleSheets from './content/dynamic/wcss/wcss';
import WcssFeatures from './content/dynamic/wcss/features';
import WcssConventions from './content/dynamic/wcss/conventions';
import WcssFaq from './content/dynamic/wcss/faq';
import WcssTests from './content/dynamic/wcss/tests';
import WcssLinter from './content/dynamic/wcss/lint';
import WcssGuidelines from './content/dynamic/wcss/guidelines';
import CustomElementCss from './content/dynamic/wcss/customElementCss';
import IdiomaticCss from './content/dynamic/wcss/idiomatic';

// hyperlink
import AuroHyperlink from './content/dynamic/hyperlink/hyperlink';
import AuroHyperlinkInstall from './content/dynamic/hyperlink/install';
import AuroHyperlinkApi from './content/dynamic/hyperlink/api';
import AuroHyperlinkA11y from './content/dynamic/hyperlink/a11y';
import AuroHyperlinkReleases from './content/dynamic/hyperlink/releases';
import Hyperlink from './content/dynamic/hyperlink/legacy'; // legacy

// toast
import Toast from './content/dynamic/toast/toast';
import ToastInstall from './content/dynamic/toast/install';
import ToastToaster from './content/dynamic/toast/toaster';

// Table
import AuroTable from './content/dynamic/table/component';
import AuroTableApi from './content/dynamic/table/api';
import AuroTableInstall from './content/dynamic/table/install';
import AuroTableReleases from './content/dynamic/table/releases';

// Header
import AuroHeader from './content/dynamic/header/component';
import AuroHeaderApi from './content/dynamic/header/api';
import AuroHeaderInstall from './content/dynamic/header/install';
import AuroHeaderReleases from './content/dynamic/header/releases';

// popover
import AuroPopover from './content/dynamic/popover/component';
import AuroPopoverApi from './content/dynamic/popover/api';
import AuroPopoverInstall from './content/dynamic/popover/install';
import AuroPopoverReleases from './content/dynamic/popover/releases';

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

// import resources for markdown docs from ./src/content/markdown
// export classes from ./src/content/docsExport.js
// then add the appropriate Route below
import {
  A11yDocs,
  AngularDemoDocs,
  BabelSupportDocs,
  BrowsersSupportDocs,
  CustomPropertiesDocs,
  GovernanceDocs,
  IsTouchingDocs,
  JavascriptDemoDocs,
  SvelteDemoDocs,
  ReactDemoDocs,
  SlotsDocs,
  TechDetailsDocs,
  TestsDocs,
  WhyCustomelementsDocs,
  ComplianceDocs,

  // Markdown Pages from docsExport(automated)
  A11yStatement,
  AuroSupport,
  DeveloperOverview,
  Home,
  Layout,
  Philosophy,
  Officehours,
  ShadyCSS,
  VoiceTone,
  WhatIsWhat,
  Codetest,
  CustomElements101,

  // temp home for components in progress
  Wip

} from './content/docsExport';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ReactGA from 'react-ga';

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${API_KEY}`
  }
});

const trackingId = "G-KLC8YFTLNW"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })

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

              {/* Automated links from internal docs */}
              <Route exact path='/' component={Home} />
              <Route exact path="/a11y-statement"><A11yStatement /></Route>
              <Route exact path="/user-support"><AuroSupport /></Route> {/* redirect old url */}
              <Route exact path="/auro-support"><AuroSupport /></Route>
              <Route exact path="/getting-started/developers/overview"><DeveloperOverview /></Route>
              <Route exact path="/core/layout"><Layout /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/philosophy"><Philosophy /></Route>
              <Route exact path="/support/shadycss"><ShadyCSS /></Route>
              <Route path="/core/voice-and-tone"><VoiceTone /></Route>
              <Route exact path="/getting-started/developers/common-definitions"><WhatIsWhat /></Route>
              <Route exact path="/take-home"><Codetest /></Route>
              <Route exact path="/aurolabs"><AuroLabs /></Route>
              <Route exact path="/aurolabs/minors"><AuroLabsMinors /></Route>
              <Route exact path="/aurolabs/majors"><AuroLabsMajors /></Route>
              <Route exact path="/custom-element-101"><CustomElements101 /></Route>

              {/* Home */}
              <Route exact path="/epics/"><VersionZero /></Route>
              <Route exact path="/epics/version-zero"><VersionZero /></Route>
              <Route exact path="/epics/user-research"><UserResearch /></Route>
              <Route exact path="/epics/doc-site-strategy"><DocSiteStrategy /></Route>

              <Route exact path="/wip"><PlannedWork /></Route>
              <Route exact path="/prioritized"><PrioritizedWork /></Route>
              <Route exact path="/help-wanted"><HelpWanted /></Route>
              <Route exact path="/component-status"><ComponentStatus /></Route>
              <Route exact path="/status"><ComponentStatus /></Route>
              <Route exact path="/audit"><ComponentAudit /></Route>
              <Route exact path="/ado-use"><UseDashboard /></Route>

              {/* Direct links */}
              <Route exact path="/status"><ComponentStatus /></Route>
              <Route exact path="/accordion/"><AuroAccordion /></Route>
              <Route exact path="/alerts"><AuroAlerts /></Route>
              <Route exact path="/avatar/"><AuroAvatar /></Route>
              <Route exact path="/button"><AuroButton /></Route>
              <Route exact path="/lockup"><AuroLockup /></Route>
              <Route exact path="/carousel/"><AuroCarousel /></Route>
              <Route exact path="/card/"><AuroCard /></Route>
              <Route exact path="/checkbox"><AuroCheckbox /></Route>
              <Route exact path="/datetime/"><AuroDateTime /></Route>
              <Route exact path="/interruption/"><AuroInterruption /></Route>
              <Route exact path="/header"><AuroHeader /></Route>
              <Route exact path="/hyperlink"><AuroHyperlink /></Route>
              <Route exact path="/icon/"><AuroIcon /></Route>
              <Route exact path="/input"><AuroInput /></Route>
              <Route exact path="/pane/"><AuroPane /></Route>
              <Route exact path="/popover"><AuroPopover /></Route>
              <Route exact path="/radio"><AuroRadio /></Route>
              <Route exact path="/table"><AuroTable /></Route>
              <Route exact path="/toast/"><Toast /></Route>




              {/* Getting Started/developers */}
              <Route exact path="/getting-started/developers/what-is-what"><WhatIsWhat /></Route>
              {/* <Route exact path="/getting-started/developers/generator"><WCGenerator /></Route> */}
              <Route exact path="/getting-started/developers/compliance"><ComplianceDocs /></Route>
              {/* <Route exact path="/getting-started/developers/contributing"><ContributingDocs /></Route> */}
              <Route exact path="/getting-started/developers/governance"><GovernanceDocs /></Route>
              {/* Design Tokens */}
              <Route exact path="/getting-started/developers/design-tokens"><DesignTokens /></Route>
              <Route exact path="//design-tokens"><DesignTokens /></Route>
              <Route exact path="/getting-started/developers/design-tokens/install"><DesignTokensInstall /></Route>
              <Route exact path="/getting-started/developers/design-tokens/deprecated"><DeprecatedTokens /></Route>
              <Route exact path="/design-tokens/deprecated"><DeprecatedTokens /></Route>
              <Route exact path="/officehours"><Officehours /></Route>

              {/* Desing to dev handoff process */}
              {/* <Route exact path="/getting-started/handoff"><DesignHandoffIndex /></Route>
              <Route exact path="/getting-started/handoff/parent"><DesignHandoffParent /></Route>
              <Route exact path="/getting-started/handoff/development"><DesignHandoffDev /></Route>
              <Route exact path="/getting-started/handoff/symbolize"><DesignHandoffSym /></Route>
              <Route exact path="/getting-started/handoff/review"><DesignHandoffReview /></Route>
              <Route exact path="/getting-started/handoff/labels"><DesignHandoffLabels /></Route>
              <Route exact path="/getting-started/handoff/close"><DesignHandoffClose /></Route> */}

              {/* Color */}
              <Route exact path="/color/overview"><ColorOverview /></Route>
              <Route exact path="/color/digital-palette"><CoreDigitalPalette /></Route>
              <Route exact path="/color/personality-palette"><PersonalityPalette /></Route>
              {/* legacy redirects */}
              <Route exact path="/color/core-digital-palette-usage"><CoreDigitalPalette /></Route>
              <Route exact path="/color/personality-palette-usage"><PersonalityPalette /></Route>

              {/* Generator */}
              <Route exact path="/generator"><GeneratorInstall /></Route>
              <Route exact path="/getting-started/developers/generator/install"><GeneratorInstall /></Route>
              <Route exact path="/getting-started/developers/generator/generator/api"><GeneratorApi /></Route>
              <Route exact path="/getting-started/developers/generator/getting-started"><AuroLabsMinors /></Route>
              <Route exact path="/getting-started/developers/generator/upgrade"><GeneratorUpgrade /></Route>
              <Route exact path="/getting-started/developers/generator/development-setup"><DevelopmentSetup /></Route>

              {/* Generator */}
              <Route exact path="/contributing"><Contributing /></Route>
              <Route exact path="/contributing/upstream"><ContributingUpstream /></Route>
              <Route exact path="/contributing/git-workflow"><ContribGitWorkflow /></Route>
              <Route exact path="/contributing/issues-prs-labels"><ContribIssuePrLabels /></Route>

              {/* Typography */}
              <Route exact path="/typography/overview"><TypographyOverview /></Route>
              <Route exact path="/typography/usage"><TypographyUsage /></Route>
              <Route exact path="/typography/deprecated"><TypographyDeprecated /></Route>

              {/* Icons */}
              <Route exact path="/icons/guidelines"><IconsGuidelines /></Route>
              <Route exact path="/icons"><Icons /></Route>
              <Route exact path="/icons/install"><IconsInstall /></Route>
              <Route exact path="/icons/ways-to-use"><IconsWaysToUse /></Route>

              {/* Layout */}
              <Route exact path="/layout/grid"><LayoutGrid /></Route>
              <Route exact path="/layout/spacing"><LayoutSpacing /></Route>

              {/* Auro Alerts */}
              <Route exact path="/components/auro/alerts"><AuroAlerts /></Route>
              <Route exact path="/components/auro/alerts/install"><AuroAlertsInstall /></Route>
              <Route exact path="/components/auro/alerts/api"><AuroAlertsApi /></Route>
              <Route exact path="/components/auro/alerts/releases"><AuroAlertsReleases /></Route>

              {/* Auro Flight */}
              <Route exact path="/components/auro/flight"><AuroFlight /></Route>
              <Route exact path="/components/auro/flight/install"><AuroFlightInstall /></Route>
              <Route exact path="/components/auro/flight/api"><AuroFlightApi /></Route>
              <Route exact path="/components/auro/flight/dot"><AuroFlightDot /></Route>
              <Route exact path="/components/auro/flight/releases"><AuroFlightReleases /></Route>

              {/* Auro Flightline */}
              <Route exact path="/components/auro/flightline"><AuroFlightline /></Route>
              <Route exact path="/components/auro/flightline/install"><AuroFlightlineInstall /></Route>
              <Route exact path="/components/auro/flightline/api"><AuroFlightlineApi /></Route>
              <Route exact path="/components/auro/flightline/dot"><AuroFlightlineDot /></Route>
              <Route exact path="/components/auro/flightline/releases"><AuroFlightlineReleases /></Route>

              {/* Auro Lockup */}
              <Route exact path="/components/auro/lockup"><AuroLockup /></Route>
              <Route exact path="/components/auro/lockup/install"><AuroLockupInstall /></Route>
              <Route exact path="/components/auro/lockup/api"><AuroLockupApi /></Route>
              <Route exact path="/components/auro/lockup/releases"><AuroLockupReleases /></Route>

              {/* Auro Button */}
              <Route exact path="/components/auro/button"><AuroButton /></Route>
              <Route exact path="/components/auro/button/install"><AuroButtonInstall /></Route>
              <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route>
              <Route exact path="/components/auro/button/releases"><AuroButtonReleases /></Route>

              {/* Auro Badge */}
              <Route exact path="/components/auro/badge"><AuroBadge /></Route>
              <Route exact path="/components/auro/badge/install"><AuroBadgeInstall /></Route>
              <Route exact path="/components/auro/badge/api"><AuroBadgeApi /></Route>
              <Route exact path="/components/auro/badge/releases"><AuroBadgeReleases /></Route>

              {/* Auro Input */}
              <Route exact path="/components/auro/input"><AuroInput /></Route>
              <Route exact path="/components/auro/input/install"><AuroInputInstall /></Route>
              <Route exact path="/components/auro/input/api"><AuroInputApi /></Route>
              <Route exact path="/components/auro/input/releases"><AuroInputReleases /></Route>

              {/* Auro Loader */}
              <Route exact path="/components/auro/loader"><AuroLoader /></Route>
              <Route exact path="/components/auro/loader/install"><AuroLoaderInstall /></Route>
              <Route exact path="/components/auro/loader/api"><AuroLoaderApi /></Route>
              <Route exact path="/components/auro/loader/releases"><AuroLoaderReleases /></Route>

              {/* Auro Checkbox */}
              <Route exact path="/components/auro/checkbox"><AuroCheckbox /></Route>
              <Route exact path="/components/auro/checkbox/install"><AuroCheckboxInstall /></Route>
              <Route exact path="/components/auro/checkbox/api"><AuroCheckboxApi /></Route>
              <Route exact path="/components/auro/checkbox/releases"><AuroCheckboxReleases /></Route>
              {/* <Route exact path="/components/auro/checkbox/api"><AuroCheckboxApi /></Route> */}

              {/* Auro Popover */}
              <Route exact path="/components/auro/popover"><AuroPopover /></Route>
              <Route exact path="/components/auro/popover/install"><AuroPopoverInstall /></Route>
              <Route exact path="/components/auro/popover/api"><AuroPopoverApi /></Route>
              <Route exact path="/components/auro/popover/releases"><AuroPopoverReleases/></Route>

              {/* Auro Radio button */}
              <Route exact path="/components/auro/radio"><AuroRadio /></Route>
              <Route exact path="/components/auro/radio/install"><AuroRadioInstall /></Route>
              <Route exact path="/components/auro/radio/api"><AuroRadioApi /></Route>
              <Route exact path="/components/auro/radio/releases"><AuroRadioReleases /></Route>

              {/* Auro Table */}
              <Route exact path="/components/auro/table"><AuroTable /></Route>
              <Route exact path="/components/auro/table/install"><AuroTableInstall /></Route>
              <Route exact path="/components/auro/table/api"><AuroTableApi /></Route>
              <Route exact path="/components/auro/table/releases"><AuroTableReleases /></Route>

              {/* Auro Date/Time */}
              <Route exact path="/components/auro/datetime"><AuroDateTime /></Route>
              <Route exact path="/components/auro/datetime/install"><AuroDateTimeInstall /></Route>
              <Route exact path="/components/auro/datetime/api"><AuroDateTimeApi /></Route>
              <Route exact path="/components/auro/datetime/releases"><AuroDateTimeReleases /></Route>

              {/* Auro Header */}
              <Route exact path="/components/auro/header"><AuroHeader /></Route>
              <Route exact path="/components/auro/header/install"><AuroHeaderInstall /></Route>
              <Route exact path="/components/auro/header/api"><AuroHeaderApi /></Route>
              <Route exact path="/components/auro/header/releases"><AuroHeaderReleases /></Route>

              {/* Auro Hyperlink */}
              <Route exact path="/components/auro/hyperlink"><AuroHyperlink /></Route>
              <Route exact path="/components/auro/hyperlink/install"><AuroHyperlinkInstall /></Route>
              <Route exact path="/components/auro/hyperlink/api"><AuroHyperlinkApi /></Route>
              <Route exact path="/components/auro/hyperlink/a11y"><AuroHyperlinkA11y /></Route>
              <Route exact path="/components/auro/hyperlink/releases"><AuroHyperlinkReleases /></Route>
              <Route exact path="/components/orion/hyperlink"><Hyperlink /></Route>

              {/* toast */}
              <Route exact path="/components/orion/toast/"><Toast /></Route>
              <Route exact path="/components/orion/toast/install"><ToastInstall /></Route>
              <Route exact path="/components/orion/toast/toaster"><ToastToaster /></Route>

              {/* card */}
              <Route exact path="/components/auro/card/"><AuroCard /></Route>
              <Route exact path="/components/auro/banner/"><AuroBanner /></Route>
              <Route exact path="/components/auro/card/api"><AuroCardApi /></Route>
              <Route exact path="/components/auro/card/install"><AuroCardInstall /></Route>
              <Route exact path="/components/auro/card/releases"><AuroCardReleases /></Route>

              {/* carousel */}
              <Route exact path="/components/auro/carousel/"><AuroCarousel /></Route>
              <Route exact path="/components/auro/carousel/api"><AuroCarouselApi /></Route>
              <Route exact path="/components/auro/carousel/install"><AuroCarouselInstall /></Route>
              <Route exact path="/components/auro/carousel/releases"><AuroCarouselReleases /></Route>

              {/* accordion */}
              <Route exact path="/components/auro/accordion/"><AuroAccordion /></Route>
              <Route exact path="/components/auro/accordion/api"><AuroAccordionApi /></Route>
              <Route exact path="/components/auro/accordion/install"><AuroAccordionInstall /></Route>
              <Route exact path="/components/auro/accordion/releases"><AuroAccordionReleases /></Route>

              {/* avatar */}
              <Route exact path="/components/auro/avatar/"><AuroAvatar /></Route>
              <Route exact path="/components/auro/avatar/api"><AuroAvatarApi /></Route>
              <Route exact path="/components/auro/avatar/install"><AuroAvatarInstall /></Route>
              <Route exact path="/components/auro/avatar/releases"><AuroAvatarReleases /></Route>

              {/* icon */}
              <Route exact path="/components/auro/icon/"><AuroIcon /></Route>
              <Route exact path="/components/auro/icon/install"><AuroIconInstall /></Route>
              <Route exact path="/components/auro/icon/api"><AuroIconApi /></Route>
              <Route exact path="/components/auro/icon/releases"><AuroIconReleases /></Route>
              <Route exact path="/components/auro/icon/alaska"><AuroAlaska/></Route>

              {/* modal */}
              <Route exact path="/components/auro/interruption/"><AuroInterruption /></Route>
              <Route exact path="/components/auro/interruption/dialog"><AuroInterruptionDialog /></Route>
              <Route exact path="/components/auro/interruption/drawer"><AuroInterruptionDrawer /></Route>
              <Route exact path="/components/auro/interruption/install"><AuroInterruptionInstall/></Route>
              <Route exact path="/components/auro/interruption/api"><AuroInterruptionApi /></Route>
              <Route exact path="/components/auro/interruption/releases"><AuroInterruptionReleases /></Route>

              {/* flight-details */}
              <Route exact path="/components/auro/flight-details/"><Wip /></Route>

              {/* icon */}
              <Route exact path="/components/auro/icon/"><Wip /></Route>

              {/* modal */}
              <Route exact path="/components/auro/modal/"><Wip /></Route>

              {/* menu */}
              <Route exact path="/components/auro/menu/"><Wip /></Route>

              {/* pane */}
              <Route exact path="/components/auro/pane/"><AuroPane /></Route>
              <Route exact path="/components/auro/pane/api"><AuroPaneApi /></Route>
              <Route exact path="/components/auro/pane/install"><AuroPaneInstall /></Route>
              <Route exact path="/components/auro/pane/releases"><AuroPaneReleases /></Route>

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

              <Route exact path="/support/custom-properties"><CustomPropertiesDocs /></Route>
              <Route exact path="/support/isTouching"><IsTouchingDocs /></Route> {/* not used */} {/* reevaluate content */}
              <Route exact path="/webcorestylesheets"><WebCoreStyleSheets /></Route>
              <Route exact path="/getting-started/developers/webcorestylesheets"><WebCoreStyleSheets /></Route>

              <Route exact path="/webcorestylesheets/conventions"><WcssConventions /></Route>
              <Route exact path="/webcorestylesheets/faq"><WcssFaq /></Route>
              <Route exact path="/webcorestylesheets/tests"><WcssTests /></Route>
              <Route exact path="/webcorestylesheets/linter"><WcssLinter /></Route>
              <Route exact path="/webcorestylesheets/guidelines"><WcssGuidelines /></Route>
              <Route exact path="/webcorestylesheets/custom-element-css"><CustomElementCss /></Route>
              <Route exact path="/webcorestylesheets/idiomatic-css"><IdiomaticCss /></Route>
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
