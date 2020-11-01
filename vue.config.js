const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    filenameHashing: true,
    configureWebpack: {
        plugins: [new WebpackAssetsManifest({})],
        module: {
            rules: [
                {
                    test: /\.(svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]?[hash]',
                                context: path.resolve(__dirname, 'src/'),
                                publicPath: './../',
                                useRelativePaths: true,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            symlinks: false,
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name]-[hash].js',
            chunkFilename: '[id]-[chunkhash].js',
        },
    },
    publicPath: '/',
    transpileDependencies: ['vuetify'],
};
