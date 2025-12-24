'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProgrammaticUsagePage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'complete-example', label: 'Complete Example' }
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
            <Link href="/sdk/actions" className="hover:text-slate-300 transition-colors">Actions API</Link>
            <span>/</span>
            <span className="text-purple-400">Programmatic Usage</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Programmatic Usage</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Complete example of using the Actions API to build custom blockchain interactions.
          </p>

          <h2 id="complete-example" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Complete Example
          </h2>
          <CodeBlock
            language="tsx"
            filename="CustomSwap.tsx"
            code={`<span class="text-purple-400">import</span> { createBlockchainActions } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;
<span class="text-purple-400">import</span> { useWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">CustomSwap</span>() {
  <span class="text-purple-400">const</span> { wallet } = <span class="text-blue-400">useWallet</span>();
  <span class="text-purple-400">const</span> [loading, setLoading] = <span class="text-blue-400">useState</span>(<span class="text-purple-400">false</span>);

  <span class="text-purple-400">const</span> <span class="text-blue-400">handleSwap</span> = <span class="text-purple-400">async</span> () => {
    <span class="text-purple-400">if</span> (!wallet.provider || !wallet.signer) <span class="text-purple-400">return</span>;
    
    <span class="text-purple-400">const</span> actions = <span class="text-blue-400">createBlockchainActions</span>(wallet.provider, wallet.signer);
    setLoading(<span class="text-purple-400">true</span>);
    
    <span class="text-purple-400">try</span> {
      <span class="text-purple-400">const</span> quote = <span class="text-purple-400">await</span> actions.getSwapQuote(<span class="text-green-400">'USDT'</span>, <span class="text-green-400">'USDC'</span>, <span class="text-green-400">'100'</span>);
      <span class="text-purple-400">await</span> actions.swapTokens(<span class="text-green-400">'USDT'</span>, <span class="text-green-400">'USDC'</span>, <span class="text-green-400">'100'</span>, quote.outputAmount, wallet.account, <span class="text-blue-400">0.5</span>);
    } <span class="text-purple-400">catch</span> (error) {
      <span class="text-blue-400">console</span>.<span class="text-blue-400">error</span>(error);
    } <span class="text-purple-400">finally</span> {
      setLoading(<span class="text-purple-400">false</span>);
    }
  };

  <span class="text-purple-400">return</span> <span class="text-purple-400">&lt;</span><span class="text-blue-400">button</span> <span class="text-purple-400">onClick</span>={handleSwap} <span class="text-purple-400">disabled</span>={loading}<span class="text-purple-400">&gt;</span>
    {loading ? <span class="text-green-400">Swapping...</span> : <span class="text-green-400">Swap</span>}
  <span class="text-purple-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-purple-400">&gt;</span>;
}`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/actions" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Actions API
              </div>
            </Link>
            <Link href="/sdk/configuration" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Configuration
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

