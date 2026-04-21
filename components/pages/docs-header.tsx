'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  ChevronDown,
  Github,
  Menu,
  X,
  Rocket,
  Bot,
  FileText,
  ChevronRight,
  Twitter,
  MessagesSquare,
  BookOpen,
  Globe,
  Link as LinkIcon,
  Share2,
} from 'lucide-react';
import { useDocsArchive } from '@/components/providers/docs-archive-provider';
import { DOCS_SOCIAL_LINKS } from '@/lib/social-links';
import { DocsSearchModal } from '@/components/pages/docs-search-modal';
import { formatVersion } from '@/lib/version';
import { DOCS_NAV_GROUPS, getAllDocsNavSections } from '@/lib/docs-nav';
import { DOC_MODE_META } from '@/lib/doc-modes';
import { DOCS_ARCHIVED } from '@/lib/docs-versions';

const iconMap = {
  rocket: Rocket,
  bot: Bot,
  file: FileText,
} as const;

const socialIconMap = {
  discord: MessagesSquare,
  x: Twitter,
  link3: LinkIcon,
  medium: BookOpen,
  website: Globe,
} as const;

function MobileNavPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { docsPathname, docHref } = useDocsArchive();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    const next = new Set<string>();
    for (const s of getAllDocsNavSections()) {
      if (s.children && (docsPathname === s.href || docsPathname.startsWith(s.href + '/'))) {
        next.add(s.title);
      }
    }
    setExpanded(next);
  }, [docsPathname, open]);

  const toggle = (title: string) => {
    setExpanded((prev) => {
      const n = new Set(prev);
      if (n.has(title)) n.delete(title);
      else n.add(title);
      return n;
    });
  };

  if (!open) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
        onClick={onClose}
      />
      <div
        className="fixed top-14 left-0 bottom-0 z-[70] w-[min(100vw-3rem,20rem)] bg-[#05050A] border-r border-white/10 shadow-2xl overflow-y-auto lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Documentation navigation"
      >
        <div className="p-3 border-b border-white/10 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-200">Navigate</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-3 space-y-3" aria-label="Mobile docs sections">
          {DOCS_NAV_GROUPS.map((group) => (
            <div key={group.label} className="space-y-1">
              <p className="px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {group.label}
              </p>
              {group.sections.map((section) => {
                const Icon = iconMap[section.icon];
                const isActive =
                  docsPathname === section.href || docsPathname.startsWith(section.href + '/');
                const hasChildren = Boolean(section.children?.length);

                if (!hasChildren) {
                  return (
                    <Link
                      key={`${group.label}-${section.title}`}
                      href={docHref(section.href)}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 ${
                        isActive
                          ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-80" />
                      {section.title}
                    </Link>
                  );
                }

                const isExpanded = expanded.has(section.title);
                return (
                  <div key={`${group.label}-${section.title}`}>
                    <button
                      type="button"
                      onClick={() => toggle(section.title)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 ${
                        isActive
                          ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                      aria-expanded={isExpanded}
                    >
                      <Icon className="w-4 h-4 shrink-0 opacity-80" />
                      <span className="flex-1 text-left">{section.title}</span>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      )}
                    </button>
                    {isExpanded && section.children && (
                      <div className="ml-3 mt-1 pl-3 border-l border-white/10 space-y-0.5">
                        {section.children.map((child) => {
                          const isChildActive =
                            docsPathname === child.href ||
                            (child.href !== '/' && docsPathname.startsWith(child.href + '/'));
                          const modeMeta = DOC_MODE_META[child.mode];
                          return (
                            <Link
                              key={child.href}
                              href={docHref(child.href)}
                              onClick={onClose}
                              title={`${modeMeta.label}: ${modeMeta.blurb}`}
                              className={`flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 ${
                                isChildActive
                                  ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                              }`}
                            >
                              <span className="min-w-0 truncate">{child.title}</span>
                              <span
                                className="shrink-0 text-[10px] font-semibold text-slate-500 tabular-nums w-5 h-5 flex items-center justify-center rounded border border-white/10 bg-white/[0.03]"
                                aria-hidden
                              >
                                {modeMeta.abbrev}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export const DocsHeader: React.FC = () => {
  const pathname = usePathname();
  const { docHref, archivePrefix } = useDocsArchive();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVersionOpen, setIsVersionOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const currentVersion = formatVersion();

  const openSearch = useCallback(() => setIsSearchOpen(true), []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key !== 'Escape') return;
      if (isSearchOpen) {
        setIsSearchOpen(false);
        return;
      }
      setIsVersionOpen(false);
      setIsSocialOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    if (!isVersionOpen && !isSocialOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.version-dropdown')) {
        setIsVersionOpen(false);
      }
      if (!target.closest('.social-dropdown')) {
        setIsSocialOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isVersionOpen, isSocialOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#05050A]/80 backdrop-blur-xl border-b border-white/10 h-14">
        <div className="w-full h-full px-4 lg:px-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-6 min-w-0">
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 -ml-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 shrink-0"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-docs-nav"
              aria-label="Open documentation navigation"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link
              href={docHref('/')}
              className="flex items-center gap-2 sm:gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 rounded-md"
            >
              <Image
                src="/Hyperkit Header White (png).png"
                alt="Hyperkit"
                width={140}
                height={28}
                priority
              />
              {archivePrefix ? (
                <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-wide text-amber-400 border border-amber-500/30 rounded px-1.5 py-0.5 shrink-0">
                  v0.1.0
                </span>
              ) : null}
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-lg mx-4 xl:mx-8 justify-center">
            <button
              type="button"
              onClick={openSearch}
              className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs text-slate-400 hover:border-indigo-500/30 hover:bg-white/5 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 group-hover:text-slate-300" />
                <span>Search documentation...</span>
              </div>
              <span className="bg-white/5 px-1.5 py-0.5 rounded text-[10px] border border-white/5">
                Ctrl K
              </span>
            </button>
          </div>

          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={openSearch}
              className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              aria-label="Open search"
            >
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden sm:flex items-center relative version-dropdown">
              <button
                type="button"
                onClick={() => {
                  setIsSocialOpen(false);
                  setIsVersionOpen((v) => !v);
                }}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 px-2.5 py-1.5 rounded border border-white/5 hover:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                aria-expanded={isVersionOpen}
                aria-haspopup="listbox"
              >
                <span>{archivePrefix ? DOCS_ARCHIVED[0].label : currentVersion}</span>
                {archivePrefix ? (
                  <span className="text-[10px] font-normal text-amber-400/90">archived</span>
                ) : null}
                <ChevronDown
                  className={`w-3 h-3 text-slate-500 transition-transform ${isVersionOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isVersionOpen && (
                <div
                  className="absolute top-full mt-1 right-0 bg-[#0B0C15] border border-white/10 rounded-md shadow-lg min-w-[11rem] py-1 z-50"
                  role="listbox"
                >
                  <Link
                    href="/"
                    onClick={() => setIsVersionOpen(false)}
                    className={`block w-full text-left px-3 py-1.5 text-xs transition-colors hover:bg-white/5 ${
                      !archivePrefix ? 'text-white bg-white/5' : 'text-slate-300'
                    }`}
                  >
                    {currentVersion} (latest)
                  </Link>
                  <Link
                    href={DOCS_ARCHIVED[0].pathPrefix}
                    onClick={() => setIsVersionOpen(false)}
                    className={`block w-full text-left px-3 py-1.5 text-xs transition-colors hover:bg-white/5 ${
                      archivePrefix ? 'text-amber-200 bg-amber-500/10' : 'text-slate-300'
                    }`}
                  >
                    {DOCS_ARCHIVED[0].label} (archived)
                  </Link>
                </div>
              )}
            </div>

            <div className="hidden sm:block h-4 w-px bg-white/10 mx-0.5" />

            <a
              href="https://deepwiki.com/Hyperkit-Labs/hyperagent"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center shrink-0 rounded-md opacity-90 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              aria-label="Ask DeepWiki about HyperAgent"
            >
              <img
                src="https://deepwiki.com/badge.svg"
                alt=""
                width={120}
                height={20}
                className="h-5 w-auto block"
                loading="lazy"
              />
            </a>

            <a
              href="https://github.com/Hyperkit-Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              aria-label="Hyperkit on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <div className="relative flex items-center social-dropdown">
              <button
                type="button"
                onClick={() => {
                  setIsVersionOpen(false);
                  setIsSocialOpen((v) => !v);
                }}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 px-2.5 py-1.5 rounded border border-white/5 hover:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                aria-expanded={isSocialOpen}
                aria-haspopup="menu"
                aria-label="Community and social links"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="hidden sm:inline">Community</span>
                <ChevronDown
                  className={`w-3 h-3 text-slate-500 transition-transform shrink-0 ${isSocialOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isSocialOpen ? (
                <div
                  className="absolute top-full mt-1 right-0 bg-[#0B0C15] border border-white/10 rounded-md shadow-lg min-w-[13.5rem] py-1 z-50"
                  role="menu"
                  aria-label="Social links"
                >
                  {DOCS_SOCIAL_LINKS.map((item) => {
                    const Icon = socialIconMap[item.icon];
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        onClick={() => setIsSocialOpen(false)}
                        className="flex items-center gap-2.5 w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500/60"
                      >
                        <Icon className="w-3.5 h-3.5 shrink-0 text-slate-400" aria-hidden />
                        <span className="min-w-0">{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <div id="mobile-docs-nav" aria-hidden={!mobileNavOpen}>
        <MobileNavPanel open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      </div>

      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
