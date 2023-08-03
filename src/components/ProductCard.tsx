import Link from "next/link";

export function ProductCard() {
    return (
        <Link
            href="/produto/xyz"
            className="flex flex-col gap-2 border-2 rounded-lg overflow-hidden group cursor-pointer hover:border-primary"
        >
            <div className="w-full h-72 bg-zinc-200" />

            <div className="p-4">
                <h3 className="text-sm text-tertiary font-medium">
                    Produto XYZ
                </h3>
                <h1 className="text-tertiary font-bold mb-4">R$ 60,00</h1>

                <span className="text-primary font-bold group-hover:underline underline-offset-2">
                    Ver produto
                </span>
            </div>
        </Link>
    );
}
