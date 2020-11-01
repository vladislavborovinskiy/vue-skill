module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-for': {},
        'postcss-conditionals': {},
        'postcss-simple-vars': {},
        'postcss-math': {
            functionName: 'math',
        },
        'postcss-mixins': {
            mixinsDir: ['src/assets/css/mixins'],
        },
        'postcss-preset-env': {
            stage: 1,
            features: {
                'custom-media-queries': {
                    importFrom: ['src/assets/css/media-queries.css'],
                },
            },
        },
    },
};
