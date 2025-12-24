'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, FileText, Network, CreditCard, Layers } from 'lucide-react';
import Link from 'next/link';

export default function SpecificationsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'transport', label: 'Transport' },
    { id: 'semantics', label: 'Semantics' },
    { id: 'schemes', label: 'Schemes' },
    { id: 'protocols', label: 'Protocols' }
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <span className="text-indigo-400">Specifications</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Specifications</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Technical specifications for ERC-1066-x402, following the x402 v2 standard for transport and ERC-1066 for semantics.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-8">
            ERC-1066-x402 follows versioned specifications for transport, semantics, schemes, and protocols. All specifications are aligned with the latest x402 v2 standard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/erc1066-x402/specifications/transport"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Network className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Transport</h3>
              <p className="text-sm text-slate-400 mb-2">HTTP 402 transport layer specification</p>
              <span className="text-xs text-slate-500">v2.0</span>
            </Link>

            <Link
              href="/erc1066-x402/specifications/semantics"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <FileText className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Semantics</h3>
              <p className="text-sm text-slate-400 mb-2">ERC-1066 status code definitions</p>
              <span className="text-xs text-slate-500">v2.0</span>
            </Link>

            <Link
              href="/erc1066-x402/specifications/schemes"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <CreditCard className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Schemes</h3>
              <p className="text-sm text-slate-400 mb-2">Payment fulfillment schemes</p>
              <span className="text-xs text-slate-500">v2.0</span>
            </Link>

            <Link
              href="/erc1066-x402/specifications/protocols"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Layers className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Protocols</h3>
              <p className="text-sm text-slate-400 mb-2">Multi-chain protocol implementations</p>
              <span className="text-xs text-slate-500">v2.0</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/api-reference" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                API Reference
              </div>
            </Link>
            <Link href="/erc1066-x402/examples" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Examples
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

