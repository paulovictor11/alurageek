import { Checkbox } from "@/components/Checkbox";
import { ProductCard } from "@/components/ProductCard";
import { MainLayout } from "@/layouts/MainLayout";

export default function Products() {
    return (
        <MainLayout>
            <div className="pt-6">
                <h1 className="text-5xl font-bold">New Arrivals</h1>
                <p className="mt-6 text-gray-500">
                    Checkout out the latest release of Basic Tees, new and
                    improved with four openings!
                </p>
            </div>

            <div className="h-px w-full bg-gray-300 rounded-full" />

            <div className="grid grid-cols-3 gap-20">
                <div className="">
                    <div className="space-y-8">
                        <h6 className="font-medium text-gray-500">Color</h6>

                        <div className="space-y-2">
                            <Checkbox id="white" label="White" />
                            <Checkbox id="beige" label="Beige" />
                            <Checkbox id="blue" label="Blue" />
                            <Checkbox id="brown" label="Brown" />
                            <Checkbox id="green" label="Green" />
                            <Checkbox id="purple" label="Purple" />
                        </div>
                    </div>

                    <div className="h-px w-full bg-gray-300 rounded-full my-10" />

                    <div className="space-y-8">
                        <h6 className="font-medium text-gray-500">Category</h6>

                        <div className="space-y-2">
                            <Checkbox id="1" label="All New Arrivals" />
                            <Checkbox id="2" label="Tees" />
                            <Checkbox id="3" label="Crewnecks" />
                            <Checkbox id="4" label="Sweatshirts" />
                            <Checkbox id="5" label="Pants & Shorts" />
                        </div>
                    </div>

                    <div className="h-px w-full bg-gray-300 rounded-full my-10" />

                    <div className="space-y-8">
                        <h6 className="font-medium text-gray-500">Sizes</h6>

                        <div className="space-y-2">
                            <Checkbox id="xs" label="XS" />
                            <Checkbox id="s" label="S" />
                            <Checkbox id="m" label="M" />
                            <Checkbox id="l" label="L" />
                            <Checkbox id="xl" label="XL" />
                            <Checkbox id="2xl" label="2XL" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-x-10 gap-y-12">
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
            </div>
        </MainLayout>
    );
}
