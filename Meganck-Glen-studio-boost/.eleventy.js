module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({
        'input/assets/styles/': 'styles/',
        'input/assets/images/': 'img/',
    })

    return {
        dir: {
            input: './input/pages/',
            output: 'output',
            includes: '../_partials',
            layouts: '../_layouts',
            data: '../_data'
        },
    }
}