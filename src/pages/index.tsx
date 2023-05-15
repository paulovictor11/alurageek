import Link from "next/link";
import { Banner } from "@/components/Banner";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "phosphor-react";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout banner={<Banner />}>
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
        </MainLayout>
    );
}
