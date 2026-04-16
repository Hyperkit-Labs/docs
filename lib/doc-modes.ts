export type DocMode = 'tutorial' | 'how-to' | 'reference' | 'explanation';

export const DOC_MODE_META: Record<
  DocMode,
  { label: string; abbrev: string; blurb: string }
> = {
  tutorial: {
    label: 'Tutorial',
    abbrev: 'T',
    blurb: 'Step-by-step path to a working outcome.',
  },
  'how-to': {
    label: 'How-to guide',
    abbrev: 'H',
    blurb: 'Goal-focused steps for a specific task.',
  },
  reference: {
    label: 'Reference',
    abbrev: 'R',
    blurb: 'Exact facts: fields, parameters, and contracts.',
  },
  explanation: {
    label: 'Explanation',
    abbrev: 'E',
    blurb: 'Context, intent, and how pieces fit together.',
  },
};
