'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GettingStartedPage() {
  const tocItems = [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'installation', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'first-intent', label: 'Your First Intent' },
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <span className="text-indigo-400">Getting Started</span>
          </div>

          {/* Page Header */}
          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Getting Started</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Get up and running with ERC-1066-x402 in under 10 minutes. This guide will help you install the necessary tools, deploy contracts, and validate your first intent.
          </p>

          <h2 id="prerequisites" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Prerequisites
          </h2>
          <p className="leading-7 mb-4">
            Before you begin, ensure you have the following tools installed:
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Node.js 18+</h3>
                <p className="text-xs text-slate-400">Required for running the gateway and SDKs</p>
                <CodeBlock
                  code={`<span class="text-slate-500"># Check version</span>
<span class="text-blue-400">node</span> <span class="text-purple-400">--version</span>

<span class="text-slate-500"># Using nvm (recommended)</span>
<span class="text-blue-400">nvm</span> <span class="text-purple-400">install</span> <span class="text-green-400">18</span>
<span class="text-blue-400">nvm</span> <span class="text-purple-400">use</span> <span class="text-green-400">18</span>`}
                />
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Foundry (EVM)</h3>
                <p className="text-xs text-slate-400">Required for Solidity contract development</p>
                <CodeBlock
                  code={`<span class="text-slate-500"># Install Foundry</span>
<span class="text-blue-400">curl</span> <span class="text-purple-400">-L</span> https://foundry.paradigm.xyz <span class="text-purple-400">|</span> <span class="text-blue-400">bash</span>
<span class="text-blue-400">foundryup</span>

<span class="text-slate-500"># Verify installation</span>
<span class="text-blue-400">forge</span> <span class="text-purple-400">--version</span>`}
                />
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Git</h3>
                <p className="text-xs text-slate-400">Required for cloning the repository</p>
                <CodeBlock
                  code={`<span class="text-slate-500"># Verify installation</span>
<span class="text-blue-400">git</span> <span class="text-purple-400">--version</span>`}
                />
              </div>
            </div>
          </div>

          <Callout type="info" title="Optional: Multi-Chain Support">
            For Solana or Sui support, you'll also need Anchor (Solana) or Sui CLI. See the <Link href="/erc1066-x402/guides/multi-chain" className="text-indigo-400 hover:underline">Multi-Chain Guide</Link> for details.
          </Callout>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <p className="leading-7 mb-4">
            Clone the repository and install dependencies:
          </p>

          <CodeBlock
            code={`<span class="text-slate-500"># Clone the repository</span>
<span class="text-blue-400">git</span> <span class="text-purple-400">clone</span> https://github.com/hyperkit-labs/erc1066-x402.git
<span class="text-blue-400">cd</span> erc1066-x402

<span class="text-slate-500"># Install dependencies</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span>
<span class="text-blue-400">forge</span> <span class="text-purple-400">install</span>`}
          />

          <p className="leading-7 mb-4 mt-6">
            Verify the installation by running tests:
          </p>

          <CodeBlock
            code={`<span class="text-slate-500"># Run tests</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">test</span>

<span class="text-slate-500"># Expected output:</span>
<span class="text-green-400">Running 10 tests for IntentExecutorTest...</span>
<span class="text-green-400">[PASS] test_execute_success()</span>
<span class="text-green-400">[PASS] test_execute_revertsWhenValidationFails()</span>
<span class="text-green-400">...</span>
<span class="text-green-400">Test result: ok. 10 passed</span>`}
          />

          <h2 id="configuration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Configuration
          </h2>
          <p className="leading-7 mb-4">
            Set up your environment variables for deployment:
          </p>

          <CodeBlock
            filename=".env"
            code={`<span class="text-slate-500"># For deployment scripts</span>
<span class="text-purple-400">PRIVATE_KEY</span>=your_private_key_here
<span class="text-slate-500"># Note: 0x prefix is optional, scripts handle it automatically</span>`}
          />

          <Callout type="warning" title="Security Note">
            Never commit your private key. It's already in <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">.gitignore</code>.
          </Callout>

          <h2 id="first-intent" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Your First Intent
          </h2>
          <p className="leading-7 mb-4">
            Create and validate your first intent using the Python SDK:
          </p>

          <CodeBlock
            language="python"
            filename="first_intent.py"
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

<span class="text-slate-500"># Check status</span>
<span class="text-purple-400">if</span> result.status == <span class="text-green-400">"0x01"</span>:  <span class="text-slate-500"># SUCCESS</span>
    <span class="text-blue-400">print</span>(<span class="text-green-400">"Intent validated successfully!"</span>)
    client.execute_intent(intent, chain_id=<span class="text-blue-400">133717</span>)
<span class="text-purple-400">else</span>:
    <span class="text-blue-400">print</span>(<span class="text-green-400">f"Validation failed: {result.status}"</span>)`}
          />

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Read Core Concepts</h3>
              <p className="text-xs text-slate-400 mb-3">Learn about architecture, status codes, and intent validation</p>
              <Link href="/erc1066-x402/concepts" className="text-xs text-indigo-400 hover:underline inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Set Up Gateway</h3>
              <p className="text-xs text-slate-400 mb-3">Deploy contracts and configure the gateway service</p>
              <Link href="/erc1066-x402/guides/gateway-setup" className="text-xs text-indigo-400 hover:underline inline-flex items-center gap-1">
                Gateway Setup <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Explore Examples</h3>
              <p className="text-xs text-slate-400 mb-3">See real-world usage examples and code samples</p>
              <Link href="/erc1066-x402/examples" className="text-xs text-indigo-400 hover:underline inline-flex items-center gap-1">
                View Examples <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Overview
              </div>
            </Link>
            <Link href="/erc1066-x402/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Core Concepts
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

