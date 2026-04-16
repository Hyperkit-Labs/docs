'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DeploymentsAPIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'current-contract', label: 'Current Contract' },
    { id: 'deployment-readiness', label: 'Deployment Readiness' }
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
            <span className="text-amber-400">Deployments</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Deployments API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Deployment behavior in HyperAgent should be understood as part of a deployment-aware workflow path. This section should describe deployment records, deploy preparation, and release state, not only raw chain publication.
          </p>

          <h2 id="current-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Contract
          </h2>
          <p className="leading-7 mb-6">
            The current product path treats deployment as a gated stage in a broader workflow. That means deployment outputs should be read together with generated artifacts, verification state, simulation output, and deploy records. The docs should avoid implying universal deploy parity across all chain adapters unless a page has been specifically updated to the current supported matrix.
          </p>

          <h2 id="deployment-readiness" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Deployment Readiness
          </h2>
          <p className="leading-7 mb-6">
            Deployment-ready does not mean launch-complete. It means the workflow has produced enough structure, verification context, and deployment-aware output for a real team to review, extend, and move toward final launch. The deployment API should therefore be understood as one part of a release discipline, not as a promise of fully finished production launch in one step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/contracts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Contracts API
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
