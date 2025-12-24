'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, Wallet, Shield, Globe, Palette, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function AAHyperwalletPage() {
  const tocItems = [
    { id: 'what-is', label: 'What is AA Hyperwallet?' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'quick-start', label: 'Quick Start' },
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
            <span className="text-violet-400">AA Hyperwallet</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">AA Hyperwallet</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Build network-agnostic, gasless smart wallet infrastructure that works seamlessly across EVM, Solana, and SUI blockchains.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              Active
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium">
              v0.1.0
            </span>
          </div>

          <h2 id="what-is" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What is AA Hyperwallet?
          </h2>
          <p className="leading-7 mb-6">
            AA Hyperwallet is a visual builder for smart wallet authentication systems. Configure authentication methods, network settings, and branding options through an intuitive interface. Preview your configuration in real-time and export ready-to-use React components or JSON configurations.
          </p>

          <Callout type="info" title="Account Abstraction">
            AA Hyperwallet leverages Account Abstraction (ERC-4337 and EIP-7702) to enable gasless transactions, social logins, and flexible authentication methods.
          </Callout>

          <h2 id="key-features" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-5 h-5 text-violet-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Multiple Authentication Methods</h3>
              <p className="text-xs text-slate-400">Email, SMS, Social logins, and Passkey support</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Wallet className="w-5 h-5 text-yellow-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">External Wallet Integration</h3>
              <p className="text-xs text-slate-400">Connect MetaMask, Coinbase, WalletConnect, and Smart Wallets</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Globe className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Multi-Chain Support</h3>
              <p className="text-xs text-slate-400">Configure networks including Hyperion, Base, Mantle, and more</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Code2 className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Code Generation</h3>
              <p className="text-xs text-slate-400">Export React components or JSON configuration files</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Palette className="w-5 h-5 text-purple-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Customizable Branding</h3>
              <p className="text-xs text-slate-400">Theme, colors, fonts, and logo customization</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-5 h-5 text-indigo-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Session Management</h3>
              <p className="text-xs text-slate-400">Configure persistence, duration, and spending limits</p>
            </div>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Quick Start
          </h2>
          <p className="leading-7 mb-4">
            Get started with AA Hyperwallet in three steps:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">1. Install</h3>
              <CodeBlock
                language="bash"
                code={`<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span> <span class="text-green-400">aa-hyperwallet</span>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">2. Configure</h3>
              <CodeBlock
                language="tsx"
                filename="App.tsx"
                code={`<span class="text-purple-400">import</span> { SmartWalletAuth } <span class="text-purple-400">from</span> <span class="text-green-400">'aa-hyperwallet'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">SmartWalletAuth</span>
      <span class="text-purple-400">email</span>={<span class="text-purple-400">true</span>}
      <span class="text-purple-400">social</span>={<span class="text-purple-400">true</span>}
      <span class="text-purple-400">networks</span>={[<span class="text-green-400">'hyperion'</span>, <span class="text-green-400">'base'</span>]}
    <span class="text-purple-400">/&gt;</span>
  );
}`}
              />
            </div>
          </div>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/aa-hyperwallet/getting-started"
              className="group block p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-violet-400">Getting Started</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-violet-400" />
              </div>
              <p className="text-sm text-slate-400">Install and set up AA Hyperwallet in your project</p>
            </Link>
            <Link
              href="/aa-hyperwallet/builder"
              className="group block p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-violet-400">Visual Builder</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-violet-400" />
              </div>
              <p className="text-sm text-slate-400">Use the visual builder to configure your wallet</p>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}

