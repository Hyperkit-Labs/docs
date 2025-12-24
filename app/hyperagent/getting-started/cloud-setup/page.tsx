'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CloudSetupPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'supabase-setup', label: 'Supabase Setup' },
    { id: 'render-deployment', label: 'Render Deployment' },
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
            <span className="text-amber-400">Cloud Setup</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Cloud Setup</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Deploy Hyperagent using cloud services like Supabase and Render for a production-ready setup without local infrastructure.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            Cloud setup uses Supabase for PostgreSQL and Render for hosting the backend. This approach reduces local resource requirements and simplifies deployment.
          </p>

          <Callout type="info" title="Free Tier Available">
            Both Supabase and Render offer free tiers suitable for development and small-scale deployments.
          </Callout>

          <h2 id="supabase-setup" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Supabase Setup
          </h2>
          <p className="leading-7 mb-4">
            Set up your database on Supabase:
          </p>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">1. Create Project</h3>
              <p className="text-xs text-slate-400 mb-2">Sign up at supabase.com and create a new project</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">2. Get Connection String</h3>
              <p className="text-xs text-slate-400 mb-2">Go to Settings → Database and copy the connection string</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium text-white mb-2">3. Enable Extensions</h3>
              <p className="text-xs text-slate-400 mb-2">Enable pgvector extension in Supabase dashboard</p>
            </div>
          </div>

          <h2 id="render-deployment" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Render Deployment
          </h2>
          <p className="leading-7 mb-4">
            Deploy the backend to Render:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># 1. Connect GitHub repository to Render</span>
<span class="text-slate-500"># 2. Create new Web Service</span>
<span class="text-slate-500"># 3. Select Python environment</span>
<span class="text-slate-500"># 4. Set build command:</span>
<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> <span class="text-purple-400">-r</span> requirements.txt

<span class="text-slate-500"># 5. Set start command:</span>
<span class="text-blue-400">uvicorn</span> hyperagent.api.main:app <span class="text-purple-400">--host</span> <span class="text-green-400">0.0.0.0</span> <span class="text-purple-400">--port</span> <span class="text-green-400">$PORT</span>

<span class="text-slate-500"># 6. Add environment variables from .env</span>
<span class="text-slate-500"># 7. Deploy!</span>`}
          />

          <h2 id="configuration" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Configuration
          </h2>
          <p className="leading-7 mb-4">
            Configure environment variables in Render dashboard:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Database (Supabase)</span>
DATABASE_URL=postgresql://postgres:xxxxx@db.xxxxx.supabase.co:5432/postgres

<span class="text-slate-500"># LLM</span>
GEMINI_API_KEY=your_key

<span class="text-slate-500"># x402</span>
THIRDWEB_CLIENT_ID=your_client_id
THIRDWEB_SECRET_KEY=your_secret_key`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/getting-started/docker-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Docker Setup
              </div>
            </Link>
            <Link href="/hyperagent/getting-started/local-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Local Setup
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

