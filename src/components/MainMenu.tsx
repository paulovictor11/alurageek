import Link from "next/link";
import { useRouter } from "next/router";

export function MainMenu() {
    const router = useRouter();

    function isActive(url: string) {
        return router.pathname === url;
    }

    return (
        <ul className="flex items-center gap-4">
            <li>
                <Link
                    href="/"
                    className={`font-semibold cursor-pointer rounded-md px-4 py-2 transition-colors ${
                        isActive("/")
                            ? "bg-blue-500 text-white"
                            : "text-tertiary hover:bg-lightBlue"
                    }`}
                >
                    Início
                </Link>
            </li>
            <li>
                <Link
                    href="/categorias"
                    className={`font-semibold cursor-pointer rounded-md px-4 py-2 transition-colors ${
                        isActive("/categorias")
                            ? "bg-blue-500 text-white"
                            : "text-tertiary hover:bg-lightBlue"
                    }`}
                >
                    Categorias
                </Link>
            </li>
            <li>
                <Link
                    href="/produtos"
                    className={`font-semibold cursor-pointer rounded-md px-4 py-2 transition-colors ${
                        isActive("/produtos")
                            ? "bg-blue-500 text-white"
                            : "text-tertiary hover:bg-lightBlue"
                    }`}
                >
                    Produtos
                </Link>
            </li>
        </ul>
    );
}
