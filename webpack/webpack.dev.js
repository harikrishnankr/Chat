const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
    devServer: {
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        historyApiFallback: true,
        host: '0.0.0.0'
    }
});
