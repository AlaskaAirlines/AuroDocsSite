
// Import primary markdown tools
import {ExternalMarkdownWrapper, InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';

// internal markedown docs
import PhilosophyPage from './markdown/philosophy.md';
import GettingStartedDevsOverviewPage from './markdown/developerOverview.md';
import WhatIsWhatPage from './markdown/whatIsWhat.md';
import LayoutPage from './markdown/layout.md';
import VoiceTonePage from './markdown/voiceTone.md';
import ShadyCSSPage from './markdown/shadyCSS.md';
import AuroSupportPage from './markdown/auroSupport.md';
import AuroHomePage from './markdown/home.md';
import A11yStatementPage from './markdown/a11yStatement.md';

// Temp pages for new work
import Wip from './markdown/wip.md';

// Markdown classes
// wrapper for general docs section
class ExternalDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/auro"
  codeURL = "https://github.com/AlaskaAirlines/auro/tree/master/src"
}

export class WipPage extends InternalMarkdownWrapper {
  readme = Wip
}

export class Philosophy extends InternalMarkdownWrapper {
  readme = PhilosophyPage
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

export class ShadyCSS extends InternalMarkdownWrapper {
  readme = ShadyCSSPage
}

export class AuroSupport extends InternalMarkdownWrapper {
  readme = AuroSupportPage
}

export class AuroHome extends InternalMarkdownWrapper {
  readme = AuroHomePage
}

export class A11yStatement extends InternalMarkdownWrapper {
  readme = A11yStatementPage
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

export class GovernanceDocs extends ExternalDocs {
  readme = "src/GOVERNANCE.md"
}

export class WhyCustomelementsDocs extends ExternalDocs {
  readme = "src/WHY_CUSTOMELEMENT.md"
}

// docs from demo repos
export class ReactDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/AuroReactDemo"
  codeURL = "https://github.com/AlaskaAirlines/AuroReactDemo/tree/master/src"
  readme = "README.md"
}

export class AngularDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionAngularDemo"
  codeURL = "https://github.com/AlaskaAirlines/OrionAngularDemo/tree/master/src"
  readme = "README.md"
}

export class JavascriptDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/AuroJavascriptDemo"
  codeURL = "https://github.com/AlaskaAirlines/AuroJavascriptDemo/tree/master/src"
  readme = "README.md"
}

export class SvelteDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/AuroSvelteDemo"
  codeURL = "https://github.com/AlaskaAirlines/AuroSvelteDemo/tree/master/src"
  readme = "README.md"
}
