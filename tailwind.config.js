/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: "Raleway, sans-serif",
        },
        extend: {
            colors: {
                primary: "#2a74e4",
                secondary: "#5595e9",
                tertiary: "#464646",
                lightBlue: "#eaf2fd",
                lightGray: "#a2a2a2",
                background: "#f5f5f5 ",
            },
        },
    },
    plugins: [],
};
