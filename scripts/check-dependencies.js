#!/usr/bin/env node

/**
 * This script checks that @aurodesignsystem/design-tokens in package.json
 * does not use a caret (^) to ensure strict validity checks and guarantees 
 * that the specified version is always used.
 * 
 * Refer to src/content/dynamic/designTokens/components/VersionChecker.js
 */

const fs = require('fs');
const path = require('path');

// Read package.json from the root directory
const packageJsonPath = path.join(__dirname, '..', 'package.json');
let packageJson;

try {
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(packageJsonContent);
} catch (error) {
  console.error('Error reading package.json:', error);
  process.exit(1);
}

const designTokensDependency = '@aurodesignsystem/design-tokens';

// Check if the dependency exists in dependencies
if (!packageJson.dependencies || !packageJson.dependencies[designTokensDependency]) {
  console.error(`Error: ${designTokensDependency} is not found in dependencies!`);
  process.exit(1);
}

// Get the version string
const versionString = packageJson.dependencies[designTokensDependency];

// Check if the version string starts with a caret
if (versionString.startsWith('^')) {
  console.error(`
ERROR: ${designTokensDependency} version uses a caret (^${versionString.substring(1)})
  
The caret (^) should be removed to ensure strict version checks.
Please update package.json to use the exact version: "${versionString.substring(1)}"
Refer to src/content/dynamic/designTokens/components/VersionChecker.js for more details.
  `);
  process.exit(1);
} else {
  console.log(`✓ ${designTokensDependency} correctly uses exact version: ${versionString}`);
}

console.log('All dependency checks passed!');
