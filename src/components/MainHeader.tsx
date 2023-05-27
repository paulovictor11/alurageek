import { parseCookies } from "nookies";
import { Header } from "./Header";
import { SearchInput } from "./SearchInput";
import Link from "next/link";
import { OutlineButton } from "./OutlineButton";
import { MainMenu } from "./MainMenu";

export function MainHeader() {
    const { "@app:token": token } = parseCookies();

    function mountTrailingLink() {
        return token ? (
            <Link href="/painel">
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
            </div>
        );
    }

    return <Header leading={<MainMenu />} trailing={mountTrailing()} />;
}
