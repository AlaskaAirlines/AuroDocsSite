
// Import primary markdown tools
import {ExternalMarkdownWrapper, InternalMarkdownWrapper} from './markdown-wrapper';

// Import local markdown docs
import ColorDesignGuidlinesPage from './pages/colors/designGuidlines/index.md';
import GettingStartedDevsPage from './pages/gettingStarted/developers/index.md';
import PhilosophyPage from './pages/philosophy/philosophy.md';
import IconsDesignPage from './pages/iconsDesign/index.md';

export class ColorDesignGuidlines extends InternalMarkdownWrapper {
  readme = ColorDesignGuidlinesPage
}

export class GettingStartedDevs extends InternalMarkdownWrapper {
  readme = GettingStartedDevsPage
}
export class IconsDesign extends InternalMarkdownWrapper {
  readme = IconsDesignPage
}

export class Philosophy extends InternalMarkdownWrapper {
  readme = PhilosophyPage
}

// wrapper for general docs section
class Docs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs"
  codeURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/tree/master/src"
}

export class A11yDocs extends Docs {
  readme = "src/A11Y.md"
}

export class BabelSupportDocs extends Docs {
  readme = "src/BABEL_SUPPORT.md"
}

export class BrowsersSupportDocs extends Docs {
  readme = "src/BROWSER_SUPPORT.md"
}

export class ContributingDocs extends Docs {
  readme = "src/CONTRIBUTING.md"
}

export class CustomPropertiesDocs extends Docs {
  readme = "src/CUSTOM_PROPERTIES.md"
}

export class FocusVisibleDocs extends Docs {
  readme = "src/FOCUS_VISIBLE.md"
}

export class IsTouchingDocs extends Docs {
  readme = "src/IS_TOUCHING.md"
}

export class PolyfillDocs extends Docs {
  readme = "src/POLYFILL.md"
}

export class TechDetailsDocs extends Docs {
  readme = "src/TECH_DETAILS.md"
}

export class TestsDocs extends Docs {
  readme = "src/TESTS.md"
}

export class ComponentsDocs extends Docs {
  readme = "src/COMPONENTS.md"
}


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

export class AuroHyperlinkDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink"
  codeURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-hyperlink/tree/master/src"
  readme = "README.md"
}

export class AuroButtonDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button"
  codeURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__ods-button/tree/master/src"
  readme = "README.md"
}
