import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { RaisedButton } from "@/components/RaisedButton";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { FormEvent } from "react";

export default function Login() {
    const router = useRouter();

    function handleLogin(event: FormEvent) {
        event.preventDefault();
        // setCookie(null, "@app:token", "aaa", {
        //     maxAge: 5 * 24 * 60 * 60,
        //     path: "/",
        // });
        router.replace("/painel");
    }

    return (
        <>
            <Header />

            <main className="my-24 max-w-[424px] mx-auto">
                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <h1 className="text-lg text-tertiary font-bold text-center">
                        Iniciar Sessão
                    </h1>

                    <Input text="Escreva seu e-mail" type="email" id="email" />
                    <Input
                        text="Escreva sua senha"
                        type="password"
                        id="password"
                    />

                    <RaisedButton type="submit">Entrar</RaisedButton>
                </form>
            </main>

            <Footer />
        </>
    );
}
