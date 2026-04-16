'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  href: string;
  description?: string;
  category: string;
}

const searchIndex: SearchResult[] = [
  { title: 'HyperAgent Overview', href: '/hyperagent', category: 'HyperAgent', description: 'AI-native workflow system for smart contract delivery' },
  { title: 'HyperAgent Getting Started', href: '/hyperagent/getting-started', category: 'HyperAgent', description: 'Studio path, BYOK, and supported scope' },
  { title: 'HyperAgent Core Concepts', href: '/hyperagent/concepts', category: 'HyperAgent', description: 'Layers, workflow semantics, and boundaries' },
  { title: 'HyperAgent Guides', href: '/hyperagent/guides', category: 'HyperAgent' },
  { title: 'HyperAgent API Reference', href: '/hyperagent/api-reference', category: 'HyperAgent' },
  { title: 'HyperAgent CLI', href: '/hyperagent/cli', category: 'HyperAgent' },
  { title: 'HyperAgent Examples', href: '/hyperagent/examples', category: 'HyperAgent' },
  { title: 'HyperAgent Troubleshooting', href: '/hyperagent/troubleshooting', category: 'HyperAgent' },

  { title: 'ERC-1066 Overview', href: '/erc1066-x402', category: 'ERC-1066 and x402', description: 'Status semantics, policy logic, and payment-flow concepts' },
  { title: 'ERC-1066 Getting Started', href: '/erc1066-x402/getting-started', category: 'ERC-1066 and x402' },
  { title: 'ERC-1066 Core Concepts', href: '/erc1066-x402/concepts', category: 'ERC-1066 and x402' },
  { title: 'ERC-1066 API Reference', href: '/erc1066-x402/api-reference', category: 'ERC-1066 and x402' },
];

const popularPages = searchIndex.slice(0, 6);

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsSearchModal: React.FC<DocsSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const activeList: SearchResult[] = query.trim() ? results : popularPages;

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
        setSelectedIndex((prev) =>
          prev < activeList.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && activeList[selectedIndex]) {
        e.preventDefault();
        window.location.href = activeList[selectedIndex].href;
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeList, selectedIndex, onClose]);

  useEffect(() => {
    setSelectedIndex((i) => Math.min(i, Math.max(0, activeList.length - 1)));
  }, [activeList.length]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'HyperAgent':
        return <Bot className="w-4 h-4" aria-hidden />;
      case 'ERC-1066 and x402':
        return <FileText className="w-4 h-4" aria-hidden />;
      default:
        return <FileText className="w-4 h-4" aria-hidden />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-2xl bg-[#0B0C15] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Search className="w-4 h-4 text-slate-400 shrink-0" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles and descriptions..."
            className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm text-white placeholder-slate-500 focus-visible:ring-0"
            aria-autocomplete="list"
            aria-controls="search-results-list"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="px-4 py-2 text-[11px] text-slate-500 border-b border-white/5">
          {query.trim()
            ? `${results.length} result${results.length === 1 ? '' : 's'}`
            : 'Popular pages — type to filter'}
        </p>

        <div
          ref={listRef}
          id="search-results-list"
          className="max-h-[min(24rem,60vh)] overflow-y-auto"
          role="listbox"
          aria-label="Search results"
        >
          {activeList.length === 0 && query.trim() ? (
            <div className="px-4 py-8 text-center text-sm text-slate-500">
              No matches. Try &quot;HyperAgent&quot;, &quot;x402&quot;, or &quot;API&quot;.
            </div>
          ) : (
            activeList.map((result, index) => (
              <Link
                key={`${result.href}-${result.title}`}
                href={result.href}
                onClick={onClose}
                role="option"
                aria-selected={index === selectedIndex}
                className={`flex items-center gap-3 px-4 py-3 transition-colors border-b border-white/[0.04] last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500/50 ${
                  index === selectedIndex ? 'bg-white/8' : 'hover:bg-white/5'
                }`}
              >
                <div className="text-slate-400 shrink-0">{getCategoryIcon(result.category)}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{result.title}</div>
                  {result.description ? (
                    <div className="text-xs text-slate-500 truncate">{result.description}</div>
                  ) : null}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" aria-hidden />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
