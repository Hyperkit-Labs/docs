'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ComponentPropsTable } from '@/components/pages/docs-component-props';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ConnectWalletPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'props', label: 'Props' },
    { id: 'basic-usage', label: 'Basic Usage' },
    { id: 'callbacks', label: 'Callbacks' },
    { id: 'customization', label: 'Customization' }
  ];

  const props = [
    {
      name: 'onSuccess',
      type: '(address: string) => void',
      required: false,
      description: 'Callback fired when wallet connects successfully'
    },
    {
      name: 'onError',
      type: '(error: string) => void',
      required: false,
      description: 'Callback fired when connection fails'
    },
    {
      name: 'onDisconnect',
      type: '() => void',
      required: false,
      description: 'Callback fired when wallet disconnects'
    },
    {
      name: 'showDropdown',
      type: 'boolean',
      default: 'true',
      required: false,
      description: 'Whether to show dropdown menu when connected'
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
            <span className="text-purple-400">ConnectWallet</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">ConnectWallet</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Interactive button component for wallet connection and account management. Handles connection, disconnection, and account display with a dropdown menu.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The ConnectWallet component provides a complete wallet connection interface. It automatically handles connection state, displays account information, and provides options to copy the address or disconnect.
          </p>

          <h2 id="props" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Props
          </h2>
          <ComponentPropsTable props={props} componentName="ConnectWallet" />

          <h2 id="basic-usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Basic Usage
          </h2>
          <p className="leading-7 mb-4">
            Use ConnectWallet in your application:
          </p>

          <CodeBlock
            language="tsx"
            filename="App.tsx"
            code={`<span class="text-purple-400">import</span> { ConnectWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">div</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">ConnectWallet</span> <span class="text-purple-400">/&gt;</span>
    <span class="text-purple-400">&lt;/</span><span class="text-blue-400">div</span><span class="text-purple-400">&gt;</span>
  );
}`}
          />

          <h2 id="callbacks" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Using Callbacks
          </h2>
          <p className="leading-7 mb-4">
            Handle connection events with callbacks:
          </p>

          <CodeBlock
            language="tsx"
            filename="WithCallbacks.tsx"
            code={`<span class="text-purple-400">import</span> { ConnectWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">const</span> <span class="text-blue-400">handleSuccess</span> = (address: <span class="text-purple-400">string</span>) => {
    <span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">'Connected:'</span>, address);
  };

  <span class="text-purple-400">const</span> <span class="text-blue-400">handleError</span> = (error: <span class="text-purple-400">string</span>) => {
    <span class="text-blue-400">console</span>.<span class="text-blue-400">error</span>(<span class="text-green-400">'Connection failed:'</span>, error);
  };

  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">ConnectWallet</span>
      <span class="text-purple-400">onSuccess</span>={handleSuccess}
      <span class="text-purple-400">onError</span>={handleError}
      <span class="text-purple-400">onDisconnect</span>={() => <span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-400">'Disconnected'</span>)}
    <span class="text-purple-400">/&gt;</span>
  );
}`}
          />

          <h2 id="customization" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Customization
          </h2>
          <p className="leading-7 mb-4">
            Disable dropdown menu for simpler display:
          </p>

          <CodeBlock
            language="tsx"
            filename="SimpleDisplay.tsx"
            code={`<span class="text-purple-400">import</span> { ConnectWallet } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">ConnectWallet</span> <span class="text-purple-400">showDropdown</span>={<span class="text-purple-400">false</span>} <span class="text-purple-400">/&gt;</span>
  );
}`}
          />

          <Callout type="info" title="Styling">
            ConnectWallet inherits styling from Container component. You can customize appearance using Container props or by overriding CSS classes.
          </Callout>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/components" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Components
              </div>
            </Link>
            <Link href="/sdk/components/swap" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Swap
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

