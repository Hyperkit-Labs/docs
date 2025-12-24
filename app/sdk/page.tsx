'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, Package, Zap, Layers, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function SDKPage() {
  const tocItems = [
    { id: 'what-is', label: 'What is Hyperkit SDK?' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'components', label: 'Available Components' },
    { id: 'next-steps', label: 'Next Steps' }
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
            <span className="text-purple-400">Hyperkit SDK</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Hyperkit SDK</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            A modern React SDK for building decentralized applications with ease. Hyperkit provides high-level components and hooks for wallet connections, token swaps, bridging, staking, and more.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              Active
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium">
              v1.0.0
            </span>
          </div>

          <h2 id="what-is" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What is Hyperkit SDK?
          </h2>
          <p className="leading-7 mb-6">
            Hyperkit SDK is a comprehensive React library that simplifies building decentralized applications. It provides pre-built components, hooks, and utilities for common Web3 operations, allowing developers to focus on building features rather than low-level blockchain interactions.
          </p>

          <Callout type="info" title="Type Safe">
            Written entirely in TypeScript with full declaration support, providing excellent developer experience and type safety.
          </Callout>

          <h2 id="key-features" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Layers className="w-5 h-5 text-purple-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Multi-Chain Support</h3>
              <p className="text-xs text-slate-400">Ready-to-use configurations for popular EVM chains</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Pre-built Components</h3>
              <p className="text-xs text-slate-400">ConnectWallet, Swap, Bridge, Staking, and more</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Code2 className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Programmatic API</h3>
              <p className="text-xs text-slate-400">Use actions API for custom implementations</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Package className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Modular Styles</h3>
              <p className="text-xs text-slate-400">Tailwind-compatible CSS that can be easily customized</p>
            </div>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Quick Start
          </h2>
          <p className="leading-7 mb-4">
            Get started with Hyperkit SDK in three simple steps:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">1. Install the SDK</h3>
              <CodeBlock
                showTabs
                tabs={[
                  {
                    name: 'npm',
                    code: '<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span> <span class="text-green-400">hyperkit</span>'
                  },
                  {
                    name: 'pnpm',
                    code: '<span class="text-blue-400">pnpm</span> <span class="text-purple-400">add</span> <span class="text-green-400">hyperkit</span>'
                  },
                  {
                    name: 'yarn',
                    code: '<span class="text-blue-400">yarn</span> <span class="text-purple-400">add</span> <span class="text-green-400">hyperkit</span>'
                  }
                ]}
                code=""
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">2. Setup Provider</h3>
              <CodeBlock
                language="tsx"
                filename="App.tsx"
                code={`<span class="text-purple-400">import</span> { HyperkitProvider } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;
<span class="text-purple-400">import</span> <span class="text-green-400">'hyperkit/dist/hyperkit.css'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">HyperkitProvider</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">YourAppContent</span> <span class="text-purple-400">/&gt;</span>
    <span class="text-purple-400">&lt;/</span><span class="text-blue-400">HyperkitProvider</span><span class="text-purple-400">&gt;</span>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Use Components</h3>
              <CodeBlock
                language="tsx"
                filename="Header.tsx"
                code={`<span class="text-purple-400">import</span> { ConnectWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">Header</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">header</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">ConnectWallet</span> <span class="text-purple-400">/&gt;</span>
    <span class="text-purple-400">&lt;/</span><span class="text-blue-400">header</span><span class="text-purple-400">&gt;</span>
  );
}`}
              />
            </div>
          </div>

          <h2 id="components" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Available Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">ConnectWallet</h3>
              <p className="text-xs text-slate-400">Interactive button for wallet connection and account management</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Swap</h3>
              <p className="text-xs text-slate-400">Token exchange interface with slippage protection</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Bridge</h3>
              <p className="text-xs text-slate-400">Cross-chain bridging interface</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Staking</h3>
              <p className="text-xs text-slate-400">Yield and staking management</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Faucet</h3>
              <p className="text-xs text-slate-400">Testnet token distribution</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Container</h3>
              <p className="text-xs text-slate-400">Layout wrapper for kit components</p>
            </div>
          </div>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/sdk/getting-started"
              className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-purple-400">Getting Started</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400" />
              </div>
              <p className="text-sm text-slate-400">Install and set up Hyperkit SDK in your project</p>
            </Link>
            <Link
              href="/sdk/components"
              className="group block p-6 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-purple-400">Components</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400" />
              </div>
              <p className="text-sm text-slate-400">Explore all available components and their props</p>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

