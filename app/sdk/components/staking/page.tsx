'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ComponentPropsTable } from '@/components/pages/docs-component-props';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StakingPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'props', label: 'Props' },
    { id: 'usage', label: 'Usage' }
  ];

  const props = [
    {
      name: 'onSuccess',
      type: '(txHash: string) => void',
      required: false,
      description: 'Callback fired when staking succeeds'
    },
    {
      name: 'onError',
      type: '(error: string) => void',
      required: false,
      description: 'Callback fired when staking fails'
    }
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
            <Link href="/sdk/components" className="hover:text-slate-300 transition-colors">Components</Link>
            <span>/</span>
            <span className="text-purple-400">Staking</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Staking</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Yield and staking management interface for depositing tokens, viewing rewards, and unstaking.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The Staking component provides a complete interface for staking operations. It displays staking pools, current stakes, rewards, and allows users to stake or unstake tokens.
          </p>

          <h2 id="props" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Props
          </h2>
          <ComponentPropsTable props={props} componentName="Staking" />

          <h2 id="usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Usage
          </h2>
          <CodeBlock
            language="tsx"
            filename="StakingExample.tsx"
            code={`<span class="text-purple-400">import</span> { Staking } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">Staking</span> <span class="text-purple-400">/&gt;</span>
  );
}`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/components/bridge" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Bridge
              </div>
            </Link>
            <Link href="/sdk/components/faucet" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Faucet
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

