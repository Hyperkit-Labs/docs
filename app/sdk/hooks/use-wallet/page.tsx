'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function UseWalletPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'return-value', label: 'Return Value' },
    { id: 'usage', label: 'Usage' },
    { id: 'methods', label: 'Methods' }
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
            <Link href="/sdk/hooks" className="hover:text-slate-300 transition-colors">Hooks</Link>
            <span>/</span>
            <span className="text-purple-400">useWallet</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">useWallet</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Hook for accessing wallet state, account information, provider details, and connection methods.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">useWallet</code> hook provides access to the current wallet state and methods to connect, disconnect, and switch networks.
          </p>

          <h2 id="return-value" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Return Value
          </h2>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <CodeBlock
              language="typescript"
              code={`<span class="text-purple-400">interface</span> UseWalletReturn {
  wallet: {
    isConnected: <span class="text-purple-400">boolean</span>;
    account: <span class="text-purple-400">string</span>;
    chainId: <span class="text-purple-400">string</span> | <span class="text-purple-400">null</span>;
    provider: <span class="text-blue-400">ethers</span>.<span class="text-blue-400">BrowserProvider</span> | <span class="text-purple-400">null</span>;
    signer: <span class="text-blue-400">ethers</span>.<span class="text-blue-400">Signer</span> | <span class="text-purple-400">null</span>;
    isLoading: <span class="text-purple-400">boolean</span>;
    error: <span class="text-purple-400">string</span> | <span class="text-purple-400">null</span>;
  };
  connectWallet: () => <span class="text-purple-400">Promise</span>&lt;<span class="text-purple-400">void</span>&gt;;
  disconnectWallet: () => <span class="text-purple-400">void</span>;
  switchNetwork: (networkKey: <span class="text-purple-400">string</span>) => <span class="text-purple-400">Promise</span>&lt;<span class="text-purple-400">boolean</span>&gt;;
  isCorrectNetwork: (networkKey?: <span class="text-purple-400">string</span>) => <span class="text-purple-400">boolean</span>;
}`}
            />
          </div>

          <h2 id="usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Usage
          </h2>
          <CodeBlock
            language="tsx"
            filename="UseWalletExample.tsx"
            code={`<span class="text-purple-400">import</span> { useWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">Profile</span>() {
  <span class="text-purple-400">const</span> { wallet, connectWallet, disconnectWallet } = <span class="text-blue-400">useWallet</span>();
  
  <span class="text-purple-400">if</span> (!wallet.isConnected) {
    <span class="text-purple-400">return</span> (
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">button</span> <span class="text-purple-400">onClick</span>={connectWallet}<span class="text-purple-400">&gt;</span>
        Connect Wallet
      <span class="text-purple-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-purple-400">&gt;</span>
    );
  }
  
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">div</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>Connected: {wallet.account}<span class="text-purple-400">&lt;/</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>Chain ID: {wallet.chainId}<span class="text-purple-400">&lt;/</span><span class="text-blue-400">p</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">button</span> <span class="text-purple-400">onClick</span>={disconnectWallet}<span class="text-purple-400">&gt;</span>
        Disconnect
      <span class="text-purple-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-purple-400">&gt;</span>
    <span class="text-purple-400">&lt;/</span><span class="text-blue-400">div</span><span class="text-purple-400">&gt;</span>
  );
}`}
          />

          <h2 id="methods" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Methods
          </h2>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">connectWallet</h3>
              <p className="text-xs text-slate-400 mb-3">Connects to the user's wallet. Prompts for connection if not already connected.</p>
              <CodeBlock
                language="typescript"
                code={`<span class="text-purple-400">const</span> { connectWallet } = <span class="text-blue-400">useWallet</span>();
<span class="text-purple-400">await</span> connectWallet();`}
              />
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">disconnectWallet</h3>
              <p className="text-xs text-slate-400 mb-3">Disconnects the current wallet and clears wallet state.</p>
              <CodeBlock
                language="typescript"
                code={`<span class="text-purple-400">const</span> { disconnectWallet } = <span class="text-blue-400">useWallet</span>();
disconnectWallet();`}
              />
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">switchNetwork</h3>
              <p className="text-xs text-slate-400 mb-3">Switches to a different network. Returns true if successful.</p>
              <CodeBlock
                language="typescript"
                code={`<span class="text-purple-400">const</span> { switchNetwork } = <span class="text-blue-400">useWallet</span>();
<span class="text-purple-400">const</span> success = <span class="text-purple-400">await</span> switchNetwork(<span class="text-green-400">'metis-hyperion-testnet'</span>);`}
              />
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <h3 className="text-sm font-medium text-white mb-2">isCorrectNetwork</h3>
              <p className="text-xs text-slate-400 mb-3">Checks if the current network matches the specified network key.</p>
              <CodeBlock
                language="typescript"
                code={`<span class="text-purple-400">const</span> { isCorrectNetwork } = <span class="text-blue-400">useWallet</span>();
<span class="text-purple-400">const</span> isCorrect = isCorrectNetwork(<span class="text-green-400">'metis-hyperion-testnet'</span>);`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/hooks" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Hooks
              </div>
            </Link>
            <Link href="/sdk/hooks/use-alert" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                useAlert
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

