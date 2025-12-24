'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function X402PaymentsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'payment-model', label: 'Payment Model' },
    { id: 'thirdweb-integration', label: 'Thirdweb Integration' },
    { id: 'spending-controls', label: 'Spending Controls' }
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
            <span className="text-amber-400">x402 Payments</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">x402 Payments</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Pay-per-use payment system for smart contract operations on Avalanche networks.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            x402 enables pay-per-use smart contract operations. Users pay only for what they use, making blockchain development more accessible and cost-effective.
          </p>

          <h2 id="payment-model" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Payment Model
          </h2>
          <p className="leading-7 mb-4">
            x402 payments work on Avalanche networks using USDC. Each operation (generation, audit, deployment) has a cost that is charged automatically.
          </p>

          <h2 id="thirdweb-integration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Thirdweb Integration
          </h2>
          <Callout type="info" title="Thirdweb Payment Provider">
            Hyperagent uses Thirdweb as a third-party service for processing x402 payments. Thirdweb handles wallet connections, payment transactions, and USDC transfers on Avalanche networks.
          </Callout>
          <p className="leading-7 mb-4">
            Thirdweb provides the infrastructure for:
          </p>
          <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-slate-400">
            <li>Secure wallet connections and authentication</li>
            <li>USDC token transfers on Avalanche networks</li>
            <li>Transaction processing and confirmation</li>
            <li>Payment verification and receipt generation</li>
          </ul>
          <p className="leading-7 mb-6">
            To enable x402 payments, configure your Thirdweb client ID in your environment variables. See the <Link href="/hyperagent/guides/x402-integration" className="text-amber-400 hover:text-amber-300 underline">x402 Integration Guide</Link> for detailed setup instructions.
          </p>

          <h2 id="spending-controls" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Spending Controls
          </h2>
          <p className="leading-7 mb-4">
            Configure spending limits and controls to manage costs:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Daily Limits</h3>
              <p className="text-xs text-slate-400">Set maximum spending per day</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Per-Operation Limits</h3>
              <p className="text-xs text-slate-400">Limit cost per individual operation</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Analytics</h3>
              <p className="text-xs text-slate-400">Track spending and usage patterns</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/concepts/deployment" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Deployment
              </div>
            </Link>
            <Link href="/hyperagent/concepts/workflows" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Workflows
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

