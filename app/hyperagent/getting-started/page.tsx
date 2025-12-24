'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, CheckCircle, Dock, Cloud, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function HyperagentGettingStartedPage() {
  const tocItems = [
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'installation-options', label: 'Installation Options' },
    { id: 'docker-setup', label: 'Docker Setup' },
    { id: 'cloud-setup', label: 'Cloud Setup' },
    { id: 'local-setup', label: 'Local Setup' },
    { id: 'first-contract', label: 'Your First Contract' }
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
            <span className="text-amber-400">Getting Started</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Getting Started</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Get up and running with Hyperagent. Choose the installation method that best fits your needs.
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
                <h3 className="text-sm font-medium text-white mb-1">Python 3.10+</h3>
                <p className="text-xs text-slate-400">Required for backend</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Node.js 18.18+</h3>
                <p className="text-xs text-slate-400">Required for frontend (optional)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">API Keys</h3>
                <p className="text-xs text-slate-400">Google Gemini API key, Thirdweb credentials</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
              <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-white mb-1">Database</h3>
                <p className="text-xs text-slate-400">PostgreSQL 15+ or Supabase (cloud)</p>
              </div>
            </div>
          </div>

          <h2 id="installation-options" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation Options
          </h2>
          <p className="leading-7 mb-6">
            Choose the installation method that works best for you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link
              href="/hyperagent/getting-started/docker-setup"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Dock className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Docker</h3>
              <p className="text-sm text-slate-400">Full stack with all services</p>
            </Link>
            <Link
              href="/hyperagent/getting-started/cloud-setup"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Cloud className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Cloud</h3>
              <p className="text-sm text-slate-400">Supabase + Render deployment</p>
            </Link>
            <Link
              href="/hyperagent/getting-started/local-setup"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <Terminal className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white group-hover:text-amber-400 mb-2">Local</h3>
              <p className="text-sm text-slate-400">Direct Python installation</p>
            </Link>
          </div>

          <h2 id="first-contract" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Your First Contract
          </h2>
          <p className="leading-7 mb-4">
            Once installed, generate your first contract using the API:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Generate a contract via API</span>
<span class="text-blue-400">curl</span> <span class="text-purple-400">-X</span> POST <span class="text-green-400">http://localhost:8000/api/v1/contracts/generate</span> \\
  <span class="text-purple-400">-H</span> <span class="text-green-400">"Content-Type: application/json"</span> \\
  <span class="text-purple-400">-d</span> <span class="text-green-400">'{
    "nlp_description": "Create a simple ERC20 token contract",
    "contract_type": "token"
  }'</span>`}
          />

          <Callout type="info" title="Quick Setup">
            For the fastest setup, use Docker Compose. It includes PostgreSQL, Redis, and all dependencies configured automatically.
          </Callout>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Overview
              </div>
            </Link>
            <Link href="/hyperagent/getting-started/docker-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Docker Setup
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

