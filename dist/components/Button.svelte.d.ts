export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children?: import('svelte').Snippet;
}
declare const Button: import("svelte").Component<ButtonProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
