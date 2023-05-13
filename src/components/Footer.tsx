import { Copyright } from "phosphor-react";
import { Input } from "./Input";
import { Logo } from "./Logo";
import { RaisedButton } from "./RaisedButton";

export function Footer() {
    return (
        <footer className="bg-white">
            <div className="bg-lightBlue py-16">
                <div className="max-w-[1440px] mx-auto flex items-start gap-28">
                    <Logo />

                    <ul className="flex flex-col gap-6">
                        <li className="text-tertiary font-medium cursor-pointer hover:underline hover:underline-offset-2">
                            Quem somos nós
                        </li>
                        <li className="text-tertiary font-medium cursor-pointer hover:underline hover:underline-offset-2">
                            Política de privacidade
                        </li>
                        <li className="text-tertiary font-medium cursor-pointer hover:underline hover:underline-offset-2">
                            Programa fidelidade
                        </li>
                        <li className="text-tertiary font-medium cursor-pointer hover:underline hover:underline-offset-2">
                            Nossas lojas
                        </li>
                        <li className="text-tertiary font-medium cursor-pointer hover:underline hover:underline-offset-2">
                            Quero ser franqueado
                        </li>
                        <li className="text-tertiary font-medium cursor-pointer hover:underline hover:underline-offset-2">
                            Anuncie aqui
                        </li>
                    </ul>

                    <form className="flex-1">
                        <h1 className="text-tertiary font-bold mb-2">
                            Fale conosco
                        </h1>

                        <Input text="Nome" type="text" id="nome" />

                        <textarea
                            cols={30}
                            rows={3}
                            placeholder="Escreva sua mensagem"
                            className="mt-4 mb-2 px-3 py-4 shadow w-full rounded outline-primary"
                        ></textarea>

                        <RaisedButton type="submit">
                            Enviar mensagem
                        </RaisedButton>
                    </form>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-8">
                <span>
                    Desenvoldido por{" "}
                    <span className="text-primary font-semibold hover:underline underline-offset-2 cursor-pointer">
                        Blue Eye Studios
                    </span>
                </span>
                <span className="flex items-center gap-1">
                    <Copyright size={18} /> 2023
                </span>
            </div>
        </footer>
    );
}
