/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#fafafa",
                    "secondary": "#262626",
                    "accent": "#22c55e",
                    "neutral": "#ffffff",
                    "base-100": "#171717",
                    "info": "#6b7280",
                    "success": "#36D399",
                    "warning": "#FBBD23",
                    "error": "#e11d48",
                },
            },
        ],
    },

}