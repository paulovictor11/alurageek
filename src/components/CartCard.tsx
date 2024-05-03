import { Check, X } from "phosphor-react";

export type Props = {};

export function CartCard(props: Props) {
    return (
        <div className="flex items-center gap-8 p-5">
            <div className="w-20 h-20 bg-zinc-300 rounded-lg" />

            <h1 className="font-medium flex-1">
                PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
                Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue,
                Keyboard layout INT
            </h1>
            <span className="text-lg">x1</span>
            <span className="font-semibold text-lg text-right">R$ 32,00</span>
        </div>
    );
}
