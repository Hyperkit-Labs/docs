'use client';
import React from 'react';

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  requestBody?: string;
  response?: string;
}

interface APIEndpointTableProps {
  endpoints: Endpoint[];
  title?: string;
}

export const APIEndpointTable: React.FC<APIEndpointTableProps> = ({ endpoints, title }) => {
  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'POST': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'PUT': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'DELETE': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'PATCH': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="my-8">
      {title && <h3 className="text-lg font-medium text-white mb-4">{title}</h3>}
      <div className="rounded-lg border border-white/10 bg-[#0A0A0F] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Method</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Endpoint</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {endpoints.map((endpoint, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-amber-400 font-mono text-xs bg-amber-500/10 px-2 py-1 rounded">
                      {endpoint.path}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-slate-400">{endpoint.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

