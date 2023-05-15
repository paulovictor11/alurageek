import Link from "next/link";
import { useRouter } from "next/router";

export function Menu() {
    const router = useRouter();

    function isActive(url: string) {
        return router.pathname === url;
    }

    return (
        <ul className="flex items-center gap-6">
            <li
                className={`font-semibold text-primary cursor-pointer hover:underline underline-offset-2 ${
                    isActive("/painel") ? "underline" : ""
                }`}
            >
                <Link href="/painel">Painel</Link>
            </li>
            <li
                className={`font-semibold text-primary cursor-pointer hover:underline underline-offset-2 ${
                    isActive("/painel/categorias") ? "underline" : ""
                }`}
            >
                <Link href="/painel/categorias">Categorias</Link>
            </li>
            <li
                className={`font-semibold text-primary cursor-pointer hover:underline underline-offset-2 ${
                    isActive("/painel/produtos") ? "underline" : ""
                }`}
            >
                <Link href="/painel/produtos">Produtos</Link>
            </li>
        </ul>
    );
}
