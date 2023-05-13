import { CSSProperties, ReactNode } from "react";

type TableRootProps = {
    children: ReactNode;
};

function TableRoot(props: TableRootProps) {
    return (
        <div className="w-full overflow-x-auto relative rounded shadow-lg">
            <table className="w-full bg-white table-auto text-sm text-left text-gray-500">
                {props.children}
            </table>
        </div>
    );
}

TableRoot.displayName = "Table.Root";

type TrProps = {
    children: ReactNode;
};

function Tr(props: TrProps) {
    return <tr>{props.children}</tr>;
}

Tr.displayName = "Table.Tr";

type TableHeadProps = {
    children: ReactNode;
};

function Thead(props: TableHeadProps) {
    return (
        <thead className="text-xs text-black uppercase bg-zinc-200">
            {props.children}
        </thead>
    );
}

Thead.displayName = "Table.Thead";

type ThProps = {
    colSpan?: number;
    textDirection?: "left" | "right";
    children: ReactNode;
    style?: CSSProperties;
};

function Th({ colSpan = 1, textDirection = "left", children, style }: ThProps) {
    return (
        <th
            style={style}
            scope="col"
            colSpan={colSpan}
            className={`py-3 px-6 ${
                textDirection === "left" ? "text-start" : "text-end"
            }`}
        >
            {children}
        </th>
    );
}

Th.displayName = "Table.Th";

type TbodyProps = {
    children?: ReactNode;
};

function Tbody(props: TbodyProps) {
    return <tbody className="divide-y divide-dashed">{props.children}</tbody>;
}

Tbody.displayName = "Table.Tbody";

type TdProps = {
    weight?: "bold" | "regular";
    textDirection?: "left" | "right";
    children: ReactNode;
};

function Td({ weight = "regular", textDirection = "left", children }: TdProps) {
    return (
        <td
            scope="row"
            className={`
                py-4 px-6
                ${
                    weight === "bold"
                        ? "font-semibold text-gray-900 whitespace-nowrap"
                        : ""
                }
                ${textDirection === "left" ? "text-start" : "text-end"}
            `}
        >
            {children}
        </td>
    );
}

Td.displayName = "Table.Td";

type TfootProps = {
    colSpan?: number;
    message: string;
};

function Tfoot({ colSpan = 1, message }: TfootProps) {
    return (
        <tfoot>
            <tr>
                <td
                    className="p-2 text-gray-500 italic text-center "
                    scope="col"
                    colSpan={colSpan}
                >
                    {message}
                </td>
            </tr>
        </tfoot>
    );
}

Tfoot.displayName = "Table.Tfoot";

export const Table = {
    Root: TableRoot,
    Tr: Tr,
    Thead: Thead,
    Th: Th,
    Tbody: Tbody,
    Td: Td,
    Tfoot: Tfoot,
};
