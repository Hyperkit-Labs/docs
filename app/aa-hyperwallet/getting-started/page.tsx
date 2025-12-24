'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AAHyperwalletGettingStartedPage() {
  const tocItems = [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'installation', label: 'Installation' },
    { id: 'first-wallet', label: 'Your First Wallet' },
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
            <Link href="/aa-hyperwallet" className="hover:text-slate-300 transition-colors">AA Hyperwallet</Link>
            <span>/</span>
            <span className="text-violet-400">Getting Started</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Getting Started</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Get up and running with AA Hyperwallet in minutes. This guide will help you install the package, configure your first wallet, and export the component.
          </p>

          <h2 id="prerequisites" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Prerequisites
          </h2>
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
                <p className="text-xs text-slate-400">AA Hyperwallet is built for React</p>
              </div>
            </div>
          </div>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <p className="leading-7 mb-4">
            Install AA Hyperwallet using npm:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span> <span class="text-green-400">aa-hyperwallet</span>`}
          />

          <h2 id="first-wallet" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Your First Wallet
          </h2>
          <p className="leading-7 mb-4">
            Use the SmartWalletAuth component in your application:
          </p>

          <CodeBlock
            language="tsx"
            filename="App.tsx"
            code={`<span class="text-purple-400">import</span> { SmartWalletAuth } <span class="text-purple-400">from</span> <span class="text-green-400">'aa-hyperwallet'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">SmartWalletAuth</span>
      <span class="text-purple-400">email</span>={<span class="text-purple-400">true</span>}
      <span class="text-purple-400">sms</span>={<span class="text-purple-400">false</span>}
      <span class="text-purple-400">social</span>={<span class="text-purple-400">true</span>}
      <span class="text-purple-400">passkey</span>={<span class="text-purple-400">true</span>}
      <span class="text-purple-400">wallets</span>={{
        smartAccount: <span class="text-green-400">"eip7702"</span>,
        external: <span class="text-purple-400">true</span>,
        providers: [<span class="text-green-400">"smartWallet"</span>, <span class="text-green-400">"metamask"</span>, <span class="text-green-400">"coinbase"</span>]
      }}
      <span class="text-purple-400">networks</span>={[<span class="text-green-400">"hyperion"</span>, <span class="text-green-400">"base"</span>, <span class="text-green-400">"mantle"</span>]}
      <span class="text-purple-400">branding</span={{
        theme: <span class="text-green-400">"dark"</span>,
        primaryColor: <span class="text-green-400">"#9333EA"</span>,
        cornerRadius: <span class="text-green-400">"xl"</span>
      }}
    <span class="text-purple-400">/&gt;</span>
  );
}`}
          />

          <Callout type="info" title="Visual Builder">
            Use the visual builder to configure your wallet settings interactively and export the component code.
          </Callout>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next Steps
          </h2>
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Explore Core Concepts</h3>
              <p className="text-xs text-slate-400 mb-3">Learn about Account Abstraction, authentication methods, and sessions</p>
              <Link href="/aa-hyperwallet/concepts" className="text-xs text-violet-400 hover:underline inline-flex items-center gap-1">
                View Concepts <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Use Visual Builder</h3>
              <p className="text-xs text-slate-400 mb-3">Configure your wallet settings visually and export code</p>
              <Link href="/aa-hyperwallet/builder" className="text-xs text-violet-400 hover:underline inline-flex items-center gap-1">
                Open Builder <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Check Out Examples</h3>
              <p className="text-xs text-slate-400 mb-3">See real-world usage examples and integration patterns</p>
              <Link href="/aa-hyperwallet/examples" className="text-xs text-violet-400 hover:underline inline-flex items-center gap-1">
                View Examples <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/aa-hyperwallet" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Overview
              </div>
            </Link>
            <Link href="/aa-hyperwallet/concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-violet-400 flex items-center justify-end gap-2">
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

