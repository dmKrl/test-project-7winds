import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions):
    webpack.WebpackPluginInstance[] {
    return [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
            filename: 'index.html?[fullhash:8]',
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash:8].css',
            chunkFilename: '[name].[chunkhash:8].css',
        }),
    ];
}
