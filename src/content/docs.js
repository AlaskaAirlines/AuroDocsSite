import {ExternalMarkdownWrapper, InternalMarkdownWrapper} from './markdown-wrapper';
import DigitalPersonalityPage from './pages/digitalPersonality/digital-personality.md';

class Docs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs"
  codeURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/tree/master/src"
}

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

export class DigitalPersonality extends InternalMarkdownWrapper {
  readme = DigitalPersonalityPage
}

export class A11yDocs extends Docs {
  readme = "src/A11Y.md"
}

export class AltBuildDocs extends Docs {
  readme = "src/ALT_BUILD.md"
}

export class BabelSupportDocs extends Docs {
  readme = "src/BABEL_SUPPORT.md"
}

export class BrowsersSupportDocs extends Docs {
  readme = "src/BROWSER_SUPPORT.md"
}

export class CallbackDocs extends Docs {
  readme = "src/CALLBACK.md"
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

export class PollyfillDocs extends Docs {
  readme = "src/POLYFILL.md"
}

export class TechDetailsDocs extends Docs {
  readme = "src/TECH_DETAILS.md"
}

export class TestsDocs extends Docs {
  readme = "src/TESTS.md"
}
