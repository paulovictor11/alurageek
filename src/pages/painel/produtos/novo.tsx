import { Input } from "@/components/Input";
import { OutlineButton } from "@/components/OutlineButton";
import { RaisedButton } from "@/components/RaisedButton";
import { Select } from "@/components/Select";
import { DashLayout } from "@/layouts/DashLayout";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function NewProduct() {
    const router = useRouter();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        router.replace("/painel/produtos");
    }

    return (
        <DashLayout>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h1 className="text-[32px] text-tertiary font-bold">
                    Adicionar novo produto
                </h1>

                <Input text="URL da imagem" type="text" id="url" />
                <Select
                    id="categorias"
                    text="Categoria"
                    items={["Star Wars", "Consoles", "Diversos"]}
                />
                <Input text="Nome do produto" type="text" id="nome" />
                <Input text="Preço do produto" type="text" id="preco" />

                <textarea
                    cols={30}
                    rows={3}
                    placeholder="Descrição do produto"
                    className="px-3 py-4 shadow w-full rounded outline-primary"
                ></textarea>

                <div className="flex items-center justify-center gap-4">
                    <OutlineButton
                        onClick={() => router.replace("/painel/produtos")}
                    >
                        Voltar
                    </OutlineButton>
                    <RaisedButton type="submit">Salvar</RaisedButton>
                </div>
            </form>
        </DashLayout>
    );
}
