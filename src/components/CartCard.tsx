import { Check, X } from "phosphor-react";

export type Props = {};

export function CartCard(props: Props) {
    return (
        <div className="flex gap-8 py-10">
            <div className="w-64 h-48 bg-zinc-300 rounded-lg" />

            <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h1 className="font-semibold">Basic Tee</h1>
                        <span>Sienna | Large</span>
                        <span>R$ 32,00</span>
                    </div>

                    <span className="flex items-center gap-2">
                        <Check size={22} className="text-emerald-500" /> In
                        stock
                    </span>
                </div>

                <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 h-fit p-2.5"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>

                <X
                    size={20}
                    className="text-gray-500 cursor-pointer hover:text-red-500 transition-colors"
                />
            </div>
        </div>
    );
}
