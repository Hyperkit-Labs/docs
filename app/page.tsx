'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, FileText, Bot, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const tocItems = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'projects', label: 'Documentation areas' },
    { id: 'quick-start', label: 'Quick start' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <h1 id="welcome" className="text-4xl font-medium tracking-tight text-white mb-6 scroll-mt-20">
            Hyperkit Documentation
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Hyperkit is workflow software for multi-chain smart contract delivery. These docs track the HyperAgent system model from the Hyperkit whitepaper (v1.2.0): Studio and client surfaces, a JWT-aware gateway, orchestrated workflow stages, and verification and deployment services. Narrative and scope notes follow internal strategy documents and the live HyperAgent repository.
          </p>

          <h2 id="projects" className="text-2xl font-medium tracking-tight text-white mt-12 mb-6 scroll-mt-20">
            Documentation areas
          </h2>
          <p className="leading-7 mb-8 text-slate-400">
            Start with HyperAgent for the end-to-end product path. Use ERC-1066 and x402 for payment and status semantics where those standards apply.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link
              href="/hyperagent"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <Bot className="w-6 h-6 text-amber-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-amber-400 mb-2">HyperAgent</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI-native workflow for specification, generation, audit, simulation, and deploy preparation. Closed-beta scope is documented explicitly (including SKALE Base flows and BYOK).
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Open overview</span>
              </div>
            </Link>

            <Link
              href="/erc1066-x402"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <FileText className="w-6 h-6 text-indigo-400" />
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </div>
              <h3 className="text-xl font-medium text-white group-hover:text-indigo-400 mb-2">ERC-1066 and x402</h3>
              <p className="text-sm text-slate-400 mb-4">
                Status semantics, policy logic, and HTTP402 payment-flow documentation used in Hyperkit payment and agent-facing responses.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Rocket className="w-3 h-3" />
                <span>Open overview</span>
              </div>
            </Link>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-6 scroll-mt-20">
            Quick start
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/hyperagent/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">HyperAgent</div>
              <div className="text-xs text-slate-400">Studio flow, prerequisites, and what the closed-beta path includes</div>
            </Link>
            <Link
              href="/erc1066-x402/getting-started"
              className="p-4 rounded-lg border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-sm font-medium text-white mb-1">ERC-1066 and x402</div>
              <div className="text-xs text-slate-400">Gateway, policies, and payment semantics</div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}
