'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, FileCode, Rocket, Workflow, CreditCard, Radio } from 'lucide-react';
import Link from 'next/link';

export default function APIReferencePage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'api-scope', label: 'API Scope' }
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
            <span className="text-amber-400">API Reference</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">API Reference</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This section documents the product-facing API surfaces around workflows, deployment state, and payment-related behavior. Current API scope should be read through the implemented MVP path, not through the full long-term architecture alone.
          </p>

          <h2 id="api-scope" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            API Scope
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/hyperagent/api-reference/contracts"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <FileCode className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Contracts</h3>
              <p className="text-sm text-slate-400">Generated artifacts, verification-related contract outputs, and contract-facing workflow state.</p>
            </Link>

            <Link
              href="/hyperagent/api-reference/deployments"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Rocket className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Deployments</h3>
              <p className="text-sm text-slate-400">Deployment records, deploy preparation, and deployment-aware workflow state.</p>
            </Link>

            <Link
              href="/hyperagent/api-reference/workflows"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Workflow className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Workflows</h3>
              <p className="text-sm text-slate-400">Run creation, run state, stage transitions, and workflow outputs.</p>
            </Link>

            <Link
              href="/hyperagent/api-reference/x402"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <CreditCard className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">x402</h3>
              <p className="text-sm text-slate-400">Payment-wall behavior for supported flows. Treat this as the intended v0.2.0 payment contract, not as one optional billing mode among many.</p>
            </Link>

            <Link
              href="/hyperagent/api-reference/websocket"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Radio className="w-6 h-6 text-yellow-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Realtime</h3>
              <p className="text-sm text-slate-400">Workflow updates, event-driven status changes, and run visibility.</p>
            </Link>
          </div>

          <p className="leading-7 mb-8">
            The API should be interpreted as the operational surface of the current workflow system. Some endpoints and conceptual sections may still document planned breadth beyond the currently release-blocking path. When this happens, current implementation scope should take precedence over older broad wording.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Core Concepts
              </div>
            </Link>
            <Link href="/hyperagent/api-reference/workflows" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Workflows API
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
