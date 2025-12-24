'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { StatusCodeTable } from '@/components/pages/docs-status-code-table';
import { ArrowRight, ArrowLeft, Layers, Shield, Clock, Code } from 'lucide-react';
import Link from 'next/link';

export default function ConceptsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'status-codes', label: 'Status Codes' },
    { id: 'intent-validation', label: 'Intent Validation' },
    { id: 'policies', label: 'Policies' },
    { id: 'architecture', label: 'Architecture' }
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <span className="text-indigo-400">Core Concepts</span>
          </div>

          {/* Page Header */}
          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Core Concepts</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Understand the fundamental concepts behind ERC-1066-x402: status codes, intent validation, policies, and the overall architecture.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 provides a standardized way to validate and execute intents across multiple blockchain networks. It combines three key components:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <Code className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">Status Codes</h3>
              <p className="text-xs text-slate-400">Machine-readable codes that indicate validation results</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">Intent Validation</h3>
              <p className="text-xs text-slate-400">Pre-flight checks before executing transactions</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <Layers className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">Policies</h3>
              <p className="text-xs text-slate-400">Configurable rules for access control</p>
            </div>
          </div>

          <h2 id="status-codes" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Status Codes
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 uses standardized status codes based on the ERC-1066 specification. These codes map to HTTP status codes and provide machine-readable results for AI agents and autonomous systems.
          </p>

          <Callout type="info" title="Key Insight">
            The <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">0x54</code> → HTTP 402 mapping enables standardized payment flows. When an agent receives HTTP 402 with <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">X-Payment-Required</code>, it knows to request payment before retrying.
          </Callout>

          <StatusCodeTable />

          <h2 id="intent-validation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Intent Validation
          </h2>
          <p className="leading-7 mb-6">
            Intent validation is the process of checking whether an intent can be executed before actually executing it. This pre-flight validation saves gas and provides clear feedback to agents.
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <h3 className="text-sm font-medium text-white mb-4">Validation Flow</h3>
            <ol className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">1</span>
                <span>Agent creates intent with sender, target, data, value, and nonce</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">2</span>
                <span>Intent is sent to gateway for validation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">3</span>
                <span>Gateway calls validator contract with intent parameters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">4</span>
                <span>Validator checks policy, balance, timing, and format</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">5</span>
                <span>Status code is returned and mapped to HTTP response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-medium">6</span>
                <span>Agent makes decision based on status code</span>
              </li>
            </ol>
          </div>

          <CodeBlock
            language="python"
            filename="validation_example.py"
            code={`<span class="text-slate-500"># Pre-flight validation</span>
<span class="text-purple-400">result</span> = client.validate_intent(intent, chain_id=<span class="text-blue-400">133717</span>)

<span class="text-slate-500"># Agent decision logic</span>
<span class="text-purple-400">if</span> result.status == <span class="text-green-400">"0x01"</span>:  <span class="text-slate-500"># SUCCESS</span>
    client.execute_intent(intent, chain_id=<span class="text-blue-400">133717</span>)
<span class="text-purple-400">elif</span> result.status == <span class="text-green-400">"0x54"</span>:  <span class="text-slate-500"># INSUFFICIENT_FUNDS</span>
    request_payment()
<span class="text-purple-400">elif</span> result.status == <span class="text-green-400">"0x20"</span>:  <span class="text-slate-500"># TOO_EARLY</span>
    schedule_retry(result.retry_after)`}
          />

          <h2 id="policies" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Policies
          </h2>
          <p className="leading-7 mb-6">
            Policies define the rules for intent validation. They can restrict spending limits, allowed chains, permitted assets, and other parameters.
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Spending Limits</h3>
              <p className="text-xs text-slate-400">Set maximum amounts that can be transferred per transaction or per time period</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Allowed Chains</h3>
              <p className="text-xs text-slate-400">Restrict intents to specific blockchain networks</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Permitted Assets</h3>
              <p className="text-xs text-slate-400">Control which tokens or assets can be used in transactions</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">Time Windows</h3>
              <p className="text-xs text-slate-400">Define when intents are valid (validAfter, validBefore)</p>
            </div>
          </div>

          <h2 id="architecture" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Architecture
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 follows a layered architecture with clear separation between on-chain and off-chain components.
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <h3 className="text-sm font-medium text-white mb-4">On-Chain Components</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">IntentExecutor</strong> - Executes validated intents
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">BaseIntentValidator</strong> - Base contract for validation logic
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">PolicyRegistry</strong> - Stores and manages policies
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">StatusCodes</strong> - Library of standardized status codes
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <h3 className="text-sm font-medium text-white mb-4">Off-Chain Components</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">Gateway Service</strong> - HTTP API for intent validation and execution
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">TypeScript SDK</strong> - Client library for TypeScript/JavaScript
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">Python SDK</strong> - Client library for Python
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">•</span>
                <div>
                  <strong className="text-white">AI Agents</strong> - Autonomous systems using the SDKs
                </div>
              </li>
            </ul>
          </div>

          {/* Page Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/getting-started" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Getting Started
              </div>
            </Link>
            <Link href="/erc1066-x402/guides" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Guides
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

