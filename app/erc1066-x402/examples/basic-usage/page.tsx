'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BasicUsagePage() {
  const tocItems = [
    { id: 'creating-policy', label: 'Creating a Policy' },
    { id: 'creating-intent', label: 'Creating an Intent' },
    { id: 'validating-intent', label: 'Validating an Intent' },
    { id: 'executing-intent', label: 'Executing an Intent' }
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
            <Link href="/erc1066-x402" className="hover:text-slate-300 transition-colors">ERC-1066-x402</Link>
            <span>/</span>
            <Link href="/erc1066-x402/examples" className="hover:text-slate-300 transition-colors">Examples</Link>
            <span>/</span>
            <span className="text-indigo-400">Basic Usage</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Basic Usage</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Simple examples demonstrating how to create policies, intents, and validate/execute them using ERC-1066-x402.
          </p>

          <h2 id="creating-policy" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Creating a Policy
          </h2>
          <p className="leading-7 mb-4">
            Policies define the rules for intent validation. Create a policy using the PolicyRegistry:
          </p>

          <CodeBlock
            language="solidity"
            filename="create_policy.sol"
            code={`<span class="text-purple-400">PolicyRegistry</span> registry = <span class="text-purple-400">PolicyRegistry</span>(registryAddress);

<span class="text-purple-400">bytes32</span> policyId = <span class="text-blue-400">keccak256</span>(<span class="text-green-400">"my-policy"</span>);
<span class="text-purple-400">Policy</span> <span class="text-purple-400">memory</span> policy = <span class="text-purple-400">Policy</span>({
    owner: <span class="text-blue-400">msg</span>.<span class="text-blue-400">sender</span>,
    allowedTargets: [targetAddress],
    allowedSelectors: [],
    maxValuePerTx: <span class="text-blue-400">1</span> <span class="text-purple-400">ether</span>,
    maxAggregateValue: <span class="text-blue-400">0</span>,
    validAfter: <span class="text-blue-400">0</span>,
    validBefore: <span class="text-blue-400">0</span>,
    allowedChains: []
});

registry.<span class="text-blue-400">setPolicy</span>(policyId, policy);`}
          />

          <h2 id="creating-intent" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Creating an Intent
          </h2>
          <p className="leading-7 mb-4">
            An intent represents a desired action that will be validated and executed:
          </p>

          <CodeBlock
            language="solidity"
            filename="create_intent.sol"
            code={`<span class="text-purple-400">Intent</span> <span class="text-purple-400">memory</span> intent = <span class="text-purple-400">Intent</span>({
    sender: userAddress,
    target: targetContract,
    data: callData,
    value: <span class="text-blue-400">0.5</span> <span class="text-purple-400">ether</span>,
    nonce: <span class="text-blue-400">0</span>,
    validAfter: <span class="text-blue-400">block</span>.<span class="text-blue-400">timestamp</span>,
    validBefore: <span class="text-blue-400">block</span>.<span class="text-blue-400">timestamp</span> + <span class="text-blue-400">1</span> <span class="text-purple-400">days</span>,
    policyId: policyId
});`}
          />

          <h2 id="validating-intent" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Validating an Intent
          </h2>
          <p className="leading-7 mb-4">
            Before executing, validate the intent to check if it will succeed:
          </p>

          <CodeBlock
            language="solidity"
            filename="validate_intent.sol"
            code={`<span class="text-slate-500">// Validate intent</span>
<span class="text-purple-400">bytes1</span> status = validator.<span class="text-blue-400">canExecute</span>(intent);

<span class="text-slate-500">// Check if validation succeeded</span>
<span class="text-blue-400">require</span>(status == <span class="text-purple-400">StatusCodes</span>.<span class="text-blue-400">STATUS_SUCCESS</span>, <span class="text-green-400">"Intent validation failed"</span>);`}
          />

          <Callout type="info" title="Pre-flight Validation">
            Always validate intents before executing them. This saves gas and provides clear feedback about why an intent might fail.
          </Callout>

          <h2 id="executing-intent" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Executing an Intent
          </h2>
          <p className="leading-7 mb-4">
            Once validated, execute the intent:
          </p>

          <CodeBlock
            language="solidity"
            filename="execute_intent.sol"
            code={`<span class="text-slate-500">// Execute intent with value</span>
executor.<span class="text-blue-400">execute</span>{<span class="text-purple-400">value</span>: intent.value}(intent);`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/examples" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Examples
              </div>
            </Link>
            <Link href="/erc1066-x402/examples/policy-setup" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Policy Setup
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

