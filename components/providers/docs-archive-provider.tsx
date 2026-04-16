'use client';

import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { withArchivePrefix, normalizePathnameForDocs } from '@/lib/docs-href';
import { ARCHIVE_V0_1_0_PATH_PREFIX } from '@/lib/archive-v0.1.0-config';

type DocsArchiveContextValue = {
  archivePrefix: string;
  docHref: (href: string) => string;
  docsPathname: string;
};

const DocsArchiveContext = createContext<DocsArchiveContextValue | null>(null);

export function DocsArchiveProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const archivePrefix = useMemo(() => {
    if (!pathname) return '';
    if (pathname === ARCHIVE_V0_1_0_PATH_PREFIX || pathname.startsWith(`${ARCHIVE_V0_1_0_PATH_PREFIX}/`)) {
      return ARCHIVE_V0_1_0_PATH_PREFIX;
    }
    return '';
  }, [pathname]);

  const docsPathname = useMemo(
    () => normalizePathnameForDocs(pathname, archivePrefix),
    [pathname, archivePrefix]
  );

  const docHref = useCallback(
    (href: string) => withArchivePrefix(href, archivePrefix),
    [archivePrefix]
  );

  const value = useMemo(
    () => ({
      archivePrefix,
      docHref,
      docsPathname,
    }),
    [archivePrefix, docHref, docsPathname]
  );

  return (
    <DocsArchiveContext.Provider value={value}>{children}</DocsArchiveContext.Provider>
  );
}

export function useDocsArchive(): DocsArchiveContextValue {
  const ctx = useContext(DocsArchiveContext);
  if (!ctx) {
    throw new Error('useDocsArchive must be used within DocsArchiveProvider');
  }
  return ctx;
}

/**
 * Keeps in-page links on latest docs inside /v0.1.0 when viewing the archive.
 * Archive v0.1.0 pages already use prefixed hrefs; this covers any remaining /... links.
 */
export function DocsArchiveNavBridge() {
  const { archivePrefix, docHref } = useDocsArchive();
  const router = useRouter();

  React.useEffect(() => {
    if (!archivePrefix) return;

    const el = document.getElementById('doc-content');
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== '' && anchor.target !== '_self') return;
      if (anchor.hasAttribute('download')) return;

      const hrefAttr = anchor.getAttribute('href');
      if (!hrefAttr || hrefAttr.startsWith('http://') || hrefAttr.startsWith('https://'))
        return;
      if (hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) return;
      if (hrefAttr.startsWith('#')) return;

      const url = new URL(hrefAttr, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const pathWithQueryAndHash = url.pathname + url.search + url.hash;
      if (pathWithQueryAndHash.startsWith(archivePrefix)) return;

      e.preventDefault();
      router.push(docHref(pathWithQueryAndHash));
    };

    el.addEventListener('click', onClick, true);
    return () => el.removeEventListener('click', onClick, true);
  }, [archivePrefix, docHref, router]);

  return null;
}
