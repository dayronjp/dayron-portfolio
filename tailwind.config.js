/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx,mdx}",
        "./components/**/*.{ts,tsx,js,jsx}",
        "./content/**/*.{md,mdx}"
    ],
    theme: {
        extend: {
            colors: { brand: "#0ea5a4" },
            spacing: { '128': '32rem' }
        }

    },
    plugins: []
};
