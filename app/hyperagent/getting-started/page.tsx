'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, CheckCircle, Terminal, Settings, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function HyperagentGettingStartedPage() {
  const tocItems = [
    { id: 'current-scope', label: 'Current Scope' },
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'local-setup', label: 'Local Setup' },
    { id: 'studio-flow', label: 'Studio Flow' },
    { id: 'what-you-get', label: 'What You Get' },
    { id: 'next-steps', label: 'Next Steps' }
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
            <span className="text-amber-400">Getting Started</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Getting Started</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Use this guide for the HyperAgent workflow as documented on this site. Product releases follow the HyperAgent repository (currently v0.1.0 closed beta). Strategy and layer definitions follow the Hyperkit whitepaper v1.2.0. The docs site version in the header is only the documentation build label.
          </p>

          <h2 id="current-scope" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Current Scope
          </h2>
          <p className="leading-7 mb-6">
            HyperAgent is currently documented as a workflow system for smart contract delivery, not as a general-purpose builder for every chain and every product category. The current Studio path is centered on supported SKALE Base flows, wallet-based identity, BYOK configuration, workflow execution, verification, and x402-backed payment handling where supported.
          </p>

          <Callout type="info" title="Scope Boundary">
            Read the current product as an implemented MVP lane plus a broader architecture roadmap. The current docs should not be read as proof that every chain, service, or deployment mode is equally mature today.
          </Callout>

          <h2 id="prerequisites" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Prerequisites
          </h2>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Node.js and package manager</h3>
                <p className="text-xs text-slate-400">Required for the Studio application and local documentation workflow.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Wallet access</h3>
                <p className="text-xs text-slate-400">Needed for the current Studio identity and deployment path on supported SKALE Base flows.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">BYOK provider keys</h3>
                <p className="text-xs text-slate-400">OpenAI, Anthropic, Google, OpenRouter, or another supported provider through the Settings flow.</p>
              </div>
            </div>
          </div>

          <h2 id="local-setup" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Local Setup
          </h2>
          <p className="leading-7 mb-4">
            For this documentation site repository, use:
          </p>
          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">run</span> dev`}
          />

          <p className="leading-7 mt-6 mb-4">
            To run HyperAgent Studio from source, clone the product monorepo (pnpm8+, Node 18+ per upstream README):
          </p>
          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">git</span> <span class="text-purple-400">clone</span> <span class="text-green-400">https://github.com/Hyperkit-Labs/hyperagent.git</span>
<span class="text-blue-400">cd</span> hyperagent
<span class="text-blue-400">pnpm</span> <span class="text-purple-400">install</span>
<span class="text-blue-400">pnpm</span> <span class="text-purple-400">--filter</span> hyperagent-studio dev`}
          />

          <p className="leading-7 mt-6 mb-4">
            For day-to-day product usage, the Studio path is user-facing rather than install-first. The high-level flow is:
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <Wallet className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Connect wallet</h3>
                <p className="text-xs text-slate-400">Use the current Studio identity and payment path on supported SKALE Base networks.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <Settings className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Configure BYOK</h3>
                <p className="text-xs text-slate-400">Add provider keys in Settings and validate them before starting a workflow.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <Terminal className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Run workflow</h3>
                <p className="text-xs text-slate-400">Start a workflow that moves through specification, generation, audit, Tenderly simulation, and deploy preparation or deploy when gates allow.</p>
              </div>
            </div>
          </div>

          <h2 id="studio-flow" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Studio Flow
          </h2>
          <p className="leading-7 mb-4">
            The current Studio flow is designed to make workflow state legible. Teams should be able to see:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 mb-8 text-slate-400">
            <li>the current workflow stage</li>
            <li>generated contract artifacts</li>
            <li>verification and simulation outputs</li>
            <li>deployment records and explorer links</li>
            <li>payment and BYOK configuration status</li>
          </ul>

          <h2 id="what-you-get" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What You Get
          </h2>
          <p className="leading-7 mb-6">
            The current workflow output should be understood as a deployment-aware, verification-backed starter result. It is not a claim of final launch completeness. The active product path is intended to produce generated artifacts, verification output, deployment preparation, and handoff-ready workflow state that a real team can review and extend.
          </p>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Overview
              </div>
            </Link>
            <Link href="/hyperagent/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Core Concepts
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
