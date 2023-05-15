import Link from "next/link";

export function ProductCard() {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full h-[174px] bg-zinc-300 rounded" />

            <h3 className="text-sm text-tertiary font-medium">Produto XYZ</h3>
            <h1 className="text-tertiary font-bold">R$ 60,00</h1>

            <Link
                href="/produto/xyz"
                className="text-primary font-bold hover:underline underline-offset-2"
            >
                Ver produto
            </Link>
        </div>
    );
}
