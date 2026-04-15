export interface CardProps {
    title?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children?: import('svelte').Snippet;
    footer?: import('svelte').Snippet;
}
declare const Card: import("svelte").Component<CardProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
