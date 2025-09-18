import type { ReactNode } from "react";
import type React from "react";

type Variant = "primary" | "secondary";

type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
}

export interface LogoProps {
    size?: Size;
    to?: string;
}