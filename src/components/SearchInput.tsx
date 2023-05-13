import { MagnifyingGlass } from "phosphor-react";

export function SearchInput() {
    return (
        <div className="w-[393px] h-10 flex items-center bg-zinc-100 px-4 rounded-[20px] border-2 border-zinc-100 focus-within:border-primary">
            <input
                type="text"
                placeholder="O que deseja encontrar?"
                className="flex-1 bg-transparent placeholder:text-sm outline-none"
            />
            <MagnifyingGlass
                size={20}
                weight="bold"
                className="text-gray-400"
            />
        </div>
    );
}
