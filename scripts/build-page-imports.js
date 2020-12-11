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
    // importText += `export class ${getImportName(i)} extends InternalMarkdownWrapper {
  //readme = ${getImportName(i)}Page\n}\n\n`
  })

  return importText
}

const buildExports = (iconPaths) => {
  let importText = "";

  iconPaths.forEach(i => {
    // importText += `import ${getImportName(i)}Page from '.${i}'; \n`;
    importText += `export class ${getImportName(i)} extends InternalMarkdownWrapper {
  readme = ${getImportName(i)}Page\n}\n\n`
  })

  return importText
}

const buildElements = (sortedIcons) => {
  let allCategories = '';

  for(let category in sortedIcons) {
    let iconPaths = sortedIcons[category];
    let elements = "";

    iconPaths.forEach(i => {
      const file = getFile(i);
      const tag = getImportName(i);
        elements += `
          <div title="${file}">
            <${tag} />
              <span>${file}</span>
            </div>
          `
      });

      allCategories += `
        <section>
          <h2 className="icon-category">${category}</h2>
          <div className="iconsWrapper">
            ${elements}
          </div>
        </section>
      `;
    }

    return allCategories;
}

(async () => {
    const icons = [];
    for await (const file of getFiles('./src/content/markdown')) {
      const currentPath = path.join(__dirname, '../src/content')

      if(file.includes('.md')) icons.push(file.split(currentPath)[1]);
    }

    const externalRepoReadmeDocs = `
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
    `;

    const ExternalMarkdownWrapperDocs = `
// Markdown classes
// wrapper for general docs section
class ExternalDocs extends ExternalMarkdownWrapper {
  githubURL = "https://github.com/AlaskaAirlines/auro"
  codeURL = "https://github.com/AlaskaAirlines/auro/tree/master/src"
}

export class WCGenerator extends ExternalMarkdownWrapper {
  module = "@alaskaairux/wc-generator"
  githubURL = "https://github.com/AlaskaAirlines/wc-generator"
  codeURL = "https://github.com/AlaskaAirlines/WC-Generator/tree/master/template"
  readme = "README.md"
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
    `;

    const iconListComponentText = `// DO NOT EDIT! \n// This doc was auto generated from ./src/scripts/build-page-imports.js \n// ${new Date()}
      \n// Import primary markdown tools\nimport {ExternalMarkdownWrapper, InternalMarkdownWrapper} from '../components/rawMarkdownWrapper';
      \n// internal markdown docs\n${buildImports(icons)}
      \n// internal markdown docs\n${buildExports(icons)}

      \n${ExternalMarkdownWrapperDocs}
      \n${externalRepoReadmeDocs}
    `;

    // this function creates the output file needed
    fs.writeFile("./src//content/docsExport.js", iconListComponentText, (err) => {

        if(err) return console.log(err);

        console.log("The file was saved!");
    });

  })()
