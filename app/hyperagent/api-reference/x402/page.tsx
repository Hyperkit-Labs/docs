'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function X402APIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'current-contract', label: 'Current Contract' },
    { id: 'api-boundary', label: 'API Boundary' }
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
            <Link href="/hyperagent/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-amber-400">x402</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">x402 API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This section explains the payment-facing API boundary for HyperAgent. Read it as the current payment contract for supported flows, not as a promise of uniform payment behavior across every environment or chain.
          </p>

          <Callout type="info" title="Current Product Truth">
            The current documentation baseline treats x402 as the intended payment wall for supported flows. Older credits-era wording should be treated as legacy or transitional unless a page has already been updated to the `v0.2.0` truth set.
          </Callout>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The x402 API belongs to the workflow system, not to a separate standalone payment product. It should be understood as the payment contract that gates supported workflow operations where payment is required. This is why the current docs now frame x402 as part of the HyperAgent operating path rather than as a broad pay-per-use layer across every chain named elsewhere in older materials.
          </p>

          <h2 id="current-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Contract
          </h2>
          <p className="leading-7 mb-6">
            The active product truth set is narrower than older API descriptions. x402 is the intended payment contract for supported flows. Legacy language about credits or alternate billing paths should be read as implementation residue unless the current page explicitly restates them as supported behavior.
          </p>

          <h2 id="api-boundary" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            API Boundary
          </h2>
          <p className="leading-7 mb-6">
            The payment API should be interpreted through three boundaries. First, it is part of the current workflow system. Second, it follows the narrower implementation scope documented in the current product path. Third, the surrounding billing, reconciliation, and policy controls are still part of an evolving operational layer rather than a fully generalized universal payment stack.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/workflows" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Workflows API
              </div>
            </Link>
            <Link href="/hyperagent/api-reference/websocket" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                WebSocket API
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
