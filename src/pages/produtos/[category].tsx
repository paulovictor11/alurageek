import { ProductCard } from "@/components/ProductCard";
import { MainLayout } from "@/layouts/MainLayout";

export default function ProductsByCategory() {
    return (
        <MainLayout>
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
        </MainLayout>
    );
}
