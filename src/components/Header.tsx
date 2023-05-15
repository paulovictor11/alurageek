import { Logo } from "./Logo";
import { ReactNode } from "react";

type Props = {
    leading?: ReactNode;
    trailing?: ReactNode;
};

export function Header({ leading, trailing }: Props) {
    return (
        <header className="bg-white h-24">
            <div className="h-24 max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Logo />

                    {leading}
                </div>

                {trailing}
            </div>
        </header>
    );
}
