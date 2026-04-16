'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContractsAPIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'current-surface', label: 'Current Surface' },
    { id: 'output-boundary', label: 'Output Boundary' }
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
            <span className="text-amber-400">Contracts</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Contracts API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This section describes the contract-facing workflow surface of HyperAgent. The current scope should be read as generated artifact and verification output within a workflow system, not as a blanket claim that every generated contract is launch-complete or fully audited.
          </p>

          <Callout type="warning" title="Current Scope">
            HyperAgent should be understood as producing workflow outputs and generated artifacts that are reviewable, verifiable, and deployment-aware. It should not be read here as a zero-touch contract factory with final release guarantees.
          </Callout>

          <h2 id="current-surface" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Surface
          </h2>
          <p className="leading-7 mb-6">
            The contract-facing API belongs inside the broader workflow system. Generation, audit, simulation, and deploy preparation are connected stages. That means contract outputs should be interpreted together with workflow state, verification outputs, and release gates rather than as isolated code artifacts.
          </p>

          <h2 id="output-boundary" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Output Boundary
          </h2>
          <p className="leading-7 mb-6">
            A generated contract output is part of a deployment-aware starter result. It is expected to be reviewed, extended, and hardened by a team before final launch. The current docs should therefore emphasize generated artifacts, verification context, and handoff quality instead of implying fully finished or final audited contract output.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                API Reference
              </div>
            </Link>
            <Link href="/hyperagent/api-reference/deployments" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Deployments API
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
