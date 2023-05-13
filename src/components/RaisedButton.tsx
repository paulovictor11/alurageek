import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function RaisedButton({ children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className="h-10 px-8 bg-primary text-white transition-colors hover:bg-blue-700"
        >
            {children}
        </button>
    );
}
