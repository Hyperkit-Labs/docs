import { DOCS_NAV_GROUPS } from '@/lib/docs-nav';
import type { DocMode } from '@/lib/doc-modes';

export type DocsSearchEntry = {
  title: string;
  href: string;
  category: string;
  groupLabel: string;
  description?: string;
  mode: DocMode;
};

export function getDocsSearchIndex(): DocsSearchEntry[] {
  const out: DocsSearchEntry[] = [];

  for (const group of DOCS_NAV_GROUPS) {
    for (const section of group.sections) {
      if (section.docMode && !section.children?.length) {
        out.push({
          title: section.title,
          href: section.href,
          category: section.title,
          groupLabel: group.label,
          description: section.searchHint,
          mode: section.docMode,
        });
      }

      if (!section.children?.length) continue;

      for (const child of section.children) {
        out.push({
          title: `${section.title}: ${child.title}`,
          href: child.href,
          category: section.title,
          groupLabel: group.label,
          description: child.searchHint,
          mode: child.mode,
        });
      }
    }
  }

  return out;
}
