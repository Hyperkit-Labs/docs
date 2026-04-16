'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function X402IntegrationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'current-contract', label: 'Current Contract' },
    { id: 'implementation-gap', label: 'Implementation Gap' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <Link href="/hyperagent" className="hover:text-slate-300 transition-colors">HyperAgent</Link>
            <span>/</span>
            <Link href="/hyperagent/guides" className="hover:text-slate-300 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-amber-400">x402 Integration</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">x402 Integration</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This guide explains the intended payment contract for supported HyperAgent flows. It replaces earlier wording that framed x402 as an Avalanche and Thirdweb-only surface.
          </p>

          <Callout type="info" title="Current Contract">
            In the current product truth set, x402 is the intended payment wall for supported flows. Credits-era wording should be treated as legacy or transitional unless a page explicitly states otherwise.
          </Callout>

          <h2 id="current-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Contract
          </h2>
          <p className="leading-7 mb-6">
            The current documentation should describe x402 as the intended payment contract in the active HyperAgent workflow path. It should not describe x402 as one optional payment mode among many equally supported billing contracts. The active truth set is narrower: x402 is the target payment wall, and older credits-first language exists only as legacy implementation residue.
          </p>

          <h2 id="implementation-gap" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Implementation Gap
          </h2>
          <p className="leading-7 mb-6">
            The remaining gap is documentation and implementation alignment. Older pages still mention earlier payment-provider assumptions and older network-specific examples. Those references should be read as historical or transitional unless a page has already been brought forward to the current product truth set.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/guides/multi-chain-deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Deployment Scope
              </div>
            </Link>
            <Link href="/hyperagent/api-reference/x402" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                x402 API
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
