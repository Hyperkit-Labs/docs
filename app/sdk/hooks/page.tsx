'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft, Code, Bell } from 'lucide-react';
import Link from 'next/link';

export default function SDKHooksPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'available-hooks', label: 'Available Hooks' }
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
            <span className="text-purple-400">Hooks</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Hooks</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            React hooks for accessing wallet state, managing alerts, and interacting with blockchain functionality.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Hyperkit SDK provides custom React hooks that give you access to wallet state and alert management. These hooks work seamlessly with the HyperkitProvider.
          </p>

          <h2 id="available-hooks" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Available Hooks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/sdk/hooks/use-wallet"
              className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <Code className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-purple-400 mb-2">useWallet</h3>
              <p className="text-sm text-slate-400 mb-3">Access wallet state, account information, and connection methods</p>
              <div className="flex items-center gap-2 text-xs text-purple-400">
                View docs <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/sdk/hooks/use-alert"
              className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <Bell className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-purple-400 mb-2">useAlert</h3>
              <p className="text-sm text-slate-400 mb-3">Manage alert notifications and display messages</p>
              <div className="flex items-center gap-2 text-xs text-purple-400">
                View docs <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/components/container" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Container
              </div>
            </Link>
            <Link href="/sdk/hooks/use-wallet" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                useWallet
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

