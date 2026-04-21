/**
 * Helpers for version-prefixed doc URLs (archived snapshots under /v0.1.0/...).
 */

/** Doc routes that exist only on latest; archive views should link to canonical URLs. */
const LATEST_ONLY_PATHS = new Set(['/whitepaper']);

export function withArchivePrefix(href: string, archivePrefix: string): string {
  if (!archivePrefix) return href;
  if (href.startsWith('http://') || href.startsWith('https://')) return href;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return href;

  const [pathPart, ...hashParts] = href.split('#');
  const hash = hashParts.length ? `#${hashParts.join('#')}` : '';

  if (pathPart.startsWith('//')) return href;

  if (pathPart === '' || pathPart === '/') {
    return `${archivePrefix}${hash}`;
  }

  const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  if (LATEST_ONLY_PATHS.has(path)) {
    return `${path}${hash}`;
  }
  return `${archivePrefix}${path}${hash}`;
}

/** Strip archive prefix so nav active states match canonical paths (e.g. /hyperagent). */
export function normalizePathnameForDocs(
  pathname: string | null,
  archivePrefix: string
): string {
  if (!pathname) return '';
  if (archivePrefix && pathname === archivePrefix) return '/';
  if (archivePrefix && pathname.startsWith(`${archivePrefix}/`)) {
    return pathname.slice(archivePrefix.length) || '/';
  }
  return pathname;
}
