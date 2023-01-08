const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [require('daisyui')],
}
