'use client';
import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

interface StatusCode {
  code: string;
  name: string;
  category: string;
  httpCode: number;
  description: string;
  agentAction: string;
}

const statusCodes: StatusCode[] = [
  {
    code: '0x01',
    name: 'SUCCESS',
    category: 'Success',
    httpCode: 200,
    description: 'Intent validated or executed successfully',
    agentAction: 'Execute immediately'
  },
  {
    code: '0x11',
    name: 'ALLOWED',
    category: 'Success',
    httpCode: 200,
    description: 'Intent is allowed by policy',
    agentAction: 'Execute immediately'
  },
  {
    code: '0x10',
    name: 'DISALLOWED',
    category: 'Policy',
    httpCode: 403,
    description: 'Intent explicitly disallowed by policy',
    agentAction: 'Deny, inform user'
  },
  {
    code: '0x54',
    name: 'INSUFFICIENT_FUNDS',
    category: 'Payment',
    httpCode: 402,
    description: 'Insufficient funds for transaction',
    agentAction: 'Request payment'
  },
  {
    code: '0x20',
    name: 'TOO_EARLY',
    category: 'Timing',
    httpCode: 202,
    description: 'Intent is valid but too early to execute',
    agentAction: 'Retry later'
  },
  {
    code: '0x21',
    name: 'TOO_LATE',
    category: 'Timing',
    httpCode: 410,
    description: 'Intent has expired',
    agentAction: 'Reject, expired'
  },
  {
    code: '0x22',
    name: 'NONCE_USED',
    category: 'Replay',
    httpCode: 409,
    description: 'Nonce already used',
    agentAction: 'Reject, replay detected'
  },
  {
    code: '0x50',
    name: 'TRANSFER_FAILED',
    category: 'Execution',
    httpCode: 500,
    description: 'Transfer execution failed',
    agentAction: 'Retry or investigate'
  },
  {
    code: '0xA0',
    name: 'INVALID_FORMAT',
    category: 'Validation',
    httpCode: 400,
    description: 'Invalid intent format',
    agentAction: 'Fix intent structure'
  },
  {
    code: '0xA2',
    name: 'UNSUPPORTED_CHAIN',
    category: 'Network',
    httpCode: 421,
    description: 'Unsupported chain or network',
    agentAction: 'Use different chain'
  }
];

export const StatusCodeTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(statusCodes.map(sc => sc.category)))];

  const filteredCodes = statusCodes.filter(code => {
    const matchesSearch = 
      code.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || code.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getHttpCodeColor = (code: number) => {
    if (code >= 200 && code < 300) return 'text-green-400';
    if (code >= 400 && code < 500) return 'text-yellow-400';
    if (code >= 500) return 'text-red-400';
    return 'text-slate-400';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Success': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Policy': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Payment': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      'Timing': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'Replay': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Execution': 'bg-red-500/10 text-red-400 border-red-500/20',
      'Validation': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      'Network': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    };
    return colors[category] || 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  };

  return (
    <div className="my-8">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search status codes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/30"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-white/10 bg-[#0A0A0F] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Code</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">HTTP</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Description</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Agent Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredCodes.map((code, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3">
                    <code className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                      {code.code}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-white">{code.name}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(code.category)}`}>
                      {code.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${getHttpCodeColor(code.httpCode)}`}>
                      {code.httpCode}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-400">{code.description}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-300">{code.agentAction}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredCodes.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No status codes found matching your search.
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-slate-500">
        Showing {filteredCodes.length} of {statusCodes.length} status codes
      </div>
    </div>
  );
};

