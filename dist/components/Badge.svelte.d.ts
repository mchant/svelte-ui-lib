export interface BadgeProps {
    color?: 'gray' | 'green' | 'yellow' | 'red' | 'blue';
    children?: import('svelte').Snippet;
}
declare const Badge: import("svelte").Component<BadgeProps, {}, "">;
type Badge = ReturnType<typeof Badge>;
export default Badge;
