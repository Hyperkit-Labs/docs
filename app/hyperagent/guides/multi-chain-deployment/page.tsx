'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MultiChainDeploymentPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'current-scope', label: 'Current Scope' },
    { id: 'future-direction', label: 'Future Direction' }
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
            <span className="text-amber-400">Deployment Scope</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Deployment Scope</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            This page explains how to read deployment support in the current docs. The repository architecture is broader than the currently release-blocking path, so deployment claims must be interpreted through current supported scope rather than through roadmap ambition alone.
          </p>

          <h2 id="current-scope" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Scope
          </h2>
          <p className="leading-7 mb-6">
            The current product and repository materials indicate that Phase 1 narrows to one primary end-to-end path before broader chain expansion. That means deployment support should be read as a constrained current lane plus a modular multi-chain roadmap, not as universal parity across every listed chain.
          </p>

          <Callout type="info" title="Reading the Current Docs Safely">
            If a page still implies broad multi-chain deployment support as a present-tense capability, treat that as a documentation lag unless the page has been updated to the current truth set.
          </Callout>

          <h2 id="future-direction" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Future Direction
          </h2>
          <p className="leading-7 mb-6">
            Broader chain adapters remain part of the architecture direction and longer-term platform design. They should be added to the public truth set only after the narrower MVP lane is stable, observable, and proven against the release criteria used in the control plane and hardening roadmap.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/guides/security-auditing" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Security Auditing
              </div>
            </Link>
            <Link href="/hyperagent/guides/x402-integration" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                x402 Integration
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
