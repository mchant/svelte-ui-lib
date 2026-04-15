<script lang="ts" module>
  export interface CardProps {
    title?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children?: import('svelte').Snippet;
    footer?: import('svelte').Snippet;
  }
</script>

<script lang="ts">
  let {
    title,
    padding = 'md',
    children,
    footer
  }: CardProps = $props();

  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8'
  };
</script>

<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  {#if title}
    <div class="border-b border-gray-200 px-5 py-3">
      <h3 class="text-base font-semibold text-gray-900">{title}</h3>
    </div>
  {/if}

  <div class={paddings[padding]}>
    {@render children?.()}
  </div>

  {#if footer}
    <div class="border-t border-gray-200 px-5 py-3 bg-gray-50 rounded-b-lg">
      {@render footer()}
    </div>
  {/if}
</div>
