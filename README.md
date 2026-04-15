# @mchant/svelte-ui-lib

Shared Svelte 5 component library. Install once, use across all projects.

## Install

```bash
# From GitHub Packages (after publishing)
npm install @mchant/svelte-ui-lib

# During development — install directly from the repo
npm install github:mchant/svelte-ui-lib
```

## Usage

```svelte
<script lang="ts">
  import { Button, Card, Badge } from '@mchant/svelte-ui-lib';
</script>

<Card title="Device Status">
  <Badge color="green">Online</Badge>
  <p>All systems nominal.</p>

  {#snippet footer()}
    <Button variant="primary" onclick={() => console.log('clicked')}>
      Refresh
    </Button>
  {/snippet}
</Card>
```

## Components

### `<Button>`

| Prop | Type | Default |
|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'danger'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `disabled` | `boolean` | `false` |
| `onclick` | `(e: MouseEvent) => void` | — |

### `<Card>`

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | — |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `footer` | `Snippet` | — |

### `<Badge>`

| Prop | Type | Default |
|---|---|---|
| `color` | `'gray' \| 'green' \| 'yellow' \| 'red' \| 'blue'` | `'gray'` |

## Development

```bash
npm install
npm run dev       # Preview components at localhost:5173
npm run package   # Build the dist/ folder
```

## Publishing

### GitHub Packages
```bash
# In package.json, set "publishConfig": { "registry": "https://npm.pkg.github.com" }
npm publish
```

### npm
```bash
npm publish --access public
```

## Using in a monorepo (workspace)

If your projects are in the same repo, skip publishing entirely and use npm workspaces:

```json
// root package.json
{
  "workspaces": ["packages/svelte-ui-lib", "ems/frontend", "eos/modbus_client"]
}
```

Then in each project:
```json
{
  "dependencies": {
    "@mchant/svelte-ui-lib": "*"
  }
}
```
