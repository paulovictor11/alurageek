import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    text: string;
};

export function Input({ text, ...rest }: Props) {
    return (
        <div className="flex flex-col gap-1 bg-white px-3 py-2 shadow rounded border-2 border-white focus-within:border-primary cursor-text">
            <label
                htmlFor={rest.id}
                className="text-[12px] text-lightGray cursor-text"
            >
                {text}
            </label>
            <input {...rest} className="bg-transparent outline-none" />
        </div>
    );
}
