module.exports = {
  plugins: {
    tailwindcss: {}, // Integrates Tailwind CSS
    autoprefixer: {}, // Adds vendor prefixes
    'postcss-preset-env': {
      // Transpiles future CSS syntax
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
  },
}
