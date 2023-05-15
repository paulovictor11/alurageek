import { GameController } from "phosphor-react";

export function Logo() {
    return (
        <div className="flex items-center cursor-default">
            <GameController
                size={32}
                weight="fill"
                className="text-primary mr-1"
            />
            <span className="text-2xl text-primary font-bold">Alura</span>
            <span className="text-2xl text-tertiary font-semibold">Geek</span>
        </div>
    );
}
