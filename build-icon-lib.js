const { resolve } = require('path');
const { readdir } = require('fs').promises;
const fs = require('fs');

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
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
        importText += "// eslint-disable-next-line import/no-webpack-loader-syntax \n";
        importText += `import ${getImportName(i)} from '-!svg-react-loader!${i}'; \n`;
    })

    return importText
}

const buildElements = (iconPaths) => {
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
    })
    return elements;
}


(async () => {
    const icons = [];
    const imports = "";
    for await (const f of getFiles('./node_modules/@alaskaairux/orion-icons/dist/icons')) {
        if(f.includes('.svg')) icons.push(f.split('node_modules/')[1]);
    }

    const iconListComponentText = `
    import React from "react";
    ${buildImports(icons)}

    export default function () {
        return (
          <div className="iconsWrapper">
            ${buildElements(icons)}
          </div>
        )
      } 
    `;

    fs.writeFile("src/content/iconList.js", iconListComponentText, (err) => {

        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });

  })()