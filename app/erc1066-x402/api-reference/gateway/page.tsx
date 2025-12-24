'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Server } from 'lucide-react';
import Link from 'next/link';

export default function GatewayAPIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'validate-endpoint', label: 'POST /intents/validate' },
    { id: 'execute-endpoint', label: 'POST /intents/execute' },
    { id: 'headers', label: 'Headers' },
    { id: 'status-codes', label: 'HTTP Status Codes' }
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
            <Link href="/erc1066-x402/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-indigo-400">Gateway API</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Gateway API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            REST API endpoints for intent validation and execution. The gateway maps onchain status codes to HTTP responses.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The gateway provides HTTP endpoints that accept intent requests, validate them on-chain, and return standardized HTTP responses with status codes.
          </p>

          <Callout type="info" title="Base URL">
            All endpoints are relative to the gateway base URL (e.g., <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">https://gateway.example.com</code>)
          </Callout>

          <h2 id="validate-endpoint" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            POST /intents/validate
          </h2>
          <p className="leading-7 mb-4">
            Validates an intent without executing it. Returns HTTP status codes based on validation result.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Request
          </h3>

          <CodeBlock
            language="json"
            filename="Request Body"
            code={`<span class="text-purple-400">{</span>
  <span class="text-green-400">"sender"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"target"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"data"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"value"</span>: <span class="text-green-400">"0"</span>,
  <span class="text-green-400">"nonce"</span>: <span class="text-green-400">"0"</span>,
  <span class="text-green-400">"validAfter"</span>: <span class="text-green-400">"0"</span>,
  <span class="text-green-400">"validBefore"</span>: <span class="text-green-400">"0"</span>,
  <span class="text-green-400">"policyId"</span>: <span class="text-green-400">"0x..."</span>
<span class="text-purple-400">}</span>`}
          />

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Response
          </h3>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-400">200 OK</span>
                <span className="text-sm text-white">Intent is valid</span>
              </div>
              <p className="text-xs text-slate-400">Returns when validation succeeds</p>
            </div>

            <div className="p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/20 text-yellow-400">403 Forbidden</span>
                <span className="text-sm text-white">Intent is disallowed</span>
              </div>
              <p className="text-xs text-slate-400">Returns when policy check fails</p>
            </div>

            <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs font-medium bg-indigo-500/20 text-indigo-400">402 Payment Required</span>
                <span className="text-sm text-white">Insufficient funds</span>
              </div>
              <p className="text-xs text-slate-400">Returns when payment is required (x402 flow)</p>
            </div>
          </div>

          <h2 id="execute-endpoint" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            POST /intents/execute
          </h2>
          <p className="leading-7 mb-4">
            Executes a validated intent on-chain.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Request
          </h3>
          <p className="text-sm text-slate-400 mb-4">Same request format as validate endpoint</p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Response
          </h3>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-400">200 OK</span>
                <span className="text-sm text-white">Execution successful</span>
              </div>
              <p className="text-xs text-slate-400">Returns when execution succeeds</p>
            </div>

            <div className="p-4 rounded-lg border border-indigo-500/20 bg-indigo-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded text-xs font-medium bg-indigo-500/20 text-indigo-400">402 Payment Required</span>
                <span className="text-sm text-white">Payment required</span>
              </div>
              <p className="text-xs text-slate-400">Returns when payment is required (x402 flow)</p>
            </div>
          </div>

          <h2 id="headers" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Headers
          </h2>
          <p className="leading-7 mb-4">
            All responses include these custom headers for on-chain context:
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
              <div>
                <code className="text-sm font-mono text-indigo-400">X-Payment-Required</code>
                <p className="text-xs text-slate-400 mt-1">Set to "true" when payment is required</p>
              </div>
            </div>
          </div>

          <h2 id="status-codes" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            HTTP Status Codes
          </h2>
          <p className="leading-7 mb-4">
            Status code mapping from ERC-1066 status codes to HTTP responses:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-left text-slate-400 font-medium">HTTP Code</th>
                  <th className="px-4 py-3 text-left text-slate-400 font-medium">ERC-1066 Status</th>
                  <th className="px-4 py-3 text-left text-slate-400 font-medium">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-3"><code className="text-green-400">200</code></td>
                  <td className="px-4 py-3"><code className="text-indigo-400">0x01, 0x11</code></td>
                  <td className="px-4 py-3 text-slate-400">Intent validated or executed successfully</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-yellow-400">202</code></td>
                  <td className="px-4 py-3"><code className="text-indigo-400">0x20</code></td>
                  <td className="px-4 py-3 text-slate-400">Intent is pending (TOO_EARLY)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-indigo-400">402</code></td>
                  <td className="px-4 py-3"><code className="text-indigo-400">0x54</code></td>
                  <td className="px-4 py-3 text-slate-400">Payment required (INSUFFICIENT_FUNDS)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-yellow-400">403</code></td>
                  <td className="px-4 py-3"><code className="text-indigo-400">0x10</code></td>
                  <td className="px-4 py-3 text-slate-400">Intent explicitly disallowed (DISALLOWED)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-red-400">410</code></td>
                  <td className="px-4 py-3"><code className="text-indigo-400">0x21</code></td>
                  <td className="px-4 py-3 text-slate-400">Intent has expired (TOO_LATE)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3"><code className="text-cyan-400">421</code></td>
                  <td className="px-4 py-3"><code className="text-indigo-400">0xA2</code></td>
                  <td className="px-4 py-3 text-slate-400">Unsupported chain or network</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/api-reference/contracts" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Smart Contracts
              </div>
            </Link>
            <Link href="/erc1066-x402/api-reference/sdk/typescript" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                TypeScript SDK
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

