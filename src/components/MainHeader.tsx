import { parseCookies } from "nookies";
import { Header } from "./Header";
import { SearchInput } from "./SearchInput";
import Link from "next/link";
import { OutlineButton } from "./OutlineButton";

export function MainHeader() {
    const { "@app:token": token } = parseCookies();

    function mountTrailing() {
        return token ? (
            <Link href="/painel">
                <OutlineButton>Acessar Painel</OutlineButton>
            </Link>
        ) : (
            <Link href="/login">
                <OutlineButton>Login</OutlineButton>
            </Link>
        );
    }

    return <Header leading={<SearchInput />} trailing={mountTrailing()} />;
}
