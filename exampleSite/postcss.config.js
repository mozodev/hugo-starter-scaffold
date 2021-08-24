const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer');

if (process.env.HUGO_ENVIRONMENT != 'production') return false;

module.exports = {
  plugins: [
    purgecss({
      content: [
        './hugo_stats.json',
        './layouts/**/*.html',
      ],
      extractors: [{
        extractor: (content) => {
          let els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ['json']
      }],
      fontFace: true,
      keyframes: true,
      variables: true
    }),
    autoprefixer(),
  ]
};
