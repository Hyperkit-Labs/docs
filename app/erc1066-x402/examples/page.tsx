'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft, Code2, Settings, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ExamplesPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'basic-usage', label: 'Basic Usage' },
    { id: 'policy-setup', label: 'Policy Setup' },
    { id: 'multi-chain', label: 'Multi-Chain' }
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
            <span className="text-indigo-400">Examples</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Examples</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Real-world code examples demonstrating how to use ERC-1066-x402 in your applications.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-8">
            These examples cover common use cases including basic intent validation, policy configuration, and multi-chain deployments.
          </p>

          <h2 id="basic-usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Basic Usage
          </h2>
          <p className="leading-7 mb-4">
            Create and validate a simple intent:
          </p>

          <CodeBlock
            language="python"
            filename="basic_usage.py"
            code={`<span class="text-purple-400">from</span> erc1066_x402 <span class="text-purple-400">import</span> ERC1066Client, Intent

<span class="text-slate-500"># Initialize client</span>
<span class="text-purple-400">client</span> = ERC1066Client(<span class="text-green-400">"http://localhost:3001"</span>)

<span class="text-slate-500"># Create intent</span>
<span class="text-purple-400">intent</span> = Intent(
    sender=<span class="text-green-400">"0x..."</span>,
    target=<span class="text-green-400">"0x..."</span>,
    data=<span class="text-green-400">"0x"</span>,
    value=<span class="text-green-400">"0"</span>,
    nonce=<span class="text-green-400">"1"</span>,
    policyId=<span class="text-green-400">"0x0000000000000000000000000000000000000000000000000000000000000000"</span>
)

<span class="text-slate-500"># Validate intent</span>
<span class="text-purple-400">result</span> = client.validate_intent(intent, chain_id=<span class="text-blue-400">133717</span>)

<span class="text-slate-500"># Check status and execute</span>
<span class="text-purple-400">if</span> result.status == <span class="text-green-400">"0x01"</span>:  <span class="text-slate-500"># SUCCESS</span>
    client.execute_intent(intent, chain_id=<span class="text-blue-400">133717</span>)`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
            <Link
              href="/erc1066-x402/examples/basic-usage"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Code2 className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Basic Usage</h3>
              <p className="text-sm text-slate-400">Simple intent validation examples</p>
            </Link>

            <Link
              href="/erc1066-x402/examples/policy-setup"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Settings className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Policy Setup</h3>
              <p className="text-sm text-slate-400">Create and configure policies</p>
            </Link>

            <Link
              href="/erc1066-x402/examples/multi-chain"
              className="group block p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all"
            >
              <Globe className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 mb-2">Multi-Chain</h3>
              <p className="text-sm text-slate-400">Cross-chain intent examples</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/specifications" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Specifications
              </div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

