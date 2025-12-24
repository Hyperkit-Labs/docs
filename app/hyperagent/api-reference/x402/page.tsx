'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function X402APIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'thirdweb-integration', label: 'Thirdweb Integration' },
    { id: 'endpoints', label: 'Endpoints' }
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
            <Link href="/hyperagent/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-amber-400">x402</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">x402 API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Pay-per-use payment endpoints for smart contract operations on Avalanche networks.
          </p>

          <Callout type="info" title="Thirdweb Integration">
            Hyperagent uses Thirdweb as a third-party service provider for x402 payment processing. All payment endpoints integrate with Thirdweb&apos;s infrastructure to handle transactions on Avalanche networks.
          </Callout>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The x402 API provides endpoints for managing pay-per-use payments for smart contract operations. These endpoints handle payment processing, spending controls, and analytics through Thirdweb integration.
          </p>

          <h2 id="thirdweb-integration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Thirdweb Integration
          </h2>
          <p className="leading-7 mb-4">
            All x402 endpoints use Thirdweb as the payment service provider. Thirdweb handles:
          </p>
          <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-slate-400">
            <li>Payment processing on Avalanche networks</li>
            <li>USDC token transfers</li>
            <li>Transaction verification and confirmation</li>
            <li>Wallet connection and authentication</li>
          </ul>
          <p className="leading-7 mb-6">
            To use x402 endpoints, you need to configure your Thirdweb client ID in the environment variables. See the <Link href="/hyperagent/guides/x402-integration" className="text-amber-400 hover:text-amber-300 underline">x402 Integration Guide</Link> for setup instructions.
          </p>

          <h2 id="endpoints" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Endpoints
          </h2>
          <p className="leading-7 mb-6">
            The x402 API includes endpoints for workflows, contracts, deployments, spending controls, and analytics. All endpoints require Thirdweb authentication and work with Avalanche networks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/workflows" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Workflows API
              </div>
            </Link>
            <Link href="/hyperagent/api-reference/websocket" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                WebSocket API
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

