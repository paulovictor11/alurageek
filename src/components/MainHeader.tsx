import { parseCookies } from "nookies";
import { Header } from "./Header";
import { SearchInput } from "./SearchInput";
import { OutlineButton } from "./OutlineButton";
import { MainMenu } from "./MainMenu";
import { Handbag } from "phosphor-react";
import Link from "next/link";

export function MainHeader() {
    const { "@app:token": token } = parseCookies();

    function mountTrailingLink() {
        return token ? (
            <Link href="/perfil">
                <OutlineButton>Meu Perfil</OutlineButton>
            </Link>
        ) : (
            <Link href="/login">
                <OutlineButton>Login</OutlineButton>
            </Link>
        );
    }

    function mountTrailing() {
        return (
            <div className="flex items-center gap-4">
                <SearchInput />

                {mountTrailingLink()}

                <Link href="/carrinho" className="relative">
                    <Handbag
                        size={24}
                        className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                    />
                </Link>
            </div>
        );
    }

    return <Header leading={<MainMenu />} trailing={mountTrailing()} />;
}
