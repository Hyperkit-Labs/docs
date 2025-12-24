'use client';
import React from 'react';

interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface ComponentPropsTableProps {
  props: Prop[];
  componentName: string;
}

export const ComponentPropsTable: React.FC<ComponentPropsTableProps> = ({ props, componentName }) => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-medium text-white mb-4">Props</h3>
      <div className="rounded-lg border border-white/10 bg-[#0A0A0F] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Name</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Type</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Default</th>
                <th className="px-4 py-3 text-left text-slate-400 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {props.map((prop, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <code className="text-purple-400 font-mono text-xs bg-purple-500/10 px-2 py-1 rounded">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <span className="ml-2 text-xs text-red-400">required</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-indigo-400 font-mono text-xs bg-indigo-500/10 px-2 py-1 rounded">
                      {prop.type}
                    </code>
                  </td>
                  <td className="px-4 py-3">
                    {prop.default ? (
                      <code className="text-slate-400 font-mono text-xs bg-white/10 px-2 py-1 rounded">
                        {prop.default}
                      </code>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

