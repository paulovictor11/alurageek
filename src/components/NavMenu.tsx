import Link from "next/link";
import { useRouter } from "next/router";

export function NavMenu() {
    const router = useRouter();

    function isActive(url: string) {
        return router.pathname === url;
    }

    return (
        <div className="w-full h-14 bg-primary">
            <ul className="max-w-[1440px] mx-auto h-14 flex items-center gap-6">
                <li
                    className={`font-semibold text-white cursor-pointer hover:underline underline-offset-2 ${
                        isActive("/painel") ? "underline" : ""
                    }`}
                >
                    <Link href="/painel">Início</Link>
                </li>
                <li
                    className={`font-semibold text-white cursor-pointer hover:underline underline-offset-2 ${
                        isActive("/painel/categorias") ? "underline" : ""
                    }`}
                >
                    <Link href="/painel/categorias">Categorias</Link>
                </li>
                <li
                    className={`font-semibold text-white cursor-pointer hover:underline underline-offset-2 ${
                        isActive("/painel/produtos") ? "underline" : ""
                    }`}
                >
                    <Link href="/painel/produtos">Produtos</Link>
                </li>
            </ul>
        </div>
    );
}
