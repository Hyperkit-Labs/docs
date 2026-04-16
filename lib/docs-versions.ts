/**
 * Documentation site versions. Latest tracks package.json via lib/version.ts at build time.
 * v0.1.0 is a separate route tree under /v0.1.0 (materialized from git; see scripts/materialize-archive-v0.1.0.mjs).
 */

import {
  ARCHIVE_V0_1_0_DATE_ISO,
  ARCHIVE_V0_1_0_GIT_SHA,
  ARCHIVE_V0_1_0_PATH_PREFIX,
} from '@/lib/archive-v0.1.0-config';
import { getVersion } from '@/lib/version';

export const DOCS_VERSION_LATEST_ID = getVersion();

export const DOCS_ARCHIVE_V0_1_0_PREFIX = ARCHIVE_V0_1_0_PATH_PREFIX;

export const DOCS_ARCHIVED = [
  {
    id: '0.1.0',
    label: 'v0.1.0',
    pathPrefix: ARCHIVE_V0_1_0_PATH_PREFIX,
    note: `Restored from git ${ARCHIVE_V0_1_0_GIT_SHA.slice(0, 7)} (${ARCHIVE_V0_1_0_DATE_ISO}).`,
  },
] as const;

export type ArchivedDocsVersion = (typeof DOCS_ARCHIVED)[number];

export function getArchivedByPrefix(prefix: string): ArchivedDocsVersion | undefined {
  return DOCS_ARCHIVED.find((a) => a.pathPrefix === prefix);
}
