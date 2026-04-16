/**
 * Materializes app/v0.1.0/* and archive/v0.1.0/bundle/* from ARCHIVE_V0_1_0_GIT_SHA.
 * Run: node scripts/materialize-archive-v0.1.0.mjs
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function readPinnedSha() {
  const cfgPath = path.join(repoRoot, 'lib', 'archive-v0.1.0-config.ts');
  const txt = fs.readFileSync(cfgPath, 'utf8');
  const m = txt.match(/ARCHIVE_V0_1_0_GIT_SHA\s*=\s*['"]([a-f0-9]+)['"]/i);
  if (!m) throw new Error('Could not parse ARCHIVE_V0_1_0_GIT_SHA from lib/archive-v0.1.0-config.ts');
  return m[1];
}

const SHA = readPinnedSha();
const PREFIX = '/v0.1.0';

const bundleDir = path.join(repoRoot, 'archive', 'v0.1.0', 'bundle');
const appDestRoot = path.join(repoRoot, 'app', 'v0.1.0');

function sh(cmd) {
  return execSync(cmd, { cwd: repoRoot, encoding: 'utf8' }).trim();
}

function gitShow(spec) {
  try {
    return execSync(`git show ${spec}`, { cwd: repoRoot, encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  } catch {
    return null;
  }
}

function listTree(prefix) {
  const out = sh(`git ls-tree -r --name-only ${SHA} ${prefix}`);
  return out ? out.split('\n').filter(Boolean) : [];
}

function rewriteImports(content) {
  return content
    .replaceAll(`from '@/components/`, `from '@/v01/components/`)
    .replaceAll(`from "@/components/`, `from "@/v01/components/`)
    .replaceAll(`from '@/lib/`, `from '@/v01/lib/`)
    .replaceAll(`from "@/lib/`, `from "@/v01/lib/`);
}

function prefixInternalHrefs(content) {
  let s = content;
  s = s.replace(/\bhref=\{(['"])\//g, (m, q) => `href={${q}${PREFIX}/`);
  s = s.replace(/\bhref=(["'])\//g, (m, q) => {
    if (m.includes(`${PREFIX}/`) || m.includes('http')) return m;
    return `href=${q}${PREFIX}/`;
  });
  while (s.includes(`${PREFIX}${PREFIX}/`)) {
    s = s.replaceAll(`${PREFIX}${PREFIX}/`, `${PREFIX}/`);
  }
  return s;
}

function stripDocsHeader(content) {
  let s = content;
  s = s.replace(/import\s*\{\s*DocsHeader\s*\}\s*from\s*['"][^'"]+['"];\s*\n?/g, '');
  s = s.replace(
    /import\s*\{([^}]+)\}\s*from\s*(['"])([^'"]*docs-header[^'"]*)\2;?\s*\n?/g,
    (full, inner, q, mod) => {
      const parts = inner
        .split(',')
        .map((x) => x.trim())
        .filter(Boolean)
        .filter((x) => !/^DocsHeader$/.test(x.split(/\s+as\s+/)[0].trim()));
      if (parts.length === 0) return '';
      return `import { ${parts.join(', ')} } from ${q}${mod}${q};\n`;
    }
  );
  s = s.replace(/\n\s*<DocsHeader\b[^/]*\/>\s*\n/g, '\n');
  s = s.replace(/\n\s*<DocsHeader\b[\s\S]*?<\/DocsHeader>\s*\n/g, '\n');
  return s;
}

function patchSidebarPathname(content) {
  const needle = 'const pathname = usePathname();';
  if (!content.includes(needle)) return content;
  const inject = `const _v01RawPath = usePathname();
  const pathname =
    _v01RawPath != null && (_v01RawPath === '${PREFIX}' || _v01RawPath.startsWith('${PREFIX}/'))
      ? _v01RawPath === '${PREFIX}'
        ? '/'
        : _v01RawPath.slice('${PREFIX}'.length) || '/'
      : _v01RawPath ?? '';`;
  return content.replace(needle, inject);
}

function patchTocPathname(content) {
  const needle = 'const pathname = usePathname();';
  if (!content.includes(needle) || !content.includes('getGitHubEditUrl')) return content;
  const inject = `const _v01RawPathToc = usePathname();
  const pathname =
    _v01RawPathToc != null && (_v01RawPathToc === '${PREFIX}' || _v01RawPathToc.startsWith('${PREFIX}/'))
      ? _v01RawPathToc === '${PREFIX}'
        ? '/'
        : _v01RawPathToc.slice('${PREFIX}'.length) || '/'
      : _v01RawPathToc ?? '';`;
  let s = content.replace(needle, inject);
  s = s.replace(
    'const relatedLinks = pathname ? getRelatedLinks(pathname) : [];',
    `const relatedLinksRaw = pathname ? getRelatedLinks(pathname) : [];
 const relatedLinks = relatedLinksRaw.map((l) => ({
    ...l,
    href: l.href.startsWith('http') ? l.href : (l.href === '/' ? '${PREFIX}' : '${PREFIX}' + (l.href.startsWith('/') ? l.href : '/' + l.href)),
  }));`
  );
  return s;
}

function rmrf(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

console.log(`Materialize v0.1.0 from ${SHA}…`);

rmrf(bundleDir);
rmrf(appDestRoot);
ensureDir(bundleDir);
ensureDir(appDestRoot);

const bundleFiles = [
  ...listTree('components').filter((f) => f.endsWith('.tsx') || f.endsWith('.ts')),
  ...listTree('lib').filter((f) => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.json')),
];

for (const rel of bundleFiles) {
  const spec = `${SHA}:${rel}`;
  const raw = gitShow(spec);
  if (raw == null) continue;
  let text = raw;
  if (rel.endsWith('.tsx') || rel.endsWith('.ts')) {
    text = rewriteImports(text);
    text = prefixInternalHrefs(text);
    if (rel.endsWith('docs-sidebar.tsx')) text = patchSidebarPathname(text);
    if (rel.endsWith('docs-toc.tsx')) text = patchTocPathname(text);
  }
  const out = path.join(bundleDir, ...rel.split('/'));
  ensureDir(path.dirname(out));
  fs.writeFileSync(out, text, 'utf8');
}

const appFiles = listTree('app').filter((f) => {
  if (f === 'app/layout.tsx' || f === 'app/globals.css') return false;
  return f.endsWith('.tsx') || f.endsWith('.ts');
});

for (const rel of appFiles) {
  const relFromApp = rel.slice('app/'.length);
  const spec = `${SHA}:${rel}`;
  const raw = gitShow(spec);
  if (raw == null) continue;
  let text = rewriteImports(raw);
  text = stripDocsHeader(text);
  text = prefixInternalHrefs(text);
  const out = path.join(appDestRoot, ...relFromApp.split('/'));
  ensureDir(path.dirname(out));
  fs.writeFileSync(out, text, 'utf8');
}

console.log(`Wrote bundle: ${bundleFiles.length} files, app pages: ${appFiles.length}`);
