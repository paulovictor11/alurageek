import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { OutlineButton } from "./OutlineButton";

export function LogoutButton() {
    const router = useRouter();

    function logout() {
        if (confirm("Tem certeza que deseja sair?")) {
            destroyCookie(null, "@app:token");
            router.replace("/");
        }
    }

    return <OutlineButton onClick={logout}>Sair</OutlineButton>;
}
