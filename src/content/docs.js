import {ExternalMarkdownWrapper} from './markdown-wrapper';


class Docs extends ExternalMarkdownWrapper {
  module = "@alaskaairux/ods-docs"
  githubURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs"
  codeURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/tree/master/src"
}

export class HomeDocs extends Docs {
  readme = "src/README.md"
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

export class NewReactProjectSetupDocs extends Docs {
  readme = "src/NEW_REACT_PROJECT_SETUP.md"
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