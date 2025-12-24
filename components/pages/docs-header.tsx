'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, ChevronDown, Github, Sun, Moon, Menu, X
} from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { DocsSearchModal } from '@/components/pages/docs-search-modal';
import { formatVersion } from '@/lib/version';

interface DocsHeaderProps {
  onMenuToggle?: () => void;
}

export const DocsHeader: React.FC<DocsHeaderProps> = ({ onMenuToggle }) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVersionOpen, setIsVersionOpen] = useState(false);
  const currentVersion = formatVersion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.version-dropdown')) {
        setIsVersionOpen(false);
      }
    };

    if (isVersionOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isVersionOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#05050A]/80 backdrop-blur-xl border-b border-white/10 h-14">
        <div className="w-full h-full px-4 lg:px-6 flex items-center justify-between">
          {/* Left: Logo & Section Nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Hyperkit Header White (png).png"
                alt="Hyperkit"
                width={140}
                height={28}
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-1 ml-4 border-l border-white/10 pl-4 h-6">
              <Link 
                href="/" 
                className={pathname === '/' ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
              >
                Home
              </Link>
              <Link 
                href="/sdk" 
                className={pathname?.startsWith('/sdk') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
              >
                SDK
              </Link>
              <Link 
                href="/hyperagent" 
                className={pathname?.startsWith('/hyperagent') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
              >
                Agents
              </Link>
              <Link 
                href="/hyperagent/api-reference" 
                className={pathname?.startsWith('/hyperagent/api-reference') || pathname?.startsWith('/sdk/api-reference') || pathname?.startsWith('/erc1066-x402/api-reference') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
              >
                API
              </Link>
            </nav>
          </div>

          {/* Middle: Search */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs text-slate-400 hover:border-indigo-500/30 hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 group-hover:text-slate-300" />
                <span>Search documentation...</span>
              </div>
              <span className="bg-white/5 px-1.5 py-0.5 rounded text-[10px] border border-white/5">⌘K</span>
            </button>
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center relative version-dropdown">
              <button 
                onClick={() => setIsVersionOpen(!isVersionOpen)}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 px-2.5 py-1.5 rounded border border-white/5 hover:border-white/10 transition-colors"
              >
                <span>{currentVersion}</span>
                <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${isVersionOpen ? 'rotate-180' : ''}`} />
              </button>
              {isVersionOpen && (
                <div className="absolute top-full mt-1 right-0 bg-[#0B0C15] border border-white/10 rounded-md shadow-lg min-w-[120px] py-1">
                  <button className="w-full text-left px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 transition-colors">
                    {currentVersion} (current)
                  </button>
                </div>
              )}
            </div>

            <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
            
            <a 
              href="https://github.com/Hyperkit-Labs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
            <button 
              onClick={toggleTheme}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button onClick={onMenuToggle || (() => {})} className="lg:hidden text-slate-400 hover:text-white ml-2">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
      <DocsSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};