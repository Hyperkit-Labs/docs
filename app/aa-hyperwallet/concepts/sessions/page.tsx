'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SessionsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'persistence', label: 'Persistence Types' },
    { id: 'duration', label: 'Duration Settings' },
    { id: 'spending-limits', label: 'Spending Limits' }
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
            <Link href="/aa-hyperwallet/concepts" className="hover:text-slate-300 transition-colors">Core Concepts</Link>
            <span>/</span>
            <span className="text-violet-400">Sessions</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Sessions</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Configure session management, persistence, duration, and spending limits for smart wallet sessions.
          </p>

          <h2 id="persistence" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Persistence Types
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Device</h3>
              <p className="text-xs text-slate-400">Session persists on the device</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Session</h3>
              <p className="text-xs text-slate-400">Session persists for browser session</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">LocalStorage</h3>
              <p className="text-xs text-slate-400">Session persists in browser localStorage</p>
            </div>
          </div>

          <h2 id="duration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Duration Settings
          </h2>
          <p className="leading-7 mb-4">
            Configure how long sessions remain active: 1 hour, 24 hours, 7 days, 30 days, or permanent.
          </p>

          <h2 id="spending-limits" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Spending Limits
          </h2>
          <p className="leading-7 mb-4">
            Set spending limits for sessions to control maximum transaction amounts. Limits can be set in USD or native tokens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/aa-hyperwallet/concepts/authentication" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Authentication
              </div>
            </Link>
            <Link href="/aa-hyperwallet/guides" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center justify-end gap-2">
                Guides
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

