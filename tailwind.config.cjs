/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{tsx, ts, jsx, js}'],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['"DM Mono"', 'ui-monospace', 'SFMono-Regular'],
            }
        },
    },
    plugins: [],
}

