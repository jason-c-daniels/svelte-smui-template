// postcss.config.js
const production = !process.env.ROLLUP_WATCH;
const purgecss = require('@fullhuman/postcss-purgecss');


module.exports = {
    plugins: [
        require('postcss-import')(),
        require('autoprefixer'),
        /** Do not purge CSS it will kill the material UI (or figure out what to whitelist, first) themes*/
        production &&
        require('cssnano')({
            preset: 'default',
        }),
    ],
};