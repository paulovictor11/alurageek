import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function OutlineButton({ children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className="h-10 px-8 text-primary border border-primary transition-colors hover:bg-primary hover:text-white"
        >
            {children}
        </button>
    );
}
