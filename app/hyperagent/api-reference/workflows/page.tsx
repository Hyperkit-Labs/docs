'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WorkflowsAPIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'run-model', label: 'Run Model' },
    { id: 'current-reading', label: 'How to Read This' }
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
            <span className="text-amber-400">Workflows</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Workflows API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            The workflows API is the clearest operational surface of HyperAgent. It should be read as the control-plane interface for run creation, state tracking, and staged output visibility rather than as a thin wrapper around one contract-generation endpoint.
          </p>

          <Callout type="info" title="Current Product Reading">
            HyperAgent is best understood through the workflow path. The current MVP path is Studio to API gateway to orchestrator to compile, audit, simulation, deploy, and storage services.
          </Callout>

          <h2 id="run-model" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Run Model
          </h2>
          <p className="leading-7 mb-6">
            A workflow should be interpreted as a durable run with stage-level state, not as a one-shot request. The current product and repository model track runs, run steps, stage transitions, and workflow outputs as first-class control-plane state. This matters because release-readiness, verification, simulation, and deploy preparation all depend on durable workflow evidence rather than transient logs alone.
          </p>

          <h2 id="current-reading" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            How to Read This
          </h2>
          <p className="leading-7 mb-6">
            Older docs may make workflows sound like broad lifecycle automation across every chain and capability. The current truth set is narrower. Read the workflows API as the current control-plane surface for the MVP lane, then read broader claims only where implementation status is explicitly stated.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/deployments" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Deployments API
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
