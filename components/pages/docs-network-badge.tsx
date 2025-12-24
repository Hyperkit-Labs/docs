'use client';
import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface NetworkBadgeProps {
  name: string;
  chainId: number;
  type: 'evm' | 'solana' | 'sui';
  status: 'deployed' | 'verified' | 'testnet' | 'mainnet';
  explorerUrl?: string;
  deployedAddress?: string;
}

export const NetworkBadge: React.FC<NetworkBadgeProps> = ({
  name,
  chainId,
  type,
  status,
  explorerUrl,
  deployedAddress
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'verified':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'deployed':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'testnet':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'mainnet':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'evm':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'solana':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'sui':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-sm font-medium text-white mb-1">{name}</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getTypeColor()}`}>
              {type.toUpperCase()}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor()}`}>
              {status === 'verified' && <CheckCircle className="w-3 h-3 mr-1" />}
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            <span className="text-xs text-slate-500">Chain ID: {chainId}</span>
          </div>
        </div>
        {explorerUrl && (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      {deployedAddress && (
        <div className="mt-2">
          <p className="text-xs text-slate-500 mb-1">Deployed Address:</p>
          <code className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-200 break-all">
            {deployedAddress}
          </code>
        </div>
      )}
    </div>
  );
};

