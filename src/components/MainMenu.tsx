import Link from "next/link";
import { useRouter } from "next/router";

export function MainMenu() {
    const router = useRouter();

    function isActive(url: string) {
        return router.pathname === url;
    }

    return (
        <ul className="flex items-center gap-4">
            <li
                className={`font-semibold cursor-pointer rounded px-4 py-2 transition-colors ${
                    isActive("/")
                        ? "bg-blue-500 text-white"
                        : "text-tertiary hover:bg-lightBlue"
                }`}
            >
                <Link href="/">Início</Link>
            </li>
            <li
                className={`font-semibold cursor-pointer rounded px-4 py-2 transition-colors ${
                    isActive("/categorias")
                        ? "bg-blue-500 text-white"
                        : "text-tertiary hover:bg-lightBlue"
                }`}
            >
                <Link href="/categorias">Categorias</Link>
            </li>
            <li
                className={`font-semibold cursor-pointer rounded px-4 py-2 transition-colors ${
                    isActive("/produtos")
                        ? "bg-blue-500 text-white"
                        : "text-tertiary hover:bg-lightBlue"
                }`}
            >
                <Link href="/produtos">Produtos</Link>
            </li>
        </ul>
    );
}
