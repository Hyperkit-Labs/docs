'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ERC1066X402Page() {
  const tocItems = [
    { id: 'what-is', label: 'What is ERC-1066-x402?' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'why-use', label: 'Why ERC-1066-x402?' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'quick-example', label: 'Quick Example' },
    { id: 'next-steps', label: 'Next Steps' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => {}} />
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-indigo-400">ERC-1066-x402</span>
          </div>

          {/* Page Header */}
          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">ERC-1066-x402</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            A set of Ethereum-compatible smart contracts that standardize status codes, policy checks, and intent validation for Web3 transactions. Integrates with HTTP/x402 gateway and agent layer to provide machine-readable status codes for autonomous decision-making.
          </p>

          {/* Status Badge */}
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              Active
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
              v2.0.0
            </span>
          </div>

          <h2 id="what-is" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What is ERC-1066-x402?
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 combines the ERC-1066 status code standard with the x402 payment protocol, creating a unified system for intent validation and payment handling in Web3 applications. It enables AI agents and autonomous systems to make decisions based on standardized, machine-readable status codes.
          </p>

          <Callout type="info" title="Standardized Semantics">
            Instead of parsing unstructured error messages, agents can branch directly on status codes like <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x54</code> (INSUFFICIENT_FUNDS) or <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x01</code> (SUCCESS).
          </Callout>

          <h2 id="key-features" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Standardized Status Codes</h3>
              <p className="text-xs text-slate-400">ERC-1066 status codes for intents, account abstraction, and payments</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-5 h-5 text-indigo-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Pre-flight Validation</h3>
              <p className="text-xs text-slate-400">Check if intent will succeed before spending gas</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Policy-Based Access Control</h3>
              <p className="text-xs text-slate-400">Limits, permissions, chains, and asset controls</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Globe className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Multi-Chain Support</h3>
              <p className="text-xs text-slate-400">EVM, Solana, and Sui support with network-agnostic gateway</p>
            </div>
          </div>

          <h2 id="why-use" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Why ERC-1066-x402?
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Without ERC-1066-x402</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-400">
                <li>Each project implements custom error strings and status handling</li>
                <li>AI agents must parse unstructured error messages</li>
                <li>No standardized way to handle payment requirements (x402)</li>
                <li>Gas waste from verbose error strings</li>
                <li>Difficult to monitor and aggregate across protocols</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">With ERC-1066-x402</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 text-slate-400">
                <li>Machine-readable status codes that agents can branch on directly</li>
                <li>Standardized x402 integration with HTTP 402 mapping</li>
                <li>Gas-efficient single-byte status codes vs. string errors</li>
                <li>Cross-protocol monitoring and aggregation</li>
                <li>Pre-flight validation before spending gas</li>
              </ul>
            </div>
          </div>

          <h2 id="architecture" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Architecture
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 consists of two main layers: an on-chain layer with smart contracts for validation and execution, and an off-chain layer with gateway services and SDKs for integration.
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-white mb-3">On-Chain Layer</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• IntentExecutor</li>
                  <li>• BaseIntentValidator</li>
                  <li>• PolicyRegistry</li>
                  <li>• StatusCodes Library</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Off-Chain Layer</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Gateway Service</li>
                  <li>• TypeScript SDK</li>
                  <li>• Python SDK</li>
                  <li>• AI Agents/Wallets</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="quick-example" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Quick Example
          </h2>
          <p className="leading-7 mb-4">
            Here's how an AI agent uses ERC-1066-x402 to handle payment-required scenarios:
          </p>

          <CodeBlock
            language="python"
            filename="agent_example.py"
            code={`<span class="text-purple-400">from</span> erc1066_x402 <span class="text-purple-400">import</span> ERC1066Client, Intent

<span class="text-purple-400">client</span> = ERC1066Client(<span class="text-green-400">"https://gateway.example.com"</span>)

<span class="text-purple-400">intent</span> = Intent(
    sender=<span class="text-green-400">"0x..."</span>,
    target=<span class="text-green-400">"0x..."</span>,
    data=<span class="text-green-400">"0x..."</span>,
    value=<span class="text-green-400">"1000000000000000"</span>,  <span class="text-slate-500"># 0.001 ETH</span>
    nonce=<span class="text-green-400">"1"</span>,
    policyId=<span class="text-green-400">"0x..."</span>
)

<span class="text-slate-500"># Pre-flight validation</span>
<span class="text-purple-400">result</span> = client.validate_intent(intent, chain_id=<span class="text-blue-400">133717</span>)

<span class="text-purple-400">if</span> result.status == <span class="text-green-400">"0x54"</span>:  <span class="text-slate-500"># INSUFFICIENT_FUNDS</span>
    <span class="text-slate-500"># Gateway returns HTTP 402 with X-Payment-Required header</span>
    <span class="text-slate-500"># Agent requests payment from user</span>
    payment_url = <span class="text-green-400">f"{gateway_url}/pay?intent={intent_hash}"</span>
    request_payment(payment_url)
<span class="text-purple-400">elif</span> result.status == <span class="text-green-400">"0x01"</span>:  <span class="text-slate-500"># SUCCESS</span>
    <span class="text-slate-500"># Execute immediately</span>
    client.execute_intent(intent, chain_id=<span class="text-blue-400">133717</span>)`}
          />

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/erc1066-x402/getting-started"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-400">Getting Started</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
              </div>
              <p className="text-sm text-slate-400">Set up your environment and create your first intent validation</p>
            </Link>
            <Link
              href="/erc1066-x402/concepts"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-400">Core Concepts</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
              </div>
              <p className="text-sm text-slate-400">Learn about architecture, status codes, and intent validation</p>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

