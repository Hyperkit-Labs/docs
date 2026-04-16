export type DocsNavChild = { title: string; href: string };

export type DocsNavSection = {
  title: string;
  href: string;
  icon: 'rocket' | 'bot' | 'file';
  children?: DocsNavChild[];
};

export const DOCS_NAV_SECTIONS: DocsNavSection[] = [
  {
    title: 'Getting Started',
    icon: 'rocket',
    href: '/',
  },
  {
    title: 'HyperAgent',
    icon: 'bot',
    href: '/hyperagent',
    children: [
      { title: 'Overview', href: '/hyperagent' },
      { title: 'Getting Started', href: '/hyperagent/getting-started' },
      { title: 'Core Concepts', href: '/hyperagent/concepts' },
      { title: 'Guides', href: '/hyperagent/guides' },
      { title: 'API Reference', href: '/hyperagent/api-reference' },
      { title: 'CLI', href: '/hyperagent/cli' },
      { title: 'Examples', href: '/hyperagent/examples' },
    ],
  },
  {
    title: 'ERC-1066 and x402',
    icon: 'file',
    href: '/erc1066-x402',
    children: [
      { title: 'Overview', href: '/erc1066-x402' },
      { title: 'Getting Started', href: '/erc1066-x402/getting-started' },
      { title: 'Core Concepts', href: '/erc1066-x402/concepts' },
      { title: 'Guides', href: '/erc1066-x402/guides' },
      { title: 'API Reference', href: '/erc1066-x402/api-reference' },
      { title: 'Specifications', href: '/erc1066-x402/specifications' },
      { title: 'Examples', href: '/erc1066-x402/examples' },
    ],
  },
];
