'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rocket, Bot, ChevronsUpDown, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { DOCS_NAV_GROUPS, getAllDocsNavSections } from '@/lib/docs-nav';
import { DOC_MODE_META } from '@/lib/doc-modes';
import { useDocsArchive } from '@/components/providers/docs-archive-provider';

const iconMap = {
  rocket: Rocket,
  bot: Bot,
  file: FileText,
} as const;

export const DocsSidebar: React.FC = () => {
  const { docsPathname, docHref } = useDocsArchive();

  const [expandedSections, setExpandedSections] = useState<Set<string>>(() =>
    new Set(
      getAllDocsNavSections()
        .filter(
          (s) =>
            s.children &&
            (docsPathname === s.href || docsPathname.startsWith(s.href + '/'))
        )
        .map((s) => s.title)
    )
  );

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionTitle)) next.delete(sectionTitle);
      else next.add(sectionTitle);
      return next;
    });
  };

   useEffect(() => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const s of getAllDocsNavSections()) {
        if (
          s.children &&
          (docsPathname === s.href || docsPathname.startsWith(s.href + '/'))
        ) {
          if (!next.has(s.title)) {
            next.add(s.title);
            changed = true;
          }
        }
      }
      return changed ? next : prev;
    });
  }, [docsPathname]);

  return (
    <aside className="hidden lg:block w-72 shrink-0 bg-[#05050A] min-h-screen">
      <div className="fixed top-14 left-0 w-72 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-white/10">
        <div className="sticky top-0 z-10 bg-[#05050A]/95 backdrop-blur-sm p-4 border-b border-white/10">
          <div className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-white/5">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">
                H
              </div>
              <span className="text-sm font-medium text-slate-200 truncate">Hyperkit Docs</span>
            </div>
            <ChevronsUpDown className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden />
          </div>
        </div>

        <nav className="px-4 py-4 space-y-1" aria-label="Documentation sidebar">
          {DOCS_NAV_GROUPS.map((group) => (
            <div key={group.label} className="space-y-1">
              <p className="px-3 pt-4 pb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 first:pt-2">
                {group.label}
              </p>
              {group.sections.map((section, idx) => {
                const Icon = iconMap[section.icon];
                const isActive =
                  docsPathname === section.href || docsPathname.startsWith(section.href + '/');
                const isExpanded = expandedSections.has(section.title);
                const hasChildren = Boolean(section.children?.length);

                return (
                  <div key={`${group.label}-${section.title}-${idx}`}>
                    <div className="flex items-center">
                      {hasChildren ? (
                        <button
                          type="button"
                          onClick={() => toggleSection(section.title)}
                          aria-expanded={isExpanded}
                          className={`flex-1 flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${
                            isActive
                              ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                              : 'text-slate-300 hover:text-indigo-300 hover:bg-white/5'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden />
                          <span className="flex-1 text-left">{section.title}</span>
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden />
                          )}
                        </button>
                      ) : (
                        <Link
                          href={docHref(section.href)}
                          className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${
                            isActive
                              ? 'text-indigo-400 bg-indigo-500/10 font-medium border-l-2 border-indigo-500'
                              : 'text-slate-300 hover:text-indigo-300 hover:bg-white/5'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden />
                          <span>{section.title}</span>
                        </Link>
                      )}
                    </div>
                    {hasChildren && isExpanded && section.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/5 pl-4">
                        {section.children.map((child, childIdx) => {
                          const isChildActive =
                            docsPathname === child.href ||
                            (child.href !== '/' &&
                              docsPathname.startsWith(child.href + '/'));
                          const modeMeta = DOC_MODE_META[child.mode];
                          return (
                            <Link
                              key={childIdx}
                              href={docHref(child.href)}
                              title={`${modeMeta.label}: ${modeMeta.blurb}`}
                              className={`flex items-center justify-between gap-2 px-3 py-2 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${
                                isChildActive
                                  ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
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
    </aside>
  );
};

export default DocsSidebar;
