'use client';
import React from 'react';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { Callout } from '@/components/pages/docs-callout';
import { DocsMermaid } from '@/components/pages/docs-mermaid';
import { ArrowRight, ArrowLeft, Bot, Shield, Rocket, CreditCard, Workflow, Layers } from 'lucide-react';
import Link from 'next/link';

const STUDIO_OPERATIONAL_FLOW = `flowchart TD
  A[Connect wallet] --> B[Add BYOK keys]
  B --> C[Validate configuration]
  C --> D[Create workflow request]
  D --> E[Specification and design]
  E --> F[Code generation]
  F --> G[Static analysis]
  G --> H[Tenderly simulation and report]
  H --> I{Deployment gate}
  I -->|Pass| J[Deploy preparation or deploy]
  I -->|Fail| K[Review and revise]
  J --> L[Deployment records and explorer links]`;

export default function ConceptsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem-frame', label: 'Problem frame' },
    { id: 'four-layers', label: 'Four layers' },
    { id: 'workflow-semantics', label: 'Workflow semantics' },
    { id: 'studio-flow', label: 'Studio operational flow' },
    { id: 'agent-pipeline', label: 'Agent pipeline' },
    { id: 'studio-surfaces', label: 'Studio surfaces' },
    { id: 'scope-boundary', label: 'Scope boundary' },
    { id: 'deep-dives', label: 'Topic deep dives' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      
      <div className="flex flex-1 pt-14 w-full max-w-[1600px] mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-slate-300 transition-colors">Docs</Link>
            <span>/</span>
            <Link href="/hyperagent" className="hover:text-slate-300 transition-colors">HyperAgent</Link>
            <span>/</span>
            <span className="text-amber-400">Core Concepts</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Core Concepts</h1>
          <p id="overview" className="text-lg text-slate-400 leading-relaxed mb-8 scroll-mt-20">
            This page explains how HyperAgent should be read relative to the Hyperkit whitepaper (v1.2.0) and the public HyperAgent repository. It separates strategic architecture, operational Studio flow, and the closed-beta support boundary.
          </p>

          <h2 id="problem-frame" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Problem frame
          </h2>
          <p className="leading-7 mb-6">
            The whitepaper hypothesis is workflow fragmentation: teams still pay a recurring tax to move between specification, generation, audit, simulation, and deployment tools, often redoing chain-specific glue for each release. HyperAgent targets that coordination cost. It is not only a code generator. It is an orchestrated path where each stage has a defined input, output, and gate.
          </p>

          <h2 id="four-layers" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Four layers
          </h2>
          <p className="leading-7 mb-4">
            Strategy and documentation use the same layer names: client, gateway, orchestrator, backend services. The client captures intent and shows artifacts. The gateway enforces identity and routing. The orchestrator sequences work. Backend services perform verification, persistence, and deployment preparation.
          </p>
          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-white mb-3">
              <Layers className="w-4 h-4 text-amber-400" />
              Abstraction boundary
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hyperkit abstracts workflow coordination. It does not promise that chain physics, RPC endpoints, Tenderly projects, or deployment frameworks disappear. Position HyperAgent as the workflow layer above those integrations.
            </p>
          </div>

          <h2 id="workflow-semantics" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Workflow semantics
          </h2>
          <p className="leading-7 mb-6">
            A request enters through Studio, passes the gateway for authentication and routing, is planned into ordered stages in the orchestrator, and then hits backend services for generation, static analysis, simulation, storage, and deployment preparation. Each layer owns a narrow responsibility so you can see where policy applies, where context is created, and where evidence is produced.
          </p>

          <h2 id="studio-flow" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Studio operational flow
          </h2>
          <p className="leading-7 mb-4">
            The whitepaper Figure 2 flow is reproduced below for consistency across strategy and engineering docs.
          </p>
          <DocsMermaid chart={STUDIO_OPERATIONAL_FLOW} caption="Documented Studio path: wallet, BYOK, validation, workflow stages, simulation, deployment gate." />

          <h2 id="agent-pipeline" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Agent pipeline
          </h2>
          <p className="leading-7 mb-6">
            The HyperAgent README describes a service-oriented agent graph: SpecAgent (with versioned spec lock), design and proposal agents, CodegenAgent with streaming guardrails, autofix and audit agents using Slither, Mythril, MythX, and Echidna where configured, TenderlySimAgent, DeployAgent, VerifyAgent, and MonitorAgent. Agents communicate with defined schemas; A2A and ERC-8004 registries apply where the deployment wires them. Treat this list as the reference pipeline, not as a guarantee that every stage is enabled in every environment.
          </p>

          <Callout type="warning" title="Verification is not a slogan">
            Automated tooling reduces risk but does not replace human review on high-value contracts. The docs describe where tools run in the workflow, not a certificate of correctness.
          </Callout>

          <h2 id="studio-surfaces" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Studio surfaces
          </h2>
          <p className="leading-7 mb-4">
            The whitepaper lists the documented Studio modules:
          </p>
          <ul className="list-disc list-outside ml-6 space-y-2 mb-8 text-slate-400 text-sm">
            <li>Dashboard for workflows, deployments, metrics, and onboarding</li>
            <li>Workflows for run creation, monitoring, status, logs, and results</li>
            <li>Contracts for generated Solidity and ABI artifacts</li>
            <li>Deployments for records and explorer links</li>
            <li>Settings for BYOK key management</li>
            <li>Payments for x402-backed handling on supported SKALE Base flows</li>
          </ul>

          <h2 id="scope-boundary" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Scope boundary
          </h2>
          <p className="leading-7 mb-6">
            The architecture narrative is multi-chain. The closed-beta implementation narrative is narrower: wallet-based identity, deployment, and payments on SKALE Base Mainnet and SKALE Base Sepolia unless a page states additional support. When reading roadmap language elsewhere in the ecosystem, map it back to this boundary before assuming production readiness.
          </p>

          <h2 id="deep-dives" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Topic deep dives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Bot className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">Specification to generation</h3>
              <p className="text-sm text-slate-400 mb-3">
                Intent, spec lock, and artifact generation with workflow state as the source of truth.
              </p>
              <Link href="/hyperagent/concepts/ai-generation" className="text-xs text-amber-400 hover:underline">AI generation</Link>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Shield className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">Verification</h3>
              <p className="text-sm text-slate-400 mb-3">
                Audit stages, tooling, and gates in the orchestrated path.
              </p>
              <Link href="/hyperagent/concepts/auditing" className="text-xs text-amber-400 hover:underline">Auditing</Link>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <Rocket className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">Deployment-aware output</h3>
              <p className="text-sm text-slate-400 mb-3">
                Deployment preparation, records, and handoff-ready artifacts.
              </p>
              <Link href="/hyperagent/concepts/deployment" className="text-xs text-amber-400 hover:underline">Deployment</Link>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <CreditCard className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">x402 payments</h3>
              <p className="text-sm text-slate-400 mb-3">
                Payment walls and HTTP402 semantics in supported flows.
              </p>
              <Link href="/hyperagent/concepts/x402-payments" className="text-xs text-amber-400 hover:underline">x402 payments</Link>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 md:col-span-2">
              <Workflow className="w-6 h-6 text-yellow-400 mb-3" />
              <h3 className="text-lg font-medium text-white mb-2">Workflow mechanics</h3>
              <p className="text-sm text-slate-400 mb-3">
                Runs, steps, retries, and how the control plane exposes progress.
              </p>
              <Link href="/hyperagent/concepts/workflows" className="text-xs text-amber-400 hover:underline">Workflows</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/hyperagent/getting-started" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Getting Started
              </div>
            </Link>
            <Link href="/hyperagent/guides" className="group block p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-amber-400 flex items-center justify-end gap-2">
                Guides
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
