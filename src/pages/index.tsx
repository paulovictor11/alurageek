import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OutlineButton } from "@/components/OutlineButton";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "phosphor-react";
import { parseCookies } from "nookies";
import Link from "next/link";

export default function Home() {
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
            <Banner />

            <main className="max-w-[1440px] mx-auto my-16 flex flex-col gap-16">
                <section>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[32px] text-tertiary font-bold">
                            Star Wars
                        </h4>
                        <Link
                            href="/produtos/star-wars"
                            className="flex items-center gap-2 text-primary font-bold hover:underline underline-offset-2 hover:gap-3 transition-all"
                        >
                            Ver tudo
                            <ArrowRight size={16} weight="bold" />
                        </Link>
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

                <section>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[32px] text-tertiary font-bold">
                            Consoles
                        </h4>
                        <Link
                            href="/produtos/consoles"
                            className="flex items-center gap-2 text-primary font-bold hover:underline underline-offset-2 hover:gap-3 transition-all"
                        >
                            Ver tudo
                            <ArrowRight size={16} weight="bold" />
                        </Link>
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

                <section>
                    <div className="flex items-center justify-between">
                        <h4 className="text-[32px] text-tertiary font-bold">
                            Diversos
                        </h4>
                        <Link
                            href="/produtos/diversos"
                            className="flex items-center gap-2 text-primary font-bold hover:underline underline-offset-2 hover:gap-3 transition-all"
                        >
                            Ver tudo
                            <ArrowRight size={16} weight="bold" />
                        </Link>
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
