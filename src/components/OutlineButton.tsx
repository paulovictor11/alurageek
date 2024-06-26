import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function OutlineButton({ children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className="h-10 px-8 font-semibold text-primary rounded-md border-2 border-primary transition-colors bg-transparent hover:bg-primary hover:text-white flex items-center gap-2"
        >
            {children}
        </button>
    );
}
