'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function ExamplesPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'available-examples', label: 'Available Examples' }
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
            <Link href="/sdk" className="hover:text-slate-300 transition-colors">Hyperkit SDK</Link>
            <span>/</span>
            <span className="text-purple-400">Examples</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Examples</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Real-world usage examples and integration patterns for Hyperkit SDK.
          </p>

          <h2 id="available-examples" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Available Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Code2 className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">Basic Setup</h3>
              <p className="text-sm text-slate-400 mb-3">Simple example of setting up HyperkitProvider and using ConnectWallet</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Code2 className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">Swap Integration</h3>
              <p className="text-sm text-slate-400 mb-3">Complete swap implementation with custom UI</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/cli" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                CLI
              </div>
            </Link>
            <Link href="/sdk/api-reference" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                API Reference
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

