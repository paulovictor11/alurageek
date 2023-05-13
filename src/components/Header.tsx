import { Logo } from "./Logo";
import { SearchInput } from "./SearchInput";
import { ReactNode } from "react";

type Props = {
    showSearchInput?: boolean;
    children?: ReactNode;
};

export function Header({ children, showSearchInput = false }: Props) {
    return (
        <header className="bg-white h-24">
            <div className="h-24 max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Logo />

                    {showSearchInput ? <SearchInput /> : null}
                </div>

                {children}
            </div>
        </header>
    );
}
