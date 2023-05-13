import { Header } from "@/components/Header";
import { LogoutButton } from "@/components/LogoutButton";
import { NavMenu } from "@/components/NavMenu";

export default function Dashboard() {
    return (
        <>
            <Header>
                <LogoutButton />
            </Header>
            <NavMenu />

            <main className="max-w-[1440px] mx-auto my-16 flex flex-col gap-16"></main>
        </>
    );
}
