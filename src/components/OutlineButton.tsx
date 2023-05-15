import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function OutlineButton({ children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className="h-10 px-8 font-semibold text-primary rounded border-2 border-primary transition-colors hover:bg-primary hover:text-white"
        >
            {children}
        </button>
    );
}
