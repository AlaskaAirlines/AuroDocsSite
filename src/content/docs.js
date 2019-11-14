import MarkdownWrapper from './markdown-wrapper';
import Home from '@alaskaairux/ods-docs/docs/README.md';
import A11Y from '@alaskaairux/ods-docs/docs/A11Y.md';
import ALT_BUILD from '@alaskaairux/ods-docs/docs/ALT_BUILD.md'
import BABEL_SUPPORT from '@alaskaairux/ods-docs/docs/BABEL_SUPPORT.md'
import BROWSER_SUPPORT from '@alaskaairux/ods-docs/docs/BROWSER_SUPPORT.md'
import CALLBACK from '@alaskaairux/ods-docs/docs/CALLBACK.md'
import CONTRIBUTING from '@alaskaairux/ods-docs/docs/CONTRIBUTING.md'
import CUSTOM_PROPERTIES from '@alaskaairux/ods-docs/docs/CUSTOM_PROPERTIES.md'
import FOCUS_VISIBLE from '@alaskaairux/ods-docs/docs/FOCUS_VISIBLE.md'
import IS_TOUCHING from '@alaskaairux/ods-docs/docs/IS_TOUCHING.md'
import NEW_REACT_PROJECT_SETUP from '@alaskaairux/ods-docs/docs/NEW_REACT_PROJECT_SETUP.md'
import POLYFILL from '@alaskaairux/ods-docs/docs/POLYFILL.md'
import TECH_DETAILS from '@alaskaairux/ods-docs/docs/TECH_DETAILS.md'
import TESTS from '@alaskaairux/ods-docs/docs/TESTS.md'

class Docs extends MarkdownWrapper {
  module = "@alaskaairux/ods-docs"
  githubURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs"
  codeURL = "https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/tree/master/src"
}

export class HomeDocs extends Docs {
  readme = Home
}

export class A11yDocs extends Docs {
  readme = A11Y
}

export class AltBuildDocs extends Docs {
  readme = ALT_BUILD
}

export class BabelSupportDocs extends Docs {
  readme = BABEL_SUPPORT
}

export class BrowsersSupportDocs extends Docs {
  readme = BROWSER_SUPPORT
}

export class CallbackDocs extends Docs {
  githubURL = "https://letmedie.com"
  readme = CALLBACK
}

export class ContributingDocs extends Docs {
  readme = CONTRIBUTING
}

export class CustomPropertiesDocs extends Docs {
  readme = CUSTOM_PROPERTIES
}

export class FocusVisibleDocs extends Docs {
  readme = FOCUS_VISIBLE
}

export class IsTouchingDocs extends Docs {
  readme = IS_TOUCHING
}

export class NewReactProjectSetupDocs extends Docs {
  readme = NEW_REACT_PROJECT_SETUP
}

export class PollyfillDocs extends Docs {
  readme = POLYFILL
}

export class TechDetailsDocs extends Docs {
  readme = TECH_DETAILS
}

export class TestsDocs extends Docs {
  readme = TESTS
}