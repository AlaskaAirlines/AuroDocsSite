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
  const camelCaseName = name.charAt(0).toUpperCase() + name.substring(1)

  return camelCaseName
}

const buildImports = (iconPaths) => {
  let importText = ''

  iconPaths.forEach((i) => {
    importText +=
      '// eslint-disable-next-line import/no-webpack-loader-syntax \n'
    importText += `import ${getImportName(
      i
    )} from '-!svg-react-loader!${i}'; \n`
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

module.exports = {
  getFiles,
  getFile,
  getImportName,
  buildImports,
  buildElements,
  getCategory,
  REGEX_FILE_EXTENSION
}
