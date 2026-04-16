'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Rocket, Bot, ChevronsUpDown, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { DOCS_NAV_SECTIONS } from '@/lib/docs-nav';

const iconMap = {
  rocket: Rocket,
  bot: Bot,
  file: FileText,
} as const;

export const DocsSidebar: React.FC = () => {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () =>
      new Set(
        DOCS_NAV_SECTIONS.filter(
          (s) =>
            s.children &&
            (pathname === s.href || pathname?.startsWith(s.href + '/'))
        ).map((s) => s.title)
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
      for (const s of DOCS_NAV_SECTIONS) {
        if (
          s.children &&
          (pathname === s.href || pathname?.startsWith(s.href + '/'))
        ) {
          next.add(s.title);
        }
      }
      return next;
    });
  }, [pathname]);

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

        <nav className="px-4 py-6 space-y-1" aria-label="Documentation sidebar">
          {DOCS_NAV_SECTIONS.map((section, idx) => {
            const Icon = iconMap[section.icon];
            const isActive =
              pathname === section.href || pathname?.startsWith(section.href + '/');
            const isExpanded = expandedSections.has(section.title);
            const hasChildren = Boolean(section.children?.length);

            return (
              <div key={idx}>
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
                      href={section.href}
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
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={childIdx}
                          href={child.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${
                            isChildActive
                              ? 'text-indigo-400 bg-indigo-500/10 font-medium'
                              : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
                          }`}
                        >
                          {child.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default DocsSidebar;
