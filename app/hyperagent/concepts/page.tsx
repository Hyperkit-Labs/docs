'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft, Bot, Shield, Rocket, CreditCard, Workflow } from 'lucide-react';
import Link from 'next/link';

export default function ConceptsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'core-concepts', label: 'Core Concepts' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => {}} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <Link href="/hyperagent" className="hover:text-slate-300 transition-colors">Hyperagent</Link>
            <span>/</span>
            <span className="text-amber-400">Core Concepts</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Core Concepts</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Understand the fundamental concepts behind Hyperagent's AI-powered smart contract development platform.
          </p>

          <h2 id="core-concepts" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Core Concepts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/hyperagent/concepts/ai-generation"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Bot className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">AI Generation</h3>
              <p className="text-sm text-slate-400">How natural language becomes Solidity code</p>
            </Link>

            <Link
              href="/hyperagent/concepts/auditing"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Shield className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Security Auditing</h3>
              <p className="text-sm text-slate-400">Automated security analysis with multiple tools</p>
            </Link>

            <Link
              href="/hyperagent/concepts/deployment"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Rocket className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Deployment</h3>
              <p className="text-sm text-slate-400">Multi-chain deployment strategies</p>
            </Link>

            <Link
              href="/hyperagent/concepts/x402-payments"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <CreditCard className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">x402 Payments</h3>
              <p className="text-sm text-slate-400">Pay-per-use payment system</p>
            </Link>

            <Link
              href="/hyperagent/concepts/workflows"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Workflow className="w-6 h-6 text-yellow-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Workflows</h3>
              <p className="text-sm text-slate-400">End-to-end contract lifecycle management</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/getting-started/first-contract" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                First Contract
              </div>
            </Link>
            <Link href="/hyperagent/concepts/ai-generation" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                AI Generation
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

