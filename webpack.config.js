var path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './public/index.js'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        },
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};