import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[t]sx?$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                typescript: true,
                ext: 'tsx',
            },
        }],

    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [typeScriptLoader, svgLoader, fileLoader];
}
