type Props = {
    id: string;
    value?: string | number;
    label?: string;
};

export function Checkbox(props: Props) {
    return (
        <div className="flex items-center h-5 gap-4">
            <input
                id={props.id}
                type="checkbox"
                value={props.value}
                className="w-4 h-4 border border-gray-100 rounded-lg bg-background focus:ring-3 focus:ring-primary"
            />
            {props.label ? (
                <label
                    htmlFor={props.id}
                    className="text-sm font-medium text-gray-900"
                >
                    {props.label}
                </label>
            ) : null}
        </div>
    );
}
