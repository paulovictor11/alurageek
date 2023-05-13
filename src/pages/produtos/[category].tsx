import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OutlineButton } from "@/components/OutlineButton";
import { ProductCard } from "@/components/ProductCard";
import { parseCookies } from "nookies";
import Link from "next/link";

export default function ProductsByCategory() {
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
                <section>
                    <h4 className="text-[32px] text-tertiary font-bold">
                        Todos os produtos
                    </h4>

                    <div className="grid grid-cols-6 gap-x-6 gap-y-16 mt-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

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
