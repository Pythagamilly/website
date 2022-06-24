// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: [ './hugo_stats.json' ],
//   defaultExtractor: (content) => {
//     console.log('--------- postcss.config.js');
//     let els = JSON.parse(content).htmlElements;
//     return els.tags.concat(els.classes, els.ids);
//   }
// });

// module.exports = {
//   plugins: [
//     ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ purgecss ] : [])
  // ]
// };

module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./**/*.html'],
    }
  }
};