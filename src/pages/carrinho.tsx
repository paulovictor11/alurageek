import { CartCard } from "@/components/CartCard";
import { ProductCard } from "@/components/ProductCard";
import { RaisedButton } from "@/components/RaisedButton";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import { Question } from "phosphor-react";

export default function Cart() {
    return (
        <MainLayout>
            <h1 className="text-5xl font-bold pt-6">Shopping Cart</h1>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 border rounded-md divide-y bg-white/40 h-fit">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>

                <div className="border rounded-md divide-y bg-white/40">
                    <div className="p-5">
                        <span className="text-xl font-medium">
                            Order details
                        </span>

                        <ul className="w-full text-sm font-medium text-gray-500 mt-3 divide-y">
                            <li className="w-full py-3 flex items-center justify-between">
                                <span>Order date</span>
                                <span className="font-semibold text-gray-900">
                                    24 de novembro de 2023
                                </span>
                            </li>
                            <li className="w-full py-3 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Email
                                </span>
                                <span className="font-semibold text-gray-900">
                                    user@email.com
                                </span>
                            </li>
                            <li className="w-full py-3 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Phone
                                </span>
                                <span className="font-semibold text-gray-900">
                                    83 99999-9999
                                </span>
                            </li>
                            <li className="w-full py-3 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Payment method
                                </span>
                                <span className="font-semibold text-gray-900">
                                    Credit card
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-5">
                        <span className="text-xl font-medium">
                            Order amount
                        </span>

                        <ul className="w-full text-sm font-medium text-gray-500 mt-3">
                            <li className="w-full py-3 border-b border-gray-200 flex items-center justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-900">
                                    R$99,00
                                </span>
                            </li>
                            <li className="w-full py-3 border-b border-gray-200 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Shipping estimate
                                    <Question
                                        size={20}
                                        weight="fill"
                                        className="text-gray-400"
                                    />
                                </span>
                                <span className="font-semibold text-gray-900">
                                    R$5,00
                                </span>
                            </li>
                            <li className="w-full py-3 border-b border-gray-200 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    Tax estimate
                                    <Question
                                        size={20}
                                        weight="fill"
                                        className="text-gray-400"
                                    />
                                </span>
                                <span className="font-semibold text-gray-900">
                                    R$8,32
                                </span>
                            </li>
                            <li className="w-full py-3 flex items-center justify-between">
                                <span className="text-lg font-medium text-gray-900">
                                    Order total
                                </span>
                                <span className="font-semibold text-gray-900 text-lg">
                                    R$112,32
                                </span>
                            </li>
                        </ul>

                        <div className="text-end mt-2">
                            <Link href="/checkout">
                                <RaisedButton>Checkout</RaisedButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-[32px] text-tertiary font-bold">
                        You may also like…
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
