module.exports = {
    entry: './src/index.js',
    output: {
        filename: './index.js',
        library: 'ngwebworker',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    externals: {
        angular: 'angular'
    }
};
