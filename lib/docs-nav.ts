/**
 * Canonical documentation information architecture.
 * Groups follow: hub → product/protocol trees with a consistent inner order * (overview → get started → concepts → how-to → reference → examples [+ tools]).
 */

export type DocsNavChild = { title: string; href: string };

export type DocsNavSection = {
  title: string;
  href: string;
  icon: 'rocket' | 'bot' | 'file';
  children?: DocsNavChild[];
};

export type DocsNavGroup = {
  /** Short label shown above a block of sections (sidebar / mobile). */
  label: string;
  sections: DocsNavSection[];
};

export const DOCS_NAV_GROUPS: DocsNavGroup[] = [
  {
    label: 'Start here',
    sections: [
      {
        title: 'Introduction',
        icon: 'rocket',
        href: '/',
      },
    ],
  },
  {
    label: 'Products and protocols',
    sections: [
      {
        title: 'HyperAgent',
        icon: 'bot',
        href: '/hyperagent',
        children: [
          { title: 'Overview', href: '/hyperagent' },
          { title: 'Getting started', href: '/hyperagent/getting-started' },
          { title: 'Concepts', href: '/hyperagent/concepts' },
          { title: 'Guides', href: '/hyperagent/guides' },
          { title: 'API reference', href: '/hyperagent/api-reference' },
          { title: 'CLI', href: '/hyperagent/cli' },
          { title: 'Examples', href: '/hyperagent/examples' },
          { title: 'Troubleshooting', href: '/hyperagent/troubleshooting' },
        ],
      },
      {
        title: 'ERC-1066 and x402',
        icon: 'file',
        href: '/erc1066-x402',
        children: [
          { title: 'Overview', href: '/erc1066-x402' },
          { title: 'Getting started', href: '/erc1066-x402/getting-started' },
          { title: 'Concepts', href: '/erc1066-x402/concepts' },
          { title: 'Guides', href: '/erc1066-x402/guides' },
          { title: 'Specifications', href: '/erc1066-x402/specifications' },
          { title: 'API reference', href: '/erc1066-x402/api-reference' },
          { title: 'Examples', href: '/erc1066-x402/examples' },
        ],
      },
    ],
  },
];

/** Flat list for scripts and logic that need every top-level section. */
export function getAllDocsNavSections(): DocsNavSection[] {
  return DOCS_NAV_GROUPS.flatMap((g) => g.sections);
}

/** @deprecated Prefer DOCS_NAV_GROUPS or getAllDocsNavSections(). */
export const DOCS_NAV_SECTIONS: DocsNavSection[] = getAllDocsNavSections();
