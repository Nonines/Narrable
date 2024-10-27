/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    "black": "#032125",
                    "lime-light": "#284245",
                    "lime-dark": "#112d30",
                    "slate-gray": "#666d80", // text
                    "white-smoke": "#f2f4f4", // bgs
                },
            },
            padding: {
                "brand-xl": "3rem"
            }
        },
    },
    plugins: [],
};
