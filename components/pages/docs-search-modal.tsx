'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Package, Wallet, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  href: string;
  description?: string;
  category: string;
}

const searchIndex: SearchResult[] = [
  // Hyperagent
  { title: 'Hyperagent Overview', href: '/hyperagent', category: 'Hyperagent', description: 'AI-powered smart contract development platform' },
  { title: 'Getting Started', href: '/hyperagent/getting-started', category: 'Hyperagent' },
  { title: 'Core Concepts', href: '/hyperagent/concepts', category: 'Hyperagent' },
  { title: 'API Reference', href: '/hyperagent/api-reference', category: 'Hyperagent' },
  { title: 'CLI', href: '/hyperagent/cli', category: 'Hyperagent' },
  
  // SDK
  { title: 'Hyperkit SDK Overview', href: '/sdk', category: 'SDK', description: 'React SDK for building decentralized applications' },
  { title: 'SDK Getting Started', href: '/sdk/getting-started', category: 'SDK' },
  { title: 'Components', href: '/sdk/components', category: 'SDK' },
  { title: 'Hooks', href: '/sdk/hooks', category: 'SDK' },
  { title: 'Actions API', href: '/sdk/actions', category: 'SDK' },
  
  // AA Hyperwallet
  { title: 'AA Hyperwallet Overview', href: '/aa-hyperwallet', category: 'AA Hyperwallet', description: 'Account Abstraction Smart Wallet Builder' },
  { title: 'Getting Started', href: '/aa-hyperwallet/getting-started', category: 'AA Hyperwallet' },
  { title: 'Core Concepts', href: '/aa-hyperwallet/concepts', category: 'AA Hyperwallet' },
  { title: 'Visual Builder', href: '/aa-hyperwallet/builder', category: 'AA Hyperwallet' },
  
  // ERC-1066-x402
  { title: 'ERC-1066-x402 Overview', href: '/erc1066-x402', category: 'ERC-1066-x402', description: 'Standardized status codes for Web3 transactions' },
  { title: 'Getting Started', href: '/erc1066-x402/getting-started', category: 'ERC-1066-x402' },
  { title: 'Core Concepts', href: '/erc1066-x402/concepts', category: 'ERC-1066-x402' },
  { title: 'API Reference', href: '/erc1066-x402/api-reference', category: 'ERC-1066-x402' },
];

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsSearchModal: React.FC<DocsSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description?.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 8);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        window.location.href = results[selectedIndex].href;
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hyperagent': return <Bot className="w-4 h-4" />;
      case 'SDK': return <Package className="w-4 h-4" />;
      case 'AA Hyperwallet': return <Wallet className="w-4 h-4" />;
      case 'ERC-1066-x402': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0B0C15] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-slate-500"
          />
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={`${result.href}-${index}`}
                href={result.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                  index === selectedIndex ? 'bg-white/5' : ''
                }`}
              >
                <div className="text-slate-400">
                  {getCategoryIcon(result.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{result.title}</div>
                  {result.description && (
                    <div className="text-xs text-slate-400 mt-0.5">{result.description}</div>
                  )}
                  <div className="text-xs text-slate-500 mt-1">{result.category}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="px-4 py-8 text-center text-sm text-slate-400">
            No results found for &quot;{query}&quot;
          </div>
        )}

        {!query && (
          <div className="px-4 py-8 text-center text-sm text-slate-400">
            Start typing to search...
          </div>
        )}
      </div>
    </div>
  );
};

