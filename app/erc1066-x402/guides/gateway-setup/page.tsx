'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Server, Settings } from 'lucide-react';
import Link from 'next/link';

export default function GatewaySetupPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'installation', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'endpoints', label: 'API Endpoints' },
    { id: 'testing', label: 'Testing' }
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
            <Link href="/erc1066-x402/guides" className="hover:text-slate-300 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-indigo-400">Gateway Setup</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Gateway Setup</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            The gateway service provides HTTP endpoints for intent validation and execution, mapping onchain status codes to HTTP responses.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The gateway acts as a bridge between AI agents and blockchain networks. It receives HTTP requests, validates intents on-chain, and returns standardized HTTP responses with status codes.
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <h3 className="text-sm font-medium text-white mb-4">Gateway Flow</h3>
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <span>Agent sends intent validation request to gateway</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <span>Gateway calls validator contract on-chain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <span>Validator returns status code (e.g., 0x01 for SUCCESS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">4</span>
                <span>Gateway maps status code to HTTP response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">5</span>
                <span>Agent receives HTTP response with status code</span>
              </li>
            </ol>
          </div>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <p className="leading-7 mb-4">
            Navigate to the gateway package and install dependencies:
          </p>

          <CodeBlock
            code={`<span class="text-slate-500"># Navigate to gateway directory</span>
<span class="text-blue-400">cd</span> packages/gateway

<span class="text-slate-500"># Install dependencies</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span>

<span class="text-slate-500"># Copy environment template</span>
<span class="text-blue-400">cp</span> env.template .env`}
          />

          <h2 id="configuration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Configuration
          </h2>
          <p className="leading-7 mb-4">
            Configure the gateway with your deployed contract addresses and RPC endpoints:
          </p>

          <CodeBlock
            filename=".env"
            code={`<span class="text-slate-500"># Contract addresses (JSON format)</span>
<span class="text-purple-400">EXECUTOR_ADDRESSES</span>=<span class="text-green-400">{"{\"133717\":\"0x...\",\"59902\":\"0x...\"}"}</span>
<span class="text-purple-400">VALIDATOR_ADDRESSES</span>=<span class="text-green-400">{"{\"133717\":\"0x...\",\"59902\":\"0x...\"}"}</span>
<span class="text-purple-400">REGISTRY_ADDRESSES</span>=<span class="text-green-400">{"{\"133717\":\"0x...\",\"59902\":\"0x...\"}"}</span>

<span class="text-slate-500"># RPC URLs (optional - gateway uses Chainlist by default)</span>
<span class="text-purple-400">RPC_URLS</span>=<span class="text-green-400">{"{\"133717\":\"https://...\",\"59902\":\"https://...\"}"}</span>

<span class="text-slate-500"># Server configuration</span>
<span class="text-purple-400">PORT</span>=<span class="text-green-400">3001</span>
<span class="text-purple-400">NODE_ENV</span>=<span class="text-green-400">development</span>`}
          />

          <Callout type="info" title="Network-Agnostic Design">
            The gateway automatically discovers RPC endpoints via Chainlist, so you can add new networks without code changes. See the <Link href="/erc1066-x402/guides/multi-chain" className="text-indigo-400 hover:underline">Multi-Chain Guide</Link> for details.
          </Callout>

          <h2 id="endpoints" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            API Endpoints
          </h2>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            POST /intents/validate
          </h3>
          <p className="leading-7 mb-4">
            Validates an intent without executing it. Returns HTTP status codes based on validation result.
          </p>

          <CodeBlock
            language="json"
            filename="Request"
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

          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p><strong className="text-white">Status 200:</strong> Intent is valid</p>
            <p><strong className="text-white">Status 403:</strong> Intent is disallowed</p>
            <p><strong className="text-white">Status 402:</strong> Insufficient funds (x402 payment required)</p>
            <p><strong className="text-white">Other status codes:</strong> Based on validation result</p>
          </div>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            POST /intents/execute
          </h3>
          <p className="leading-7 mb-4">
            Executes a validated intent on-chain.
          </p>

          <CodeBlock
            language="json"
            filename="Request"
            code={`<span class="text-slate-500"># Same request format as validate endpoint</span>
<span class="text-purple-400">{</span>
  <span class="text-green-400">"sender"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"target"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"data"</span>: <span class="text-green-400">"0x..."</span>,
  <span class="text-green-400">"value"</span>: <span class="text-green-400">"0"</span>,
  <span class="text-green-400">"nonce"</span>: <span class="text-green-400">"0"</span>,
  <span class="text-green-400">"policyId"</span>: <span class="text-green-400">"0x..."</span>
<span class="text-purple-400">}</span>`}
          />

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Headers
          </h3>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <ul className="space-y-2 text-sm text-slate-400">
              <li><code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">X-Chain-Id</code> - Chain ID for the request</li>
              <li><code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">X-Status-Code</code> - Onchain status code (bytes1)</li>
              <li><code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">X-Payment-Required</code> - Set to "true" when payment is required</li>
            </ul>
          </div>

          <h2 id="testing" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Testing
          </h2>
          <p className="leading-7 mb-4">
            Start the gateway and test the endpoints:
          </p>

          <CodeBlock
            code={`<span class="text-slate-500"># Start gateway</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">run</span> <span class="text-green-400">dev</span>

<span class="text-slate-500"># Expected output:</span>
<span class="text-green-400">Server listening on http://0.0.0.0:3001</span>

<span class="text-slate-500"># Test health check</span>
<span class="text-blue-400">curl</span> http://localhost:3001/health

<span class="text-slate-500"># Test intent validation</span>
<span class="text-blue-400">curl</span> <span class="text-purple-400">-X</span> POST http://localhost:3001/intents/validate \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"Content-Type: application/json"</span> \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"X-Chain-Id: 133717"</span> \\
  <span class="text-purple-400">-d</span> <span class="text-green-400">'{...}'</span>`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/guides" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Guides
              </div>
            </Link>
            <Link href="/erc1066-x402/guides/agent-integration" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Agent Integration
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

