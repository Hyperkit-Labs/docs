'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WebSocketAPIPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'connection', label: 'Connection' },
    { id: 'events', label: 'Events' }
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
            <Link href="/hyperagent" className="hover:text-slate-300 transition-colors">Hyperagent</Link>
            <span>/</span>
            <Link href="/hyperagent/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-amber-400">WebSocket</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">WebSocket API</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Real-time workflow updates via WebSocket connections.
          </p>

          <h2 id="connection" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Connection
          </h2>
          <CodeBlock
            language="javascript"
            code={`<span class="text-purple-400">const</span> ws = <span class="text-purple-400">new</span> <span class="text-blue-400">WebSocket</span>(<span class="text-green-400">'ws://localhost:8000/ws'</span>);

ws.onopen = () => {
  <span class="text-slate-500">// Subscribe to workflow updates</span>
  ws.send(<span class="text-blue-400">JSON</span>.stringify({
    type: <span class="text-green-400">'subscribe'</span>,
    workflow_id: <span class="text-green-400">'uuid'</span>
  }));
};

ws.onmessage = (event) => {
  <span class="text-purple-400">const</span> data = <span class="text-blue-400">JSON</span>.parse(event.data);
  <span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(data);
};`}
          />

          <h2 id="events" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Events
          </h2>
          <p className="leading-7 mb-4">
            WebSocket sends real-time events for workflow progress:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">progress</h3>
              <p className="text-xs text-slate-400">Workflow progress updates</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">stage_change</h3>
              <p className="text-xs text-slate-400">Workflow stage changes</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">completed</h3>
              <p className="text-xs text-slate-400">Workflow completion</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">error</h3>
              <p className="text-xs text-slate-400">Error notifications</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/api-reference/x402" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                x402 API
              </div>
            </Link>
            <Link href="/hyperagent/cli" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                CLI
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

