'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SDKGettingStartedPage() {
  const tocItems = [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'installation', label: 'Installation' },
    { id: 'provider-setup', label: 'Provider Setup' },
    { id: 'first-component', label: 'Your First Component' },
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
            <Link href="/sdk" className="hover:text-slate-300 transition-colors">Hyperkit SDK</Link>
            <span>/</span>
            <span className="text-purple-400">Getting Started</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Getting Started</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Get up and running with Hyperkit SDK in minutes. This guide will help you install the SDK, set up the provider, and use your first component.
          </p>

          <h2 id="prerequisites" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Prerequisites
          </h2>
          <p className="leading-7 mb-4">
            Before you begin, ensure you have:
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Node.js 18+</h3>
                <p className="text-xs text-slate-400">Required for React applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">React 18+</h3>
                <p className="text-xs text-slate-400">Hyperkit SDK is built for React</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">A Web3 Wallet</h3>
                <p className="text-xs text-slate-400">MetaMask, Coinbase Wallet, or any EIP-1193 compatible wallet</p>
              </div>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <p className="leading-7 mb-4">
            Install Hyperkit SDK using your preferred package manager:
          </p>

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

          <Callout type="info" title="Peer Dependencies">
            Hyperkit SDK requires React 18+ and React DOM 18+ as peer dependencies. Make sure they are installed in your project.
          </Callout>

          <h2 id="provider-setup" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Provider Setup
          </h2>
          <p className="leading-7 mb-4">
            Wrap your application with <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">HyperkitProvider</code> and import the required styles:
          </p>

          <CodeBlock
            language="tsx"
            filename="App.tsx"
            code={`<span class="text-purple-400">import</span> { HyperkitProvider } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;
<span class="text-purple-400">import</span> <span class="text-green-400">'hyperkit/dist/hyperkit.css'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">HyperkitProvider</span> <span class="text-purple-400">defaultNetwork</span>=<span class="text-green-400">"metis-hyperion-testnet"</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">YourAppContent</span> <span class="text-purple-400">/&gt;</span>
    <span class="text-purple-400">&lt;/</span><span class="text-blue-400">HyperkitProvider</span><span class="text-purple-400">&gt;</span>
  );
}

<span class="text-purple-400">export default</span> <span class="text-blue-400">App</span>;`}
          />

          <h2 id="first-component" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Your First Component
          </h2>
          <p className="leading-7 mb-4">
            Use the pre-built <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">ConnectWallet</code> component to handle wallet interactions:
          </p>

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

          <p className="leading-7 mb-4 mt-6">
            Access wallet state using the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">useWallet</code> hook:
          </p>

          <CodeBlock
            language="tsx"
            filename="Profile.tsx"
            code={`<span class="text-purple-400">import</span> { useWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">Profile</span>() {
  <span class="text-purple-400">const</span> { wallet } = <span class="text-blue-400">useWallet</span>();
  
  <span class="text-purple-400">if</span> (!wallet.isConnected) <span class="text-purple-400">return</span> <span class="text-purple-400">&lt;</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>Please connect your wallet<span class="text-purple-400">&lt;/</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>;
  
  <span class="text-purple-400">return</span> <span class="text-purple-400">&lt;</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>Connected as: {wallet.account}<span class="text-purple-400">&lt;/</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>;
}`}
          />

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Explore Components</h3>
              <p className="text-xs text-slate-400 mb-3">Learn about all available components: Swap, Bridge, Staking, and more</p>
              <Link href="/sdk/components" className="text-xs text-purple-400 hover:underline inline-flex items-center gap-1">
                View Components <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Learn About Hooks</h3>
              <p className="text-xs text-slate-400 mb-3">Use hooks to access wallet state and manage alerts</p>
              <Link href="/sdk/hooks" className="text-xs text-purple-400 hover:underline inline-flex items-center gap-1">
                View Hooks <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Check Out Examples</h3>
              <p className="text-xs text-slate-400 mb-3">See real-world usage examples and integration patterns</p>
              <Link href="/sdk/examples" className="text-xs text-purple-400 hover:underline inline-flex items-center gap-1">
                View Examples <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Overview
              </div>
            </Link>
            <Link href="/sdk/components" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Components
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

