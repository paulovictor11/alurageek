import { OutlineButton } from "@/components/OutlineButton";
import { ProductCard } from "@/components/ProductCard";
import { RaisedButton } from "@/components/RaisedButton";
import { Rating } from "@/components/Rating";
import { Review } from "@/components/Review";
import { MainLayout } from "@/layouts/MainLayout";
import { Heart, ShoppingCart } from "phosphor-react";

export default function Product() {
    return (
        <MainLayout>
            <section className="grid grid-cols-2 gap-8">
                <div className="w-full h-[403px] bg-zinc-300 rounded-lg" />

                <div className="flex flex-col gap-6">
                    <h1 className=" text-2xl text-tertiary font-semibold">
                        Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM,
                        256GB SSD, Mac OS, Pink
                    </h1>

                    <div className="flex items-center gap-10">
                        <h6 className="text-black font-bold text-3xl">
                            R$ 60,00
                        </h6>

                        <Rating />

                        <span className="text-tertiary font-bold text-sm hover:underline underline-offset-1 cursor-pointer">
                            345 reviews
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <OutlineButton>
                            <Heart size={20} />
                            Add to favorites
                        </OutlineButton>

                        <RaisedButton>
                            <ShoppingCart size={20} />
                            Add to cart
                        </RaisedButton>
                    </div>

                    <div className="bg-gray-300 h-px w-full rounded-full" />

                    <span className="text-zinc-400 text-justify font-medium mb-2">
                        Voluptas voluptatum quibusdam similique, class debitis
                        alias maecenas eveniet ridiculus, facilis fusce! Ullam
                        conubia? Sociis, minima malesuada habitasse distinctio
                        sequi aliqua malesuada. Quisque deleniti proin expedita,
                        aliquid litora. Iste recusandae? Commodo, quia ridiculus
                        doloribus vero dictum? Penatibus donec placeat faucibus,
                        dolorum do. Animi porta anim magnam. Voluptas voluptatum
                        quibusdam similique, class debitis alias maecenas
                        eveniet ridiculus, facilis fusce! Ullam conubia? Sociis,
                        minima malesuada habitasse distinctio sequi aliqua
                        malesuada. Quisque deleniti proin expedita, aliquid
                        litora. Iste recusandae? Commodo, quia ridiculus
                        doloribus vero dictum? Penatibus donec placeat faucibus,
                        dolorum do. Animi porta anim magnam.
                    </span>
                </div>
            </section>

            <section className="divide-y">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[32px] text-tertiary font-bold">
                        Comentários Recentes
                    </h4>
                </div>

                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </section>

            <section>
                <div className="flex items-center justify-between mb-4">
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
