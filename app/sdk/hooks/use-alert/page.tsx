'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function UseAlertPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'return-value', label: 'Return Value' },
    { id: 'usage', label: 'Usage' }
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
            <span className="text-purple-400">useAlert</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">useAlert</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Hook for managing alert notifications and displaying messages to users.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            The <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">useAlert</code> hook provides methods to show alerts with different types (success, error, info, warning) and manage their display.
          </p>

          <h2 id="return-value" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Return Value
          </h2>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <CodeBlock
              language="typescript"
              code={`<span class="text-purple-400">interface</span> UseAlertReturn {
  showAlert: (
    type: <span class="text-green-400">'success'</span> | <span class="text-green-400">'error'</span> | <span class="text-green-400">'info'</span> | <span class="text-green-400">'warning'</span>,
    message: <span class="text-purple-400">string</span>,
    options?: {
      absolute?: <span class="text-purple-400">boolean</span>;
      position?: <span class="text-green-400">'top'</span> | <span class="text-green-400">'bottom'</span>;
      duration?: <span class="text-purple-400">number</span>;
    }
  ) => <span class="text-purple-400">void</span>;
  alertProps: <span class="text-purple-400">object</span>;
}`}
            />
          </div>

          <h2 id="usage" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Usage
          </h2>
          <CodeBlock
            language="tsx"
            filename="UseAlertExample.tsx"
            code={`<span class="text-purple-400">import</span> { useAlert, Alert } <span class="text-purple-400">from</span> <span class="text-green-400">'hyperkit'</span>;

<span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">const</span> { showAlert, alertProps } = <span class="text-blue-400">useAlert</span>();
  
  <span class="text-purple-400">const</span> <span class="text-blue-400">handleSuccess</span> = () => {
    showAlert(<span class="text-green-400">'success'</span>, <span class="text-green-400">'Transaction successful!'</span>, {
      absolute: <span class="text-purple-400">true</span>,
      position: <span class="text-green-400">'top'</span>
    });
  };
  
  <span class="text-purple-400">return</span> (
    <span class="text-purple-400">&lt;</span><span class="text-blue-400">div</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">button</span> <span class="text-purple-400">onClick</span>={handleSuccess}<span class="text-purple-400">&gt;</span>
        Show Alert
      <span class="text-purple-400">&lt;/</span><span class="text-blue-400">button</span><span class="text-purple-400">&gt;</span>
      <span class="text-purple-400">&lt;</span><span class="text-blue-400">Alert</span> {...alertProps} <span class="text-purple-400">/&gt;</span>
    <span class="text-purple-400">&lt;/</span><span class="text-blue-400">div</span><span class="text-purple-400">&gt;</span>
  );
}`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/sdk/hooks/use-wallet" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                useWallet
              </div>
            </Link>
            <Link href="/sdk/actions" className="group block p-4 rounded-xl border border-white/10 hover:border-purple-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-purple-400 flex items-center justify-end gap-2">
                Actions API
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

