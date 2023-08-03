import { ProductCard } from "@/components/ProductCard";
import { RaisedButton } from "@/components/RaisedButton";
import { MainLayout } from "@/layouts/MainLayout";

export default function Product() {
    return (
        <MainLayout>
            <section className="flex items-center justify-center gap-4">
                <div className="w-[560px] h-[403px] bg-zinc-300 rounded" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-[52px] text-tertiary font-medium">
                        Produto XYZ
                    </h1>
                    <h6 className="text-tertiary font-bold">R$ 60,00</h6>

                    <span className="w-[560px] text-tertiary text-justify mb-2">
                        Voluptas voluptatum quibusdam similique, class debitis
                        alias maecenas eveniet ridiculus, facilis fusce! Ullam
                        conubia? Sociis, minima malesuada habitasse distinctio
                        sequi aliqua malesuada. Quisque deleniti proin expedita,
                        aliquid litora. Iste recusandae? Commodo, quia ridiculus
                        doloribus vero dictum? Penatibus donec placeat faucibus,
                        dolorum do. Animi porta anim magnam
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

                <div className="grid grid-cols-5 gap-4">
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
