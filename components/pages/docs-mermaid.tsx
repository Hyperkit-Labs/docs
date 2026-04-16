'use client';

import { useEffect, useId, useRef, useState } from 'react';

type DocsMermaidProps = {
  chart: string;
  caption?: string;
  className?: string;
};

export function DocsMermaid({ chart, caption, className = '' }: DocsMermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, '');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const el = containerRef.current;
    if (!el) return undefined;

    el.innerHTML = '';
    setError(null);

    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'strict',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          themeVariables: {
            primaryColor: '#312e81',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#6366f1',
            lineColor: '#64748b',
            secondaryColor: '#0f172a',
            tertiaryColor: '#1e293b',
            mainBkg: '#0f172a',
            nodeBorder: '#334155',
            clusterBkg: '#0a0a0f',
            clusterBorder: '#334155',
            titleColor: '#f8fafc',
          },
        });
        const renderId = `docs-mermaid-${reactId}-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(renderId, chart);
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Diagram failed to render');
        }
      }
    })();

    return () => {
      cancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [chart, reactId]);

  return (
    <figure className={`my-6 ${className}`}>
      <div
        ref={containerRef}
        className="overflow-x-auto rounded-lg border border-white/10 bg-[#0A0A0F] p-4 [&_svg]:mx-auto [&_svg]:max-h-[min(520px,70vh)] [&_svg]:max-w-full"
        role="img"
        aria-label={caption ?? 'Diagram'}
      />
      {caption ? (
        <figcaption className="mt-3 text-center text-xs text-slate-500">{caption}</figcaption>
      ) : null}
      {error ? (
        <p className="mt-2 text-center text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </figure>
  );
}
