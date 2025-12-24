'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DockerSetupPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'configuration', label: 'Configuration' }
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
            <Link href="/hyperagent/getting-started" className="hover:text-slate-300 transition-colors">Getting Started</Link>
            <span>/</span>
            <span className="text-amber-400">Docker Setup</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Docker Setup</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Run Hyperagent with Docker Compose for a complete, isolated environment with all services included.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Docker Compose provides the easiest way to run Hyperagent with all dependencies. It includes PostgreSQL, Redis, and the backend API in isolated containers.
          </p>

          <h2 id="prerequisites" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Prerequisites
          </h2>
          <div className="space-y-3 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Docker 24.0+</h3>
              <p className="text-xs text-slate-400">Required for containerized deployment</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">Docker Compose 2.20+</h3>
              <p className="text-xs text-slate-400">Comes with Docker Desktop</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-1">API Keys</h3>
              <p className="text-xs text-slate-400">Gemini API key, Thirdweb credentials</p>
            </div>
          </div>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Quick Start
          </h2>
          <p className="leading-7 mb-4">
            Start all services with Docker Compose:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Clone repository</span>
<span class="text-blue-400">git</span> <span class="text-purple-400">clone</span> <span class="text-green-400">https://github.com/Hyperkit-Labs/HyperAgent.git</span>
<span class="text-blue-400">cd</span> HyperAgent

<span class="text-slate-500"># Copy environment file</span>
<span class="text-blue-400">cp</span> env.example .env

<span class="text-slate-500"># Edit .env with your API keys</span>
<span class="text-blue-400">nano</span> .env

<span class="text-slate-500"># Start all services</span>
<span class="text-blue-400">docker-compose</span> up <span class="text-purple-400">-d</span>

<span class="text-slate-500"># View logs</span>
<span class="text-blue-400">docker-compose</span> logs <span class="text-purple-400">-f</span>

<span class="text-slate-500"># Stop services</span>
<span class="text-blue-400">docker-compose</span> down`}
          />

          <Callout type="info" title="First Build">
            The first build may take 25-45 minutes as it downloads dependencies and builds images. Subsequent builds use cached layers and are much faster (5-15 minutes).
          </Callout>

          <h2 id="configuration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Configuration
          </h2>
          <p className="leading-7 mb-4">
            Configure environment variables in the `.env` file:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Required - LLM</span>
GEMINI_API_KEY=your_gemini_api_key

<span class="text-slate-500"># Required - x402 (Avalanche)</span>
THIRDWEB_CLIENT_ID=your_client_id
THIRDWEB_SECRET_KEY=your_secret_key
THIRDWEB_SERVER_WALLET_ADDRESS=0x...
MERCHANT_WALLET_ADDRESS=0x...

<span class="text-slate-500"># Database (auto-configured in Docker)</span>
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/hyperagent

<span class="text-slate-500"># Redis (auto-configured in Docker)</span>
REDIS_URL=redis://redis:6379`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/getting-started" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Getting Started
              </div>
            </Link>
            <Link href="/hyperagent/getting-started/cloud-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Cloud Setup
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

