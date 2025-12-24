'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, Shield, Key, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ConceptsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'core-concepts', label: 'Core Concepts' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => {}} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <Link href="/aa-hyperwallet" className="hover:text-slate-300 transition-colors">AA Hyperwallet</Link>
            <span>/</span>
            <span className="text-violet-400">Core Concepts</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Core Concepts</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Understand the fundamental concepts behind Account Abstraction and smart wallet authentication.
          </p>

          <h2 id="core-concepts" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Core Concepts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/aa-hyperwallet/concepts/account-abstraction"
              className="group block p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <Shield className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-violet-400 mb-2">Account Abstraction</h3>
              <p className="text-sm text-slate-400">What is Account Abstraction and how it works</p>
            </Link>

            <Link
              href="/aa-hyperwallet/concepts/authentication"
              className="group block p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <Key className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-violet-400 mb-2">Authentication</h3>
              <p className="text-sm text-slate-400">Authentication methods and providers</p>
            </Link>

            <Link
              href="/aa-hyperwallet/concepts/sessions"
              className="group block p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <Clock className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-violet-400 mb-2">Sessions</h3>
              <p className="text-sm text-slate-400">Session management and persistence</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/aa-hyperwallet/getting-started" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Getting Started
              </div>
            </Link>
            <Link href="/aa-hyperwallet/concepts/account-abstraction" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center justify-end gap-2">
                Account Abstraction
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

