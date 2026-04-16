'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { DocsMermaid } from '@/components/pages/docs-mermaid';
import { ArrowRight, Bot, Shield, Rocket, CreditCard, Zap, Code2, BookOpen } from 'lucide-react';
import Link from 'next/link';

const HYPERAGENT_FOUR_LAYER_MODEL = `flowchart TB
  subgraph L1["Client layer"]
    studio["Studio workspace Next.js"]
    surfaces["CLI and integration surfaces"]
  end
  subgraph L2["Gateway layer"]
    gw["API gateway JWT routing"]
  end
  subgraph L3["Orchestrator layer"]
    orch["LangGraph workflow engine"]
    jobs["Agent router queue-backed control"]
  end
  subgraph L4["Backend services"]
    verify["Slither Mythril Tenderly"]
    persist["Storage and observability"]
    deploy["Deployment adapters"]
  end
  studio --> gw
  surfaces --> gw
  gw --> orch
  orch --> jobs
  jobs --> verify
  jobs --> persist
  jobs --> deploy`;

export default function HyperagentPage() {
  const tocItems = [
    { id: 'what-is', label: 'What is HyperAgent?' },
    { id: 'strategic-model', label: 'Strategic model' },
    { id: 'key-features', label: 'Key capabilities' },
    { id: 'architecture', label: 'Four-layer architecture' },
    { id: 'runtime-shape', label: 'Runtime shape' },
    { id: 'quick-start', label: 'Quick start' },
    { id: 'next-steps', label: 'Next steps' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-amber-400">HyperAgent</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">HyperAgent</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            HyperAgent is Hyperkit&apos;s AI-native workflow system for multi-chain smart contract delivery. The Hyperkit whitepaper (v1.2.0) positions it as the control plane that reduces coordination cost across specification, generation, audit, simulation, and deployment. This site summarizes that model and matches the public HyperAgent repository README for product scope and stack claims.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              Closed beta
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
              HyperAgent repo v0.1.0
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              Whitepaper v1.2.0
            </span>
          </div>

          <h2 id="what-is" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            What is HyperAgent?
          </h2>
          <p className="leading-7 mb-6">
            HyperAgent is not framed as a single chat assistant. It is a structured workflow: Studio captures intent and project state, the gateway enforces tenant and request boundaries, the orchestrator orders stages, and backend services produce verification output and deployment preparation. The product thesis in v1.2.0 is workflow unification, not removal of every chain-specific adapter.
          </p>

          <h2 id="strategic-model" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Strategic model
          </h2>
          <p className="leading-7 mb-6">
            Hyperkit&apos;s strategy documents separate research-backed workflow pain from internal build milestones. The falsifiable hypothesis in the whitepaper is that high-fit teams lose meaningful time or budget reconciling disconnected tools across the delivery path. HyperAgent is the system answer: one orchestrated pipeline with explicit gates instead of ad hoc handoffs.
          </p>

          <Callout type="info" title="Scope honesty">
            Multi-chain capability is an architecture-level claim. The HyperAgent README states that release v0.1.0 supports SKALE Base Mainnet and SKALE Base Sepolia for wallet identity, deployment, and payment flows. Other chain entries in the repo are roadmap or scaffolding until documented otherwise.
          </Callout>

          <h2 id="key-features" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Key capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Bot className="w-5 h-5 text-amber-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Orchestrated workflow</h3>
              <p className="text-xs text-slate-400">Specification through design, codegen, audit tooling, Tenderly simulation, deploy, and monitoring stages when enabled</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-5 h-5 text-green-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Verification path</h3>
              <p className="text-xs text-slate-400">Static analysis and simulation as release-relevant stages, not optional extras</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Rocket className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">BYOK for LLMs</h3>
              <p className="text-xs text-slate-400">User-supplied provider keys in an isolated configuration path for workloads</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <CreditCard className="w-5 h-5 text-purple-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Payments and AA</h3>
              <p className="text-xs text-slate-400">Thirdweb surfaces for ERC-4337, EIP-7702, and x402 payment walls on supported flows</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Zap className="w-5 h-5 text-yellow-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Durable control plane</h3>
              <p className="text-xs text-slate-400">Runs, steps, logs, and provenance for recovery and auditability</p>
            </div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/5">
              <Code2 className="w-5 h-5 text-indigo-400 mb-2" />
              <h3 className="text-sm font-medium text-white mb-1">Studio surfaces</h3>
              <p className="text-xs text-slate-400">Dashboard, workflows, contracts, deployments, settings, payments on supported SKALE Base flows</p>
            </div>
          </div>

          <h2 id="architecture" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Four-layer architecture
          </h2>
          <p className="leading-7 mb-4">
            The whitepaper table defines four layers: client, gateway, orchestrator, and backend services. The diagram below is a high-level rendering of the same separation of concerns.
          </p>

          <DocsMermaid
            chart={HYPERAGENT_FOUR_LAYER_MODEL}
            caption="HyperAgent strategic layers (after Hyperkit Whitepaper v1.2.0). Implementation detail lives in the HyperAgent repo and capability truth tables."
          />

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              Layer reference
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li><span className="text-white font-medium">Client:</span> Studio workspace, Next.js UI, CLI and SDK-style surfaces for project intake and artifact review.</li>
              <li><span className="text-white font-medium">Gateway:</span> API edge, JWT authentication, routing, and status handling for tenant isolation.</li>
              <li><span className="text-white font-medium">Orchestrator:</span> LangGraph workflow engine, agent routing, queue-backed job control for stage sequencing.</li>
              <li><span className="text-white font-medium">Backend services:</span> Slither, Mythril, Tenderly, storage, observability, deployment adapters.</li>
            </ul>
          </div>

          <h2 id="runtime-shape" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Runtime shape
          </h2>
          <p className="leading-7 mb-6">
            The HyperAgent README describes a microservice-oriented layout: agents are services with explicit schemas, coordinated through Agent2Agent (A2A) patterns and ERC-8004-compatible registries where deployed. That runtime picture sits inside the orchestrator and backend layers above. It complements, rather than replaces, the four-layer strategic diagram.
          </p>
          <p className="leading-7 mb-6 text-sm">
            Representative pipeline (from upstream docs): SpecAgent with versioned spec lock, design and proposal agents, CodegenAgent, autofix and audit agents (Slither, Mythril, MythX, Echidna), TenderlySimAgent, DeployAgent, VerifyAgent, MonitorAgent. Exact availability depends on your deployment and capability flags.
          </p>

          <h2 id="quick-start" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Quick start
          </h2>
          <p className="leading-7 mb-4">
            Clone the HyperAgent monorepo and run Studio locally (from the upstream README):
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">1. Clone and install</h3>
              <CodeBlock
                language="bash"
                code={`<span class="text-blue-400">git</span> <span class="text-purple-400">clone</span> <span class="text-green-400">https://github.com/Hyperkit-Labs/hyperagent.git</span>
<span class="text-blue-400">cd</span> hyperagent
<span class="text-blue-400">pnpm</span> <span class="text-purple-400">install</span>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">2. Environment</h3>
              <p className="text-sm text-slate-400 mb-2">Copy the sample env file from the repo, then set at least:</p>
              <CodeBlock
                language="bash"
                code={`<span class="text-slate-500"># Examples from upstream README</span>
<span class="text-slate-500">NEXT_PUBLIC_THIRDWEB_CLIENT_ID=...</span>
<span class="text-slate-500">NEXT_PUBLIC_API_URL=http://localhost:4000</span>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-2">3. Start Studio</h3>
              <CodeBlock
                language="bash"
                code={`<span class="text-blue-400">pnpm</span> <span class="text-purple-400">--filter</span> hyperagent-studio dev`}
              />
              <p className="text-sm text-slate-400 mt-2">Open <code className="text-xs bg-white/10 px-1 rounded">http://localhost:3000</code>. Run the optional API or Docker backend when you need full workflow calls.</p>
            </div>
          </div>

          <p className="text-sm text-slate-500 mb-8">
            Canonical build and honesty notes:{' '}
            <a href="https://github.com/Hyperkit-Labs/hyperagent" className="text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Hyperkit-Labs/hyperagent</a>
          </p>

          <h2 id="next-steps" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Next steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/hyperagent/getting-started"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">Getting Started</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Studio path, prerequisites, and closed-beta scope on this docs site</p>
            </Link>
            <Link
              href="/hyperagent/concepts"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">Core Concepts</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Deeper structure: workflow semantics, agents, Studio surfaces</p>
            </Link>
            <Link
              href="/hyperagent/guides"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">Guides</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Task-focused walkthroughs</p>
            </Link>
            <Link
              href="/hyperagent/api-reference"
              className="group block p-6 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white group-hover:text-amber-400">API Reference</h3>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">HTTP and integration endpoints as documented here</p>
            </Link>
          </div>
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}
