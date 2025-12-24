'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function ActionsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'creating-actions', label: 'Creating Actions' },
    { id: 'available-methods', label: 'Available Methods' },
    { id: 'usage', label: 'Usage Examples' }
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
            <Link href="/sdk" className="hover:text-slate-300 transition-colors">Hyperkit SDK</Link>
            <span>/</span>
            <span className="text-purple-400">Actions API</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Actions API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Programmatic API for blockchain interactions. Use actions when you need custom implementations or want to build your own UI components.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The Actions API provides programmatic access to blockchain operations. Instead of using pre-built components, you can use actions to create custom implementations with full control over the UI and flow.
          </p>

          <Callout type="info" title="When to Use Actions">
            Use the Actions API when you need custom UI implementations, want to integrate Hyperkit functionality into existing components, or need more control over the transaction flow.
          </Callout>

          <h2 id="creating-actions" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Creating Actions
          </h2>
          <p className="leading-7 mb-4">
            Create an actions instance using <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">createBlockchainActions</code>:
          </p>

          <CodeBlock
            language="typescript"
            filename="CreateActions.ts"
            code={`<span class="text-purple-400">import</span> { createBlockchainActions } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;
<span class="text-purple-400">import</span> { ethers } <span class="text-purple-400">from</span> <span class="text-green-400">'ethers'</span>;

<span class="text-slate-500">// Get provider and signer from wallet</span>
<span class="text-purple-400">const</span> provider = <span class="text-purple-400">new</span> ethers.<span class="text-blue-400">BrowserProvider</span>(window.ethereum);
<span class="text-purple-400">const</span> signer = <span class="text-purple-400">await</span> provider.<span class="text-blue-400">getSigner</span>();

<span class="text-slate-500">// Create actions instance</span>
<span class="text-purple-400">const</span> actions = <span class="text-blue-400">createBlockchainActions</span>(provider, signer);`}
          />

          <h2 id="available-methods" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Available Methods
          </h2>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">Token Actions</h3>
              <ul className="space-y-2 text-xs text-slate-400 ml-4">
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">getTokenBalance(tokenSymbol, userAddress)</code> - Get token balance</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">approveToken(tokenSymbol, spenderAddress, amount)</code> - Approve token spending</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">getAllowance(tokenSymbol, ownerAddress, spenderAddress)</code> - Get token allowance</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">Swap Actions</h3>
              <ul className="space-y-2 text-xs text-slate-400 ml-4">
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">getSwapQuote(tokenIn, tokenOut, amountIn)</code> - Get swap quote</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">swapTokens(tokenIn, tokenOut, amountIn, expectedAmountOut, recipient, slippageTolerance)</code> - Execute swap</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">Staking Actions</h3>
              <ul className="space-y-2 text-xs text-slate-400 ml-4">
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">stakeTokens(amount)</code> - Stake tokens</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">unstakeTokens(amount)</code> - Unstake tokens</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">getStakingBalance(userAddress)</code> - Get staking balance</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">claimRewards()</code> - Claim staking rewards</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">Bridge Actions</h3>
              <ul className="space-y-2 text-xs text-slate-400 ml-4">
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">bridgeTokens(tokenSymbol, amount, targetChainId, recipient)</code> - Bridge tokens</li>
                <li>• <code className="bg-white/10 px-1 py-0.5 rounded">getBridgeQuote(tokenSymbol, amount, targetChainId)</code> - Get bridge quote</li>
              </ul>
            </div>
          </div>

          <h2 id="usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Usage Examples
          </h2>

          <CodeBlock
            language="typescript"
            filename="ActionsExample.ts"
            code={`<span class="text-purple-400">import</span> { createBlockchainActions } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-slate-500">// Create actions instance</span>
<span class="text-purple-400">const</span> actions = <span class="text-blue-400">createBlockchainActions</span>(provider, signer);

<span class="text-slate-500">// Get token balance</span>
<span class="text-purple-400">const</span> balance = <span class="text-purple-400">await</span> actions.getTokenBalance(<span class="text-green-400">'USDT'</span>, userAddress);

<span class="text-slate-500">// Get swap quote</span>
<span class="text-purple-400">const</span> quote = <span class="text-purple-400">await</span> actions.getSwapQuote(<span class="text-green-400">'USDT'</span>, <span class="text-green-400">'USDC'</span>, <span class="text-green-400">'100'</span>);

<span class="text-slate-500">// Execute swap</span>
<span class="text-purple-400">await</span> actions.swapTokens(
  <span class="text-green-400">'USDT'</span>,
  <span class="text-green-400">'USDC'</span>,
  <span class="text-green-400">'100'</span>,
  quote.outputAmount,
  recipient,
  <span class="text-blue-400">0.5</span> <span class="text-slate-500">// 0.5% slippage</span>
);

<span class="text-slate-500">// Stake tokens</span>
<span class="text-purple-400">await</span> actions.stakeTokens(<span class="text-green-400">'1000'</span>);`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/hooks/use-alert" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                useAlert
              </div>
            </Link>
            <Link href="/sdk/actions/programmatic-usage" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Programmatic Usage
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

