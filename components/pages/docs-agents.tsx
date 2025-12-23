import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  FileCode,
  Cpu,
  Wrench,
  BrainCircuit,
  ShieldCheck,
  Users,
  Activity,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  LayoutTemplate
} from 'lucide-react';

export const AgentsContent: React.FC = () => {
  return (
    <main className="flex-1 min-w-0 py-10 px-6 lg:px-12 pb-24 max-w-none">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
        <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="#" className="hover:text-slate-300 transition-colors">Platform</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-indigo-400">Agents</span>
      </div>

      <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Agents</h1>
      <p className="text-lg text-slate-400 leading-relaxed mb-8">
        Agents are autonomous units of logic capable of executing tasks, using tools, and maintaining state. They are the fundamental building blocks of the Hyperkit platform.
      </p>

      {/* SECTION: DEFINING AN AGENT */}
      <div id="defining-agents" className="scroll-mt-24 mb-16">
        <h2 className="text-xl font-medium tracking-tight text-white mb-6 pb-2 border-b border-white/5">Defining an Agent</h2>
        <p className="leading-7 mb-6 text-slate-400 font-light">
          Agents are defined using the <code className="font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded text-indigo-200/90 border border-white/5">defineAgent</code> function. This function accepts a configuration object that specifies the agent's behavior, model, and available tools.
        </p>

        {/* Agent Definition Code Block */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0F] mb-6">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs text-slate-400 font-mono">agents/analyst.ts</span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium bg-white/5 px-2 py-0.5 rounded">TypeScript</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-6">
              <span className="text-purple-400">import</span> {'{ defineAgent, z }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@hyperkit/sdk'</span>;{'\n\n'}
              <span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-blue-400">defineAgent</span>({'{\n'}
              {'  '}<span className="text-slate-400">id</span>: <span className="text-green-400">'data-analyst'</span>,{'\n'}
              {'  '}<span className="text-slate-400">model</span>: <span className="text-green-400">'gpt-4-turbo'</span>,{'\n'}
              {'  '}<span className="text-slate-400">description</span>: <span className="text-green-400">'Analyzes SQL datasets and generates reports'</span>,{'\n  \n'}
              {'  '}<span className="text-slate-500">// Input schema validation</span>{'\n'}
              {'  '}<span className="text-slate-400">input</span>: z.<span className="text-blue-400">object</span>({'{\n'}
              {'    '}<span className="text-slate-400">query</span>: z.<span className="text-blue-400">string</span>(),{'\n'}
              {'    '}<span className="text-slate-400">format</span>: z.<span className="text-blue-400">enum</span>([<span className="text-green-400">'json'</span>, <span className="text-green-400">'markdown'</span>]).<span className="text-blue-400">default</span>(<span className="text-green-400">'markdown'</span>){'\n'}
              {'  }'}),{'\n\n'}
              {'  '}<span className="text-slate-500">// Tools available to this agent</span>{'\n'}
              {'  '}<span className="text-slate-400">tools</span>: [<span className="text-green-400">'sql-connector'</span>, <span className="text-green-400">'chart-generator'</span>],{'\n\n'}
              {'  '}<span className="text-slate-500">// System prompt instruction</span>{'\n'}
              {'  '}<span className="text-slate-400">instructions</span>: <span className="text-green-400">`{'\n'}
              {'    '}You are an expert data analyst.{'\n'}
              {'    '}1. Query the database based on the user request.{'\n'}
              {'    '}2. Analyze the trends.{'\n'}
              {'    '}3. Output the result in the requested format.{'\n'}
              {'  '}`</span>{'\n'}
              {'}'});
            </pre>
          </div>
        </div>
      </div>

      {/* SECTION: CAPABILITIES */}
      <div id="capabilities" className="scroll-mt-24 mb-16 border-t border-white/5 pt-10">
        <h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-3 pb-2 border-b border-white/5">
          <Cpu className="w-6 h-6 text-slate-400" />
          Capabilities
        </h2>
        <p className="leading-7 mb-6 text-slate-400 font-light">
          Agents interact with the outside world through tools and maintain continuity through memory. These capabilities are modular and can be mixed and matched.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Capability Card 1 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors">
            <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <Wrench className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Tool Execution</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Agents can call external APIs, query databases, or execute custom TypeScript functions securely via the Tool Protocol.
            </p>
          </div>

          {/* Capability Card 2 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors">
            <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Long-term Memory</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Built-in vector storage allows agents to recall past interactions and semantically search documentation or knowledge bases.
            </p>
          </div>

          {/* Capability Card 3 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors">
            <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Guardrails</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Define strict validation rules for both input and output to ensure your agents behave predictably and safely.
            </p>
          </div>

          {/* Capability Card 4 */}
          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/30 transition-colors">
            <div className="w-8 h-8 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
              <Users className="w-4 h-4 text-orange-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-2">Multi-Agent Handoff</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Agents can delegate sub-tasks to other specialized agents, forming a collaborative swarm to solve complex problems.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: LIFECYCLE */}
      <div id="lifecycle" className="scroll-mt-24 mb-16 border-t border-white/5 pt-10">
        <h2 className="text-xl font-medium tracking-tight text-white mb-6 flex items-center gap-3 pb-2 border-b border-white/5">
          <Activity className="w-6 h-6 text-slate-400" />
          Execution Lifecycle
        </h2>
        <p className="leading-7 mb-6 text-slate-400 font-light">Understanding the agent execution loop is critical for debugging and optimization. An agent run consists of four distinct phases.</p>

        <div className="mt-8 relative border-l border-white/10 ml-3 space-y-10">
          {/* Step 1 */}
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0A0A0F] border border-indigo-500 ring-4 ring-[#05050A]"></div>
            <h4 className="text-sm font-semibold text-white mb-1">1. Planning</h4>
            <p className="text-xs text-slate-400 max-w-lg">The agent analyzes the user input and the system prompt to decompose the task into a series of logical steps or tool calls.</p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0A0A0F] border border-slate-600 ring-4 ring-[#05050A]"></div>
            <h4 className="text-sm font-semibold text-white mb-1">2. Action</h4>
            <p className="text-xs text-slate-400 max-w-lg">The agent executes selected tools. This happens server-side within a sandboxed environment. Requires explicit permissions.</p>
            <div className="mt-3 flex gap-2">
              <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded border border-indigo-500/20">POST /api/tools/execute</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0A0A0F] border border-slate-600 ring-4 ring-[#05050A]"></div>
            <h4 className="text-sm font-semibold text-white mb-1">3. Observation</h4>
            <p className="text-xs text-slate-400 max-w-lg">Results from tool executions are fed back into the context window. The agent evaluates if the task is complete or if further actions are needed.</p>
          </div>

          {/* Step 4 */}
          <div className="relative pl-8">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0A0A0F] border border-emerald-500 ring-4 ring-[#05050A]"></div>
            <h4 className="text-sm font-semibold text-white mb-1">4. Response</h4>
            <p className="text-xs text-slate-400 max-w-lg">The final synthesized answer is streamed back to the client, validated against the output schema.</p>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-white/5">
        <Link href="/sdk-cli" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-left">
          <div className="text-xs text-slate-500 mb-1">Previous</div>
          <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" />
            SDK & CLI
          </div>
        </Link>
        <Link href="/components" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
          <div className="text-xs text-slate-500 mb-1">Next</div>
          <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
            Components
            <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </main>
  );
};

export default AgentsContent;