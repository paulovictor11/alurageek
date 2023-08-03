import { InputHTMLAttributes } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function Radio({ label, ...props }: Props) {
    return (
        <div className="flex items-center">
            <input
                {...props}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
                htmlFor={props.id}
                className="block ml-2 font-medium text-gray-900"
            >
                {label}
            </label>
        </div>
    );
}
