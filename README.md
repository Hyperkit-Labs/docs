# Hyperkit Docs

Official documentation site for Hyperkit products and protocols.

## Current scope

This repository powers `docs.hyperkitlabs.com` and should reflect the current product truth set.

The current documentation baseline for `v0.2.0` is:

1. HyperAgent is the primary workflow product surface.
2. The active product scope is narrower than the long-term architecture roadmap.
3. Product pages should distinguish:
   - current supported workflow path
   - documented implementation scope
   - architecture direction
4. Legacy wording should be treated carefully and rewritten where it overstates current support.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update process

For major docs updates:

1. audit current claims against the product repos
2. classify claims as:
   - implemented
   - partial
   - roadmap
3. update top-level pages first
4. then update subpages and references
5. run lint before merge

## Current priority

The current priority is a `v0.2.0` docs truth-set pass focused on:

1. homepage
2. HyperAgent overview
3. HyperAgent getting started
4. HyperAgent concepts
5. HyperAgent API overview
6. SDK overview
7. ERC-1066 and x402 overview

## Notes

This repo previously contained broad product marketing language that no longer matched the active product path. The current direction is to make the docs read like a serious product documentation site with implementation honesty.
