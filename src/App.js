import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// Importing Sass
import './sass/index.scss';
import './sass/App.scss';

// Only import design token CSS files - these are required for styling
import '@alaskaairux/design-tokens/dist/tokens/CSSCustomProperties.css';
import '@aurodesignsystem/design-tokens/dist/CSSCustomProperties--bundled.css';
import '@aurodesignsystem/design-tokens/dist/auro-classic/CSSCustomProperties.css';

// Import component loader utility
import { loadAuroComponents } from './webcomponents';

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

// Utilities
import ThemeSwitcher from './content/dynamic/utilities/theme-switcher';

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

// Component to handle lazy loading components based on route
const ComponentLoader = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Extract component names from current route
    const path = location.pathname;
    const componentsToLoad = [];
    
    // Match route patterns to determine which components to load
    if (path.includes('/components/auro/accordion') || path === '/accordion/') {
      componentsToLoad.push('accordion');
    }
    if (path.includes('/components/auro/alert') || path === '/alert') {
      componentsToLoad.push('alert');
    }
    if (path.includes('/components/auro/avatar') || path === '/avatar/') {
      componentsToLoad.push('avatar');
    }
    if (path.includes('/components/auro/background') || path === '/background/') {
      componentsToLoad.push('background');
    }
    if (path.includes('/components/auro/backtotop') || path === '/backtotop') {
      componentsToLoad.push('backtotop');
    }
    if (path.includes('/components/auro/badge') || path === '/badge') {
      componentsToLoad.push('badge');
    }
    if (path.includes('/components/auro/banner') || path === '/banner/') {
      componentsToLoad.push('banner');
    }
    if (path.includes('/components/auro/button') || path === '/button') {
      componentsToLoad.push('button');
    }
    if (path.includes('/components/auro/card') || path === '/card/') {
      componentsToLoad.push('card');
    }
    if (path.includes('/components/auro/carousel') || path === '/carousel/') {
      componentsToLoad.push('carousel');
    }
    if (path.includes('/components/auro/datetime') || path === '/datetime/') {
      componentsToLoad.push('datetime');
    }
    if (path.includes('/components/auro/dialog') || path === '/dialog') {
      componentsToLoad.push('dialog');
    }
    if (path.includes('/components/auro/drawer') || path === '/drawer') {
      componentsToLoad.push('drawer');
    }
    if (path.includes('/components/auro/flight') || path === '/flight') {
      componentsToLoad.push('flight');
    }
    if (path.includes('/components/auro/flightline') || path === '/flightline') {
      componentsToLoad.push('flightline');
    }
    if (path.includes('/components/auro/header') || path === '/header') {
      componentsToLoad.push('header');
    }
    if (path.includes('/components/auro/hyperlink') || path === '/hyperlink') {
      componentsToLoad.push('hyperlink');
    }
    if (path.includes('/components/auro/icon') || path === '/icon/') {
      componentsToLoad.push('icon');
    }
    if (path.includes('/components/auro/icon/alaska') || path === '/icon/alaska') {
      componentsToLoad.push('alaska-icon');
    }
    if (path.includes('/components/auro/loader') || path === '/loader') {
      componentsToLoad.push('loader');
    }
    if (path.includes('/components/auro/lockup') || path === '/lockup') {
      componentsToLoad.push('lockup');
    }
    if (path.includes('/components/auro/nav') || path === '/nav') {
      componentsToLoad.push('nav');
    }
    if (path.includes('/components/auro/pane') || path === '/pane/') {
      componentsToLoad.push('pane');
    }
    if (path.includes('/components/auro/popover') || path === '/popover') {
      componentsToLoad.push('popover');
    }
    if (path.includes('/components/auro/sidenav') || path === '/sidenav') {
      componentsToLoad.push('sidenav');
    }
    if (path.includes('/components/auro/skeleton') || path === '/skeleton') {
      componentsToLoad.push('skeleton');
    }
    if (path.includes('/components/auro/table') || path === '/table') {
      componentsToLoad.push('table');
    }
    if (path.includes('/components/auro/toast') || path === '/toast') {
      componentsToLoad.push('toast');
    }
    if (path.includes('/components/auro/tokenlist') || path === '/tokenlist') {
      componentsToLoad.push('tokenlist');
    }
    
    // Load all required components for the current route
    if (componentsToLoad.length > 0) {
      loadAuroComponents(componentsToLoad);
    }
  }, [location]);
  
  return null;
};

// Keep the rest of your imports 
// ...existing content imports...

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
            <ComponentLoader />
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

              {/* Utilities */}
              <Route path="/utilities/theme-switcher" element={<ThemeSwitcher />} />


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
              <Route path="/typography/usage" element={<TypographyUsage />} />

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
              <Route path="/components/auro/alert/figma" element={<AuroAlertFigma />} />

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

              {/* Auro Table */}
              <Route path="/components/auro/table" element={<AuroTable />} />
              <Route path="/components/auro/table/install" element={<AuroTableInstall />} />
              <Route path="/components/auro/table/api" element={<AuroTableApi />} />
              <Route path="/components/auro/table/releases" element={<AuroTableReleases />} />

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
