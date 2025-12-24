#!/usr/bin/env node

/**
 * Update version in package.json and regenerate version.ts
 * Usage: node scripts/update-version.js [version]
 * Example: node scripts/update-version.js 1.0.1
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../package.json');
const versionTsPath = path.join(__dirname, '../lib/version.ts');

function updateVersion(newVersion) {
  try {
    // Read package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Update version
    const oldVersion = packageJson.version;
    packageJson.version = newVersion;
    
    // Write back to package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
    
    console.log(`✅ Updated version from ${oldVersion} to ${newVersion}`);
    
    // Regenerate version.ts (it will be regenerated on next build)
    console.log('📝 Version will be updated in lib/version.ts on next build');
    
    return { success: true, oldVersion, newVersion };
  } catch (error) {
    console.error('❌ Error updating version:', error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node scripts/update-version.js [version]');
  console.log('Example: node scripts/update-version.js 1.0.1');
  console.log('');
  console.log('This script updates the version in package.json.');
  console.log('The version.ts file will be regenerated on next build.');
  process.exit(0);
}

const newVersion = args[0];

// Validate version format (semver)
if (!/^\d+\.\d+\.\d+/.test(newVersion)) {
  console.error('❌ Invalid version format. Use semantic versioning (e.g., 1.0.1)');
  process.exit(1);
}

updateVersion(newVersion);

