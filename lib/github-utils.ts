export function getGitHubEditUrl(pathname: string): string {
  const baseUrl = 'https://github.com/Hyperkit-Labs/docs/blob/main';
  
  // Remove leading slash
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  
  // Handle root path
  if (!cleanPath || cleanPath === '/') {
    return `${baseUrl}/app/page.tsx`;
  }
  
  // Convert path to file path
  const filePath = `app/${cleanPath}/page.tsx`;
  
  return `${baseUrl}/${filePath}`;
}

export function getRelatedLinks(pathname: string): Array<{ title: string; href: string }> {
  const relatedMap: Record<string, Array<{ title: string; href: string }>> = {
    '/hyperagent': [
      { title: 'Getting Started', href: '/hyperagent/getting-started' },
      { title: 'Core Concepts', href: '/hyperagent/concepts' },
      { title: 'API Reference', href: '/hyperagent/api-reference' },
    ],
    '/hyperagent/getting-started': [
      { title: 'Installation', href: '/hyperagent/getting-started/installation' },
      { title: 'Docker Setup', href: '/hyperagent/getting-started/docker-setup' },
      { title: 'First Contract', href: '/hyperagent/getting-started/first-contract' },
    ],
    '/hyperagent/concepts': [
      { title: 'AI Generation', href: '/hyperagent/concepts/ai-generation' },
      { title: 'Security Auditing', href: '/hyperagent/concepts/auditing' },
      { title: 'Deployment', href: '/hyperagent/concepts/deployment' },
    ],
    '/sdk': [
      { title: 'Getting Started', href: '/sdk/getting-started' },
      { title: 'Components', href: '/sdk/components' },
      { title: 'Hooks', href: '/sdk/hooks' },
    ],
    '/sdk/components': [
      { title: 'Connect Wallet', href: '/sdk/components/connect-wallet' },
      { title: 'Swap', href: '/sdk/components/swap' },
      { title: 'Bridge', href: '/sdk/components/bridge' },
    ],
    '/sdk/hooks': [
      { title: 'useWallet', href: '/sdk/hooks/use-wallet' },
      { title: 'useAlert', href: '/sdk/hooks/use-alert' },
    ],
    '/aa-hyperwallet': [
      { title: 'Getting Started', href: '/aa-hyperwallet/getting-started' },
      { title: 'Core Concepts', href: '/aa-hyperwallet/concepts' },
      { title: 'Visual Builder', href: '/aa-hyperwallet/builder' },
    ],
    '/aa-hyperwallet/concepts': [
      { title: 'Account Abstraction', href: '/aa-hyperwallet/concepts/account-abstraction' },
      { title: 'Authentication', href: '/aa-hyperwallet/concepts/authentication' },
      { title: 'Sessions', href: '/aa-hyperwallet/concepts/sessions' },
    ],
    '/erc1066-x402': [
      { title: 'Getting Started', href: '/erc1066-x402/getting-started' },
      { title: 'Core Concepts', href: '/erc1066-x402/concepts' },
      { title: 'API Reference', href: '/erc1066-x402/api-reference' },
    ],
    '/erc1066-x402/concepts': [
      { title: 'Status Codes', href: '/erc1066-x402/concepts#status-codes' },
      { title: 'Policy Checks', href: '/erc1066-x402/concepts#policy-checks' },
      { title: 'Intent Validation', href: '/erc1066-x402/concepts#intent-validation' },
    ],
  };

  return relatedMap[pathname] || [];
}

export function formatLastUpdated(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 0) {
    return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  } else if (diffHours > 0) {
    return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  } else if (diffMinutes > 0) {
    return diffMinutes === 1 ? '1 minute ago' : `${diffMinutes} minutes ago`;
  } else {
    return 'Just now';
  }
}

import { lastUpdatedMetadata } from './last-updated-metadata';

/**
 * Get the last updated date for a page path
 * Falls back to a default date if not found in metadata
 */
export function getLastUpdatedDate(pathname: string): Date {
  // Normalize pathname: remove leading slash, except for root
  let lookupKey = pathname;
  if (pathname && pathname !== '/') {
    lookupKey = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  }
  
  // Try exact match first
  let dateString = lastUpdatedMetadata[lookupKey];
  
  // If not found and it's root, try "/"
  if (!dateString && pathname === '/') {
    dateString = lastUpdatedMetadata['/'];
  }
  
  // If still not found, try with leading slash
  if (!dateString && !pathname.startsWith('/')) {
    dateString = lastUpdatedMetadata['/' + pathname];
  }
  
  if (dateString) {
    return new Date(dateString);
  }
  
  // Fallback: return a default date (2 days ago)
  return new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
}

