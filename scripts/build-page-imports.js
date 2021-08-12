const { resolve, normalize } = require('path');
const { readdir } = require('fs').promises;
const fs = require('fs');
const path = require('path');

async function* getFiles(dir) {

  const dirents = await readdir(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) {
      yield* getFiles(normalize(res));
    } else {
      yield res.replace(/\\/g, '/');
    }
  }
}

const getFile = (filePath) => {
    const dirs = filePath.split('/');

    return dirs[dirs.length -1];
}

const getImportName = (filePath) => {
    const file = getFile(filePath);
    let name = file.split('.')[0];
    name = name.replace(/-/g, '');
    const camelCaseName = name.charAt(0).toUpperCase() + name.substring(1);

    return camelCaseName;
};

const buildImports = (iconPaths) => {
  let importText = "";

  iconPaths.forEach(i => {
    importText += `import ${getImportName(i)}Page from '.${i}'; \n`;
  })

  return importText
}

const buildExports = (iconPaths) => {
  let importText = "";

  iconPaths.forEach(i => {
    importText += `export class ${getImportName(i)} extends InternalMarkdownWrapper {
  readme = ${getImportName(i)}Page\n}\n\n`
  })

  return importText
}

(async () => {
    const docs = [];
    for await (const file of getFiles('./src/content/markdown')) {
      const currentPath = path.join(__dirname, '../src/content')

      if(file.includes('.md')) docs.push(file.split(currentPath)[1]);
    }

    const ExternalMarkdownWrapperDocs = `
// @aurodesignsystem/wc-generator
export class BrowserSupport extends ExternalMarkdownWrapper {
  module = "@aurodesignsystem/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator/"
  codeURL = "https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator"
  readme = "docs/browserSupport.md"
}
export class Slots extends ExternalMarkdownWrapper {
  module = "@aurodesignsystem/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator/"
  codeURL = "https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator"
  readme = "docs/slots.md"
}
export class Tests extends ExternalMarkdownWrapper {
  module = "@aurodesignsystem/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator/"
  codeURL = "https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator"
  readme = "docs/test-runner.md"
}
export class Compliance extends ExternalMarkdownWrapper {
  module = "@aurodesignsystem/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator/"
  codeURL = "https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator"
  readme = "docs/compliance.md"
}

// @alaskaairux/webcorestylesheets
export class CustomProperties extends ExternalMarkdownWrapper {
  module = "@alaskaairux/webcorestylesheets"
  githubURL = "https://github.com/AlaskaAirlines/WebCoreStyleSheets/"
  codeURL = "https://raw.githubusercontent.com/AlaskaAirlines/WebCoreStyleSheets"
  readme = "documents/customProperties.md"
}
export class ShadyCSS extends ExternalMarkdownWrapper {
  module = "@alaskaairux/webcorestylesheets"
  githubURL = "https://github.com/AlaskaAirlines/WebCoreStyleSheets/"
  codeURL = "https://raw.githubusercontent.com/AlaskaAirlines/WebCoreStyleSheets"
  readme = "documents/shadyCSS.md"
}

// repo readme files
export class WCGenerator extends ExternalMarkdownWrapper {
  module = "@aurodesignsystem/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator"
  codeURL = "https://github.com/AlaskaAirlines/WC-Generator/tree/master/template"
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
export class ReactDemoDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/AuroReactDemo"
  codeURL = "https://github.com/AlaskaAirlines/AuroReactDemo/tree/master/src"
  readme = "README.md"
}
    `;

    const docsText = `// DO NOT EDIT! \n// This doc was auto generated from ./scripts/build-page-imports.js \n// ${new Date()}
      \n// Import primary markdown tools\nimport {ExternalMarkdownWrapper, InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';
      \n// internal markdown docs\n${buildImports(docs)}
      \n// internal markdown docs\n${buildExports(docs)}

      \n${ExternalMarkdownWrapperDocs}`;

    // this function creates the output file needed
    fs.writeFile("./src/content/docsExport.js", docsText, (err) => {

        if(err) return console.log(err);

        console.log("The file was saved!");
    });

  })()
