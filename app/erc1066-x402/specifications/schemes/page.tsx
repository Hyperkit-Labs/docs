'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function SchemesPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'exact-scheme', label: 'The exact Scheme' },
    { id: 'onchain-scheme', label: 'The onchain Scheme' },
    { id: 'scheme-selection', label: 'Scheme Selection Logic' }
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <Link href="/erc1066-x402/specifications" className="hover:text-slate-300 transition-colors">Specifications</Link>
            <span>/</span>
            <span className="text-indigo-400">Schemes</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-4xl font-medium tracking-tight text-white">Payment Schemes Specification</h1>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">v2.0</span>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Payment fulfillment schemes supported by the ERC-1066-x402 gateway.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Payment schemes define how agents fulfill payment requirements when receiving HTTP 402 responses. ERC-1066-x402 supports multiple schemes with different levels of friction.
          </p>

          <h2 id="exact-scheme" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            The exact Scheme
          </h2>
          <p className="leading-7 mb-4">
            The <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">exact</code> scheme is the primary payment method for ERC-1066-x402. It requires the payer to fulfill a specific amount to a target address or contract.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Requirements
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-6">
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-white">Precision:</strong> The amount must be the exact value requested in the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">amount</code> field</li>
              <li><strong className="text-white">Atomic Validation:</strong> The gateway should verify the payment on-chain before marking the intent as "Allowed"</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Execution Flow
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <span><strong className="text-white">Validation:</strong> Agent calls <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">/intents/validate</code></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <span><strong className="text-white">Challenge:</strong> Gateway returns <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">402</code> with the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">exact</code> scheme requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <span><strong className="text-white">Payment:</strong> Agent or user executes the payment on the specified network</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">4</span>
                <span><strong className="text-white">Finalization:</strong> Agent calls <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">/intents/execute</code></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">5</span>
                <span><strong className="text-white">Success:</strong> Gateway verifies the balance/payment and executes the original intent</span>
              </li>
            </ol>
          </div>

          <h2 id="onchain-scheme" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            The onchain Scheme (EVM Extensions)
          </h2>
          <p className="leading-7 mb-4">
            For EVM-compatible chains, the gateway may also support the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">onchain</code> scheme, which leverages EIP-712 signatures or ERC-4337 user operations.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            EIP-712 Signing
          </h3>
          <p className="leading-7 mb-4">
            If the network supports it, the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">extra</code> field will include a <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">domain</code> and <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">types</code> object for the agent to sign a permit or intent:
          </p>

          <CodeBlock
            language="json"
            filename="onchain scheme"
            code={`<span class="text-purple-400">{</span>
  <span class="text-green-400">"scheme"</span>: <span class="text-green-400">"onchain"</span>,
  <span class="text-green-400">"extra"</span>: <span class="text-purple-400">{</span>
    <span class="text-green-400">"signatureType"</span>: <span class="text-green-400">"eip712"</span>,
    <span class="text-green-400">"domain"</span>: <span class="text-purple-400">{</span> <span class="text-slate-500">...</span> <span class="text-purple-400">}</span>,
    <span class="text-green-400">"message"</span>: <span class="text-purple-400">{</span> <span class="text-slate-500">...</span> <span class="text-purple-400">}</span>
  <span class="text-purple-400">}</span>
<span class="text-purple-400">}</span>`}
          />

          <h2 id="scheme-selection" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Scheme Selection Logic
          </h2>
          <p className="leading-7 mb-4">
            If multiple schemes are provided in the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">accepts</code> array, the agent should prioritize them in the following order:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ol className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <div>
                  <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">onchain</code> (lowest friction)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <div>
                  <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">exact</code> (standard)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <div>
                  <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">direct</code> (legacy)
                </div>
              </li>
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/specifications/semantics" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Semantics
              </div>
            </Link>
            <Link href="/erc1066-x402/specifications/protocols" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Protocols
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

