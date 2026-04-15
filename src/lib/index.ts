// Re-export all components from one entry point.
// Consumers do: import { Button, Card, Badge } from '@mchant/svelte-ui-lib'
export { default as Button } from './components/Button.svelte';
export { default as Card } from './components/Card.svelte';
export { default as Badge } from './components/Badge.svelte';

// Re-export types so consumers can type their props
export type { ButtonProps } from './components/Button.svelte';
export type { CardProps } from './components/Card.svelte';
export type { BadgeProps } from './components/Badge.svelte';
