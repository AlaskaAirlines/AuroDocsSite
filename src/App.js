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

// All themes custom properties
import '@aurodesignsystem/design-tokens/dist/themes/CSSCustomProperties--bundled.css';

// Auro Classic custom properties
import '@aurodesignsystem/design-tokens/dist/legacy/auro-classic/CSSCustomProperties.css';

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
import '@aurodesignsystem/auro-datetime';
import '@aurodesignsystem/auro-dialog';
import '@aurodesignsystem/auro-drawer';
import '@aurodesignsystem/auro-flight';
import '@aurodesignsystem/auro-flightline';
import '@aurodesignsystem/auro-header';
import '@aurodesignsystem/auro-hyperlink';
import '@aurodesignsystem/auro-icon';
import '@aurodesignsystem/auro-loader';
import '@aurodesignsystem/auro-lockup';
import '@aurodesignsystem/auro-nav';
import '@aurodesignsystem/auro-pane';
import '@aurodesignsystem/auro-popover';
import '@aurodesignsystem/auro-sidenav';
import '@aurodesignsystem/auro-skeleton';
import '@aurodesignsystem/auro-toast';
import '@aurodesignsystem/auro-tokenlist';
import '@aurodesignsystem/auro-tokenlist/dist/auro-tokenavatar';
import '@aurodesignsystem/auro-tokenlist/dist/auro-tokendisplay';
import '@aurodesignsystem/auro-table';
import '@aurodesignsystem/auro-tail';

// Logo to appear in console
import './scripts/auro-consoleLogo';

// Feature to scroll UI to top on click event
import ScrollToTop from './components/ScrollToTop';

// JS content files
import NotFound from './content/notFound.js';

// JS content files
import VersionZero from './content/dynamic/epics/projectVersionZero';
import UserResearch from './content/dynamic/epics/projectUserResearch';
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
import Generator from './content/dynamic/generator/index';
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
import AuroClassicTokens from './content/dynamic/designTokens/auro-classic';
import AlaskaTokens from './content/dynamic/designTokens/alaska';
import AlaskaClassicTokens from './content/dynamic/designTokens/alaska-classic';
import HawaiianTokens from './content/dynamic/designTokens/hawaiian';
import Auro1Tokens from './content/dynamic/designTokens/auro-1';
import Auro2Tokens from './content/dynamic/designTokens/auro-2';
import DesignTokensInstall from './content/dynamic/designTokens/install';

// design tokens docs
import DesignTokensDocsArchitecture from './content/dynamic/designTokens/docs/architecture';
import DesignTokensDocsApiReference from './content/dynamic/designTokens/docs/api-reference';
import DesignTokensDocsMigration from './content/dynamic/designTokens/docs/migration';
import DesignTokensDocsThemes from './content/dynamic/designTokens/docs/themes';

// color
import ColorOverview from './content/dynamic/color/overview';
import CoreDigitalPalette from './content/dynamic/color/digitalPalette';
import PersonalityPalette from './content/dynamic/color/personalityPalette';

// typography
import TypographyOverview from './content/dynamic/typography/overview';
import TypographyUsageRoute from './content/dynamic/typography/usage.route';

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

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

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
import AuroBannerInstall from './content/dynamic/banner/install';
import AuroBannerReleases from './content/dynamic/banner/releases';

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

// counter
import AuroCounter from './content/dynamic/counter/component';
import AuroCounterApi from './content/dynamic/counter/api';
import AuroCounterInstall from './content/dynamic/counter/install';
import AuroCounterReleases from './content/dynamic/counter/releases';

// datepicker
import AuroDatepicker from './content/dynamic/datepicker/component';
import AuroDatepickerApi from './content/dynamic/datepicker/api';
import AuroDatepickerInstall from './content/dynamic/datepicker/install';
import AuroDatepickerReleases from './content/dynamic/datepicker/releases';

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

// Form
import AuroForm from './content/dynamic/form/component';
import AuroFormApi from './content/dynamic/form/api';
import AuroFormInstall from './content/dynamic/form/install';
import AuroFormReleases from './content/dynamic/form/releases';

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

// Slideshow
import AuroSlideshow from './content/dynamic/slideshow/component';
import AuroSlideshowApi from './content/dynamic/slideshow/api';
import AuroSlideshowInstall from './content/dynamic/slideshow/install';
import AuroSlideshowReleases from './content/dynamic/slideshow/releases';

// Table
import AuroTable from './content/dynamic/table/component';
import AuroTableApi from './content/dynamic/table/api';
import AuroTableInstall from './content/dynamic/table/install';
import AuroTableReleases from './content/dynamic/table/releases';

// Tail
import AuroTail from './content/dynamic/tail/component';
import AuroTailApi from './content/dynamic/tail/api';
import AuroTailInstall from './content/dynamic/tail/install';
import AuroTailReleases from './content/dynamic/tail/releases';

// Toast
import AuroToast from './content/dynamic/toast/component';
import AuroToastApi from './content/dynamic/toast/api';
import AuroToastInstall from './content/dynamic/toast/install';
import AuroToastReleases from './content/dynamic/toast/releases';

// Formkit
import AuroFormkitInstall from './content/dynamic/formkit/install';
import AuroFormkitRelease from './content/dynamic/formkit/releases';

const API_KEY = import.meta.env.VITE_GH_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${API_KEY}`
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="main-wrapper body-default">
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
              <Route path='/' element={<Home />} />
              <Route path="/a11y-statement" element={<A11yStatement/>} />
              <Route path="/node-support" element={<NodeSupport/>} />
              <Route path="/user-support" element={<AuroSupport />} /> {/* redirect old url */}
              <Route path="/auro-support" element={<AuroSupport />} />
              <Route path="/design-philosophy" element={<Philosophy />} />
              <Route path="/support/shadycss" element={<ShadyCSS />} />
              <Route path="/core/voice-and-tone" element={<VoiceTone />} />
              <Route path="/take-home" element={<Codetest />} />

              {/* Home */}
              <Route path="/epics/" element={<VersionZero />} />
              <Route path="/epics/version-zero" element={<VersionZero />} />
              <Route path="/epics/user-research" element={<UserResearch />} />
              <Route path="/epics/doc-site-strategy" element={<DocSiteStrategy />} />

              <Route path="/wip" element={<OpenIssues />} />
              <Route path="/open-pull-request" element={<OpenPullRequest />} />
              <Route path="/help-wanted" element={<HelpWanted />} />
              <Route path="/bugs" element={<Bugs />} />
              <Route path="/not-reviewed" element={<NotReviewed />} />
              <Route path="/component-status" element={<ComponentStatus />} />
              <Route path="/status" element={<ComponentStatus />} />
              <Route path="/ado-use" element={<UseDashboard />} />

              {/* Developer setup */}
              <Route path="/developer-setup/windows" element={<DevSetupWindows />} />
              <Route path="/developer-setup/macOS" element={<DevSetupMac />} />
              <Route path="/developer-setup/linux" element={<DevSetupLinux />} />
              <Route path="/developer-setup/npm" element={<DevSetupNpm />} />

              {/* Direct links */}
              <Route path="/status" element={<ComponentStatus />} />
              <Route path="/accordion/" element={<AuroAccordion />} />
              <Route path="/alert" element={<AuroAlert />} />
              <Route path="/avatar/" element={<AuroAvatar />} />
              <Route path="/background/" element={<AuroBackground />} />
              <Route path="/banner/" element={<AuroBanner />} />
              <Route path="/button" element={<AuroButton />} />
              <Route path="/card/" element={<AuroCard />} />
              <Route path="/carousel/" element={<AuroCarousel />} />
              <Route path="/checkbox" element={<AuroCheckbox />} />
              <Route path="/datetime/" element={<AuroDateTime />} />
              <Route path="/dialog" element={<AuroDialog />} />
              <Route path="/drawer" element={<AuroDrawer />} />
              <Route path="/dropdown" element={<AuroDropdown />} />
              <Route path="/combobox" element={<AuroCombobox />} />
              <Route path="/counter" element={<AuroCounter />} />
              <Route path="/datepicker" element={<AuroDatepicker />} />
              <Route path="/header" element={<AuroHeader />} />
              <Route path="/hyperlink" element={<AuroHyperlink />} />
              <Route path="/icon/" element={<AuroIcon />} />
              <Route path="/input" element={<AuroInput />} />
              <Route path="/loader" element={<AuroLoader />} />
              <Route path="/lockup" element={<AuroLockup />} />
              <Route path="/menu" element={<AuroMenu />} />
              <Route path="/nav" element={<AuroNav />} />
              <Route path="/pane/" element={<AuroPane />} />
              <Route path="/popover" element={<AuroPopover />} />
              <Route path="/radio" element={<AuroRadio />} />
              <Route path="/skeleton" element={<AuroSkeleton />} />
              <Route path="/tokenlist" element={<AuroTokenlist />} />
              <Route path="/table" element={<AuroTable />} />
              <Route path="/toast" element={<AuroToast />} />

              {/* Getting Started/developers */}
              <Route path="/getting-started/developers" element={<Onboarding />} />
              <Route path="/getting-started/developers/compliance" element={<Compliance />} />
              <Route path="/officehours" element={<Officehours />} />

              {/* Design tokens */}
              <Route path="/getting-started/developers/design-tokens" element={<DesignTokens />} />
              <Route path="/design-tokens" element={<DesignTokens />} />
              <Route path="/getting-started/developers/design-tokens/install" element={<DesignTokensInstall />} />
              <Route path="/getting-started/developers/design-tokens/auro-classic" element={<AuroClassicTokens />} />
              <Route path="/getting-started/developers/design-tokens/alaska" element={<AlaskaTokens />} />
              <Route path="/getting-started/developers/design-tokens/alaska-classic" element={<AlaskaClassicTokens />} />
              <Route path="/getting-started/developers/design-tokens/hawaiian" element={<HawaiianTokens />} />
              <Route path="/getting-started/developers/design-tokens/auro-1" element={<Auro1Tokens />} />
              <Route path="/getting-started/developers/design-tokens/auro-2" element={<Auro2Tokens />} />
              <Route path="/design-tokens/deprecated" element={<AuroClassicTokens />} />

              {/* Design Tokens Docs */}
              <Route path="/getting-started/developers/design-tokens/docs/architecture" element={<DesignTokensDocsArchitecture />} />
              <Route path="/getting-started/developers/design-tokens/docs/api-reference" element={<DesignTokensDocsApiReference />} />
              <Route path="/getting-started/developers/design-tokens/docs/migration" element={<DesignTokensDocsMigration />} />
              <Route path="/getting-started/developers/design-tokens/docs/themes" element={<DesignTokensDocsThemes />} />

              {/* Color */}
              <Route path="/color/overview" element={<ColorOverview />} />
              <Route path="/color/digital-palette" element={<CoreDigitalPalette />} />
              <Route path="/color/personality-palette" element={<PersonalityPalette />} />

              {/* Generator */}
              <Route end path="/generator" element={<Generator />} />
              <Route path="/generator/install" element={<GeneratorInstall />} />
              <Route path="/generator/api" element={<GeneratorApi />} />
              <Route path="/generator/best-practice" element={<GeneratorBestPractice />} />
              <Route path="/generator/upgrade" element={<GeneratorUpgrade />} />
              <Route path="/generator/define-api" element={<GeneratorDefineApi />} />
              <Route path="/common-defs" element={<CommonDefs />} />
              <Route path="/generator/releases" element={<GeneratorReleases />} />

              {/* Legacy routes */}
              <Route path="/getting-started/developers/generator/install" element={<GeneratorInstall />} />
              <Route path="/getting-started/developers/generator/generator/api" element={<GeneratorApi />} />
              <Route path="/getting-started/developers/generator/generator/best-practice" element={<GeneratorBestPractice />} />
              <Route path="/getting-started/developers/generator/upgrade" element={<GeneratorUpgrade />} />
              <Route path="/getting-started/developers/generator/define-api" element={<GeneratorDefineApi />} />

              {/* Generator */}
              <Route path="/contributing" element={<Contributing />} />
              <Route path="/contributing/upstream" element={<ContributingUpstream />} />
              <Route path="/contributing/git-workflow" element={<ContribGitWorkflow />} />
              <Route path="/contributing/issues-prs-labels" element={<ContribIssuePrLabels />} />
              <Route path="/definition-of-done" element={<DoD />} />

              {/* Fallback route */}
              <Route path="/getting-started/developers/contributing" element={<Contributing />} />

              {/* Typography */}
              <Route path="/typography/overview" element={<TypographyOverview />} />
              <Route path="/typography/usage" element={<TypographyUsageRoute />} />
              <Route path="/typography/usage/:theme" element={<TypographyUsageRoute />} />

              {/* Icons */}
              <Route path="/icons/guidelines" element={<IconsGuidelines />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/deprecated-icons" element={<DeprecatedIcons />} />
              <Route path="/icons/install" element={<IconsInstall />} />
              <Route path="/icons/ways-to-use" element={<IconsWaysToUse />} />

              {/* Layout */}
              <Route path="/layout/grid" element={<LayoutGrid />} />
              <Route path="/layout/spacing" element={<LayoutSpacing />} />

              {/* COMPONENTS */}

              {/* accordion */}
              <Route path="/components/auro/accordion/" element={<AuroAccordion />} />
              <Route path="/components/auro/accordion/api" element={<AuroAccordionApi />} />
              <Route path="/components/auro/accordion/install" element={<AuroAccordionInstall />} />
              <Route path="/components/auro/accordion/releases" element={<AuroAccordionReleases />} />

              {/* Auro Alerts */}
              <Route path="/components/auro/alert" element={<AuroAlert />} />
              <Route path="/components/auro/alert/install" element={<AuroAlertInstall />} />
              <Route path="/components/auro/alert/api" element={<AuroAlertApi />} />
              <Route path="/components/auro/alert/releases" element={<AuroAlertReleases />} />

              {/* avatar */}
              <Route path="/components/auro/avatar/" element={<AuroAvatar />} />
              <Route path="/components/auro/avatar/api" element={<AuroAvatarApi />} />
              <Route path="/components/auro/avatar/install" element={<AuroAvatarInstall />} />
              <Route path="/components/auro/avatar/releases" element={<AuroAvatarReleases />} />

              {/* Auro Background */}
              <Route path="/components/auro/background" element={<AuroBackground />} />
              <Route path="/components/auro/background/install" element={<AuroBackgroundInstall />} />
              <Route path="/components/auro/background/api" element={<AuroBackgroundApi />} />
              <Route path="/components/auro/background/releases" element={<AuroBackgroundReleases />} />

              {/* Auro BacktoTop */}
              <Route path="/components/auro/backtotop" element={<AuroBacktotop />} />
              <Route path="/components/auro/backtotop/install" element={<AuroBacktotopInstall />} />
              <Route path="/components/auro/backtotop/api" element={<AuroBacktotopApi />} />
              <Route path="/components/auro/backtotop/releases" element={<AuroBacktotopReleases />} />

              {/* Auro Badge */}
              <Route path="/components/auro/badge" element={<AuroBadge />} />
              <Route path="/components/auro/badge/install" element={<AuroBadgeInstall />} />
              <Route path="/components/auro/badge/api" element={<AuroBadgeApi />} />
              <Route path="/components/auro/badge/releases" element={<AuroBadgeReleases />} />

              {/* banner */}
              <Route path="/components/auro/banner/" element={<AuroBanner />} />
              <Route path="/components/auro/banner/api" element={<AuroBannerApi />} />
              <Route path="/components/auro/banner/install" element={<AuroBannerInstall />} />
              <Route path="/components/auro/banner/releases" element={<AuroBannerReleases />} />

              {/* Auro Button */}
              <Route path="/components/auro/button" element={<AuroButton />} />
              <Route path="/components/auro/button/install" element={<AuroButtonInstall />} />
              <Route path="/components/auro/button/api" element={<AuroButtonApi />} />
              <Route path="/components/auro/button/releases" element={<AuroButtonReleases />} />
              <Route path="/components/auro/button/figma" element={<AuroButtonFigma />} />

              {/* card */}
              <Route path="/components/auro/card/" element={<AuroCard />} />
              <Route path="/components/auro/card/api" element={<AuroCardApi />} />
              <Route path="/components/auro/card/install" element={<AuroCardInstall />} />
              <Route path="/components/auro/card/releases" element={<AuroCardReleases />} />

              {/* carousel */}
              <Route path="/components/auro/carousel/" element={<AuroCarousel />} />
              <Route path="/components/auro/carousel/api" element={<AuroCarouselApi />} />
              <Route path="/components/auro/carousel/install" element={<AuroCarouselInstall />} />
              <Route path="/components/auro/carousel/releases" element={<AuroCarouselReleases />} />

              {/* Auro Checkbox */}
              <Route path="/components/auro/checkbox" element={<AuroCheckbox />} />
              <Route path="/components/auro/checkbox/install" element={<AuroCheckboxInstall />} />
              <Route path="/components/auro/checkbox/api" element={<AuroCheckboxApi />} />
              <Route path="/components/auro/checkbox/releases" element={<AuroCheckboxReleases />} />

              {/* Auro Combobox */}
              <Route path="/components/auro/combobox" element={<AuroCombobox />} />
              <Route path="/components/auro/combobox/install" element={<AuroComboboxInstall />} />
              <Route path="/components/auro/combobox/api" element={<AuroComboboxApi />} />
              <Route path="/components/auro/combobox/releases" element={<AuroComboboxReleases />} />

              {/* Auro Counter */}
              <Route path="/components/auro/counter" element={<AuroCounter />} />
              <Route path="/components/auro/counter/install" element={<AuroCounterInstall />} />
              <Route path="/components/auro/counter/api" element={<AuroCounterApi />} />
              <Route path="/components/auro/counter/releases" element={<AuroCounterReleases />} />

              {/* Auro Datepicker */}
              <Route path="/components/auro/datepicker" element={<AuroDatepicker />} />
              <Route path="/components/auro/datepicker/install" element={<AuroDatepickerInstall />} />
              <Route path="/components/auro/datepicker/api" element={<AuroDatepickerApi />} />
              <Route path="/components/auro/datepicker/releases" element={<AuroDatepickerReleases />} />

              {/* Auro Date/Time */}
              <Route path="/components/auro/datetime" element={<AuroDateTime />} />
              <Route path="/components/auro/datetime/install" element={<AuroDateTimeInstall />} />
              <Route path="/components/auro/datetime/api" element={<AuroDateTimeApi />} />
              <Route path="/components/auro/datetime/releases" element={<AuroDateTimeReleases />} />

              {/* Auro Dialog */}
              <Route path="/components/auro/dialog" element={<AuroDialog />} />
              <Route path="/components/auro/dialog/install" element={<AuroDialogInstall />} />
              <Route path="/components/auro/dialog/api" element={<AuroDialogApi />} />
              <Route path="/components/auro/dialog/releases" element={<AuroDialogReleases />} />

              {/* Auro drawer */}
              <Route path="/components/auro/drawer" element={<AuroDrawer />} />
              <Route path="/components/auro/drawer/install" element={<AuroDrawerInstall />} />
              <Route path="/components/auro/drawer/api" element={<AuroDrawerApi />} />
              <Route path="/components/auro/drawer/releases" element={<AuroDrawerReleases />} />

              {/* Auro Dropdown */}
              <Route path="/components/auro/dropdown" element={<AuroDropdown />} />
              <Route path="/components/auro/dropdown/install" element={<AuroDropdownInstall />} />
              <Route path="/components/auro/dropdown/api" element={<AuroDropdownApi />} />
              <Route path="/components/auro/dropdown/releases" element={<AuroDropdownReleases />} />

              {/* Auro Flight */}
              <Route path="/components/auro/flight" element={<AuroFlight />} />
              <Route path="/components/auro/flight/install" element={<AuroFlightInstall />} />
              <Route path="/components/auro/flight/api" element={<AuroFlightApi />} />
              <Route path="/components/auro/flight/dot" element={<AuroFlightDot />} />
              <Route path="/components/auro/flight/releases" element={<AuroFlightReleases />} />

              {/* Auro Flightline */}
              <Route path="/components/auro/flightline" element={<AuroFlightline />} />
              <Route path="/components/auro/flightline/install" element={<AuroFlightlineInstall />} />
              <Route path="/components/auro/flightline/api" element={<AuroFlightlineApi />} />
              <Route path="/components/auro/flightline/dot" element={<AuroFlightlineDot />} />
              <Route path="/components/auro/flightline/releases" element={<AuroFlightlineReleases />} />

              {/* flight-details */}
              <Route path="/components/auro/flight-details/" element={<Wip />} />

              {/* Auro Form */}
              <Route path="/components/auro/form" element={<AuroForm />} />
              <Route path="/components/auro/form/install" element={<AuroFormInstall />} />
              <Route path="/components/auro/form/api" element={<AuroFormApi />} />
              <Route path="/components/auro/form/releases" element={<AuroFormReleases />} />

              {/* Auro Header */}
              <Route path="/components/auro/header" element={<AuroHeader />} />
              <Route path="/components/auro/header/install" element={<AuroHeaderInstall />} />
              <Route path="/components/auro/header/api" element={<AuroHeaderApi />} />
              <Route path="/components/auro/header/releases" element={<AuroHeaderReleases />} />

              {/* Auro Hyperlink */}
              <Route path="/components/auro/hyperlink" element={<AuroHyperlink />} />
              <Route path="/components/auro/hyperlink/install" element={<AuroHyperlinkInstall />} />
              <Route path="/components/auro/hyperlink/api" element={<AuroHyperlinkApi />} />
              <Route path="/components/auro/hyperlink/releases" element={<AuroHyperlinkReleases />} />
              <Route path="/components/auro/hyperlink/figma" element={<AuroHyperlinkFigma />} />
              <Route path="/components/auro/hyperlink/a11y" element={<AuroHyperlinka11y />} />

              {/* icon */}
              <Route path="/components/auro/icon/" element={<AuroIcon />} />
              <Route path="/components/auro/icon/install" element={<AuroIconInstall />} />
              <Route path="/components/auro/icon/api" element={<AuroIconApi />} />
              <Route path="/components/auro/icon/releases" element={<AuroIconReleases />} />
              <Route path="/components/auro/icon/alaska" element={<AuroAlaska />} />

              {/* Auro Input */}
              <Route path="/components/auro/input" element={<AuroInput />} />
              <Route path="/components/auro/input/install" element={<AuroInputInstall />} />
              <Route path="/components/auro/input/api" element={<AuroInputApi />} />
              <Route path="/components/auro/input/releases" element={<AuroInputReleases />} />

              {/* Auro Loader */}
              <Route path="/components/auro/loader" element={<AuroLoader />} />
              <Route path="/components/auro/loader/install" element={<AuroLoaderInstall />} />
              <Route path="/components/auro/loader/api" element={<AuroLoaderApi />} />
              <Route path="/components/auro/loader/releases" element={<AuroLoaderReleases />} />

              {/* Auro Lockup */}
              <Route path="/components/auro/lockup" element={<AuroLockup />} />
              <Route path="/components/auro/lockup/install" element={<AuroLockupInstall />} />
              <Route path="/components/auro/lockup/api" element={<AuroLockupApi />} />
              <Route path="/components/auro/lockup/releases" element={<AuroLockupReleases />} />

              {/* Auro Menu */}
              <Route path="/components/auro/menu" element={<AuroMenu />} />
              <Route path="/components/auro/menu/install" element={<AuroMenuInstall />} />
              <Route path="/components/auro/menu/api" element={<AuroMenuApi />} />
              <Route path="/components/auro/menu/releases" element={<AuroMenuReleases />} />

              {/* Auro Nav */}
              <Route path="/components/auro/nav" element={<AuroNav />} />
              <Route path="/components/auro/nav/install" element={<AuroNavInstall />} />
              <Route path="/components/auro/nav/api" element={<AuroNavApi />} />
              <Route path="/components/auro/nav/releases" element={<AuroNavReleases />} />

              {/* pane */}
              <Route path="/components/auro/pane/" element={<AuroPane />} />
              <Route path="/components/auro/pane/api" element={<AuroPaneApi />} />
              <Route path="/components/auro/pane/install" element={<AuroPaneInstall />} />
              <Route path="/components/auro/pane/releases" element={<AuroPaneReleases />} />

              {/* Auro Popover */}
              <Route path="/components/auro/popover" element={<AuroPopover />} />
              <Route path="/components/auro/popover/install" element={<AuroPopoverInstall />} />
              <Route path="/components/auro/popover/api" element={<AuroPopoverApi />} />
              <Route path="/components/auro/popover/releases" element={<AuroPopoverReleases />} />

              {/* Auro Radio */}
              <Route path="/components/auro/radio" element={<AuroRadio />} />
              <Route path="/components/auro/radio/install" element={<AuroRadioInstall />} />
              <Route path="/components/auro/radio/api" element={<AuroRadioApi />} />
              <Route path="/components/auro/radio/releases" element={<AuroRadioReleases />} />

              {/* Auro Select */}
              <Route path="/components/auro/select" element={<AuroSelect />} />
              <Route path="/components/auro/select/install" element={<AuroSelectInstall />} />
              <Route path="/components/auro/select/api" element={<AuroSelectApi />} />
              <Route path="/components/auro/select/releases" element={<AuroSelectReleases />} />

              {/* Auro SideNav */}
              <Route path="/components/auro/sidenav" element={<AuroSidenav />} />
              <Route path="/components/auro/sidenav/install" element={<AuroSidenavInstall />} />
              <Route path="/components/auro/sidenav/api" element={<AuroSidenavApi />} />
              <Route path="/components/auro/sidenav/releases" element={<AuroSidenavReleases />} />

              {/* Auro Skeleton */}
              <Route path="/components/auro/skeleton" element={<AuroSkeleton />} />
              <Route path="/components/auro/skeleton/install" element={<AuroSkeletonInstall />} />
              <Route path="/components/auro/skeleton/api" element={<AuroSkeletonApi />} />
              <Route path="/components/auro/skeleton/releases" element={<AuroSkeletonReleases />} />

              {/* Auro Slideshow */}
              <Route path="/components/auro/slideshow" element={<AuroSlideshow />} />
              <Route path="/components/auro/slideshow/install" element={<AuroSlideshowInstall />} />
              <Route path="/components/auro/slideshow/api" element={<AuroSlideshowApi />} />
              <Route path="/components/auro/slideshow/releases" element={<AuroSlideshowReleases />} />

              {/* Auro Table */}
              <Route path="/components/auro/table" element={<AuroTable />} />
              <Route path="/components/auro/table/install" element={<AuroTableInstall />} />
              <Route path="/components/auro/table/api" element={<AuroTableApi />} />
              <Route path="/components/auro/table/releases" element={<AuroTableReleases />} />

              {/* Auro Tail */}
              <Route path="/components/auro/tail" element={<AuroTail />} />
              <Route path="/components/auro/tail/install" element={<AuroTailInstall />} />
              <Route path="/components/auro/tail/api" element={<AuroTailApi />} />
              <Route path="/components/auro/tail/releases" element={<AuroTailReleases />} />
              {/* Auro Toast */}
              <Route path="/components/auro/toast" element={<AuroToast />} />
              <Route path="/components/auro/toast/install" element={<AuroToastInstall />} />
              <Route path="/components/auro/toast/api" element={<AuroToastApi />} />
              <Route path="/components/auro/toast/releases" element={<AuroToastReleases />} />

              {/* Auro Token List */}
              <Route path="/components/auro/tokenlist" element={<AuroTokenlist />} />
              <Route path="/components/auro/tokenlist/install" element={<AuroTokenlistInstall />} />
              <Route path="/components/auro/tokenlist/api" element={<AuroTokenlistApi />} />
              <Route path="/components/auro/tokenlist/releases" element={<AuroTokenlistReleases />} />

              {/* Dev resources */}
              <Route path="/support/browsersSupport" element={<BrowserSupport />} />
              <Route path="/support/slots" element={<Slots />} />
              <Route path="/support/tests" element={<Tests />} />
              <Route path="/support/polyfills/focusvisible" element={<FocusVisible />} />
              <Route path="/support/polyfills/webcomponentsjs" element={<Webcomponentsjs />} />
              <Route path="/support/all-releases" element={<AllReleases />} />
              <Route path="/support/releases-by-sprint" element={<ReleasesBySprint />} />
              <Route path="/support/releases-summary" element={<ReleaseSummary />} />

              <Route path="/support/custom-properties" element={<CustomProperties />} />
              <Route path="/webcorestylesheets" element={<WcssFeatures />} />
              <Route path="/getting-started/developers/webcorestylesheets" element={<WcssFeatures />} />

              <Route path="/css/conventions" element={<WcssConventions />} />
              <Route path="/webcorestylesheets/tests" element={<WcssTests />} />
              <Route path="/css/guidelines" element={<WcssGuidelines />} />
              <Route path="/css/custom-element-css" element={<CustomElementCss />} />
              <Route path="/css/idiomatic-css" element={<IdiomaticCss />} />
              <Route path="/webcorestylesheets/features" element={<WcssFeatures />} />

              {/* Process */}


              {/* Example Projects  */}
              {/* Content for these pages need to be updated and have better descriptions of project */}
              <Route path="/angularSetup" element={<AngularDemoDocs />} /> {/* not used */}
              <Route path="/javascriptSetup" element={<JavascriptDemoDocs />} />
              <Route path="/reactSetup" element={<ReactDemoDocs />} />
              <Route path="/svelteSetup" element={<SvelteDemoDocs />} />


              {/* Auro Formkit */}
              <Route path="/components/auro/formkit" element={<AuroFormkitInstall />} />
              <Route path="/components/auro/formkit/releases" element={<AuroFormkitRelease />} />


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
