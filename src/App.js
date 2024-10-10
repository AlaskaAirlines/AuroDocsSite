import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
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
import '@aurodesignsystem/auro-tokenlist/dist/auro-tokenavatar';
import '@aurodesignsystem/auro-tokenlist/dist/auro-tokendisplay';
import '@aurodesignsystem/auro-table';

// Datepicker loaded out of order to prevent it from registering auro-input before auro-input can self register
import '@aurodesignsystem/auro-combobox';
import '@aurodesignsystem/auro-datepicker';

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
  // One-off pages
  Onboarding,

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
import AuroAlert from './content/dynamic/alert/component';
import AuroAlertApi from './content/dynamic/alert/api';
import AuroAlertInstall from './content/dynamic/alert/install';
import AuroAlertReleases from './content/dynamic/alert/releases';
import AuroAlertFigma from './content/dynamic/alert/figma';

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
// import AuroBannerInstall from 'content/dynamic/banner/install';
// import AuroBannerReleases from 'content/dynamic/banner/releases';

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

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

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
            <Routes>

              {/* Automated links from internal docs */}
              <Route exact path='/' component={Home} />
              <Route exact path="/a11y-statement" element={<A11yStatement/>} />
              <Route exact path="/node-support" element={<NodeSupport/>} />
              <Route exact path="/user-support" element={<AuroSupport />} /> {/* redirect old url */}
              <Route exact path="/auro-support" element={<AuroSupport />} />
              <Route exact path="/design-philosophy" element={<Philosophy />} />
              <Route exact path="/support/shadycss" element={<ShadyCSS />} />
              <Route path="/core/voice-and-tone" element={<VoiceTone />} />
              <Route exact path="/take-home" element={<Codetest />} />

              {/* Home */}
              <Route exact path="/epics/" element={<VersionZero />} />
              <Route exact path="/epics/version-zero" element={<VersionZero />} />
              <Route exact path="/epics/user-research" element={<UserResearch />} />
              <Route exact path="/epics/doc-site-strategy" element={<DocSiteStrategy />} />

              <Route exact path="/wip" element={<OpenIssues />} />
              <Route exact path="/open-pull-request" element={<OpenPullRequest />} />
              <Route exact path="/help-wanted" element={<HelpWanted />} />
              <Route exact path="/bugs" element={<Bugs />} />
              <Route exact path="/not-reviewed" element={<NotReviewed />} />
              <Route exact path="/component-status" element={<ComponentStatus />} />
              <Route exact path="/status" element={<ComponentStatus />} />
              <Route exact path="/ado-use" element={<UseDashboard />} />

              {/* Developer setup */}
              <Route exact path="/developer-setup/windows" element={<DevSetupWindows />} />
              <Route exact path="/developer-setup/macOS" element={<DevSetupMac />} />
              <Route exact path="/developer-setup/linux" element={<DevSetupLinux />} />
              <Route exact path="/developer-setup/npm" element={<DevSetupNpm />} />

              {/* Direct links */}
              <Route exact path="/status" element={<ComponentStatus />} />
              <Route exact path="/accordion/" element={<AuroAccordion />} />
              <Route exact path="/alert" element={<AuroAlert />} />
              <Route exact path="/avatar/" element={<AuroAvatar />} />
              <Route exact path="/background/" element={<AuroBackground />} />
              <Route exact path="/banner/" element={<AuroBanner />} />
              <Route exact path="/button" element={<AuroButton />} />
              <Route exact path="/card/" element={<AuroCard />} />
              <Route exact path="/carousel/" element={<AuroCarousel />} />
              <Route exact path="/checkbox" element={<AuroCheckbox />} />
              <Route exact path="/datetime/" element={<AuroDateTime />} />
              <Route exact path="/dialog" element={<AuroDialog />} />
              <Route exact path="/drawer" element={<AuroDrawer />} />
              <Route exact path="/dropdown" element={<AuroDropdown />} />
              <Route exact path="/combobox" element={<AuroCombobox />} />
              <Route exact path="/datepicker" element={<AuroDatepicker />} />
              <Route exact path="/header" element={<AuroHeader />} />
              <Route exact path="/hyperlink" element={<AuroHyperlink />} />
              <Route exact path="/icon/" element={<AuroIcon />} />
              <Route exact path="/input" element={<AuroInput />} />
              <Route exact path="/loader" element={<AuroLoader />} />
              <Route exact path="/lockup" element={<AuroLockup />} />
              <Route exact path="/menu" element={<AuroMenu />} />
              <Route exact path="/nav" element={<AuroNav />} />
              <Route exact path="/pane/" element={<AuroPane />} />
              <Route exact path="/popover" element={<AuroPopover />} />
              <Route exact path="/radio" element={<AuroRadio />} />
              <Route exact path="/skeleton" element={<AuroSkeleton />} />
              <Route exact path="/tokenlist" element={<AuroTokenlist />} />
              <Route exact path="/table" element={<AuroTable />} />
              <Route exact path="/toast" element={<AuroToast />} />


              {/* Getting Started/developers */}
              <Route exact path="/getting-started/developers" element={<Onboarding/>} />
              <Route exact path="/getting-started/developers/compliance" element={<Compliance />} />
              <Route exact path="/getting-started/developers/design-tokens" element={<DesignTokens />} />
              <Route exact path="/design-tokens" element={<DesignTokens />} />
              <Route exact path="/getting-started/developers/design-tokens/install" element={<DesignTokensInstall />} />
              <Route exact path="/getting-started/developers/design-tokens/deprecated" element={<DeprecatedTokens />} />
              <Route exact path="/design-tokens/deprecated" element={<DeprecatedTokens />} />
              <Route exact path="/officehours" element={<Officehours />} />

              {/* Color */}
              <Route exact path="/color/overview" element={<ColorOverview />} />
              <Route exact path="/color/digital-palette" element={<CoreDigitalPalette />} />
              <Route exact path="/color/personality-palette" element={<PersonalityPalette />} />

              {/* Generator */}
              <Route exact path="/generator" element={<GeneratorInstall />} />
              <Route exact path="/generator/install" element={<GeneratorInstall />} />
              <Route exact path="/generator/api" element={<GeneratorApi />} />
              <Route exact path="/generator/best-practice" element={<GeneratorBestPractice />} />
              <Route exact path="/generator/upgrade" element={<GeneratorUpgrade />} />
              <Route exact path="/generator/define-api" element={<GeneratorDefineApi />} />
              <Route exact path="/common-defs" element={<CommonDefs />} />
              <Route exact path="/generator/releases" element={<GeneratorReleases />} />

              {/* Legacy routes */}
              <Route exact path="/getting-started/developers/generator/install" element={<GeneratorInstall />} />
              <Route exact path="/getting-started/developers/generator/generator/api" element={<GeneratorApi />} />
              <Route exact path="/getting-started/developers/generator/generator/best-practice" element={<GeneratorBestPractice />} />
              <Route exact path="/getting-started/developers/generator/upgrade" element={<GeneratorUpgrade />} />
              <Route exact path="/getting-started/developers/generator/define-api" element={<GeneratorDefineApi />} />

              {/* Generator */}
              <Route exact path="/contributing" element={<Contributing />} />
              <Route exact path="/contributing/upstream" element={<ContributingUpstream />} />
              <Route exact path="/contributing/git-workflow" element={<ContribGitWorkflow />} />
              <Route exact path="/contributing/issues-prs-labels" element={<ContribIssuePrLabels />} />
              <Route exact path="/definition-of-done" element={<DoD />} />

              {/* Fallback route */}
              <Route exact path="/getting-started/developers/contributing" element={<Contributing />} />

              {/* Typography */}
              <Route exact path="/typography/overview" element={<TypographyOverview />} />
              <Route exact path="/typography/usage" element={<TypographyUsage />} />

              {/* Icons */}
              <Route exact path="/icons/guidelines" element={<IconsGuidelines />} />
              <Route exact path="/icons" element={<Icons />} />
              <Route exact path="/deprecated-icons" element={<DeprecatedIcons />} />
              <Route exact path="/icons/install" element={<IconsInstall />} />
              <Route exact path="/icons/ways-to-use" element={<IconsWaysToUse />} />

              {/* Layout */}
              <Route exact path="/layout/grid" element={<LayoutGrid />} />
              <Route exact path="/layout/spacing" element={<LayoutSpacing />} />

              {/* COMPONENTS */}

              {/* accordion */}
              <Route exact path="/components/auro/accordion/" element={<AuroAccordion />} />
              <Route exact path="/components/auro/accordion/api" element={<AuroAccordionApi />} />
              <Route exact path="/components/auro/accordion/install" element={<AuroAccordionInstall />} />
              <Route exact path="/components/auro/accordion/releases" element={<AuroAccordionReleases />} />

              {/* Auro Alerts */}
              <Route exact path="/components/auro/alert" element={<AuroAlert />} />
              <Route exact path="/components/auro/alert/install" element={<AuroAlertInstall />} />
              <Route exact path="/components/auro/alert/api" element={<AuroAlertApi />} />
              <Route exact path="/components/auro/alert/releases" element={<AuroAlertReleases />} />
              <Route exact path="/components/auro/alert/figma" element={<AuroAlertFigma />} />

              {/* avatar */}
              <Route exact path="/components/auro/avatar/" element={<AuroAvatar />} />
              <Route exact path="/components/auro/avatar/api" element={<AuroAvatarApi />} />
              <Route exact path="/components/auro/avatar/install" element={<AuroAvatarInstall />} />
              <Route exact path="/components/auro/avatar/releases" element={<AuroAvatarReleases />} />

              {/* Auro Background */}
              <Route exact path="/components/auro/background" element={<AuroBackground />} />
              <Route exact path="/components/auro/background/install" element={<AuroBackgroundInstall />} />
              <Route exact path="/components/auro/background/api" element={<AuroBackgroundApi />} />
              <Route exact path="/components/auro/background/releases" element={<AuroBackgroundReleases />} />

              {/* Auro BacktoTop */}
              <Route exact path="/components/auro/backtotop" element={<AuroBacktotop />} />
              <Route exact path="/components/auro/backtotop/install" element={<AuroBacktotopInstall />} />
              <Route exact path="/components/auro/backtotop/api" element={<AuroBacktotopApi />} />
              <Route exact path="/components/auro/backtotop/releases" element={<AuroBacktotopReleases />} />

              {/* Auro Badge */}
              <Route exact path="/components/auro/badge" element={<AuroBadge />} />
              <Route exact path="/components/auro/badge/install" element={<AuroBadgeInstall />} />
              <Route exact path="/components/auro/badge/api" element={<AuroBadgeApi />} />
              <Route exact path="/components/auro/badge/releases" element={<AuroBadgeReleases />} />

              {/* banner */}
              <Route exact path="/components/auro/banner/" element={<AuroBanner />} />
              <Route exact path="/components/auro/banner/api" element={<AuroBannerApi />} />
              {/* <Route exact path="/components/auro/banner/install" element={<AuroBannerInstall />} /> */}
              {/* <Route exact path="/components/auro/banner/releases" element={<AuroBannerReleases />} /> */}

              {/* Auro Button */}
              <Route exact path="/components/auro/button" element={<AuroButton />} />
              <Route exact path="/components/auro/button/install" element={<AuroButtonInstall />} />
              <Route exact path="/components/auro/button/api" element={<AuroButtonApi />} />
              <Route exact path="/components/auro/button/releases" element={<AuroButtonReleases />} />
              <Route exact path="/components/auro/button/figma" element={<AuroButtonFigma />} />

              {/* card */}
              <Route exact path="/components/auro/card/" element={<AuroCard />} />
              <Route exact path="/components/auro/card/api" element={<AuroCardApi />} />
              <Route exact path="/components/auro/card/install" element={<AuroCardInstall />} />
              <Route exact path="/components/auro/card/releases" element={<AuroCardReleases />} />

              {/* carousel */}
              <Route exact path="/components/auro/carousel/" element={<AuroCarousel />} />
              <Route exact path="/components/auro/carousel/api" element={<AuroCarouselApi />} />
              <Route exact path="/components/auro/carousel/install" element={<AuroCarouselInstall />} />
              <Route exact path="/components/auro/carousel/releases" element={<AuroCarouselReleases />} />

              {/* Auro Checkbox */}
              <Route exact path="/components/auro/checkbox" element={<AuroCheckbox />} />
              <Route exact path="/components/auro/checkbox/install" element={<AuroCheckboxInstall />} />
              <Route exact path="/components/auro/checkbox/api" element={<AuroCheckboxApi />} />
              <Route exact path="/components/auro/checkbox/releases" element={<AuroCheckboxReleases />} />

              {/* Auro Combobox */}
              <Route exact path="/components/auro/combobox" element={<AuroCombobox />} />
              <Route exact path="/components/auro/combobox/install" element={<AuroComboboxInstall />} />
              <Route exact path="/components/auro/combobox/api" element={<AuroComboboxApi />} />
              <Route exact path="/components/auro/combobox/releases" element={<AuroComboboxReleases />} />
              <Route exact path="/components/auro/combobox/figma" element={<AuroComboboxFigma />} />

              {/* Auro Datepicker */}
              <Route exact path="/components/auro/datepicker" element={<AuroDatepicker />} />
              <Route exact path="/components/auro/datepicker/install" element={<AuroDatepickerInstall />} />
              <Route exact path="/components/auro/datepicker/api" element={<AuroDatepickerApi />} />
              <Route exact path="/components/auro/datepicker/releases" element={<AuroDatepickerReleases />} />
              <Route exact path="/components/auro/datepicker/figma" element={<AuroDatepickerFigma />} />

              {/* Auro Date/Time */}
              <Route exact path="/components/auro/datetime" element={<AuroDateTime />} />
              <Route exact path="/components/auro/datetime/install" element={<AuroDateTimeInstall />} />
              <Route exact path="/components/auro/datetime/api" element={<AuroDateTimeApi />} />
              <Route exact path="/components/auro/datetime/releases" element={<AuroDateTimeReleases />} />

              {/* Auro Dialog */}
              <Route exact path="/components/auro/dialog" element={<AuroDialog />} />
              <Route exact path="/components/auro/dialog/install" element={<AuroDialogInstall />} />
              <Route exact path="/components/auro/dialog/api" element={<AuroDialogApi />} />
              <Route exact path="/components/auro/dialog/releases" element={<AuroDialogReleases />} />

              {/* Auro drawer */}
              <Route exact path="/components/auro/drawer" element={<AuroDrawer />} />
              <Route exact path="/components/auro/drawer/install" element={<AuroDrawerInstall />} />
              <Route exact path="/components/auro/drawer/api" element={<AuroDrawerApi />} />
              <Route exact path="/components/auro/drawer/releases" element={<AuroDrawerReleases />} />

              {/* Auro Dropdown */}
              <Route exact path="/components/auro/dropdown" element={<AuroDropdown />} />
              <Route exact path="/components/auro/dropdown/install" element={<AuroDropdownInstall />} />
              <Route exact path="/components/auro/dropdown/api" element={<AuroDropdownApi />} />
              <Route exact path="/components/auro/dropdown/releases" element={<AuroDropdownReleases />} />
              <Route exact path="/components/auro/dropdown/figma" element={<AuroDropdownFigma />} />

              {/* Auro Flight */}
              <Route exact path="/components/auro/flight" element={<AuroFlight />} />
              <Route exact path="/components/auro/flight/install" element={<AuroFlightInstall />} />
              <Route exact path="/components/auro/flight/api" element={<AuroFlightApi />} />
              <Route exact path="/components/auro/flight/dot" element={<AuroFlightDot />} />
              <Route exact path="/components/auro/flight/releases" element={<AuroFlightReleases />} />

              {/* Auro Flightline */}
              <Route exact path="/components/auro/flightline" element={<AuroFlightline />} />
              <Route exact path="/components/auro/flightline/install" element={<AuroFlightlineInstall />} />
              <Route exact path="/components/auro/flightline/api" element={<AuroFlightlineApi />} />
              <Route exact path="/components/auro/flightline/dot" element={<AuroFlightlineDot />} />
              <Route exact path="/components/auro/flightline/releases" element={<AuroFlightlineReleases />} />

              {/* flight-details */}
              <Route exact path="/components/auro/flight-details/" element={<Wip />} />

              {/* Auro Header */}
              <Route exact path="/components/auro/header" element={<AuroHeader />} />
              <Route exact path="/components/auro/header/install" element={<AuroHeaderInstall />} />
              <Route exact path="/components/auro/header/api" element={<AuroHeaderApi />} />
              <Route exact path="/components/auro/header/releases" element={<AuroHeaderReleases />} />

              {/* Auro Hyperlink */}
              <Route exact path="/components/auro/hyperlink" element={<AuroHyperlink />} />
              <Route exact path="/components/auro/hyperlink/install" element={<AuroHyperlinkInstall />} />
              <Route exact path="/components/auro/hyperlink/api" element={<AuroHyperlinkApi />} />
              <Route exact path="/components/auro/hyperlink/releases" element={<AuroHyperlinkReleases />} />
              <Route exact path="/components/auro/hyperlink/figma" element={<AuroHyperlinkFigma />} />
              <Route exact path="/components/auro/hyperlink/a11y" element={<AuroHyperlinka11y />} />

              {/* icon */}
              <Route exact path="/components/auro/icon/" element={<AuroIcon />} />
              <Route exact path="/components/auro/icon/install" element={<AuroIconInstall />} />
              <Route exact path="/components/auro/icon/api" element={<AuroIconApi />} />
              <Route exact path="/components/auro/icon/releases" element={<AuroIconReleases />} />
              <Route exact path="/components/auro/icon/alaska" element={<AuroAlaska/>} />

              {/* Auro Input */}
              <Route exact path="/components/auro/input" element={<AuroInput />} />
              <Route exact path="/components/auro/input/install" element={<AuroInputInstall />} />
              <Route exact path="/components/auro/input/api" element={<AuroInputApi />} />
              <Route exact path="/components/auro/input/releases" element={<AuroInputReleases />} />
              <Route exact path="/components/auro/input/figma" element={<AuroInputFigma />} />

              {/* Auro Loader */}
              <Route exact path="/components/auro/loader" element={<AuroLoader />} />
              <Route exact path="/components/auro/loader/install" element={<AuroLoaderInstall />} />
              <Route exact path="/components/auro/loader/api" element={<AuroLoaderApi />} />
              <Route exact path="/components/auro/loader/releases" element={<AuroLoaderReleases />} />

              {/* Auro Lockup */}
              <Route exact path="/components/auro/lockup" element={<AuroLockup />} />
              <Route exact path="/components/auro/lockup/install" element={<AuroLockupInstall />} />
              <Route exact path="/components/auro/lockup/api" element={<AuroLockupApi />} />
              <Route exact path="/components/auro/lockup/releases" element={<AuroLockupReleases />} />

              {/* Auro Menu */}
              <Route exact path="/components/auro/menu" element={<AuroMenu />} />
              <Route exact path="/components/auro/menu/install" element={<AuroMenuInstall />} />
              <Route exact path="/components/auro/menu/api" element={<AuroMenuApi />} />
              <Route exact path="/components/auro/menu/figma" element={<AuroMenuFigma />} />
              <Route exact path="/components/auro/menu/releases" element={<AuroMenuReleases />} />

              {/* Auro Nav */}
              <Route exact path="/components/auro/nav" element={<AuroNav />} />
              <Route exact path="/components/auro/nav/install" element={<AuroNavInstall />} />
              <Route exact path="/components/auro/nav/api" element={<AuroNavApi />} />
              <Route exact path="/components/auro/nav/releases" element={<AuroNavReleases />} />

              {/* pane */}
              <Route exact path="/components/auro/pane/" element={<AuroPane />} />
              <Route exact path="/components/auro/pane/api" element={<AuroPaneApi />} />
              <Route exact path="/components/auro/pane/install" element={<AuroPaneInstall />} />
              <Route exact path="/components/auro/pane/releases" element={<AuroPaneReleases />} />

              {/* Auro Popover */}
              <Route exact path="/components/auro/popover" element={<AuroPopover />} />
              <Route exact path="/components/auro/popover/install" element={<AuroPopoverInstall />} />
              <Route exact path="/components/auro/popover/api" element={<AuroPopoverApi />} />
              <Route exact path="/components/auro/popover/releases" element={<AuroPopoverReleases/>} />

              {/* Auro Radio */}
              <Route exact path="/components/auro/radio" element={<AuroRadio />} />
              <Route exact path="/components/auro/radio/install" element={<AuroRadioInstall />} />
              <Route exact path="/components/auro/radio/api" element={<AuroRadioApi />} />
              <Route exact path="/components/auro/radio/releases" element={<AuroRadioReleases />} />

              {/* Auro Select */}
              <Route exact path="/components/auro/select" element={<AuroSelect />} />
              <Route exact path="/components/auro/select/install" element={<AuroSelectInstall />} />
              <Route exact path="/components/auro/select/api" element={<AuroSelectApi />} />
              <Route exact path="/components/auro/select/releases" element={<AuroSelectReleases />} />

              {/* Auro SideNav */}
              <Route exact path="/components/auro/sidenav" element={<AuroSidenav />} />
              <Route exact path="/components/auro/sidenav/install" element={<AuroSidenavInstall />} />
              <Route exact path="/components/auro/sidenav/api" element={<AuroSidenavApi />} />
              <Route exact path="/components/auro/sidenav/releases" element={<AuroSidenavReleases />} />

              {/* Auro Skeleton */}
              <Route exact path="/components/auro/skeleton" element={<AuroSkeleton />} />
              <Route exact path="/components/auro/skeleton/install" element={<AuroSkeletonInstall />} />
              <Route exact path="/components/auro/skeleton/api" element={<AuroSkeletonApi />} />
              <Route exact path="/components/auro/skeleton/releases" element={<AuroSkeletonReleases />} />

              {/* Auro Table */}
              <Route exact path="/components/auro/table" element={<AuroTable />} />
              <Route exact path="/components/auro/table/install" element={<AuroTableInstall />} />
              <Route exact path="/components/auro/table/api" element={<AuroTableApi />} />
              <Route exact path="/components/auro/table/releases" element={<AuroTableReleases />} />

              {/* Auro Toast */}
              <Route exact path="/components/auro/toast" element={<AuroToast />} />
              <Route exact path="/components/auro/toast/install" element={<AuroToastInstall />} />
              <Route exact path="/components/auro/toast/api" element={<AuroToastApi />} />
              <Route exact path="/components/auro/toast/releases" element={<AuroToastReleases />} />

              {/* Auro Token List */}
              <Route exact path="/components/auro/tokenlist" element={<AuroTokenlist />} />
              <Route exact path="/components/auro/tokenlist/install" element={<AuroTokenlistInstall />} />
              <Route exact path="/components/auro/tokenlist/api" element={<AuroTokenlistApi />} />
              <Route exact path="/components/auro/tokenlist/releases" element={<AuroTokenlistReleases/>} />

              {/* Dev resources */}
              <Route exact path="/support/browsersSupport" element={<BrowserSupport />} />
              <Route exact path="/support/slots" element={<Slots />} />
              <Route exact path="/support/tests" element={<Tests />} />
              <Route exact path="/support/polyfills/focusvisible" element={<FocusVisible />} />
              <Route exact path="/support/polyfills/webcomponentsjs" element={<Webcomponentsjs />} />
              <Route exact path="/support/all-releases" element={<AllReleases />} />
              <Route exact path="/support/releases-by-sprint" element={<ReleasesBySprint />} />
              <Route exact path="/support/releases-summary" element={<ReleaseSummary />} />

              <Route exact path="/support/custom-properties" element={<CustomProperties />} />
              <Route exact path="/webcorestylesheets" element={<WebCoreStyleSheets />} />
              <Route exact path="/getting-started/developers/webcorestylesheets" element={<WebCoreStyleSheets />} />

              <Route exact path="/css/conventions" element={<WcssConventions />} />
              <Route exact path="/webcorestylesheets/tests" element={<WcssTests />} />
              <Route exact path="/css/guidelines" element={<WcssGuidelines />} />
              <Route exact path="/css/custom-element-css" element={<CustomElementCss />} />
              <Route exact path="/css/idiomatic-css" element={<IdiomaticCss />} />
              <Route exact path="/webcorestylesheets/features" element={<WcssFeatures />} />

              {/* Process */}


              {/* Example Projects  */}
              {/* Content for these pages need to be updated and have better descriptions of project */}
              <Route exact path="/angularSetup" element={<AngularDemoDocs />} /> {/* not used */}
              <Route exact path="/javascriptSetup" element={<JavascriptDemoDocs />} />
              <Route exact path="/reactSetup" element={<ReactDemoDocs />} />
              <Route exact path="/svelteSetup" element={<SvelteDemoDocs />} />


              <Route path="*" element={<NotFound />} />

            </Routes>
          </Router>
        </div>
        <Footer />
      </main>
    </ApolloProvider>
  )
}

export default App;
