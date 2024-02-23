import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Importing Sass
import './sass/index.scss';
import './sass/App.scss';

// -=-=-=-=-=-=-=-=-=-=- LEGACY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Required to support components not yet updated to new lib
// -=-=-=-=-=-=-=-=-=-=- LEGACY =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import '@alaskaairux/design-tokens/dist/tokens/CSSCustomProperties.css';

// Current auro tokens
import '@aurodesignsystem/design-tokens/dist/tokens/CSSCustomProperties.css';

// Auro Components
import '@alaskaairux/icons';
import '@aurodesignsystem/auro-accordion';
import '@aurodesignsystem/auro-alert';
import '@aurodesignsystem/auro-avatar';
import '@aurodesignsystem/auro-background';
import '@aurodesignsystem/auro-backtotop';
import '@aurodesignsystem/auro-badge';
import '@aurodesignsystem/auro-banner';
import '@aurodesignsystem/auro-button';
import '@aurodesignsystem/auro-card';
import '@aurodesignsystem/auro-carousel';
import '@aurodesignsystem/auro-checkbox';
import '@aurodesignsystem/auro-datetime';
import '@aurodesignsystem/auro-dialog';
import '@aurodesignsystem/auro-drawer';
import '@aurodesignsystem/auro-dropdown';
import '@aurodesignsystem/auro-flight';
import '@aurodesignsystem/auro-flightline';
import '@aurodesignsystem/auro-header';
import '@aurodesignsystem/auro-hyperlink';
import '@aurodesignsystem/auro-icon';
import '@aurodesignsystem/auro-icon/src/auro-alaska';
import '@aurodesignsystem/auro-input';
import '@aurodesignsystem/auro-loader';
import '@aurodesignsystem/auro-lockup';
import '@aurodesignsystem/auro-menu';
import '@aurodesignsystem/auro-nav';
import '@aurodesignsystem/auro-pane';
import '@aurodesignsystem/auro-popover';
import '@aurodesignsystem/auro-radio';
import '@aurodesignsystem/auro-select';
import '@aurodesignsystem/auro-sidenav';
import '@aurodesignsystem/auro-skeleton';
import '@aurodesignsystem/auro-toast';
import '@aurodesignsystem/auro-tokenlist';
import '@aurodesignsystem/auro-table';

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

// Developer setup
import DevSetupWindows from './content/dynamic/devSetup/devSetupWin';
import DevSetupMac from './content/dynamic/devSetup/devSetupMac';
import DevSetupLinux from './content/dynamic/devSetup/devSetupLinux';
import DevSetupNpm from './content/dynamic/devSetup/devSetupNpm';

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
import DeprecatedIcons from './content/dynamic/icons/deprecatedIcons';
import IconsInstall from './content/dynamic/icons/install';
import IconsWaysToUse from './content/dynamic/icons/ways-to-use';

// layout
import LayoutGrid from './content/dynamic/layout/grid';
import LayoutSpacing from './content/dynamic/layout/spacing';

// wcss
import WebCoreStyleSheets from './content/dynamic/wcss/wcss';
import WcssFeatures from './content/dynamic/wcss/features';
import WcssTests from './content/dynamic/wcss/tests';

// linked to from CSS Conventions
import IdiomaticCss from './content/dynamic/cssGuides/idiomatic';

// css guides
import WcssConventions from './content/dynamic/cssGuides/conventions';
import WcssGuidelines from './content/dynamic/cssGuides/guidelines';
import CustomElementCss from './content/dynamic/cssGuides/customElementCss';

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
  NodeSupport,
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

// COMPONENTS

// Accordion
import AuroAccordion from './content/dynamic/accordion/component';
import AuroAccordionApi from './content/dynamic/accordion/api';
import AuroAccordionInstall from './content/dynamic/accordion/install';
import AuroAccordionReleases from './content/dynamic/accordion/releases';

// Alert
import AuroAlerts from './content/dynamic/alerts/component';
import AuroAlertsApi from './content/dynamic/alerts/api';
import AuroAlertsInstall from './content/dynamic/alerts/install';
import AuroAlertsReleases from './content/dynamic/alerts/releases';
import AuroAlertsFigma from './content/dynamic/alerts/figma';

// Avatar
import AuroAvatar from './content/dynamic/avatar/component';
import AuroAvatarApi from './content/dynamic/avatar/api';
import AuroAvatarInstall from './content/dynamic/avatar/install';
import AuroAvatarReleases from './content/dynamic/avatar/releases';

// background
import AuroBackground from './content/dynamic/background/component';
import AuroBackgroundApi from './content/dynamic/background/api';
import AuroBackgroundInstall from './content/dynamic/background/install';
import AuroBackgroundReleases from './content/dynamic/background/releases';

// BacktoTop
import AuroBacktotop from './content/dynamic/backtotop/component';
import AuroBacktotopApi from './content/dynamic/backtotop/api';
import AuroBacktotopInstall from './content/dynamic/backtotop/install';
import AuroBacktotopReleases from './content/dynamic/backtotop/releases';

// badge
import AuroBadge from './content/dynamic/badge/component';
import AuroBadgeApi from './content/dynamic/badge/api';
import AuroBadgeInstall from './content/dynamic/badge/install';
import AuroBadgeReleases from './content/dynamic/badge/releases';

// banner
import AuroBanner from './content/dynamic/banner/component';
import AuroBannerApi from './content/dynamic/banner/api';
import AuroBannerInstall from 'content/dynamic/banner/install';
import AuroBannerReleases from 'content/dynamic/banner/releases';

// button
import AuroButton from './content/dynamic/button/component';
import AuroButtonApi from './content/dynamic/button/api';
import AuroButtonInstall from './content/dynamic/button/install';
import AuroButtonReleases from './content/dynamic/button/releases';
import AuroButtonFigma from './content/dynamic/button/figma';

// card
import AuroCard from './content/dynamic/card/component';
import AuroCardApi from './content/dynamic/card/api';
import AuroCardInstall from './content/dynamic/card/install';
import AuroCardReleases from './content/dynamic/card/releases';

// carousel
import AuroCarousel from './content/dynamic/carousel/component';
import AuroCarouselApi from './content/dynamic/carousel/api';
import AuroCarouselInstall from './content/dynamic/carousel/install';
import AuroCarouselReleases from './content/dynamic/carousel/releases';

// checkbox
import AuroCheckbox from './content/dynamic/checkbox/component';
import AuroCheckboxApi from './content/dynamic/checkbox/api';
import AuroCheckboxInstall from './content/dynamic/checkbox/install';
import AuroCheckboxReleases from './content/dynamic/checkbox/releases';

// combobox
import AuroCombobox from './content/dynamic/combobox/component';
import AuroComboboxApi from './content/dynamic/combobox/api';
import AuroComboboxInstall from './content/dynamic/combobox/install';
import AuroComboboxReleases from './content/dynamic/combobox/releases';
import AuroComboboxFigma from './content/dynamic/combobox/figma'

// datepicker
import AuroDatepicker from './content/dynamic/datepicker/component';
import AuroDatepickerApi from './content/dynamic/datepicker/api';
import AuroDatepickerInstall from './content/dynamic/datepicker/install';
import AuroDatepickerReleases from './content/dynamic/datepicker/releases';
import AuroDatepickerFigma from './content/dynamic/datepicker/figma'

// datetime
import AuroDateTime from './content/dynamic/datetime/component';
import AuroDateTimeApi from './content/dynamic/datetime/api';
import AuroDateTimeInstall from './content/dynamic/datetime/install';
import AuroDateTimeReleases from './content/dynamic/datetime/releases';

// dialog
import AuroDialog from './content/dynamic/dialog/component';
import AuroDialogApi from './content/dynamic/dialog/api';
import AuroDialogInstall from './content/dynamic/dialog/install';
import AuroDialogReleases from './content/dynamic/dialog/releases';


// drawer
import AuroDrawer from './content/dynamic/drawer/component';
import AuroDrawerApi from './content/dynamic/drawer/api';
import AuroDrawerInstall from './content/dynamic/drawer/install';
import AuroDrawerReleases from './content/dynamic/drawer/releases';

// dropdown
import AuroDropdown from './content/dynamic/dropdown/component';
import AuroDropdownApi from './content/dynamic/dropdown/api';
import AuroDropdownInstall from './content/dynamic/dropdown/install';
import AuroDropdownReleases from './content/dynamic/dropdown/releases';
import AuroDropdownFigma from './content/dynamic/dropdown/figma'

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

// header
import AuroHeader from './content/dynamic/header/component';
import AuroHeaderApi from './content/dynamic/header/api';
import AuroHeaderInstall from './content/dynamic/header/install';
import AuroHeaderReleases from './content/dynamic/header/releases';


// hyperlink
import AuroHyperlink from './content/dynamic/hyperlink/component';
import AuroHyperlinkInstall from './content/dynamic/hyperlink/install';
import AuroHyperlinkApi from './content/dynamic/hyperlink/api';
import AuroHyperlinkReleases from './content/dynamic/hyperlink/releases';
import AuroHyperlinkFigma from './content/dynamic/hyperlink/figma';
import AuroHyperlinka11y from './content/dynamic/hyperlink/a11y';

// Icon
import AuroIcon from './content/dynamic/icon/component';
import AuroIconApi from './content/dynamic/icon/api';
import AuroIconInstall from './content/dynamic/icon/install';
import AuroIconReleases from './content/dynamic/icon/releases';
import AuroAlaska from './content/dynamic/icon/alaska';

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

// lockup
import AuroLockup from './content/dynamic/lockup/component';
import AuroLockupApi from './content/dynamic/lockup/api';
import AuroLockupInstall from './content/dynamic/lockup/install';
import AuroLockupReleases from './content/dynamic/lockup/releases';

// Menu
import AuroMenu from './content/dynamic/menu/component';
import AuroMenuApi from './content/dynamic/menu/api';
import AuroMenuFigma from './content/dynamic/menu/figma';
import AuroMenuInstall from './content/dynamic/menu/install';
import AuroMenuReleases from './content/dynamic/menu/releases';

// Nav
import AuroNav from './content/dynamic/nav/component';
import AuroNavApi from './content/dynamic/nav/api';
import AuroNavInstall from './content/dynamic/nav/install';
import AuroNavReleases from './content/dynamic/nav/releases';

// pane
import AuroPane from './content/dynamic/pane/component';
import AuroPaneApi from './content/dynamic/pane/api';
import AuroPaneInstall from './content/dynamic/pane/install';
import AuroPaneReleases from './content/dynamic/pane/releases';

// popover
import AuroPopover from './content/dynamic/popover/component';
import AuroPopoverApi from './content/dynamic/popover/api';
import AuroPopoverInstall from './content/dynamic/popover/install';
import AuroPopoverReleases from './content/dynamic/popover/releases';

// radio button
import AuroRadio from './content/dynamic/radio/component';
import AuroRadioApi from './content/dynamic/radio/api';
import AuroRadioInstall from './content/dynamic/radio/install';
import AuroRadioReleases from './content/dynamic/radio/releases';

// Select
import AuroSelect from './content/dynamic/select/component';
import AuroSelectApi from './content/dynamic/select/api';
import AuroSelectInstall from './content/dynamic/select/install';
import AuroSelectReleases from './content/dynamic/select/releases';

// sidenav
import AuroSidenav from './content/dynamic/sidenav/component';
import AuroSidenavApi from './content/dynamic/sidenav/api';
import AuroSidenavInstall from './content/dynamic/sidenav/install';
import AuroSidenavReleases from './content/dynamic/sidenav/releases';

// skeleton
import AuroSkeleton from './content/dynamic/skeleton/component';
import AuroSkeletonApi from './content/dynamic/skeleton/api';
import AuroSkeletonInstall from './content/dynamic/skeleton/install';
import AuroSkeletonReleases from './content/dynamic/skeleton/releases';

// Table
import AuroTable from './content/dynamic/table/component';
import AuroTableApi from './content/dynamic/table/api';
import AuroTableInstall from './content/dynamic/table/install';
import AuroTableReleases from './content/dynamic/table/releases';

// toast
import AuroToast from './content/dynamic/toast/component';
import AuroToastApi from './content/dynamic/toast/api';
import AuroToastInstall from './content/dynamic/toast/install';
import AuroToastReleases from './content/dynamic/toast/releases';

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
              <Route exact path="/a11y-statement"><A11yStatement/></Route>
              <Route exact path="/node-support"><NodeSupport/></Route>
              <Route exact path="/user-support"><AuroSupport /></Route> {/* redirect old url */}
              <Route exact path="/auro-support"><AuroSupport /></Route>
              <Route exact path="/design-philosophy"><Philosophy /></Route>
              <Route exact path="/support/shadycss"><ShadyCSS /></Route>
              <Route path="/core/voice-and-tone"><VoiceTone /></Route>
              <Route exact path="/take-home"><Codetest /></Route>

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
              <Route exact path="/developer-setup/npm"><DevSetupNpm /></Route>

              {/* Direct links */}
              <Route exact path="/status"><ComponentStatus /></Route>
              <Route exact path="/accordion/"><AuroAccordion /></Route>
              <Route exact path="/alert"><AuroAlert /></Route>
              <Route exact path="/avatar/"><AuroAvatar /></Route>
              <Route exact path="/background/"><AuroBackground /></Route>
              <Route exact path="/banner/"><AuroBanner /></Route>
              <Route exact path="/button"><AuroButton /></Route>
              <Route exact path="/card/"><AuroCard /></Route>
              <Route exact path="/carousel/"><AuroCarousel /></Route>
              <Route exact path="/checkbox"><AuroCheckbox /></Route>
              <Route exact path="/datetime/"><AuroDateTime /></Route>
              <Route exact path="/dialog"><AuroDialog /></Route>
              <Route exact path="/drawer"><AuroDrawer /></Route>
              <Route exact path="/dropdown"><AuroDropdown /></Route>
              <Route exact path="/combobox"><AuroCombobox /></Route>
              <Route exact path="/datepicker"><AuroDatepicker /></Route>
              <Route exact path="/header"><AuroHeader /></Route>
              <Route exact path="/hyperlink"><AuroHyperlink /></Route>
              <Route exact path="/icon/"><AuroIcon /></Route>
              <Route exact path="/input"><AuroInput /></Route>
              <Route exact path="/loader"><AuroLoader /></Route>
              <Route exact path="/lockup"><AuroLockup /></Route>
              <Route exact path="/menu"><AuroMenu /></Route>
              <Route exact path="/nav"><AuroNav /></Route>
              <Route exact path="/pane/"><AuroPane /></Route>
              <Route exact path="/popover"><AuroPopover /></Route>
              <Route exact path="/radio"><AuroRadio /></Route>
              <Route exact path="/skeleton"><AuroSkeleton /></Route>
              <Route exact path="/tokenlist"><AuroTokenlist /></Route>
              <Route exact path="/table"><AuroTable /></Route>
              <Route exact path="/toast"><AuroToast /></Route>


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
              <Route exact path="/deprecated-icons"><DeprecatedIcons /></Route>
              <Route exact path="/icons/install"><IconsInstall /></Route>
              <Route exact path="/icons/ways-to-use"><IconsWaysToUse /></Route>

              {/* Layout */}
              <Route exact path="/layout/grid"><LayoutGrid /></Route>
              <Route exact path="/layout/spacing"><LayoutSpacing /></Route>

              {/* COMPONENTS */}

              {/* accordion */}
              <Route exact path="/components/auro/accordion/"><AuroAccordion /></Route>
              <Route exact path="/components/auro/accordion/api"><AuroAccordionApi /></Route>
              <Route exact path="/components/auro/accordion/install"><AuroAccordionInstall /></Route>
              <Route exact path="/components/auro/accordion/releases"><AuroAccordionReleases /></Route>

              {/* Auro Alerts */}
              <Route exact path="/components/auro/alert"><AuroAlerts /></Route>
              <Route exact path="/components/auro/alert/install"><AuroAlertsInstall /></Route>
              <Route exact path="/components/auro/alert/api"><AuroAlertsApi /></Route>
              <Route exact path="/components/auro/alert/releases"><AuroAlertsReleases /></Route>
              <Route exact path="/components/auro/alert/figma"><AuroAlertsFigma /></Route>

              {/* avatar */}
              <Route exact path="/components/auro/avatar/"><AuroAvatar /></Route>
              <Route exact path="/components/auro/avatar/api"><AuroAvatarApi /></Route>
              <Route exact path="/components/auro/avatar/install"><AuroAvatarInstall /></Route>
              <Route exact path="/components/auro/avatar/releases"><AuroAvatarReleases /></Route>

              {/* Auro Background */}
              <Route exact path="/components/auro/background"><AuroBackground /></Route>
              <Route exact path="/components/auro/background/install"><AuroBackgroundInstall /></Route>
              <Route exact path="/components/auro/background/api"><AuroBackgroundApi /></Route>
              <Route exact path="/components/auro/background/releases"><AuroBackgroundReleases /></Route>

              {/* Auro BacktoTop */}
              <Route exact path="/components/auro/backtotop"><AuroBacktotop /></Route>
              <Route exact path="/components/auro/backtotop/install"><AuroBacktotopInstall /></Route>
              <Route exact path="/components/auro/backtotop/api"><AuroBacktotopApi /></Route>
              <Route exact path="/components/auro/backtotop/releases"><AuroBacktotopReleases /></Route>

              {/* Auro Badge */}
              <Route exact path="/components/auro/badge"><AuroBadge /></Route>
              <Route exact path="/components/auro/badge/install"><AuroBadgeInstall /></Route>
              <Route exact path="/components/auro/badge/api"><AuroBadgeApi /></Route>
              <Route exact path="/components/auro/badge/releases"><AuroBadgeReleases /></Route>

              {/* banner */}
              <Route exact path="/components/auro/banner/"><AuroBanner /></Route>
              <Route exact path="/components/auro/banner/api"><AuroBannerApi /></Route>
              <Route exact path="/components/auro/banner/install"><AuroBannerInstall /></Route>
              <Route exact path="/components/auro/banner/releases"><AuroBannerReleases /></Route>

              {/* Auro Button */}
              <Route exact path="/components/auro/button"><AuroButton /></Route>
              <Route exact path="/components/auro/button/install"><AuroButtonInstall /></Route>
              <Route exact path="/components/auro/button/api"><AuroButtonApi /></Route>
              <Route exact path="/components/auro/button/releases"><AuroButtonReleases /></Route>
              <Route exact path="/components/auro/button/figma"><AuroButtonFigma /></Route>

              {/* card */}
              <Route exact path="/components/auro/card/"><AuroCard /></Route>
              <Route exact path="/components/auro/card/api"><AuroCardApi /></Route>
              <Route exact path="/components/auro/card/install"><AuroCardInstall /></Route>
              <Route exact path="/components/auro/card/releases"><AuroCardReleases /></Route>

              {/* carousel */}
              <Route exact path="/components/auro/carousel/"><AuroCarousel /></Route>
              <Route exact path="/components/auro/carousel/api"><AuroCarouselApi /></Route>
              <Route exact path="/components/auro/carousel/install"><AuroCarouselInstall /></Route>
              <Route exact path="/components/auro/carousel/releases"><AuroCarouselReleases /></Route>

              {/* Auro Checkbox */}
              <Route exact path="/components/auro/checkbox"><AuroCheckbox /></Route>
              <Route exact path="/components/auro/checkbox/install"><AuroCheckboxInstall /></Route>
              <Route exact path="/components/auro/checkbox/api"><AuroCheckboxApi /></Route>
              <Route exact path="/components/auro/checkbox/releases"><AuroCheckboxReleases /></Route>

              {/* Auro Combobox */}
              <Route exact path="/components/auro/combobox"><AuroCombobox /></Route>
              <Route exact path="/components/auro/combobox/install"><AuroComboboxInstall /></Route>
              <Route exact path="/components/auro/combobox/api"><AuroComboboxApi /></Route>
              <Route exact path="/components/auro/combobox/releases"><AuroComboboxReleases /></Route>
              <Route exact path="/components/auro/combobox/figma"><AuroComboboxFigma /></Route>

              {/* Auro Datepicker */}
              <Route exact path="/components/auro/datepicker"><AuroDatepicker /></Route>
              <Route exact path="/components/auro/datepicker/install"><AuroDatepickerInstall /></Route>
              <Route exact path="/components/auro/datepicker/api"><AuroDatepickerApi /></Route>
              <Route exact path="/components/auro/datepicker/releases"><AuroDatepickerReleases /></Route>
              <Route exact path="/components/auro/datepicker/figma"><AuroDatepickerFigma /></Route>

              {/* Auro Date/Time */}
              <Route exact path="/components/auro/datetime"><AuroDateTime /></Route>
              <Route exact path="/components/auro/datetime/install"><AuroDateTimeInstall /></Route>
              <Route exact path="/components/auro/datetime/api"><AuroDateTimeApi /></Route>
              <Route exact path="/components/auro/datetime/releases"><AuroDateTimeReleases /></Route>

              {/* Auro Dialog */}
              <Route exact path="/components/auro/dialog"><AuroDialog /></Route>
              <Route exact path="/components/auro/dialog/install"><AuroDialogInstall /></Route>
              <Route exact path="/components/auro/dialog/api"><AuroDialogApi /></Route>
              <Route exact path="/components/auro/dialog/releases"><AuroDialogReleases /></Route>

              {/* Auro drawer */}
              <Route exact path="/components/auro/drawer"><AuroDrawer /></Route>
              <Route exact path="/components/auro/drawer/install"><AuroDrawerInstall /></Route>
              <Route exact path="/components/auro/drawer/api"><AuroDrawerApi /></Route>
              <Route exact path="/components/auro/drawer/releases"><AuroDrawerReleases /></Route>

              {/* Auro Dropdown */}
              <Route exact path="/components/auro/dropdown"><AuroDropdown /></Route>
              <Route exact path="/components/auro/dropdown/install"><AuroDropdownInstall /></Route>
              <Route exact path="/components/auro/dropdown/api"><AuroDropdownApi /></Route>
              <Route exact path="/components/auro/dropdown/releases"><AuroDropdownReleases /></Route>
              <Route exact path="/components/auro/dropdown/figma"><AuroDropdownFigma /></Route>

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

              {/* flight-details */}
              <Route exact path="/components/auro/flight-details/"><Wip /></Route>

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
              <Route exact path="/components/auro/hyperlink/a11y"><AuroHyperlinka11y /></Route>

              {/* icon */}
              <Route exact path="/components/auro/icon/"><AuroIcon /></Route>
              <Route exact path="/components/auro/icon/install"><AuroIconInstall /></Route>
              <Route exact path="/components/auro/icon/api"><AuroIconApi /></Route>
              <Route exact path="/components/auro/icon/releases"><AuroIconReleases /></Route>
              <Route exact path="/components/auro/icon/alaska"><AuroAlaska/></Route>

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

              {/* Auro Lockup */}
              <Route exact path="/components/auro/lockup"><AuroLockup /></Route>
              <Route exact path="/components/auro/lockup/install"><AuroLockupInstall /></Route>
              <Route exact path="/components/auro/lockup/api"><AuroLockupApi /></Route>
              <Route exact path="/components/auro/lockup/releases"><AuroLockupReleases /></Route>

              {/* Auro Menu */}
              <Route exact path="/components/auro/menu"><AuroMenu /></Route>
              <Route exact path="/components/auro/menu/install"><AuroMenuInstall /></Route>
              <Route exact path="/components/auro/menu/api"><AuroMenuApi /></Route>
              <Route exact path="/components/auro/menu/figma"><AuroMenuFigma /></Route>
              <Route exact path="/components/auro/menu/releases"><AuroMenuReleases /></Route>

              {/* Auro Nav */}
              <Route exact path="/components/auro/nav"><AuroNav /></Route>
              <Route exact path="/components/auro/nav/install"><AuroNavInstall /></Route>
              <Route exact path="/components/auro/nav/api"><AuroNavApi /></Route>
              <Route exact path="/components/auro/nav/releases"><AuroNavReleases /></Route>

              {/* pane */}
              <Route exact path="/components/auro/pane/"><AuroPane /></Route>
              <Route exact path="/components/auro/pane/api"><AuroPaneApi /></Route>
              <Route exact path="/components/auro/pane/install"><AuroPaneInstall /></Route>
              <Route exact path="/components/auro/pane/releases"><AuroPaneReleases /></Route>

              {/* Auro Popover */}
              <Route exact path="/components/auro/popover"><AuroPopover /></Route>
              <Route exact path="/components/auro/popover/install"><AuroPopoverInstall /></Route>
              <Route exact path="/components/auro/popover/api"><AuroPopoverApi /></Route>
              <Route exact path="/components/auro/popover/releases"><AuroPopoverReleases/></Route>

              {/* Auro Radio */}
              <Route exact path="/components/auro/radio"><AuroRadio /></Route>
              <Route exact path="/components/auro/radio/install"><AuroRadioInstall /></Route>
              <Route exact path="/components/auro/radio/api"><AuroRadioApi /></Route>
              <Route exact path="/components/auro/radio/releases"><AuroRadioReleases /></Route>

              {/* Auro Select */}
              <Route exact path="/components/auro/select"><AuroSelect /></Route>
              <Route exact path="/components/auro/select/install"><AuroSelectInstall /></Route>
              <Route exact path="/components/auro/select/api"><AuroSelectApi /></Route>
              <Route exact path="/components/auro/select/releases"><AuroSelectReleases /></Route>

              {/* Auro SideNav */}
              <Route exact path="/components/auro/sidenav"><AuroSidenav /></Route>
              <Route exact path="/components/auro/sidenav/install"><AuroSidenavInstall /></Route>
              <Route exact path="/components/auro/sidenav/api"><AuroSidenavApi /></Route>
              <Route exact path="/components/auro/sidenav/releases"><AuroSidenavReleases /></Route>

              {/* Auro Skeleton */}
              <Route exact path="/components/auro/skeleton"><AuroSkeleton /></Route>
              <Route exact path="/components/auro/skeleton/install"><AuroSkeletonInstall /></Route>
              <Route exact path="/components/auro/skeleton/api"><AuroSkeletonApi /></Route>
              <Route exact path="/components/auro/skeleton/releases"><AuroSkeletonReleases /></Route>

              {/* Auro Table */}
              <Route exact path="/components/auro/table"><AuroTable /></Route>
              <Route exact path="/components/auro/table/install"><AuroTableInstall /></Route>
              <Route exact path="/components/auro/table/api"><AuroTableApi /></Route>
              <Route exact path="/components/auro/table/releases"><AuroTableReleases /></Route>

              {/* Auro Toast */}
              <Route exact path="/components/auro/toast"><AuroToast /></Route>
              <Route exact path="/components/auro/toast/install"><AuroToastInstall /></Route>
              <Route exact path="/components/auro/toast/api"><AuroToastApi /></Route>
              <Route exact path="/components/auro/toast/releases"><AuroToastReleases /></Route>

              {/* Auro Token List */}
              <Route exact path="/components/auro/tokenlist"><AuroTokenlist /></Route>
              <Route exact path="/components/auro/tokenlist/install"><AuroTokenlistInstall /></Route>
              <Route exact path="/components/auro/tokenlist/api"><AuroTokenlistApi /></Route>
              <Route exact path="/components/auro/tokenlist/releases"><AuroTokenlistReleases/></Route>

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
