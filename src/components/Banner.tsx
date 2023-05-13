import Link from "next/link";
import { RaisedButton } from "./RaisedButton";

export function Banner() {
    return (
        <div className="w-full h-[352px] bg-zinc-300">
            <div className="h-full max-w-[1440px] mx-auto pb-8 flex items-end">
                <div>
                    <h1 className="text-white text-[52px] font-bold">
                        Dezembro Promocional
                    </h1>
                    <h3 className="text-white text-[22px] font-bold mb-4">
                        Produtos selecionados com 33% de desconto
                    </h3>

                    <Link href="/produtos/consoles">
                        <RaisedButton>Ver Consoles</RaisedButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}
