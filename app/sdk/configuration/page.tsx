'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft, Globe, Coins, FileCode } from 'lucide-react';
import Link from 'next/link';

export default function ConfigurationPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'networks', label: 'Networks' },
    { id: 'tokens', label: 'Tokens' },
    { id: 'contracts', label: 'Contracts' }
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
            <span className="text-purple-400">Configuration</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Configuration</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Access network configurations, token addresses, and contract addresses for supported chains.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Hyperkit SDK provides pre-configured networks, tokens, and contracts. You can access these configurations directly or customize them for your needs.
          </p>

          <CodeBlock
            language="typescript"
            filename="ConfigExample.ts"
            code={`<span class="text-purple-400">import</span> { NETWORKS, TOKENS, CONTRACT_ADDRESSES } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-slate-500">// Access network details</span>
<span class="text-purple-400">const</span> network = NETWORKS.BASE_SEPOLIA;

<span class="text-slate-500">// Access token addresses</span>
<span class="text-purple-400">const</span> usdcAddress = TOKENS.USDC.address;

<span class="text-slate-500">// Access contract addresses</span>
<span class="text-purple-400">const</span> poolAddress = CONTRACT_ADDRESSES.LIQUIDITY_POOL;`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-8">
            <Link href="/sdk/configuration/networks" className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <Globe className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-purple-400 mb-2">Networks</h3>
              <p className="text-sm text-slate-400">Supported blockchain networks</p>
            </Link>
            <Link href="/sdk/configuration/tokens" className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <Coins className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-purple-400 mb-2">Tokens</h3>
              <p className="text-sm text-slate-400">Token addresses and symbols</p>
            </Link>
            <Link href="/sdk/configuration/contracts" className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <FileCode className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-purple-400 mb-2">Contracts</h3>
              <p className="text-sm text-slate-400">Contract addresses and ABIs</p>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/actions/programmatic-usage" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Programmatic Usage
              </div>
            </Link>
            <Link href="/sdk/configuration/networks" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Networks
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

