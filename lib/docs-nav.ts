/**
 * Canonical documentation information architecture.
 * Groups follow: hub, product trees, and Diátaxis-style doc modes on each leaf.
 */

import type { DocMode } from '@/lib/doc-modes';

export type DocsNavChild = {
  title: string;
  href: string;
  mode: DocMode;
  searchHint?: string;
};

export type DocsNavSection = {
  title: string;
  href: string;
  icon: 'rocket' | 'bot' | 'file';
  children?: DocsNavChild[];
  /** Set when the section is a single page without children (e.g. Introduction). */
  docMode?: DocMode;
  searchHint?: string;
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
        docMode: 'explanation',
        searchHint: 'Hub, product areas, and how documentation is organized',
      },
      {
        title: 'Whitepaper',
        icon: 'file',
        href: '/whitepaper',
        docMode: 'explanation',
        searchHint:
          'Hyperkit v1.2.0 whitepaper: HyperAgent architecture, market model, validation, roadmap, appendices',
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
          {
            title: 'Overview',
            href: '/hyperagent',
            mode: 'explanation',
            searchHint: 'Product model, Studio path, and current scope',
          },
          {
            title: 'Getting started',
            href: '/hyperagent/getting-started',
            mode: 'tutorial',
            searchHint: 'Studio flow, prerequisites, BYOK, and closed-beta scope',
          },
          {
            title: 'Concepts',
            href: '/hyperagent/concepts',
            mode: 'explanation',
            searchHint: 'Workflow stages, gateway, verification, and deployment semantics',
          },
          {
            title: 'Guides',
            href: '/hyperagent/guides',
            mode: 'how-to',
            searchHint: 'Task guides: generation, audit, deploy, x402, monitoring',
          },
          {
            title: 'API reference',
            href: '/hyperagent/api-reference',
            mode: 'reference',
            searchHint: 'HTTP surfaces: workflows, contracts, deployments, WebSocket, x402',
          },
          {
            title: 'CLI',
            href: '/hyperagent/cli',
            mode: 'reference',
            searchHint: 'Commands, flags, and examples for the HyperAgent CLI',
          },
          {
            title: 'Examples',
            href: '/hyperagent/examples',
            mode: 'how-to',
            searchHint: 'Worked examples: basic generation, custom audit, x402 workflow',
          },
          {
            title: 'Troubleshooting',
            href: '/hyperagent/troubleshooting',
            mode: 'how-to',
            searchHint: 'Common failures, gateway errors, and recovery steps',
          },
        ],
      },
      {
        title: 'ERC-1066 and x402',
        icon: 'file',
        href: '/erc1066-x402',
        children: [
          {
            title: 'Overview',
            href: '/erc1066-x402',
            mode: 'explanation',
            searchHint: 'Status semantics, policy logic, and payment-flow concepts',
          },
          {
            title: 'Getting started',
            href: '/erc1066-x402/getting-started',
            mode: 'tutorial',
            searchHint: 'Gateway orientation, policies, and first integration steps',
          },
          {
            title: 'Concepts',
            href: '/erc1066-x402/concepts',
            mode: 'explanation',
            searchHint: 'ERC-1066 status codes and x402 payment wall behavior',
          },
          {
            title: 'Guides',
            href: '/erc1066-x402/guides',
            mode: 'how-to',
            searchHint: 'Gateway setup, deployment, multi-chain, agent integration',
          },
          {
            title: 'Specifications',
            href: '/erc1066-x402/specifications',
            mode: 'reference',
            searchHint: 'Protocols, semantics, transport, and scheme reference',
          },
          {
            title: 'API reference',
            href: '/erc1066-x402/api-reference',
            mode: 'reference',
            searchHint: 'Gateway API, contracts, and SDK entry points',
          },
          {
            title: 'Examples',
            href: '/erc1066-x402/examples',
            mode: 'how-to',
            searchHint: 'Policy setup and basic usage patterns',
          },
        ],
      },
    ],
  },
];

/** Flat list for scripts and logic that need every top-level section. */
export function getAllDocsNavSections(): DocsNavSection[] {
  return DOCS_NAV_GROUPS.flatMap((g) => g.sections);
}

/** Longest-prefix match: subpages inherit the mode of their nearest nav parent. */
export function findDocModeForPath(pathname: string | null): DocMode | null {
  if (!pathname) return null;
  const normalized =
    pathname !== '/' && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;

  let best: { len: number; mode: DocMode } | null = null;

  for (const group of DOCS_NAV_GROUPS) {
    for (const section of group.sections) {
      if (section.docMode && !section.children?.length) {
        const h =
          section.href !== '/' && section.href.endsWith('/')
            ? section.href.slice(0, -1)
            : section.href;
        if (normalized === h) {
          return section.docMode;
        }
      }

      if (!section.children?.length) continue;

      for (const child of section.children) {
        const h =
          child.href !== '/' && child.href.endsWith('/')
            ? child.href.slice(0, -1)
            : child.href;
        if (normalized === h || normalized.startsWith(h + '/')) {
          const len = h.length;
          if (!best || len > best.len) {
            best = { len, mode: child.mode };
          }
        }
      }
    }
  }

  return best?.mode ?? null;
}

/** @deprecated Prefer DOCS_NAV_GROUPS or getAllDocsNavSections(). */
export const DOCS_NAV_SECTIONS: DocsNavSection[] = getAllDocsNavSections();
