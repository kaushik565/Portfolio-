/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f5f7ff',
                    100: '#ebefff',
                    200: '#d6dfff',
                    300: '#b3c2ff',
                    400: '#8c9eff',
                    500: '#667eea',
                    600: '#5568d3',
                    700: '#4553b8',
                    800: '#374399',
                    900: '#2d367a',
                },
                secondary: {
                    500: '#764ba2',
                    600: '#653e8c',
                    700: '#543277',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}