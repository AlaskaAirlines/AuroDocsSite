const fs = require('fs');
const { getFiles, getCategory, buildImports, buildElements, buildUrlImports, buildImgElements, REGEX_FILE_EXTENSION } = require('./utils');

/**
 * Build the iconList.js and deprecatedIconList.js file.
 */
async function buildIconList() {
  const icons = [];
  const deprecatedIcons = [];
  const files = getFiles('./node_modules/@alaskaairux/icons/dist/icons');
  for await (const f of files) {
    // read non es6 js file for non-deprecated value and push the svg file
    // if (/^(?=.*(?:.js))(?!.*(?:es6))/.test(f)) {
    if (/^(?=.*(?:.js))(?!.*(?:es6))(?!.*(?:mjs))/.test(f)) {
      const file = require(f);

      const iconPath = `${f.split('node_modules/')[1].replace(REGEX_FILE_EXTENSION,'.svg')}`;
      if (file.deprecated) {
        deprecatedIcons.push(iconPath);
      } else {
        icons.push(iconPath);
      }
    }
  };

  /**
   * Sort the icons into categories.
   * @param {Array} payload
   * @returns Array of icons sorted by category.
   */
  const sortIcons = (payload) => {
    return payload.reduce((sortedIcons, i) => {
      const category = getCategory(i);
      sortedIcons[category] = sortedIcons[category] || [];
      sortedIcons[category].push(i);
      return sortedIcons;
    }, {});
  }

  const sortedIcons = sortIcons(icons);
  const sortedDeprecatedIcons = sortIcons(deprecatedIcons);

  /**
   * Compile the file text as a React component.
   * @param {Array} iconsData Array of iconsPath before it was sorted.
   * @param {Array} sortedIconsData Array of iconsPath after it was sorted to its categories.
   * @returns React component file text string.
   */
  const buildIconListComponentText = (iconsData, sortedIconsData) => {
    return `// DO NOT EDIT! \n// This doc was auto generated from ./scripts/build-icon-lib.js \n// ${new Date()}

import React from "react";
${buildImports(iconsData)}

export default function iconList() {
  return (
    <div id="icon-list">
      ${buildElements(sortedIconsData)}
    </div>
  )
}`;
}

  const iconListComponentText = buildIconListComponentText(icons, sortedIcons);
  const deprecatedIconListComponentText = buildIconListComponentText(deprecatedIcons, sortedDeprecatedIcons);

  fs.writeFile("src/content/dynamic/icons/iconList.js", iconListComponentText, (err) => {
    if(err) return console.log(err);
    console.log("The iconList.js file was saved to src/content/dynamic/icons/iconList.js!");
  });

  fs.writeFile("src/content/dynamic/icons/deprecatedIconList.js", deprecatedIconListComponentText, (err) => {
    if(err) return console.log(err);
    console.log("The deprecatedIconList.js file was saved to src/content/dynamic/icons/deprecatedIconList.js!");
  });
}

/**
 * Build a standalone svg-gallery list file (e.g. tailList.js, pictogramList.js).
 *
 * Unlike the general icon gallery (which only scans dist/icons/), tails live in
 * dist/logos/ as tail-*.svg and pictograms live in dist/pictograms/. Tails and
 * pictograms each get their own page, so each is generated into its own list
 * file. Only .svg files are read (the .js/.mjs wrappers are skipped); these
 * collections carry no `deprecated` flag.
 *
 * @param {Object} options
 * @param {string} options.dir Directory to scan under node_modules.
 * @param {RegExp} options.match Filename filter applied to each .svg file.
 * @param {string} options.label Section heading rendered above the grid.
 * @param {string} options.exportName Exported React component function name.
 * @param {string} options.outFile Destination file path to write.
 * @param {string} [options.wrapperClass] Extra class on the list container, used
 *   to scope CSS (tails/pictograms are large, full-color art and need different
 *   sizing than the small UI-icon glyphs).
 */
async function buildSvgList({ dir, match, label, exportName, outFile, wrapperClass = '' }) {
  const paths = [];
  for await (const f of getFiles(dir)) {
    if (!f.endsWith('.svg')) continue;
    const file = f.split('/').pop();
    if (!match.test(file)) continue;
    paths.push(f.split('node_modules/')[1]);
  }
  paths.sort();

  const componentText = `// DO NOT EDIT! \n// This doc was auto generated from ./scripts/build-icon-lib.js \n// ${new Date()}

import React from "react";
${buildUrlImports(paths)}

export default function ${exportName}() {
  return (
    <div id="icon-list"${wrapperClass ? ` className="${wrapperClass}"` : ''}>
      ${buildImgElements({ [label]: paths })}
    </div>
  )
}`;

  fs.writeFile(outFile, componentText, (err) => {
    if(err) return console.log(err);
    console.log(`The ${outFile.split('/').pop()} file was saved to ${outFile}!`);
  });
}

buildIconList();
buildSvgList({
  dir: './node_modules/@alaskaairux/icons/dist/logos',
  match: /^tail-.*\.svg$/,
  label: 'Tails',
  exportName: 'tailList',
  outFile: 'src/content/dynamic/icons/tailList.js',
  wrapperClass: 'graphicList',
});
buildSvgList({
  dir: './node_modules/@alaskaairux/icons/dist/pictograms',
  match: /\.svg$/,
  label: 'Pictograms',
  exportName: 'pictogramList',
  outFile: 'src/content/dynamic/icons/pictogramList.js',
  wrapperClass: 'graphicList',
});
