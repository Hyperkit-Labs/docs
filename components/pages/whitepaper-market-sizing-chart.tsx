'use client';

/**
 * Donut chart for the v1.2.0 conservative market-sizing table (multi-chain share).
 * Recharts + Tailwind; layout similar to pie/donut patterns such as
 * https://untitledui.com/react/components/pie-charts
 */
import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const DATA = [
  {
    name: 'Multi-chain developers',
    value: 34,
    detail: 'Electric Capital multi-chain share, 2024 [6]',
    fill: '#6366f1',
  },
  {
    name: 'Not classified as multi-chain',
    value: 66,
    detail: 'Remainder of monthly active crypto developers [6]',
    fill: '#334155',
  },
];

export function WhitepaperMarketSizingChart() {
  return (
    <figure className="my-8 rounded-xl border border-white/10 bg-white/[0.02] p-6 pb-8">
      <figcaption className="mb-4 text-center text-sm font-medium text-slate-200">
        Share of monthly active crypto developers by multi-chain classification
      </figcaption>
      <p className="mb-6 text-center text-xs text-slate-500">
        Basis: 23,613 monthly active developers (Nov. 2024). 34% multi-chain implies ~8,028
        multi-chain developers before team grouping [6].
      </p>
      <div className="mx-auto h-[min(320px,55vw)] w-full max-w-md">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={DATA}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              stroke="none"
            >
              {DATA.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) => {
                if (!active || !payload?.[0]) return null;
                const d = payload[0].payload as (typeof DATA)[0];
                return (
                  <div className="max-w-[240px] rounded-lg border border-white/10 bg-[#0B0C15] px-3 py-2 text-xs shadow-xl">
                    <p className="font-medium text-slate-100">{d.name}</p>
                    <p className="text-indigo-300">{d.value}%</p>
                    <p className="mt-1 text-slate-500">{d.detail}</p>
                  </div>
                );
              }}
            />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: 16, fontSize: 12, color: '#94a3b8' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-6 border-t border-white/10 pt-4 text-center text-xs leading-relaxed text-slate-500">
        Full metric table (SAM, SOM, workflow spend) remains described in the prose below. This
        chart highlights the multi-chain ratio used in the v1.2.0 model.
      </p>
    </figure>
  );
}
