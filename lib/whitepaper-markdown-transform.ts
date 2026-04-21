/**
 * Pure transforms for the Hyperkit whitepaper (no Node fs). Safe to import from client components.
 */

const FIGURE1_MERMAID = `

\`\`\`mermaid
flowchart TB
  subgraph L1["Client layer"]
    studio["Studio workspace"]
    surfaces["Next.js SDK CLI"]
  end
  subgraph L2["Gateway layer"]
    gw["API gateway JWT routing"]
  end
  subgraph L3["Orchestrator layer"]
    orch["LangGraph workflow engine"]
    jobs["Agent router queue control"]
  end
  subgraph L4["Backend services"]
    verify["Slither Mythril Tenderly"]
    persist["Storage observability"]
    deploy["Deployment adapters"]
  end
  studio --> gw
  surfaces --> gw
  gw --> orch
  orch --> jobs
  jobs --> verify
  jobs --> persist
  jobs --> deploy
\`\`\`

`;

const NEEDLE_FIGURE1 =
  'Figure 1. HyperAgent four-layer pipeline. Client Layer to Gateway Layer to Orchestrator Layer to Backend Services.';

function extractCaption(block: string): string {
  const m = block.match(/\\caption\{([^}]*)\}/);
  return m ? m[1] : '';
}

function latexTableToMarkdown(block: string): string {
  const caption = extractCaption(block);
  const tabularEnd = block.indexOf('\\end{tabular}');
  if (tabularEnd === -1) return block;

  const tabularStart = block.indexOf('\\begin{tabular}');
  if (tabularStart === -1) return block;

  const inner = block.slice(tabularStart, tabularEnd);
  const lines = inner.split(/\r?\n/).map((l) => l.trim());

  const rows: string[][] = [];
  for (const line of lines) {
    if (!line || line.startsWith('\\begin{tabular}')) continue;
    if (line === '\\hline') continue;
    if (line.endsWith('\\\\')) {
      const cells = line.slice(0, -2).split('&').map((c) => c.trim());
      rows.push(cells);
    }
  }

  if (rows.length === 0) return block;

  const esc = (s: string) =>
    String(s)
      .replace(/\\/g, '\\\\')
      .replace(/\|/g, '\\|')
      .replace(/\n/g, ' ');

  const numCols = rows[0].length;
  let md = '';
  if (caption) {
    md += `\n\n**${esc(caption)}**\n\n`;
  }
  md += '| ' + rows[0].map(esc).join(' | ') + ' |\n';
  md += '|' + ' --- |'.repeat(numCols) + '\n';
  for (let i = 1; i < rows.length; i++) {
    let r = rows[i];
    if (r.length !== numCols) {
      const pad = [...r];
      while (pad.length < numCols) pad.push('');
      r = pad.slice(0, numCols);
    }
    md += '| ' + r.map(esc).join(' | ') + ' |\n';
  }
  return md + '\n';
}

export function slugifyWhitepaperHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function prepareWhitepaperMarkdown(raw: string): string {
  let text = raw.replace(/^# Hyperkit Whitepaper v1\.2\.0\s*\n+/m, '');

  const tableRegex = /\\begin\{table\}[\s\S]*?\\end\{table\}/g;
  text = text.replace(tableRegex, (m) => latexTableToMarkdown(m));

  if (text.includes(NEEDLE_FIGURE1)) {
    text = text.replace(NEEDLE_FIGURE1, NEEDLE_FIGURE1 + '\n' + FIGURE1_MERMAID);
  }

  text = replaceConservativeMarketSizingTableWithChartBlock(text);
  text = replaceEvidenceStatusTableWithRadarBlock(text);

  return text;
}

/**
 * Replaces the markdown pipe table under "Conservative market sizing model used in v1.2.0"
 * with a fenced block rendered as a Recharts donut (see whitepaper-markdown.tsx).
 */
function replaceConservativeMarketSizingTableWithChartBlock(text: string): string {
  const re =
    /\*\*Conservative market sizing model used in v1\.2\.0\*\*\s*\n\n(?:(?:\|[^\r\n]*\r?\n)+)/;
  return text.replace(re, () => {
    return `**Conservative market sizing model used in v1.2.0**

\`\`\`whitepaper-market-sizing
\`\`\`

`;
  });
}

/**
 * Replaces the markdown table under "Evidence status of core claims" with a fenced block
 * rendered as a Recharts radar chart (see whitepaper-evidence-radar-chart.tsx).
 */
function replaceEvidenceStatusTableWithRadarBlock(text: string): string {
  const re =
    /\*\*Evidence status of core claims\*\*\s*\n\n(?:(?:\|[^\r\n]*\r?\n)+)/;
  return text.replace(re, () => {
    return `**Evidence status of core claims**

\`\`\`whitepaper-radar-evidence-status
\`\`\`

`;
  });
}

export function extractWhitepaperToc(markdown: string): { id: string; label: string }[] {
  const items: { id: string; label: string }[] = [];
  for (const line of markdown.split(/\r?\n/)) {
    const m = line.match(/^## (.+)$/);
    if (m) {
      const label = m[1].trim();
      items.push({ id: slugifyWhitepaperHeading(label), label });
    }
  }
  return items;
}
