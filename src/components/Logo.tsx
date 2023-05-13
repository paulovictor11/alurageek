import Link from "next/link";
import { GameController } from "phosphor-react";

export function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <GameController
                size={32}
                weight="fill"
                className="text-primary mr-1"
            />
            <span className="text-2xl text-primary font-bold">Alura</span>
            <span className="text-2xl text-tertiary font-semibold">Geek</span>
        </Link>
    );
}
