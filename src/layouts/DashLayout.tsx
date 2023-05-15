import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { NavMenu } from "@/components/NavMenu";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

export function DashLayout(props: Props) {
    return (
        <>
            <Header trailing={<LogoutButton />} />
            <NavMenu />

            <main className="max-w-[1440px] mx-auto my-16 flex flex-col gap-2">
                {props.children}
            </main>
        </>
    );
}
