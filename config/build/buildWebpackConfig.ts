import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildResolve } from './buildResolve';
import { buildDevServer } from './BuildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry,

        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },

        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
