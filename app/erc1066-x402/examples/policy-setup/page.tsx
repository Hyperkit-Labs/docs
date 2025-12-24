'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PolicySetupPage() {
  const tocItems = [
    { id: 'basic-spending', label: 'Basic Spending Policy' },
    { id: 'target-restricted', label: 'Target-Restricted Policy' },
    { id: 'time-limited', label: 'Time-Limited Policy' },
    { id: 'chain-specific', label: 'Chain-Specific Policy' },
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
            <Link href="/erc1066-x402/examples" className="hover:text-slate-300 transition-colors">Examples</Link>
            <span>/</span>
            <span className="text-indigo-400">Policy Setup</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Policy Setup</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Common policy patterns and configurations for different use cases.
          </p>

          <h2 id="basic-spending" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Basic Spending Policy
          </h2>
          <p className="leading-7 mb-4">
            Allows spending up to 1 ETH per transaction:
          </p>

          <CodeBlock
            language="solidity"
            filename="basic_policy.sol"
            code={`<span class="text-purple-400">Policy</span> <span class="text-purple-400">memory</span> policy = <span class="text-purple-400">Policy</span>({
    owner: <span class="text-blue-400">msg</span>.<span class="text-blue-400">sender</span>,
    allowedTargets: [],
    allowedSelectors: [],
    maxValuePerTx: <span class="text-blue-400">1</span> <span class="text-purple-400">ether</span>,
    maxAggregateValue: <span class="text-blue-400">0</span>,
    validAfter: <span class="text-blue-400">0</span>,
    validBefore: <span class="text-blue-400">0</span>,
    allowedChains: []
});`}
          />

          <h2 id="target-restricted" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Target-Restricted Policy
          </h2>
          <p className="leading-7 mb-4">
            Only allows calls to specific contracts:
          </p>

          <CodeBlock
            language="solidity"
            filename="target_restricted_policy.sol"
            code={`<span class="text-purple-400">address</span>[] <span class="text-purple-400">memory</span> targets = <span class="text-purple-400">new</span> <span class="text-purple-400">address</span>[](<span class="text-blue-400">2</span>);
targets[<span class="text-blue-400">0</span>] = uniswapRouter;
targets[<span class="text-blue-400">1</span>] = aavePool;

<span class="text-purple-400">Policy</span> <span class="text-purple-400">memory</span> policy = <span class="text-purple-400">Policy</span>({
    owner: <span class="text-blue-400">msg</span>.<span class="text-blue-400">sender</span>,
    allowedTargets: targets,
    allowedSelectors: [],
    maxValuePerTx: <span class="text-blue-400">5</span> <span class="text-purple-400">ether</span>,
    maxAggregateValue: <span class="text-blue-400">0</span>,
    validAfter: <span class="text-blue-400">0</span>,
    validBefore: <span class="text-blue-400">0</span>,
    allowedChains: []
});`}
          />

          <h2 id="time-limited" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Time-Limited Policy
          </h2>
          <p className="leading-7 mb-4">
            Policy valid only for 30 days:
          </p>

          <CodeBlock
            language="solidity"
            filename="time_limited_policy.sol"
            code={`<span class="text-purple-400">Policy</span> <span class="text-purple-400">memory</span> policy = <span class="text-purple-400">Policy</span>({
    owner: <span class="text-blue-400">msg</span>.<span class="text-blue-400">sender</span>,
    allowedTargets: [],
    allowedSelectors: [],
    maxValuePerTx: <span class="text-blue-400">1</span> <span class="text-purple-400">ether</span>,
    maxAggregateValue: <span class="text-blue-400">0</span>,
    validAfter: <span class="text-blue-400">block</span>.<span class="text-blue-400">timestamp</span>,
    validBefore: <span class="text-blue-400">block</span>.<span class="text-blue-400">timestamp</span> + <span class="text-blue-400">30</span> <span class="text-purple-400">days</span>,
    allowedChains: []
});`}
          />

          <h2 id="chain-specific" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Chain-Specific Policy
          </h2>
          <p className="leading-7 mb-4">
            Only valid on specific chains:
          </p>

          <CodeBlock
            language="solidity"
            filename="chain_specific_policy.sol"
            code={`<span class="text-purple-400">uint256</span>[] <span class="text-purple-400">memory</span> chains = <span class="text-purple-400">new</span> <span class="text-purple-400">uint256</span>[](<span class="text-blue-400">2</span>);
chains[<span class="text-blue-400">0</span>] = <span class="text-blue-400">1</span>; <span class="text-slate-500">// Ethereum</span>
chains[<span class="text-blue-400">1</span>] = <span class="text-blue-400">137</span>; <span class="text-slate-500">// Polygon</span>

<span class="text-purple-400">Policy</span> <span class="text-purple-400">memory</span> policy = <span class="text-purple-400">Policy</span>({
    owner: <span class="text-blue-400">msg</span>.<span class="text-blue-400">sender</span>,
    allowedTargets: [],
    allowedSelectors: [],
    maxValuePerTx: <span class="text-blue-400">1</span> <span class="text-purple-400">ether</span>,
    maxAggregateValue: <span class="text-blue-400">0</span>,
    validAfter: <span class="text-blue-400">0</span>,
    validBefore: <span class="text-blue-400">0</span>,
    allowedChains: chains
});`}
          />

          <h2 id="best-practices" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Best Practices
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Start Restrictive</h3>
              <p className="text-xs text-slate-400">Begin with restrictive policies and relax as needed. It's easier to add permissions than remove them.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Use Time Windows</h3>
              <p className="text-xs text-slate-400">Set validAfter and validBefore to limit exposure and reduce risk of stale policies.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Set Reasonable Caps</h3>
              <p className="text-xs text-slate-400">Set maxValuePerTx and maxAggregateValue to reasonable limits based on your use case.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">4. Document Policies</h3>
              <p className="text-xs text-slate-400">Document the purpose and parameters of each policy for future reference.</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">5. Version Policies</h3>
              <p className="text-xs text-slate-400">Create new policyIds for policy updates rather than modifying existing ones.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/examples/basic-usage" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Basic Usage
              </div>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

