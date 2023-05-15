import Link from "next/link";
import { useRouter } from "next/router";

export function MainMenu() {
    const router = useRouter();

    function isActive(url: string) {
        return router.pathname === url;
    }

    return (
        <div className="w-full h-14 bg-primary">
            <ul className="max-w-[1440px] mx-auto h-14 flex items-center gap-6">
                <li
                    className={`font-semibold text-white cursor-pointer hover:underline underline-offset-2 ${
                        isActive("/") ? "underline" : ""
                    }`}
                >
                    <Link href="/">Início</Link>
                </li>
                <li
                    className={`font-semibold text-white cursor-pointer hover:underline underline-offset-2 ${
                        isActive("/categorias") ? "underline" : ""
                    }`}
                >
                    <Link href="/categorias">Categorias</Link>
                </li>
                <li
                    className={`font-semibold text-white cursor-pointer hover:underline underline-offset-2 ${
                        isActive("/produtos") ? "underline" : ""
                    }`}
                >
                    <Link href="/produtos">Produtos</Link>
                </li>
            </ul>
        </div>
    );
}
