<script lang="ts">
  // This demo page is not part of the published package.
  // Run `npm run dev` to preview components here.
  import { Button, Card, Badge } from '$lib';
</script>

<main class="max-w-2xl mx-auto p-8 space-y-8">
  <h1 class="text-2xl font-bold">Component Preview</h1>

  <!-- Buttons -->
  <Card title="Button">
    <div class="flex gap-3 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  </Card>

  <!-- Card with footer -->
  <Card title="Card with Footer">
    <p class="text-gray-600">This card has a title, body content, and a footer slot.</p>
    {#snippet footer()}
      <div class="flex justify-end gap-2">
        <Button variant="secondary" size="sm">Cancel</Button>
        <Button variant="primary" size="sm">Confirm</Button>
      </div>
    {/snippet}
  </Card>

  <!-- Badges -->
  <Card title="Badge">
    <div class="flex gap-2 flex-wrap">
      <Badge color="gray">Idle</Badge>
      <Badge color="green">Online</Badge>
      <Badge color="yellow">Warning</Badge>
      <Badge color="red">Error</Badge>
      <Badge color="blue">Info</Badge>
    </div>
  </Card>
</main>
