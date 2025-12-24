'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Bot } from 'lucide-react';
import Link from 'next/link';

export default function AgentIntegrationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'typescript-sdk', label: 'TypeScript SDK' },
    { id: 'python-sdk', label: 'Python SDK' },
    { id: 'status-mapping', label: 'Status Code Mapping' },
    { id: 'best-practices', label: 'Best Practices' }
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
            <span className="text-indigo-400">Agent Integration</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Agent Integration</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Integrate ERC-1066-x402 with AI agents and autonomous systems using the TypeScript or Python SDKs.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Agents can integrate with ERC-1066-x402 using the provided SDKs. The SDKs handle HTTP communication with the gateway and provide helper methods for status code mapping and decision-making.
          </p>

          <Callout type="info" title="SDK Benefits">
            The SDKs abstract away HTTP details and provide type-safe interfaces for intent validation and execution. They also include helper methods for mapping status codes to agent actions.
          </Callout>

          <h2 id="typescript-sdk" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            TypeScript SDK
          </h2>
          <p className="leading-7 mb-4">
            Install and use the TypeScript SDK:
          </p>

          <CodeBlock
            showTabs
            tabs={[
              {
                name: 'npm',
                code: '<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span> <span class="text-green-400">@hyperkit/erc1066-x402-sdk</span>'
              },
              {
                name: 'pnpm',
                code: '<span class="text-blue-400">pnpm</span> <span class="text-purple-400">add</span> <span class="text-green-400">@hyperkit/erc1066-x402-sdk</span>'
              },
              {
                name: 'yarn',
                code: '<span class="text-blue-400">yarn</span> <span class="text-purple-400">add</span> <span class="text-green-400">@hyperkit/erc1066-x402-sdk</span>'
              }
            ]}
            code=""
          />

          <CodeBlock
            language="typescript"
            filename="agent.ts"
            code={`<span class="text-purple-400">import</span> { ERC1066Client } <span class="text-purple-400">from</span> <span class="text-green-400">'@hyperkit/erc1066-x402-sdk'</span>;

<span class="text-slate-500">// Initialize client</span>
<span class="text-purple-400">const</span> client = <span class="text-purple-400">new</span> ERC1066Client(<span class="text-green-400">'https://gateway.example.com'</span>);

<span class="text-slate-500">// Create intent</span>
<span class="text-purple-400">const</span> intent = {
  sender: <span class="text-green-400">'0x...'</span>,
  target: <span class="text-green-400">'0x...'</span>,
  data: <span class="text-green-400">'0x...'</span>,
  value: <span class="text-green-400">'0'</span>,
  nonce: <span class="text-green-400">'0'</span>,
  validAfter: <span class="text-green-400">'0'</span>,
  validBefore: <span class="text-green-400">'0'</span>,
  policyId: <span class="text-green-400">'0x...'</span>
};

<span class="text-slate-500">// Validate intent</span>
<span class="text-purple-400">const</span> result = <span class="text-purple-400">await</span> client.validateIntent(intent, <span class="text-blue-400">1</span>);

<span class="text-slate-500">// Map status to action</span>
<span class="text-purple-400">const</span> action = client.mapStatusToAction(result.status);

<span class="text-slate-500">// Execute based on action</span>
<span class="text-purple-400">if</span> (action === <span class="text-green-400">'execute'</span>) {
  <span class="text-purple-400">await</span> client.executeIntent(intent, <span class="text-blue-400">1</span>);
} <span class="text-purple-400">else if</span> (action === <span class="text-green-400">'request_payment'</span>) {
  requestPayment(result.paymentUrl);
}`}
          />

          <h2 id="python-sdk" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Python SDK
          </h2>
          <p className="leading-7 mb-4">
            Install and use the Python SDK:
          </p>

          <CodeBlock
            code={`<span class="text-slate-500"># Install Python SDK</span>
<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> <span class="text-green-400">hyperkitlabs-erc1066-x402</span>`}
          />

          <CodeBlock
            language="python"
            filename="agent.py"
            code={`<span class="text-purple-400">from</span> erc1066_x402 <span class="text-purple-400">import</span> ERC1066Client

<span class="text-slate-500"># Initialize client</span>
<span class="text-purple-400">client</span> = ERC1066Client(<span class="text-green-400">'https://gateway.example.com'</span>)

<span class="text-slate-500"># Create intent</span>
<span class="text-purple-400">intent</span> = {
    <span class="text-green-400">'sender'</span>: <span class="text-green-400">'0x...'</span>,
    <span class="text-green-400">'target'</span>: <span class="text-green-400">'0x...'</span>,
    <span class="text-green-400">'data'</span>: <span class="text-green-400">'0x...'</span>,
    <span class="text-green-400">'value'</span>: <span class="text-green-400">'0'</span>,
    <span class="text-green-400">'nonce'</span>: <span class="text-green-400">'0'</span>,
    <span class="text-green-400">'validAfter'</span>: <span class="text-green-400">'0'</span>,
    <span class="text-green-400">'validBefore'</span>: <span class="text-green-400">'0'</span>,
    <span class="text-green-400">'policyId'</span>: <span class="text-green-400">'0x...'</span>
}

<span class="text-slate-500"># Validate intent</span>
<span class="text-purple-400">result</span> = client.validate_intent(intent, <span class="text-blue-400">1</span>)

<span class="text-slate-500"># Map status to action</span>
<span class="text-purple-400">action</span> = client.map_status_to_action(result[<span class="text-green-400">'status'</span>])

<span class="text-slate-500"># Execute based on action</span>
<span class="text-purple-400">if</span> action == <span class="text-green-400">'execute'</span>:
    client.execute_intent(intent, <span class="text-blue-400">1</span>)
<span class="text-purple-400">elif</span> action == <span class="text-green-400">'request_payment'</span>:
    request_payment(result[<span class="text-green-400">'payment_url'</span>])`}
          />

          <h2 id="status-mapping" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Status Code Mapping
          </h2>
          <p className="leading-7 mb-6">
            Map status codes to agent actions:
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 text-slate-400 font-medium">Status Code</th>
                  <th className="text-left py-2 text-slate-400 font-medium">Action</th>
                  <th className="text-left py-2 text-slate-400 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-2"><code className="font-mono text-xs bg-indigo-500/10 px-2 py-1 rounded text-indigo-400">0x01</code></td>
                  <td className="py-2 text-white">Execute immediately</td>
                  <td className="py-2 text-slate-400">SUCCESS</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="font-mono text-xs bg-indigo-500/10 px-2 py-1 rounded text-indigo-400">0x20</code></td>
                  <td className="py-2 text-white">Retry later</td>
                  <td className="py-2 text-slate-400">TOO_EARLY</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="font-mono text-xs bg-indigo-500/10 px-2 py-1 rounded text-indigo-400">0x54</code></td>
                  <td className="py-2 text-white">Request payment</td>
                  <td className="py-2 text-slate-400">INSUFFICIENT_FUNDS</td>
                </tr>
                <tr>
                  <td className="py-2"><code className="font-mono text-xs bg-indigo-500/10 px-2 py-1 rounded text-indigo-400">0x10</code></td>
                  <td className="py-2 text-white">Deny and inform user</td>
                  <td className="py-2 text-slate-400">DISALLOWED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="best-practices" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Best Practices
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Always Validate Before Executing</h3>
              <p className="text-xs text-slate-400">Use validateIntent before executeIntent to avoid wasting gas on failed transactions.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Handle Payment Required Scenarios</h3>
              <p className="text-xs text-slate-400">When receiving status 0x54 (INSUFFICIENT_FUNDS), request payment from the user before retrying.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Implement Retry Logic</h3>
              <p className="text-xs text-slate-400">For status 0x20 (TOO_EARLY), implement exponential backoff retry logic.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">4. Log Status Codes</h3>
              <p className="text-xs text-slate-400">Log all status codes for monitoring and debugging purposes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/guides/gateway-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Gateway Setup
              </div>
            </Link>
            <Link href="/erc1066-x402/guides/multi-chain" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Multi-Chain Deployment
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

