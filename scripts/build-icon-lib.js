const fs = require('fs');
const { getFiles, getCategory, buildImports, buildElements, REGEX_FILE_EXTENSION } = require('./utils');

/**
 * Build the iconList.js and deprecatedIconList.js file.
 */
async function buildIconList() {
  const icons = [];
  const deprecatedIcons = [];
  const files = getFiles('./node_modules/@alaskaairux/icons/dist/icons');
  for await (const f of files) {
    // read non es6 js file for non-deprecated value and push the svg file
    if (/^(?=.*(?:.js))(?!.*(?:es6))/.test(f)) {
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
    return `// DO NOT EDIT! \n// This doc was auto generated from ./scripts/build-icon-lib.js \n// ${new Date()}';

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

buildIconList();
