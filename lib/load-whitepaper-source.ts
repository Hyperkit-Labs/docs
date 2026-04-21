import fs from 'fs';
import path from 'path';

/**
 * Server-only: reads the whitepaper from disk. Do not import from client components.
 */
const WHITEPAPER_RELATIVE = path.join('docs', 'Hyperkit Whitepaper v1.2.0.md');

export function loadWhitepaperSource(): string {
  const p = path.join(process.cwd(), WHITEPAPER_RELATIVE);
  return fs.readFileSync(p, 'utf8');
}
