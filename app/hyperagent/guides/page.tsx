'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, Code2, Shield, Rocket, CreditCard, Activity } from 'lucide-react';
import Link from 'next/link';

export default function GuidesPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'guide-scope', label: 'Guide Scope' }
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
            <span className="text-amber-400">Guides</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Guides</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            These guides explain the current HyperAgent workflow and its supporting operational paths. Read each guide through the current supported scope rather than through the broader architecture roadmap.
          </p>

          <h2 id="guide-scope" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Guide Scope
          </h2>
          <p className="leading-7 mb-8">
            The current guide set should be interpreted as implementation and operating guidance around the active workflow path, its verification surfaces, deployment-aware outputs, and payment behavior where currently supported. Pages that still describe broader chain or feature coverage should be treated carefully until updated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/hyperagent/guides/contract-generation" className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <Code2 className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Contract Generation</h3>
              <p className="text-sm text-slate-400">Prompting, template use, and generated-artifact expectations.</p>
            </Link>

            <Link href="/hyperagent/guides/security-auditing" className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <Shield className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Security Auditing</h3>
              <p className="text-sm text-slate-400">Verification logic, audit interpretation, and release discipline.</p>
            </Link>

            <Link href="/hyperagent/guides/multi-chain-deployment" className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <Rocket className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Deployment Scope</h3>
              <p className="text-sm text-slate-400">Current launch matrix, deployment boundaries, and roadmap caution.</p>
            </Link>

            <Link href="/hyperagent/guides/x402-integration" className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <CreditCard className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">x402 Integration</h3>
              <p className="text-sm text-slate-400">Current payment-contract assumptions and supported-flow behavior.</p>
            </Link>

            <Link href="/hyperagent/guides/parallel-deployment" className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <Activity className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Operational Patterns</h3>
              <p className="text-sm text-slate-400">Operational notes, coordination patterns, and future-facing deployment ideas.</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Core Concepts
              </div>
            </Link>
            <Link href="/hyperagent/guides/security-auditing" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Security Auditing
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
