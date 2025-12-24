'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DeploymentPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'supported-networks', label: 'Supported Networks' },
    { id: 'deployment-types', label: 'Deployment Types' }
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
            <Link href="/hyperagent/concepts" className="hover:text-slate-300 transition-colors">Core Concepts</Link>
            <span>/</span>
            <span className="text-amber-400">Deployment</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Deployment</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Multi-chain deployment strategies for deploying smart contracts across different blockchain networks.
          </p>

          <h2 id="supported-networks" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Supported Networks
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Hyperion</h3>
              <p className="text-xs text-slate-400">Metis Layer 2 with parallel execution</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Mantle</h3>
              <p className="text-xs text-slate-400">Ethereum Layer 2 with modular architecture</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Avalanche</h3>
              <p className="text-xs text-slate-400">High-performance blockchain with x402 support</p>
            </div>
          </div>

          <h2 id="deployment-types" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Deployment Types
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Standard Deployment</h3>
              <p className="text-sm text-slate-400">Traditional deployment with gas fees paid by deployer</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Batch Deployment</h3>
              <p className="text-sm text-slate-400">Deploy multiple contracts in parallel using Hyperion PEF</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">Gasless Deployment</h3>
              <p className="text-sm text-slate-400">Deploy without paying gas using meta-transactions</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-lg font-medium text-white mb-2">x402 Deployment</h3>
              <p className="text-sm text-slate-400">Pay-per-use deployment on Avalanche networks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts/auditing" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Security Auditing
              </div>
            </Link>
            <Link href="/hyperagent/concepts/x402-payments" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                x402 Payments
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

