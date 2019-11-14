import MarkdownWrapper from './markdown-wrapper';
import readme from '@alaskaairux/ods-wc-generator/README.md'

class Generator extends MarkdownWrapper {
  module = "@alaskaairux/ods-wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/ods-wc-generator"
  codeURL = "https://github.com/AlaskaAirlines/ODS-WC-Generator/tree/master/template"
  readme = readme

}

export default Generator;
