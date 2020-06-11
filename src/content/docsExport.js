
// Import primary markdown tools
import {ExternalMarkdownWrapper, InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';

// internal markedown docs
import PhilosophyPage from './markdown/philosophy.md';
import EpicsPage from './markdown/epics.md';
import GettingStartedDevsOverviewPage from './markdown/developerOverview.md';
import WhatIsWhatPage from './markdown/whatIsWhat.md';
import LayoutPage from './markdown/layout.md';
import VoiceTonePage from './markdown/voiceTone.md';

// Markdown classes
// wrapper for general docs section
class ExternalDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/auro_docs"
  codeURL = "https://github.com/AlaskaAirlines/auro_docs/tree/master/src"
}

export class Philosophy extends InternalMarkdownWrapper {
  readme = PhilosophyPage
}

export class Epics extends InternalMarkdownWrapper {
  readme = EpicsPage
}

export class WhatIsWhat extends InternalMarkdownWrapper {
  readme = WhatIsWhatPage
}

export class GettingStartedDevsOverview extends InternalMarkdownWrapper {
  readme = GettingStartedDevsOverviewPage
}

export class Layout extends InternalMarkdownWrapper {
  readme = LayoutPage
}

export class VoiceTone extends InternalMarkdownWrapper {
  readme = VoiceTonePage
}

export class WCGenerator extends ExternalMarkdownWrapper {
  module = "@alaskaairux/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator"
  codeURL = "https://github.com/AlaskaAirlines/WC-Generator/tree/master/template"
  readme = "README.md"
}

export class ComplianceDocs extends ExternalDocs {
  readme = "src/COMPLIANCE.md"
}

export class ContributingDocs extends ExternalDocs {
  readme = "src/CONTRIBUTING.md"
}

export class A11yDocs extends ExternalDocs {
  readme = "src/A11Y.md"
}

export class BabelSupportDocs extends ExternalDocs {
  readme = "src/BABEL_SUPPORT.md"
}

export class BrowsersSupportDocs extends ExternalDocs {
  readme = "src/BROWSER_SUPPORT.md"
}

export class CustomPropertiesDocs extends ExternalDocs {
  readme = "src/CUSTOM_PROPERTIES.md"
}

export class CssConventionsDocs extends ExternalDocs {
  readme = "src/CSSCONVENTIONS.md"
}

export class IsTouchingDocs extends ExternalDocs {
  readme = "src/IS_TOUCHING.md"
}

export class TechDetailsDocs extends ExternalDocs {
  readme = "src/TECH_DETAILS.md"
}

export class SlotsDocs extends ExternalDocs {
  readme = "src/SLOTS.md"
}

export class TestsDocs extends ExternalDocs {
  readme = "src/TESTS.md"
}

export class ComponentsDocs extends ExternalDocs {
  readme = "src/COMPONENTS.md"
}

export class GovernanceDocs extends ExternalDocs {
  readme = "src/GOVERNANCE.md"
}

export class WhyCustomelementsDocs extends ExternalDocs {
  readme = "src/WHY_CUSTOMELEMENT.md"
}

// export class WebCoreStyleSheets extends ExternalMarkdownWrapper {
//   module = "@alaskaairux/orion-web-core-style-sheets"
//   githubURL = "https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
//   codeURL = "https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/tree/master/src"
//   readme = "README.md"
// }


// docs from demo repos
export class ReactDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionReactDemo"
  codeURL = "https://github.com/AlaskaAirlines/OrionReactDemo/tree/master/src"
  readme = "README.md"
}

export class AngularDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionAngularDemo"
  codeURL = "https://github.com/AlaskaAirlines/OrionAngularDemo/tree/master/src"
  readme = "README.md"
}

export class JavascriptDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionJavascriptDemo"
  codeURL = "https://github.com/AlaskaAirlines/OrionJavascriptDemo/tree/master/src"
  readme = "README.md"
}
