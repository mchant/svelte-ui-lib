<script lang="ts" module>
  export interface BadgeProps {
    color?: 'gray' | 'green' | 'yellow' | 'red' | 'blue';
    children?: import('svelte').Snippet;
  }
</script>

<script lang="ts">
  let { color = 'gray', children }: BadgeProps = $props();

  const colors = {
    gray: 'bg-gray-100 text-gray-700',
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-700',
    blue: 'bg-blue-100 text-blue-700'
  };
</script>

<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium {colors[color]}">
  {@render children?.()}
</span>

blah blah