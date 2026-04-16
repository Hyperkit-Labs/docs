'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, FileText, Bot, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getDocsSearchIndex, type DocsSearchEntry } from '@/lib/docs-search-index';
import { DOC_MODE_META } from '@/lib/doc-modes';
import { useDocsArchive } from '@/components/providers/docs-archive-provider';

interface DocsSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsSearchModal: React.FC<DocsSearchModalProps> = ({ isOpen, onClose }) => {
  const { docHref } = useDocsArchive();
  const searchIndex = useMemo(() => getDocsSearchIndex(), []);
  const popularPages = useMemo(
    () => searchIndex.filter((e) => e.href !== '/').slice(0, 8),
    [searchIndex]
  );

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DocsSearchEntry[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const activeList: DocsSearchEntry[] = query.trim() ? results : popularPages;

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
    const filtered = searchIndex
      .filter((item) => {
        const modeLabel = DOC_MODE_META[item.mode].label.toLowerCase();
        return (
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description?.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          item.groupLabel.toLowerCase().includes(lowerQuery) ||
          modeLabel.includes(lowerQuery)
        );
      })
      .slice(0, 12);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query, searchIndex]);

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
        window.location.href = docHref(activeList[selectedIndex].href);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeList, selectedIndex, onClose, docHref]);

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
            placeholder="Search titles, topics, and doc types..."
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
            : 'Popular pages. Type to filter by title, section, or doc type (tutorial, how-to, reference, explanation).'}
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
              No matches. Try &quot;HyperAgent&quot;, &quot;x402&quot;, &quot;API&quot;, or &quot;tutorial&quot;.
            </div>
          ) : (
            activeList.map((result, index) => (
              <Link
                key={`${result.href}-${result.title}-${result.mode}`}
                href={docHref(result.href)}
                onClick={onClose}
                role="option"
                aria-selected={index === selectedIndex}
                className={`flex items-center gap-3 px-4 py-3 transition-colors border-b border-white/[0.04] last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500/50 ${
                  index === selectedIndex ? 'bg-white/8' : 'hover:bg-white/5'
                }`}
              >
                <div className="text-slate-400 shrink-0">{getCategoryIcon(result.category)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-white">{result.title}</span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 border border-white/10 rounded px-1.5 py-0.5 shrink-0"
                      title={DOC_MODE_META[result.mode].blurb}
                    >
                      {DOC_MODE_META[result.mode].label}
                    </span>
                  </div>
                  {result.description ? (
                    <div className="text-xs text-slate-500 truncate mt-0.5">{result.description}</div>
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
