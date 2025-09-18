import type React from "react";
import type { ButtonProps } from "../../types";

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const standard = 'rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantStyle = {
        primary:
        'bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover',

        secondary:
        'bg-button-secondary-bg text-button-secondary-text border border-button-secondary-border hover:bg-button-secondary-hover-bg/10',
    };

    const sizeStyle = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const className = `
        ${standard}
        ${variantStyle[variant]}
        ${sizeStyle[size]}
    `;

    return (
        <button className={className.trim()} {...props}>
            {children}
        </button>
  );
}