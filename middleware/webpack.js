/**
 * @fileOverview charity-middleware-webpack
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

var webpackMiddleware = require("koa-webpack-dev-middleware");
var webpack = require('webpack');
var webpackConfig = require('../build/webpack.config.dev');

var compiler = webpack(webpackConfig);
var devMiddleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

module.exports = (options, app) => {
    return function* (next) {
        app.use(devMiddleware);
        yield next;
    };
};
