const { resolve, normalize } = require('path')
const { readdir } = require('fs').promises

const REGEX_FILE_EXTENSION = /\.[^.]*$/;

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true })

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name)

    if (dirent.isDirectory()) {
      yield* getFiles(normalize(res))
    } else {
      yield res.replace(/\\/g, '/')
    }
  }
}

const getFile = (filePath) => {
  const dirs = filePath.split('/')

  return dirs[dirs.length - 1]
}

const getImportName = (filePath) => {
  const file = getFile(filePath)
  let name = file.split('.')[0]
  name = name.replace(/-/g, '')
  // A JS import identifier cannot begin with a digit, so a file like
  // "24-7-support.svg" (-> "247support") would emit an invalid import and break
  // the generated module. Prefix "Svg" when the name would start with a number.
  if (/^\d/.test(name)) {
    name = `Svg${name}`
  }
  const camelCaseName = name.charAt(0).toUpperCase() + name.substring(1)

  return camelCaseName
}

const buildImports = (iconPaths) => {
  let importText = ''

  iconPaths.forEach((i) => {
    importText += `import ${getImportName(
      i
    )} from '${i}?react'; \n`
  })

  return importText
}

const buildElements = (sortedIcons) => {
  let allCategories = ''

  for (let category in sortedIcons) {
    let iconPaths = sortedIcons[category]
    let elements = ''

    iconPaths.forEach((i) => {
      const file = getFile(i)
      const tag = getImportName(i)
      elements += `<div title="${file}"><${tag} /><span>${file}</span></div>`
    })

    allCategories += `<section><h2 className="icon-category">${category}</h2><div className="iconsWrapper">${elements}</div></section>`
  }

  return allCategories
}

const getCategory = (iconPath) => {
  const iconAndDist = iconPath.split('dist/icons/')[1]
  let category = 'Legacy'

  if (iconAndDist.includes('/')) category = iconAndDist.split('/')[0]

  return category
}

// Tails and pictograms are static, full-color brand art that use short internal
// SVG ids (A/B/C) for masks/filters/uses. Inlining many of them via SVGR (`?react`)
// collapses those ids into one document where they collide, so all but the first
// render broken. Rendering each as a plain <img> keeps every SVG its own document
// (ids stay scoped) — matching how the upstream Icons repo renders them. These two
// helpers emit that <img>-based markup; the icon gallery keeps buildImports/buildElements.
const buildUrlImports = (iconPaths) => {
  let importText = ''

  iconPaths.forEach((i) => {
    // Default import (no `?react`) resolves through Vite's asset pipeline to the URL.
    importText += `import ${getImportName(i)} from '${i}'; \n`
  })

  return importText
}

const buildImgElements = (sortedIcons) => {
  let allCategories = ''

  for (let category in sortedIcons) {
    let iconPaths = sortedIcons[category]
    let elements = ''

    iconPaths.forEach((i) => {
      const file = getFile(i)
      const tag = getImportName(i)
      // alt="" — the graphic is decorative here; the adjacent <span> already
      // labels it with the filename, so descriptive alt would be redundant.
      elements += `<div title="${file}"><img src={${tag}} alt="" /><span>${file}</span></div>`
    })

    allCategories += `<section><h2 className="icon-category">${category}</h2><div className="iconsWrapper">${elements}</div></section>`
  }

  return allCategories
}

module.exports = {
  getFiles,
  getFile,
  getImportName,
  buildImports,
  buildElements,
  buildUrlImports,
  buildImgElements,
  getCategory,
  REGEX_FILE_EXTENSION
}
