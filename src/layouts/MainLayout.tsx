import { Footer } from "@/components/Footer";
import { MainHeader } from "@/components/MainHeader";
import { ReactNode } from "react";

type Props = {
    banner?: ReactNode;
    children?: ReactNode;
};

export function MainLayout(props: Props) {
    return (
        <>
            <MainHeader />
            {props.banner}

            <main className="max-w-[1440px] mx-auto my-16 flex flex-col gap-16">
                {props.children}
            </main>

            <Footer />
        </>
    );
}
