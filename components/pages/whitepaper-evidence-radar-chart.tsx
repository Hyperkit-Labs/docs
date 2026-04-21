'use client';

/**
 * Radar chart for Table 4 "Evidence status of core claims" (whitepaper v1.2.0).
 * Recharts + Tailwind; same stack as https://www.untitledui.com/react/components/radar-charts
 *
 * Status mapped to 0–3 for visualization: Supported=3, Supported in general=2.5,
 * Supported indirectly=2, Not established=0.5 (see section 4.1 prose).
 */
import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const DATA = [
  {
    subject: 'Weak tooling',
    score: 3,
    status: 'Supported',
    detail:
      'Smart contract development suffers from weak tooling and high assurance burden. Peer-reviewed evidence [1], [2], [3].',
  },
  {
    subject: 'Multi-chain',
    score: 2.5,
    status: 'Supported in general',
    detail:
      'Multi-chain delivery raises integration complexity. Interoperability research and developer report data [5], [6].',
  },
  {
    subject: 'Fragmented work',
    score: 2,
    status: 'Supported indirectly',
    detail:
      'Fragmented workflows reduce productivity. Fragmented work research and smart contract process research [1], [2], [4].',
  },
  {
    subject: 'Rewrite / chain',
    score: 0.5,
    status: 'Not established',
    detail:
      'Developers rewrite 80 percent of their code for each blockchain. Internal hypothesis only [9].',
  },
  {
    subject: 'Integration time',
    score: 0.5,
    status: 'Not established',
    detail:
      'Teams lose 5 to 10 hours per week to integration overhead. Internal interview threshold only [9].',
  },
  {
    subject: 'ERC gas claim',
    score: 0.5,
    status: 'Not established',
    detail:
      'ERC-1066 and x402 save 200 to 500 gas per transaction. No benchmark source in current evidence set.',
  },
];

export function WhitepaperEvidenceRadarChart() {
  return (
    <figure className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-6 pb-8">
      <figcaption className="mb-2 text-center text-sm font-medium text-slate-200">
        Evidence status of core claims
      </figcaption>
      <p className="mb-6 text-center text-xs text-slate-500">
        Axis score scale: 3 = supported, 2.5 = supported in general, 2 = supported indirectly, 0.5 =
        not established. Matches Table 4 statuses in v1.2.0.
      </p>
      <div className="mx-auto h-[min(400px,70vw)] w-full max-w-lg">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={DATA}>
            <PolarGrid stroke="#334155" strokeOpacity={0.9} />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 3]}
              tickCount={4}
              tick={{ fill: '#64748b', fontSize: 10 }}
              stroke="#475569"
            />
            <Radar
              name="Evidence strength"
              dataKey="score"
              stroke="#6366f1"
              strokeWidth={1.5}
              fill="#6366f1"
              fillOpacity={0.35}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.[0]) return null;
                const d = payload[0].payload as (typeof DATA)[0];
                return (
                  <div className="max-w-[min(320px,90vw)] rounded-lg border border-white/10 bg-[#0B0C15] px-3 py-2 text-xs shadow-xl">
                    <p className="font-medium text-indigo-300">{d.subject}</p>
                    <p className="text-slate-300">
                      <span className="text-slate-500">Status: </span>
                      {d.status}
                    </p>
                    <p className="mt-1 text-slate-500">{d.detail}</p>
                  </div>
                );
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs leading-relaxed text-slate-500">
        Table 4 separates research support from internal belief. Narrative after this figure restates
        that distinction.
      </p>
    </figure>
  );
}
