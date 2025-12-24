# Last Updated Timestamp Guide

## Overview

The "Last updated" timestamp in the documentation shows when each page was last modified. This is automatically calculated from Git commit dates.

## How It Works

1. **Build Time**: Before building, a script (`scripts/get-last-updated.js`) scans all page files and gets their last Git commit date
2. **Metadata File**: The dates are stored in `lib/last-updated-metadata.json`
3. **Display**: The `DocsTOC` component reads from this metadata and displays the formatted timestamp

## Updating Last Updated Timestamps

### Automatic (Recommended)

The timestamps are automatically updated when you build the site:

```bash
npm run build
```

This runs `prebuild` script which generates the metadata file from Git commit dates.

### Manual Update

To manually regenerate the metadata file:

```bash
npm run update-metadata
```

This will:
- Scan all `page.tsx` files in the `app` directory
- Get the last Git commit date for each file
- Update `lib/last-updated-metadata.json`

### After Making Changes

When you modify a page:

1. **Commit your changes**:
   ```bash
   git add app/hyperagent/page.tsx
   git commit -m "Update hyperagent page"
   ```

2. **Rebuild the site**:
   ```bash
   npm run build
   ```

   The timestamp will automatically update based on the new commit date.

## How Timestamps Are Calculated

1. **Primary Method**: Uses `git log -1 --format=%ci` to get the last commit date
2. **Fallback**: If file is not in Git, uses file modification time (`fs.statSync`)
3. **Display**: Formats as "X days ago", "X hours ago", "X minutes ago", or "Just now"

## Metadata File Structure

The `lib/last-updated-metadata.json` file looks like:

```json
{
  "/": "2025-12-24T10:30:00.000Z",
  "/hyperagent": "2025-12-24T14:20:00.000Z",
  "/hyperagent/getting-started": "2025-12-23T09:15:00.000Z"
}
```

Each key is the route path, and the value is an ISO 8601 date string.

## Troubleshooting

### Timestamp shows "2 days ago" for all pages

- The metadata file might not exist or be outdated
- Run `npm run update-metadata` to regenerate it
- Ensure you're committing changes to Git

### Timestamp doesn't update after committing

- Make sure you've committed the file to Git
- Run `npm run build` to regenerate metadata
- Check that the file path in metadata matches your route

### Want to use a different date source?

You can modify `lib/github-utils.ts`:
- Use GitHub API to fetch commit dates
- Use a database to store manual update dates
- Use file system modification times

## Best Practices

1. **Commit regularly**: Timestamps are based on Git commits
2. **Rebuild after changes**: Run `npm run build` to update timestamps
3. **Use meaningful commits**: Each commit message helps track what changed
4. **Don't edit metadata manually**: Let the script generate it automatically

