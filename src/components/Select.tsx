type Props = {
    id: string;
    text: string;
    items: string[];
};

export function Select({ id, text, items }: Props) {
    return (
        <div className="flex flex-col gap-1 bg-white px-3 py-2 shadow rounded border-2 border-white focus-within:border-primary">
            <label htmlFor={id} className="text-[12px] text-lightGray">
                {text}
            </label>
            <select id={id} className="outline-none">
                {items.length ? (
                    <>
                        <option disabled selected>
                            Selecione...
                        </option>
                        {items.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
                    </>
                ) : (
                    <option disabled>Sem itens</option>
                )}
            </select>
        </div>
    );
}
