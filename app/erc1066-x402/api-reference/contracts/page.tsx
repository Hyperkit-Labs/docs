'use client';
import React from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { CodeBlock } from '@/components/pages/docs-codeblock';
import { Callout } from '@/components/pages/docs-callout';
import { ArrowRight, ArrowLeft, FileCode, Shield, Settings } from 'lucide-react';
import Link from 'next/link';

export default function ContractsPage() {
  const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'intent-executor', label: 'IntentExecutor' },
    { id: 'base-intent-validator', label: 'BaseIntentValidator' },
    { id: 'policy-registry', label: 'PolicyRegistry' },
    { id: 'status-codes', label: 'StatusCodes Library' }
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
            <Link href="/erc1066-x402/api-reference" className="hover:text-slate-300 transition-colors">API Reference</Link>
            <span>/</span>
            <span className="text-indigo-400">Smart Contracts</span>
          </div>

          <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Smart Contracts</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Complete API reference for ERC-1066-x402 smart contracts: IntentExecutor, BaseIntentValidator, PolicyRegistry, and StatusCodes library.
          </p>

          <h2 id="overview" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            Overview
          </h2>
          <p className="leading-7 mb-6">
            ERC-1066-x402 consists of four main smart contract components that work together to validate and execute intents.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <FileCode className="w-6 h-6 text-indigo-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">IntentExecutor</h3>
              <p className="text-xs text-slate-400">Executes validated intents through a pluggable validator</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <Shield className="w-6 h-6 text-green-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">BaseIntentValidator</h3>
              <p className="text-xs text-slate-400">Abstract base implementing common validation checks</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <Settings className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">PolicyRegistry</h3>
              <p className="text-xs text-slate-400">Stores versioned policies referenced by intents</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <FileCode className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="text-sm font-medium text-white mb-2">StatusCodes</h3>
              <p className="text-xs text-slate-400">Library of standardized status code constants</p>
            </div>
          </div>

          <h2 id="intent-executor" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            IntentExecutor
          </h2>
          <p className="leading-7 mb-4">
            Executes intents through a pluggable validator and forwards calls on success.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Functions
          </h3>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-white">execute</h4>
                <code className="text-xs text-slate-500">external payable nonReentrant</code>
              </div>
              <p className="text-xs text-slate-400 mb-4">Execute an intent if the validator returns a success status</p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-500">Parameters:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">intent</code> - The intent to execute (IntentTypes.Intent calldata)</li>
                  </ul>
                </div>
                <div>
                  <span className="text-slate-500">Returns:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">returnData</code> - Return data from the target call (bytes memory)</li>
                  </ul>
                </div>
                <div>
                  <span className="text-slate-500">Reverts:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">ExecutionDenied</code> - If validation fails</li>
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">ExecutionFailed</code> - If target call fails</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-white">setValidator</h4>
                <code className="text-xs text-slate-500">external</code>
              </div>
              <p className="text-xs text-slate-400 mb-4">Set a new validator (should be protected by governance/ownership in production)</p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-500">Parameters:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">_validator</code> - New validator address (IIntentValidator)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            language="solidity"
            filename="IntentExecutor.sol"
            code={`<span class="text-purple-400">contract</span> IntentExecutor <span class="text-purple-400">is</span> ReentrancyGuard {
    <span class="text-purple-400">IIntentValidator</span> <span class="text-purple-400">public</span> validator;

    <span class="text-purple-400">function</span> <span class="text-blue-400">execute</span>(IntentTypes.Intent <span class="text-purple-400">calldata</span> intent)
        <span class="text-purple-400">external</span> <span class="text-purple-400">payable</span> <span class="text-purple-400">nonReentrant</span>
        <span class="text-purple-400">returns</span> (<span class="text-purple-400">bytes</span> <span class="text-purple-400">memory</span> returnData)
    {
        <span class="text-purple-400">bytes32</span> intentHash = <span class="text-blue-400">keccak256</span>(<span class="text-blue-400">abi</span>.<span class="text-blue-400">encode</span>(intent));
        <span class="text-purple-400">bytes1</span> status = validator.<span class="text-blue-400">canExecute</span>(intent);

        <span class="text-purple-400">if</span> (!<span class="text-purple-400">StatusCodes</span>.<span class="text-blue-400">isSuccess</span>(status)) {
            <span class="text-blue-400">revert</span> <span class="text-blue-400">ExecutionDenied</span>(status);
        }

        (<span class="text-purple-400">bool</span> ok, <span class="text-purple-400">bytes</span> <span class="text-purple-400">memory</span> ret) = intent.target.<span class="text-blue-400">call</span>{<span class="text-purple-400">value</span>: intent.value}(intent.data);
        <span class="text-purple-400">if</span> (!ok) {
            <span class="text-blue-400">revert</span> <span class="text-blue-400">ExecutionFailed</span>(<span class="text-purple-400">StatusCodes</span>.<span class="text-blue-400">STATUS_EXECUTION_FAILED</span>, ret);
        }

        <span class="text-blue-400">emit</span> <span class="text-blue-400">IntentExecuted</span>(intentHash, status, <span class="text-blue-400">msg</span>.<span class="text-blue-400">sender</span>, ret);
        <span class="text-purple-400">return</span> ret;
    }
}`}
          />

          <h2 id="base-intent-validator" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            BaseIntentValidator
          </h2>
          <p className="leading-7 mb-4">
            Abstract base contract implementing common checks for intent validation: time windows, policy checks, and funds verification.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Functions
          </h3>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-medium text-white">canExecute</h4>
              <code className="text-xs text-slate-500">public view virtual</code>
            </div>
            <p className="text-xs text-slate-400 mb-4">Validates an intent by checking time windows, policy, and funds</p>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500">Parameters:</span>
                <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                  <li><code className="bg-white/10 px-1 py-0.5 rounded">intent</code> - The intent to validate (IntentTypes.Intent calldata)</li>
                </ul>
              </div>
              <div>
                <span className="text-slate-500">Returns:</span>
                <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                  <li><code className="bg-white/10 px-1 py-0.5 rounded">status</code> - Status code (bytes1)</li>
                </ul>
              </div>
              <div className="mt-3 p-3 bg-white/5 rounded">
                <span className="text-slate-500">Validation Checks:</span>
                <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                  <li>• Time window (validAfter, validBefore)</li>
                  <li>• Policy checks (targets, selectors, chains, value caps)</li>
                  <li>• Funds verification</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="policy-registry" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            PolicyRegistry
          </h2>
          <p className="leading-7 mb-4">
            Stores versioned policies referenced by intents. Policies are immutable per policyId.
          </p>

          <h3 className="text-xl font-medium tracking-tight text-white mt-8 mb-4">
            Functions
          </h3>

          <div className="space-y-6 mb-8">
            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-white">setPolicy</h4>
                <code className="text-xs text-slate-500">external onlyOwner</code>
              </div>
              <p className="text-xs text-slate-400 mb-4">Set a new policy; policies are immutable per policyId</p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-500">Parameters:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">policyId</code> - Unique identifier (bytes32)</li>
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">policy</code> - Policy data (IntentTypes.Policy calldata)</li>
                  </ul>
                </div>
                <div>
                  <span className="text-slate-500">Reverts:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">PolicyAlreadyExists</code> - If policyId already exists</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-white">getPolicy</h4>
                <code className="text-xs text-slate-500">external view</code>
              </div>
              <p className="text-xs text-slate-400 mb-4">Get a policy by id</p>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-slate-500">Parameters:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">policyId</code> - Policy identifier (bytes32)</li>
                  </ul>
                </div>
                <div>
                  <span className="text-slate-500">Returns:</span>
                  <ul className="ml-4 mt-1 space-y-1 text-slate-400">
                    <li><code className="bg-white/10 px-1 py-0.5 rounded">policy</code> - Policy data (IntentTypes.Policy memory)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 id="status-codes" className="text-2xl font-medium tracking-tight text-white mt-12 mb-4 scroll-mt-20">
            StatusCodes Library
          </h2>
          <p className="leading-7 mb-4">
            Library of standardized status code constants and helper functions.
          </p>

          <div className="rounded-lg border border-white/10 bg-[#0A0A0F] p-6 mb-8">
            <h3 className="text-sm font-medium text-white mb-4">Common Status Codes</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <code className="text-indigo-400">STATUS_SUCCESS</code>
                <span className="text-slate-500 ml-2">0x01</span>
              </div>
              <div>
                <code className="text-indigo-400">STATUS_DISALLOWED</code>
                <span className="text-slate-500 ml-2">0x10</span>
              </div>
              <div>
                <code className="text-indigo-400">STATUS_ALLOWED</code>
                <span className="text-slate-500 ml-2">0x11</span>
              </div>
              <div>
                <code className="text-indigo-400">STATUS_TOO_EARLY</code>
                <span className="text-slate-500 ml-2">0x20</span>
              </div>
              <div>
                <code className="text-indigo-400">STATUS_TOO_LATE</code>
                <span className="text-slate-500 ml-2">0x21</span>
              </div>
              <div>
                <code className="text-indigo-400">STATUS_INSUFFICIENT_FUNDS</code>
                <span className="text-slate-500 ml-2">0x54</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
            <Link href="/erc1066-x402/api-reference" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                API Reference
              </div>
            </Link>
            <Link href="/erc1066-x402/api-reference/gateway" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Gateway API
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

