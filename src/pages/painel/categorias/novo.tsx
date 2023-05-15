import { Input } from "@/components/Input";
import { OutlineButton } from "@/components/OutlineButton";
import { RaisedButton } from "@/components/RaisedButton";
import { DashLayout } from "@/layouts/DashLayout";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function NewCategory() {
    const router = useRouter();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        router.replace("/painel/categorias");
    }

    return (
        <DashLayout>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h1 className="text-[32px] text-tertiary font-bold">
                    Adicionar nova categoria
                </h1>

                <Input text="Nome da categoria" type="text" id="nome" />

                <div className="flex items-center justify-center gap-4">
                    <OutlineButton
                        onClick={() => router.replace("/painel/categorias")}
                    >
                        Voltar
                    </OutlineButton>
                    <RaisedButton type="submit">Salvar</RaisedButton>
                </div>
            </form>
        </DashLayout>
    );
}
