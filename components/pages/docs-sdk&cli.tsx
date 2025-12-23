import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  TerminalSquare,
  Box,
  Copy,
  Info,
  ArrowLeft,
  ArrowRight,
  Package,
  Github
} from 'lucide-react';

export const SdkCliContent: React.FC = () => {
  return (
    <main className="flex-1 min-w-0 py-10 px-6 lg:px-12 pb-24 max-w-none">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
        <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-indigo-400">SDK &amp; CLI</span>
      </div>

      <h1 className="text-4xl font-medium tracking-tight text-white mb-6">SDK &amp; CLI</h1>
      <p className="text-lg text-slate-400 leading-relaxed mb-8">
        Hyperkit provides a robust Command Line Interface (CLI) for managing your infrastructure and a type-safe SDK for programmatic control.
      </p>

      {/* SECTION: INSTALLATION */}
      <div id="installation" className="scroll-mt-24 mb-16">
        <h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-2 pb-2 border-b border-white/5">Installation</h2>
        <p className="leading-7 mb-6 text-slate-400 font-light">
          The CLI is distributed as a standalone binary or via npm. We recommend installing it globally for easier access to project scaffolding commands.
        </p>

        {/* Tabbed Code Block */}
        <div className="mt-6 rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0F]">
          <div className="flex items-center gap-0 border-b border-white/10 bg-white/5 px-2">
            <button className="px-4 py-2 text-xs font-medium text-indigo-400 border-b-2 border-indigo-500">npm</button>
            <button className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">brew</button>
            <button className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">curl</button>
          </div>
          <div className="p-6 font-mono text-sm relative group">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 select-none">$</span>
              <span className="text-white">npm install -g</span>
              <span className="text-emerald-400">hyperkit@latest</span>
            </div>
            <button className="absolute top-4 right-4 p-2 rounded bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10">
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        <h3 className="text-base font-medium tracking-tight text-slate-200 mt-10 mb-3">Install the SDK</h3>
        <p className="leading-7 mb-6 text-slate-400 font-light">Add the core library to your project to start building agents.</p>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0F]">
          <div className="p-4 font-mono text-sm">
            <span className="text-slate-500 select-none">$</span>
            <span className="text-white"> npm install </span>
            <span className="text-emerald-400">@hyperkit/node @hyperkit/react</span>
          </div>
        </div>
      </div>

      {/* SECTION: CLI REFERENCE */}
      <div id="cli-reference" className="scroll-mt-24 mb-16 border-t border-white/5 pt-10">
        <h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-3 pb-2 border-b border-white/5">
          <TerminalSquare className="w-6 h-6 text-slate-400" />
          CLI Reference
        </h2>
        <p className="leading-7 mb-6 text-slate-400 font-light">
          The <code className="font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded text-indigo-200/90 border border-white/5">hk</code> command line tool is your primary interface for deploying and managing Hyperkit environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Command Card 1 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <code className="text-sm font-semibold text-white group-hover:text-indigo-400">hk init</code>
              <span className="text-[10px] uppercase tracking-wider font-medium text-slate-500 bg-white/5 px-2 py-0.5 rounded">Setup</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Initialize a new Hyperkit project in the current directory. Creates a configuration file and directory structure.</p>
            <div className="bg-black/40 rounded border border-white/5 p-2 font-mono text-[10px] text-slate-500">
              hk init <span className="text-indigo-400">--template</span> starter
            </div>
          </div>

          {/* Command Card 2 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <code className="text-sm font-semibold text-white group-hover:text-indigo-400">hk dev</code>
              <span className="text-[10px] uppercase tracking-wider font-medium text-slate-500 bg-white/5 px-2 py-0.5 rounded">Development</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Starts the local development server with hot-reloading for agent logic and workflow definitions.</p>
            <div className="bg-black/40 rounded border border-white/5 p-2 font-mono text-[10px] text-slate-500">
              hk dev <span className="text-indigo-400">--port</span> 3000
            </div>
          </div>

          {/* Command Card 3 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <code className="text-sm font-semibold text-white group-hover:text-indigo-400">hk deploy</code>
              <span className="text-[10px] uppercase tracking-wider font-medium text-slate-500 bg-white/5 px-2 py-0.5 rounded">Production</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Builds and pushes your configuration to the Hyperkit Cloud edge network.</p>
            <div className="bg-black/40 rounded border border-white/5 p-2 font-mono text-[10px] text-slate-500">
              hk deploy <span className="text-indigo-400">--env</span> production
            </div>
          </div>

          {/* Command Card 4 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <code className="text-sm font-semibold text-white group-hover:text-indigo-400">hk tunnel</code>
              <span className="text-[10px] uppercase tracking-wider font-medium text-slate-500 bg-white/5 px-2 py-0.5 rounded">Utility</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">Exposes your local instance to the internet via a secure tunnel, useful for webhook testing.</p>
            <div className="bg-black/40 rounded border border-white/5 p-2 font-mono text-[10px] text-slate-500">
              hk tunnel <span className="text-indigo-400">--region</span> us-east
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
          <Info className="w-4 h-4 text-indigo-400 shrink-0" />
          <p className="text-xs text-indigo-200/70 leading-5">Run <code className="text-indigo-300 bg-indigo-500/10 border-indigo-500/20 font-mono text-xs px-1.5 py-0.5 rounded">hk --help</code> to view the full list of available commands and flags.</p>
        </div>
      </div>

      {/* SECTION: SDK USAGE */}
      <div id="sdk-usage" className="scroll-mt-24 mb-16 border-t border-white/5 pt-10">
        <h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-3 pb-2 border-b border-white/5">
          <Box className="w-6 h-6 text-slate-400" />
          SDK Usage
        </h2>
        <p className="leading-7 mb-6 text-slate-400 font-light">
          The SDK is isomorphic and can be used on both the server (Node.js) and the client (Browser). Note that Admin operations are restricted to server-side usage.
        </p>

        {/* SDK Code Example */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0F] mb-8">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30"></div>
            </div>
            <span className="text-xs text-slate-500 font-mono">app/api/agent/route.ts</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-6">
              <span className="text-purple-400">import</span> {'{ Hyperkit }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@hyperkit/node'</span>;{'\n\n'}
              <span className="text-slate-500">// 1. Initialize the client</span>{'\n'}
              <span className="text-purple-400">const</span> hk = <span className="text-purple-400">new</span> <span className="text-blue-400">Hyperkit</span>({'{\n'}
              {'  '}<span className="text-slate-400">apiKey</span>: process.env.HK_SECRET_KEY,{'\n'}
              {'}'});{'\n\n'}
              <span className="text-purple-400">export</span> <span className="text-purple-400">async</span> <span className="text-purple-400">function</span> <span className="text-blue-400">POST</span>(req) {'{\n'}
              {'  '}<span className="text-slate-500">// 2. Create a new agent execution</span>{'\n'}
              {'  '}<span className="text-purple-400">const</span> {'{ executionId }'} = <span className="text-purple-400">await</span> hk.agents.<span className="text-blue-400">run</span>(<span className="text-green-400">'content-writer'</span>, {'{\n'}
              {'    '}<span className="text-slate-400">input</span>: {'{\n'}
              {'      '}<span className="text-slate-400">topic</span>: <span className="text-green-400">"The Future of WASM"</span>,{'\n'}
              {'      '}<span className="text-slate-400">tone</span>: <span className="text-green-400">"technical"</span>{'\n'}
              {'    }'}{'\n'}
              {'  }'});{'\n\n'}
              {'  '}<span className="text-purple-400">return</span> Response.<span className="text-blue-400">json</span>({'{ id: executionId }'});{'\n'}
              {'}'}
            </pre>
          </div>
        </div>

        <h3 className="text-base font-medium tracking-tight text-slate-200 mt-8 mb-3">Environment Variables</h3>
        <p className="text-sm text-slate-400 mb-4 leading-7 font-light">Ensure the following variables are set in your <code className="font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded text-indigo-200/90 border border-white/5">.env</code> file:</p>
        
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0A0A0F]">
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-3 pl-4 pr-3 text-xs font-mono text-indigo-300">HYPERKIT_SECRET_KEY</td>
                <td className="py-3 px-3 text-xs text-slate-400">Required. The secret key for your project environment.</td>
              </tr>
              <tr>
                <td className="py-3 pl-4 pr-3 text-xs font-mono text-indigo-300">HYPERKIT_PUBLIC_KEY</td>
                <td className="py-3 px-3 text-xs text-slate-400">Optional. Required only for client-side functionality.</td>
              </tr>
              <tr>
                <td className="py-3 pl-4 pr-3 text-xs font-mono text-indigo-300">HK_REGION</td>
                <td className="py-3 px-3 text-xs text-slate-400">Defaults to <code className="text-[10px] bg-white/5 px-1 rounded">us-east-1</code> if not specified.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-white/5">
        <Link href="/core-concepts" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-left">
          <div className="text-xs text-slate-500 mb-1">Previous</div>
          <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" />
            Core Concept
          </div>
        </Link>
        <Link href="/agents" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
          <div className="text-xs text-slate-500 mb-1">Next</div>
          <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
            Agents
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default SdkCliContent;