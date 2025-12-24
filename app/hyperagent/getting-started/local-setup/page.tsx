'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LocalSetupPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'installation', label: 'Installation' },
    { id: 'database-setup', label: 'Database Setup' },
    { id: 'running', label: 'Running the Server' }
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
            <span className="text-amber-400">Local Setup</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Local Setup</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Install and run Hyperagent directly on your machine for development.
          </p>

          <h2 id="installation" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Installation
          </h2>
          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Clone repository</span>
<span class="text-blue-400">git</span> <span class="text-purple-400">clone</span> <span class="text-green-400">https://github.com/Hyperkit-Labs/hyperagent.git</span>
<span class="text-blue-400">cd</span> hyperagent

<span class="text-slate-500"># Create virtual environment</span>
<span class="text-blue-400">python3</span> <span class="text-purple-400">-m</span> venv venv
<span class="text-blue-400">source</span> venv/bin/activate  <span class="text-slate-500"># Windows: venv\\Scripts\\activate</span>

<span class="text-slate-500"># Install dependencies</span>
<span class="text-blue-400">pip</span> <span class="text-purple-400">install</span> <span class="text-purple-400">-r</span> requirements.txt`}
          />

          <h2 id="database-setup" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Database Setup
          </h2>
          <p className="leading-7 mb-4">
            Set up PostgreSQL database:
          </p>

          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Create database</span>
<span class="text-blue-400">createdb</span> hyperagent

<span class="text-slate-500"># Run migrations</span>
<span class="text-blue-400">alembic</span> upgrade head`}
          />

          <h2 id="running" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Running the Server
          </h2>
          <CodeBlock
            language="bash"
            code={`<span class="text-slate-500"># Set environment variables</span>
<span class="text-blue-400">export</span> DATABASE_URL=postgresql://user:pass@localhost/hyperagent
<span class="text-blue-400">export</span> GEMINI_API_KEY=your_key

<span class="text-slate-500"># Start development server</span>
<span class="text-blue-400">uvicorn</span> hyperagent.api.main:app <span class="text-purple-400">--reload</span>`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/getting-started/cloud-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Cloud Setup
              </div>
            </Link>
            <Link href="/hyperagent/getting-started/first-contract" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                First Contract
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

