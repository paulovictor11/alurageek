import Link from "next/link";
import { Table } from "@/components/Table";
import { Plus } from "phosphor-react";
import { DashLayout } from "@/layouts/DashLayout";

export default function Products() {
    return (
        <DashLayout>
            <section>
                <div className="flex items-center justify-between">
                    <h4 className="text-[32px] text-tertiary font-bold">
                        Produtos
                    </h4>
                    <Link
                        href="/painel/produtos/novo"
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
                        <Table.Th>Categoria</Table.Th>
                        <Table.Th>Preço</Table.Th>
                        <Table.Th style={{ width: "15%" }}>Ações</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td weight="bold">XYZ</Table.Td>
                        <Table.Td>StarWars</Table.Td>
                        <Table.Td>R$ 60,00</Table.Td>
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
                        <Table.Td weight="bold">XYZ</Table.Td>
                        <Table.Td>StarWars</Table.Td>
                        <Table.Td>R$ 60,00</Table.Td>
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
                        <Table.Td weight="bold">XYZ</Table.Td>
                        <Table.Td>StarWars</Table.Td>
                        <Table.Td>R$ 60,00</Table.Td>
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
        </DashLayout>
    );
}
