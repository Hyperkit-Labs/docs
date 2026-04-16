// Version information
// This file reads from package.json at build time

let versionCache: string = '0.1.0';

/**
 * Get the current version string from package.json
 */
function getVersionFromPackage(): string {
  if (versionCache !== '0.1.0') {
    return versionCache;
  }
  
  try {
    // In Node.js environment (server-side)
    if (typeof require !== 'undefined') {
      const packageJson = require('../package.json');
      versionCache = packageJson.version || '0.1.0';
      return versionCache;
    }
  } catch {
    // Fallback if require is not available
  }
  
  // Default fallback
  return '0.1.0';
}

export const version = getVersionFromPackage();
export const projectName = 'docs-fe';

/**
 * Get the current version string
 */
export function getVersion(): string {
  return version;
}

/**
 * Get version parts (major, minor, patch)
 */
export function getVersionParts(): { major: number; minor: number; patch: number } {
  const parts = version.split('.').map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0,
  };
}

/**
 * Format version for display (e.g., "v1.0.0")
 */
export function formatVersion(): string {
  return `v${version}`;
}

