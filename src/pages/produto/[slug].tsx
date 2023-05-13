import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OutlineButton } from "@/components/OutlineButton";
import { ProductCard } from "@/components/ProductCard";
import { parseCookies } from "nookies";
import Link from "next/link";
import { RaisedButton } from "@/components/RaisedButton";

export default function Product() {
    const { "@app:token": token } = parseCookies();

    return (
        <>
            <Header showSearchInput>
                {token ? (
                    <Link href="/painel">
                        <OutlineButton>Acessar Painel</OutlineButton>
                    </Link>
                ) : (
                    <Link href="/login">
                        <OutlineButton>Login</OutlineButton>
                    </Link>
                )}
            </Header>

            <main className="max-w-[1440px] mx-auto my-16 flex flex-col gap-16">
                <section className="flex items-center justify-center gap-4">
                    <div className="w-[560px] h-[403px] bg-zinc-300" />

                    <div className="flex flex-col gap-2">
                        <h1 className="text-[52px] text-tertiary font-medium">
                            Produto XYZ
                        </h1>
                        <h6 className="text-tertiary font-bold">R$ 60,00</h6>

                        <span className="w-[560px] text-tertiary text-justify mb-2">
                            Voluptas voluptatum quibusdam similique, class
                            debitis alias maecenas eveniet ridiculus, facilis
                            fusce! Ullam conubia? Sociis, minima malesuada
                            habitasse distinctio sequi aliqua malesuada. Quisque
                            deleniti proin expedita, aliquid litora. Iste
                            recusandae? Commodo, quia ridiculus doloribus vero
                            dictum? Penatibus donec placeat faucibus, dolorum
                            do. Animi porta anim magnam
                        </span>

                        <RaisedButton>Comprar</RaisedButton>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[32px] text-tertiary font-bold">
                            Produtos similares
                        </h4>
                    </div>

                    <div className="grid grid-cols-6 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
