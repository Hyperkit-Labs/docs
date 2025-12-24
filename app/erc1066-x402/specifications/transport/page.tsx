'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Network } from 'lucide-react';
import Link from 'next/link';

export default function TransportPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'http-status-codes', label: 'HTTP Status Codes' },
    { id: 'headers', label: 'Headers' },
    { id: 'response-body', label: 'Response Body' }
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
            <span className="text-indigo-400">Transport</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-4xl font-medium tracking-tight text-white">Transport Specification</h1>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">v2.0</span>
          </div>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            HTTP-based transport layer for ERC-1066-x402, aligned with the Coinbase x402 v2 standard.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The transport layer handles communication between an AI agent (the requester) and a gateway (the responder). When an intent requires payment or validation fails, the gateway returns a machine-readable response.
          </p>

          <h2 id="http-status-codes" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            HTTP Status Codes
          </h2>
          <p className="leading-7 mb-4">
            The gateway maps ERC-1066 status codes to standard HTTP status codes:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-left text-slate-400 font-medium">HTTP Code</th>
                  <th className="px-4 py-3 text-left text-slate-400 font-medium">Meaning</th>
                  <th className="px-4 py-3 text-left text-slate-400 font-medium">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-3"><code className="text-green-400">200</code></td>
                  <td className="px-4 py-3 text-white">OK</td>
                  <td className="px-4 py-3 text-slate-400">Intent validated or executed successfully</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-yellow-400">202</code></td>
                  <td className="px-4 py-3 text-white">Accepted</td>
                  <td className="px-4 py-3 text-slate-400">Intent is pending (e.g., TOO_EARLY)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-indigo-400">402</code></td>
                  <td className="px-4 py-3 text-white">Payment Required</td>
                  <td className="px-4 py-3 text-slate-400">Intent requires payment to proceed (INSUFFICIENT_FUNDS)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-yellow-400">403</code></td>
                  <td className="px-4 py-3 text-white">Forbidden</td>
                  <td className="px-4 py-3 text-slate-400">Intent explicitly disallowed by policy (DISALLOWED)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-red-400">410</code></td>
                  <td className="px-4 py-3 text-white">Gone</td>
                  <td className="px-4 py-3 text-slate-400">Intent has expired (TOO_LATE)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-cyan-400">421</code></td>
                  <td className="px-4 py-3 text-white">Misdirected</td>
                  <td className="px-4 py-3 text-slate-400">Unsupported chain or network (UNSUPPORTED_CHAIN)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="headers" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Headers
          </h2>
          <p className="leading-7 mb-4">
            All responses must include these custom headers for on-chain context:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <div className="space-y-4">
              <div>
                <code className="text-sm font-mono text-indigo-400">X-ERC1066-Status</code>
                <p className="text-xs text-slate-400 mt-1">The raw hex status code (e.g., 0x11)</p>
              </div>
              <div>
                <code className="text-sm font-mono text-indigo-400">X-Intent-Hash</code>
                <p className="text-xs text-slate-400 mt-1">The Keccak256 hash of the intent payload</p>
              </div>
              <div>
                <code className="text-sm font-mono text-indigo-400">X-Chain-Type</code>
                <p className="text-xs text-slate-400 mt-1">The runtime environment (evm, solana, sui)</p>
              </div>
              <div>
                <code className="text-sm font-mono text-indigo-400">X-Chain-Id</code>
                <p className="text-xs text-slate-400 mt-1">The unique identifier for the network</p>
              </div>
            </div>
          </div>

          <h2 id="response-body" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            JSON Response Body (402 Payment Required)
          </h2>
          <p className="leading-7 mb-4">
            When returning HTTP 402, the response body follows the x402 v2 "envelope" format:
          </p>

          <CodeBlock
            language="json"
            filename="402 Response"
            code={`<span class="text-purple-400">{</span>
  <span class="text-green-400">"accepts"</span>: [
    <span class="text-purple-400">{</span>
      <span class="text-green-400">"paymentRequirements"</span>: <span class="text-purple-400">{</span>
        <span class="text-green-400">"scheme"</span>: <span class="text-green-400">"exact"</span>,
        <span class="text-green-400">"version"</span>: <span class="text-blue-400">2</span>,
        <span class="text-green-400">"amount"</span>: <span class="text-green-400">"string"</span>,
        <span class="text-green-400">"asset"</span>: <span class="text-green-400">"string"</span>,
        <span class="text-green-400">"network"</span>: <span class="text-green-400">"string"</span>,
        <span class="text-green-400">"extra"</span>: <span class="text-purple-400">{</span>
          <span class="text-green-400">"policyId"</span>: <span class="text-green-400">"string"</span>
        <span class="text-purple-400">}</span>
      <span class="text-purple-400">}</span>
    <span class="text-purple-400">}</span>
  ]
<span class="text-purple-400">}</span>`}
          />

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Field Definitions
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-white">scheme:</strong> The payment method required. ERC-1066-x402 defaults to <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">exact</code></li>
              <li><strong className="text-white">amount:</strong> The precise value required in the smallest unit (e.g., wei)</li>
              <li><strong className="text-white">asset:</strong> The asset identifier (e.g., <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">native</code>, <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x...</code>)</li>
              <li><strong className="text-white">network:</strong> Formatted as <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">chainType:chainId</code> (e.g., <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">evm:59902</code>)</li>
              <li><strong className="text-white">extra:</strong> Optional metadata, such as the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">policyId</code> associated with the request</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/specifications" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Specifications
              </div>
            </Link>
            <Link href="/erc1066-x402/specifications/semantics" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Semantics
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

