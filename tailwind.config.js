/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark Bento Theme Colors
                background: '#09090b',      // Main dark background
                surface: '#18181b',         // Card/surface background
                surfaceLight: '#27272a',    // Lighter surface
                border: '#3f3f46',          // Border color
                accent: '#a3e635',          // Neon lime accent
                accentHover: '#bef264',     // Lighter lime on hover
                textPrimary: '#fafafa',     // Primary text
                textSecondary: '#a1a1aa',   // Secondary text
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}