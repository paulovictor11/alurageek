import { Header } from "@/components/Header";
import { NavMenu } from "@/components/NavMenu";
import { Plus } from "phosphor-react";
import { Table } from "@/components/Table";
import { LogoutButton } from "@/components/LogoutButton";
import Link from "next/link";

export default function Categories() {
    return (
        <>
            <Header>
                <LogoutButton />
            </Header>
            <NavMenu />

            <main className="max-w-[1440px] mx-auto my-16 flex flex-col gap-2">
                <section>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[32px] text-tertiary font-bold">
                            Categorias
                        </h4>
                        <Link
                            href="/painel/categorias/novo"
                            className="flex items-center gap-2 text-primary font-bold hover:underline underline-offset-2 hover:gap-3 transition-all"
                        >
                            Adicionar
                            <Plus size={16} weight="bold" />
                        </Link>
                    </div>
                </section>

                <Table.Root>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Nome</Table.Th>
                            <Table.Th style={{ width: "15%" }}>Ações</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Td weight="bold">Star Wars</Table.Td>
                            <Table.Td>
                                <div className="inline-flex gap-3">
                                    <Link
                                        href="/painel/produtos/novo"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Detalhar
                                    </Link>
                                    <Link
                                        href="/painel/produtos/novo"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Editar
                                    </Link>
                                    <span className="font-semibold text-primary hover:underline cursor-pointer">
                                        Apagar
                                    </span>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td weight="bold">Consoles</Table.Td>
                            <Table.Td>
                                <div className="inline-flex gap-3">
                                    <Link
                                        href="/painel/produtos/novo"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Detalhar
                                    </Link>
                                    <Link
                                        href="/painel/produtos/novo"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Editar
                                    </Link>
                                    <span className="font-semibold text-primary hover:underline cursor-pointer">
                                        Apagar
                                    </span>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td weight="bold">Diversos</Table.Td>
                            <Table.Td>
                                <div className="inline-flex gap-3">
                                    <Link
                                        href="/painel/produtos/novo"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Detalhar
                                    </Link>
                                    <Link
                                        href="/painel/produtos/novo"
                                        className="font-semibold text-primary hover:underline"
                                    >
                                        Editar
                                    </Link>
                                    <span className="font-semibold text-primary hover:underline cursor-pointer">
                                        Apagar
                                    </span>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table.Root>
            </main>
        </>
    );
}