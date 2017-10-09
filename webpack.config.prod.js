import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new ExtractTextPlugin('[name].[contenthash].css'),

        //Hash file names so that their names change only when the code changes
        new WebpackMd5Hash(),

        //Ensures that files that are both in the vendor and the main bundle, only get downloaded once in the
        //vendor bundle
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        // Create HTML file that includes reference to the bundle
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            trackJSToken: '3c0fc68a51c64ee4a67e60090028e20d'
        }),
        //Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        //Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},

            //Tells Webpack to also generate a CSS sourcemap
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourcemap')}

        ]
    }
}
