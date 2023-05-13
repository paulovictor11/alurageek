import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import type { AppProps } from "next/app";

const font = Raleway({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${font.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
