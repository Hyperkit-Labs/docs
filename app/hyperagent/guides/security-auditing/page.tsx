'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SecurityAuditingPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'how-to-read-results', label: 'How to Read Results' }
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
            <span className="text-amber-400">Security Auditing</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Security Auditing</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            HyperAgent includes audit and verification stages in the current workflow path. This page explains how to read those outputs honestly: tooling presence is real, but final release guarantees depend on enforcement and policy, not on tool names alone.
          </p>

          <Callout type="warning" title="Important Distinction">
            Audit tooling existing in the workflow does not mean every output is fully audited in the strictest production sense. Current docs should distinguish tool execution, policy gating, and final release approval.
          </Callout>

          <h2 id="how-to-read-results" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            How to Read Results
          </h2>
          <p className="leading-7 mb-6">
            Read generated audit output as one layer of verification evidence. The stronger standard is this: static analysis, simulation, policy evaluation, and deployment gating should be treated as separate but related checks. When the current documentation says simulation-first or audit-backed, it should be interpreted through the current implementation and hardening scope rather than through broad “fully audited” language.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/guides/contract-generation" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Contract Generation
              </div>
            </Link>
            <Link href="/hyperagent/guides/multi-chain-deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Deployment Scope
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
