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
// import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
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
import OpenIssues from './content/dynamic/componentStatus/openIssues';
import OpenPullRequest from './content/dynamic/componentStatus/openPullRequest';
import HelpWanted from './content/dynamic/componentStatus/helpWanted';
import Bugs from './content/dynamic/componentStatus/bugs';
import NotReviewed from './content/dynamic/componentStatus/notReviewed';
import ComponentStatus from './content/dynamic/componentStatus/statusView';

// Auro Labs
import AuroLabs from './content/dynamic/labs/aurolabs';
import AuroLabsMinors from './content/dynamic/labs/aurolabsMinors';
import AuroLabsMajors from './content/dynamic/labs/aurolabsMajors';

// Developer setup
import DevSetupWindows from './content/dynamic/devSetup/devSetupWin';
import DevSetupMac from './content/dynamic/devSetup/devSetupMac';
import DevSetupLinux from './content/dynamic/devSetup/devSetupLinux';

// WC-Generator
import GeneratorInstall from './content/dynamic/generator/install';
import GeneratorApi from './content/dynamic/generator/api';
import GeneratorBestPractice from './content/dynamic/generator/bestPractice';
import GeneratorDefineApi from './content/dynamic/generator/defineApi';
import GeneratorUpgrade from './content/dynamic/generator/upgrade';
import CommonDefs from './content/dynamic/generator/commonDefs';
import GeneratorReleases from './content/dynamic/generator/releases';

// Contributing
import Contributing from './content/dynamic/contributing/contributing';
import ContributingUpstream from './content/dynamic/contributing/upstream';
import ContribGitWorkflow from './content/dynamic/contributing/gitWorkflow';
import ContribIssuePrLabels from './content/dynamic/contributing/issuePrLables';
import DoD from './content/dynamic/contributing/dod';

// design tokens
import DesignTokens from './content/dynamic/designTokens/tokens';
import DeprecatedTokens from './content/dynamic/designTokens/deprecated';
import DesignTokensInstall from './content/dynamic/designTokens/install';

// color
import ColorOverview from './content/dynamic/color/overview';
import CoreDigitalPalette from './content/dynamic/color/digitalPalette';
import PersonalityPalette from './content/dynamic/color/personalityPalette';

// typography
import TypographyOverview from './content/dynamic/typography/overview';
import TypographyUsage from './content/dynamic/typography/usage';

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

// background
import AuroBackground from './content/dynamic/background/component';
import AuroBackgroundApi from './content/dynamic/background/api';
import AuroBackgroundInstall from './content/dynamic/background/install';
import AuroBackgroundReleases from './content/dynamic/background/releases';

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

// Alert
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

// skeleton
import AuroSkeleton from './content/dynamic/skeleton/component';
import AuroSkeletonApi from './content/dynamic/skeleton/api';
import AuroSkeletonInstall from './content/dynamic/skeleton/install';
import AuroSkeletonReleases from './content/dynamic/skeleton/releases';

// button
import AuroButton from './content/dynamic/button/component';
import AuroButtonApi from './content/dynamic/button/api';
import AuroButtonInstall from './content/dynamic/button/install';
import AuroButtonReleases from './content/dynamic/button/releases';
import AuroButtonFigma from './content/dynamic/button/figma';

// dropdown
import AuroDropdown from './content/dynamic/dropdown/component';
import AuroDropdownApi from './content/dynamic/dropdown/api';
import AuroDropdownInstall from './content/dynamic/dropdown/install';
import AuroDropdownReleases from './content/dynamic/dropdown/releases';
import AuroDropdownFigma from './content/dynamic/dropdown/figma'

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
import AuroInputFigma from './content/dynamic/input/figma'

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
import AuroCheckboxFigma from './content/dynamic/checkbox/figma';

// radio button
import AuroRadio from './content/dynamic/radio/component';
import AuroRadioApi from './content/dynamic/radio/api';
import AuroRadioInstall from './content/dynamic/radio/install';
import AuroRadioReleases from './content/dynamic/radio/releases';

// css guides
import WcssConventions from './content/dynamic/cssGuides/conventions';
import WcssGuidelines from './content/dynamic/cssGuides/guidelines';
import CustomElementCss from './content/dynamic/cssGuides/customElementCss';
import WcssLinter from './content/dynamic/cssGuides/lint';

// wcss
import WebCoreStyleSheets from './content/dynamic/wcss/wcss';
import WcssFeatures from './content/dynamic/wcss/features';
import WcssTests from './content/dynamic/wcss/tests';

// linked to from CSS Conventions
import IdiomaticCss from './content/dynamic/cssGuides/idiomatic';

// hyperlink
import AuroHyperlink from './content/dynamic/hyperlink/component';
import AuroHyperlinkInstall from './content/dynamic/hyperlink/install';
import AuroHyperlinkApi from './content/dynamic/hyperlink/api';
import AuroHyperlinkReleases from './content/dynamic/hyperlink/releases';
import AuroHyperlinkFigma from './content/dynamic/hyperlink/figma';

// toast
import Toast from './content/dynamic/toast/toast';
import ToastInstall from './content/dynamic/toast/install';
import ToastToaster from './content/dynamic/toast/toaster';

// Table
import AuroTable from './content/dynamic/table/component';
import AuroTableApi from './content/dynamic/table/api';
import AuroTableFigma from './content/dynamic/table/figma';
import AuroTableInstall from './content/dynamic/table/install';
import AuroTableReleases from './content/dynamic/table/releases';

// Menu
import AuroMenu from './content/dynamic/menu/component';
import AuroMenuApi from './content/dynamic/menu/api';
// import AuroMenuFigma from './content/dynamic/menu/figma';
import AuroMenuInstall from './content/dynamic/menu/install';
import AuroMenuReleases from './content/dynamic/menu/releases';

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

// Tokenlist
import AuroTokenlist from './content/dynamic/tokenlist/component';
import AuroTokenlistApi from './content/dynamic/tokenlist/api';
import AuroTokenlistInstall from './content/dynamic/tokenlist/install';
import AuroTokenlistReleases from './content/dynamic/tokenlist/releases';

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
  AngularDemoDocs,
  BrowserSupport,
  Compliance,
  CustomProperties,
  JavascriptDemoDocs,
  ReactDemoDocs,
  ShadyCSS,
  Slots,
  SvelteDemoDocs,
  Tests,

  // Markdown Pages from docsExport(automated)
  // ./scripts/build-page-imports.js
  // content located in ./src/content/markdown
  A11yStatement,
  AuroSupport, // FAQ page
  Codetest, // interview test
  Home, /// home page
  Officehours, // linked from FAQ page
  Philosophy,
  VoiceTone, // owned by UX writers

  // temp home for components in progress
  Wip

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

              {/* Automated links from internal docs */}
              <Route exact path='/' component={Home} />
              <Route exact path="/a11y-statement"><A11yStatement /></Route>
              <Route exact path="/user-support"><AuroSupport /></Route> {/* redirect old url */}
              <Route exact path="/auro-support"><AuroSupport /></Route>
              <Route exact path="/philosophy"><Philosophy /></Route>
              <Route exact path="/support/shadycss"><ShadyCSS /></Route>
              <Route path="/core/voice-and-tone"><VoiceTone /></Route>
              <Route exact path="/take-home"><Codetest /></Route>
              <Route exact path="/aurolabs"><AuroLabs /></Route>
              <Route exact path="/aurolabs/minors"><AuroLabsMinors /></Route>
              <Route exact path="/aurolabs/majors"><AuroLabsMajors /></Route>

              {/* Home */}
              <Route exact path="/epics/"><VersionZero /></Route>
              <Route exact path="/epics/version-zero"><VersionZero /></Route>
              <Route exact path="/epics/user-research"><UserResearch /></Route>
              <Route exact path="/epics/doc-site-strategy"><DocSiteStrategy /></Route>

              <Route exact path="/wip"><OpenIssues /></Route>
              <Route exact path="/open-pull-request"><OpenPullRequest /></Route>
              <Route exact path="/help-wanted"><HelpWanted /></Route>
              <Route exact path="/bugs"><Bugs /></Route>
              <Route exact path="/not-reviewed"><NotReviewed /></Route>
              <Route exact path="/component-status"><ComponentStatus /></Route>
              <Route exact path="/status"><ComponentStatus /></Route>
              <Route exact path="/ado-use"><UseDashboard /></Route>

              {/* Developer setup */}
              <Route exact path="/developer-setup/windows"><DevSetupWindows /></Route>
              <Route exact path="/developer-setup/macOS"><DevSetupMac /></Route>
              <Route exact path="/developer-setup/linux"><DevSetupLinux /></Route>


              {/* Direct links */}
              <Route exact path="/status"><ComponentStatus /></Route>
              <Route exact path="/accordion/"><AuroAccordion /></Route>
              <Route exact path="/alerts"><AuroAlerts /></Route>
              <Route exact path="/avatar/"><AuroAvatar /></Route>
              <Route exact path="/button"><AuroButton /></Route>
              <Route exact path="/dropdown"><AuroDropdown /></Route>
              <Route exact path="/lockup"><AuroLockup /></Route>
              <Route exact path="/carousel/"><AuroCarousel /></Route>
              <Route exact path="/card/"><AuroCard /></Route>
              <Route exact path="/checkbox"><AuroCheckbox /></Route>
              <Route exact path="/background/"><AuroBackground /></Route>
              <Route exact path="/datetime/"><AuroDateTime /></Route>
              <Route exact path="/interruption/"><AuroInterruption /></Route>
              <Route exact path="/header"><AuroHeader /></Route>
              <Route exact path="/hyperlink"><AuroHyperlink /></Route>
              <Route exact path="/icon/"><AuroIcon /></Route>
              <Route exact path="/input"><AuroInput /></Route>
              <Route exact path="/pane/"><AuroPane /></Route>
              <Route exact path="/popover"><AuroPopover /></Route>
              <Route exact path="/tokenlist"><AuroTokenlist /></Route>
              <Route exact path="/radio"><AuroRadio /></Route>
              <Route exact path="/skeleton"><AuroSkeleton /></Route>
              <Route exact path="/table"><AuroTable /></Route>
              <Route exact path="/toast/"><Toast /></Route>


              {/* Getting Started/developers */}
              <Route exact path="/getting-started/developers/compliance"><Compliance /></Route>
              <Route exact path="/getting-started/developers/design-tokens"><DesignTokens /></Route>
              <Route exact path="/design-tokens"><DesignTokens /></Route>
              <Route exact path="/getting-started/developers/design-tokens/install"><DesignTokensInstall /></Route>
              <Route exact path="/getting-started/developers/design-tokens/deprecated"><DeprecatedTokens /></Route>
              <Route exact path="/design-tokens/deprecated"><DeprecatedTokens /></Route>
              <Route exact path="/officehours"><Officehours /></Route>

              {/* Color */}
              <Route exact path="/color/overview"><ColorOverview /></Route>
              <Route exact path="/color/digital-palette"><CoreDigitalPalette /></Route>
              <Route exact path="/color/personality-palette"><PersonalityPalette /></Route>

              {/* Generator */}
              <Route exact path="/generator"><GeneratorInstall /></Route>
              <Route exact path="/generator/install"><GeneratorInstall /></Route>
              <Route exact path="/generator/api"><GeneratorApi /></Route>
              <Route exact path="/generator/best-practice"><GeneratorBestPractice /></Route>
              <Route exact path="/aurolabs/minors"><AuroLabsMinors /></Route>
              <Route exact path="/generator/upgrade"><GeneratorUpgrade /></Route>
              <Route exact path="/generator/define-api"><GeneratorDefineApi /></Route>
              <Route exact path="/common-defs"><CommonDefs /></Route>
              <Route exact path="/generator/releases"><GeneratorReleases /></Route>

              {/* Legacy routes */}
              <Route exact path="/getting-started/developers/generator/install"><GeneratorInstall /></Route>
              <Route exact path="/getting-started/developers/generator/generator/api"><GeneratorApi /></Route>
              <Route exact path="/getting-started/developers/generator/generator/best-practice"><GeneratorBestPractice /></Route>
              <Route exact path="/getting-started/developers/generator/upgrade"><GeneratorUpgrade /></Route>
              <Route exact path="/getting-started/developers/generator/define-api"><GeneratorDefineApi /></Route>

              {/* Generator */}
              <Route exact path="/contributing"><Contributing /></Route>
              <Route exact path="/contributing/upstream"><ContributingUpstream /></Route>
              <Route exact path="/contributing/git-workflow"><ContribGitWorkflow /></Route>
              <Route exact path="/contributing/issues-prs-labels"><ContribIssuePrLabels /></Route>
              <Route exact path="/definition-of-done"><DoD /></Route>

              {/* Fallback route */}
              <Route exact path="/getting-started/developers/contributing"><Contributing /></Route>

              {/* Typography */}
              <Route exact path="/typography/overview"><TypographyOverview /></Route>
              <Route exact path="/typography/usage"><TypographyUsage /></Route>

              {/* Icons */}
              <Route exact path="/icons/guidelines"><IconsGuidelines /></Route>
              <Route exact path="/icons"><Icons /></Route>
              <Route exact path="/icons/install"><IconsInstall /></Route>
              <Route exact path="/icons/ways-to-use"><IconsWaysToUse /></Route>

              {/* Layout */}
              <Route exact path="/layout/grid"><LayoutGrid /></Route>
              <Route exact path="/layout/spacing"><LayoutSpacing /></Route>

              {/* Auro Alerts */}
              <Route exact path="/components/auro/alert"><AuroAlerts /></Route>
              <Route exact path="/components/auro/alert/install"><AuroAlertsInstall /></Route>
              <Route exact path="/components/auro/alert/api"><AuroAlertsApi /></Route>
              <Route exact path="/components/auro/alert/releases"><AuroAlertsReleases /></Route>

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

              {/* Auro Skeleton */}
              <Route exact path="/components/auro/skeleton"><AuroSkeleton /></Route>
              <Route exact path="/components/auro/skeleton/install"><AuroSkeletonInstall /></Route>
              <Route exact path="/components/auro/skeleton/api"><AuroSkeletonApi /></Route>
              <Route exact path="/components/auro/skeleton/releases"><AuroSkeletonReleases /></Route>

              {/* Auro Button */}
              <Route exact path="/components/auro/button"><AuroButton /></Route>
              <Route exact path="/components/auro/button/install"><AuroButtonInstall /></Route>
              <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route>
              <Route exact path="/components/auro/button/releases"><AuroButtonReleases /></Route>
              <Route exact path="/components/auro/button/figma"><AuroButtonFigma /></Route>

              {/* Auro Dropdown */}
              <Route exact path="/components/auro/dropdown"><AuroDropdown /></Route>
              <Route exact path="/components/auro/dropdown/install"><AuroDropdownInstall /></Route>
              <Route exact path="/components/auro/dropdown/api"><AuroDropdownApi /></Route>
              <Route exact path="/components/auro/dropdown/releases"><AuroDropdownReleases /></Route>
              <Route exact path="/components/auro/dropdown/figma"><AuroDropdownFigma /></Route>

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
              <Route exact path="/components/auro/input/figma"><AuroInputFigma /></Route>

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
              <Route exact path="/components/auro/checkbox/figma"><AuroCheckboxFigma /></Route>

              {/* Auro Popover */}
              <Route exact path="/components/auro/popover"><AuroPopover /></Route>
              <Route exact path="/components/auro/popover/install"><AuroPopoverInstall /></Route>
              <Route exact path="/components/auro/popover/api"><AuroPopoverApi /></Route>
              <Route exact path="/components/auro/popover/releases"><AuroPopoverReleases/></Route>

              {/* Auro Popover */}
              <Route exact path="/components/auro/tokenlist"><AuroTokenlist /></Route>
              <Route exact path="/components/auro/tokenlist/install"><AuroTokenlistInstall /></Route>
              <Route exact path="/components/auro/tokenlist/api"><AuroTokenlistApi /></Route>
              <Route exact path="/components/auro/tokenlist/releases"><AuroTokenlistReleases/></Route>

              {/* Auro Radio button */}
              <Route exact path="/components/auro/radio"><AuroRadio /></Route>
              <Route exact path="/components/auro/radio/install"><AuroRadioInstall /></Route>
              <Route exact path="/components/auro/radio/api"><AuroRadioApi /></Route>
              <Route exact path="/components/auro/radio/releases"><AuroRadioReleases /></Route>

              {/* Auro Table */}
              <Route exact path="/components/auro/table"><AuroTable /></Route>
              <Route exact path="/components/auro/table/install"><AuroTableInstall /></Route>
              <Route exact path="/components/auro/table/api"><AuroTableApi /></Route>
              <Route exact path="/components/auro/table/figma"><AuroTableFigma /></Route>
              <Route exact path="/components/auro/table/releases"><AuroTableReleases /></Route>

              {/* Auro Menu */}
              <Route exact path="/components/auro/menu"><AuroMenu /></Route>
              <Route exact path="/components/auro/menu/install"><AuroMenuInstall /></Route>
              <Route exact path="/components/auro/menu/api"><AuroMenuApi /></Route>
              {/* <Route exact path="/components/auro/menu/figma"><AuroMenuFigma /></Route> */}
              <Route exact path="/components/auro/menu/releases"><AuroMenuReleases /></Route>

              {/* Auro Date/Time */}
              <Route exact path="/components/auro/datetime"><AuroDateTime /></Route>
              <Route exact path="/components/auro/datetime/install"><AuroDateTimeInstall /></Route>
              <Route exact path="/components/auro/datetime/api"><AuroDateTimeApi /></Route>
              <Route exact path="/components/auro/datetime/releases"><AuroDateTimeReleases /></Route>

              {/* Auro Background */}
              <Route exact path="/components/auro/background"><AuroBackground /></Route>
              <Route exact path="/components/auro/background/install"><AuroBackgroundInstall /></Route>
              <Route exact path="/components/auro/background/api"><AuroBackgroundApi /></Route>
              <Route exact path="/components/auro/background/releases"><AuroBackgroundReleases /></Route>

              {/* Auro Header */}
              <Route exact path="/components/auro/header"><AuroHeader /></Route>
              <Route exact path="/components/auro/header/install"><AuroHeaderInstall /></Route>
              <Route exact path="/components/auro/header/api"><AuroHeaderApi /></Route>
              <Route exact path="/components/auro/header/releases"><AuroHeaderReleases /></Route>

              {/* Auro Hyperlink */}
              <Route exact path="/components/auro/hyperlink"><AuroHyperlink /></Route>
              <Route exact path="/components/auro/hyperlink/install"><AuroHyperlinkInstall /></Route>
              <Route exact path="/components/auro/hyperlink/api"><AuroHyperlinkApi /></Route>
              <Route exact path="/components/auro/hyperlink/releases"><AuroHyperlinkReleases /></Route>
              <Route exact path="/components/auro/hyperlink/figma"><AuroHyperlinkFigma /></Route>

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
              <Route exact path="/support/browsersSupport"><BrowserSupport /></Route>
              <Route exact path="/support/slots"><Slots /></Route>
              <Route exact path="/support/tests"><Tests /></Route>
              <Route exact path="/support/polyfills/focusvisible"><FocusVisible /></Route>
              <Route exact path="/support/polyfills/webcomponentsjs"><Webcomponentsjs /></Route>
              <Route exact path="/support/all-releases"><AllReleases /></Route>
              <Route exact path="/support/releases-by-sprint"><ReleasesBySprint /></Route>
              <Route exact path="/support/releases-summary"><ReleaseSummary /></Route>

              <Route exact path="/support/custom-properties"><CustomProperties /></Route>
              <Route exact path="/webcorestylesheets"><WebCoreStyleSheets /></Route>
              <Route exact path="/getting-started/developers/webcorestylesheets"><WebCoreStyleSheets /></Route>

              <Route exact path="/css/conventions"><WcssConventions /></Route>
              <Route exact path="/webcorestylesheets/tests"><WcssTests /></Route>
              <Route exact path="/css/linter"><WcssLinter /></Route>
              <Route exact path="/css/guidelines"><WcssGuidelines /></Route>
              <Route exact path="/css/custom-element-css"><CustomElementCss /></Route>
              <Route exact path="/css/idiomatic-css"><IdiomaticCss /></Route>
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
