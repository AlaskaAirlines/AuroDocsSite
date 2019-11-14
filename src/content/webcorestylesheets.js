import MarkdownWrapper from './markdown-wrapper';
import readme from '@alaskaairux/orion-web-core-style-sheets/README.md'

class Generator extends MarkdownWrapper {
  module = "@alaskaairux/orion-web-core-style-sheets"
  githubURL = "https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets"
  codeURL = "https://github.com/AlaskaAirlines/OrionWebCoreStyleSheets/tree/master/src"
  readme = readme

}

export default Generator;