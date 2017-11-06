const postImport = require('postcss-import');
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = () => {
    return [
        postImport({}),
        precss(),
        autoprefixer(),
        cssnano({safe: true})
    ]
}