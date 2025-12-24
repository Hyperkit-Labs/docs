'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PenLine, Clock } from 'lucide-react';
import { getGitHubEditUrl, getRelatedLinks, formatLastUpdated, getLastUpdatedDate } from '@/lib/github-utils';

interface TOCItem {
  id: string;
  label: string;
}

interface DocsTOCProps {
  items: TOCItem[];
  footerHeight?: number;
}

export const DocsTOC: React.FC<DocsTOCProps> = ({ items, footerHeight = 0 }) => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>('');
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const githubUrl = pathname ? getGitHubEditUrl(pathname) : '#';
  const relatedLinks = pathname ? getRelatedLinks(pathname) : [];

  useEffect(() => {
    // Get last updated date from metadata or fallback
    if (pathname) {
      const updateTime = getLastUpdatedDate(pathname);
      setLastUpdated(formatLastUpdated(updateTime));
    }
  }, [pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Observe all headings with IDs
    const headings = items.map(item => document.getElementById(item.id)).filter(Boolean);
    headings.forEach((heading) => {
      if (heading) observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        if (heading) observer.unobserve(heading);
      });
    };
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      {/* Fixed container with dynamic height */}
      <div 
        className="fixed top-14 right-0 w-64 overflow-y-auto py-10 px-6"
        style={{ 
          height: `calc(100vh - 3.5rem - ${footerHeight}px)`,
          maxHeight: `calc(100vh - 3.5rem - ${footerHeight}px)`
        }}
      >
        <div className="space-y-6">
          <div>
            <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">On this page</h5>
            <ul className="space-y-3 border-l border-white/10">
              {items.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.id);
                    }}
                    className={`block pl-4 text-xs border-l -ml-[1px] transition-all ${
                      activeId === item.id
                        ? 'text-indigo-400 border-indigo-400 font-medium'
                        : 'text-slate-400 hover:text-indigo-300 border-transparent hover:border-slate-500'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-3">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              <PenLine className="w-3.5 h-3.5" />
              Edit on GitHub
            </a>
            {lastUpdated && (
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                Last updated {lastUpdated}
              </div>
            )}
          </div>

          {relatedLinks.length > 0 && (
            <div className="pt-6">
              <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Related</h5>
              <ul className="space-y-2">
                {relatedLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default DocsTOC;