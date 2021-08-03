const { DefinePlugin } = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: 'production',
    entry: './index.js',
    module: {
        rules: [{
            test: /.js$/,
            enforce: 'post',
            use: {
                loader: WebpackObfuscator.loader,
                options: {
                    // simplify: false,
                    // stringArray: false,
                }
            }
        }]
    },
    plugins: [
        new DefinePlugin({
            'process.env.test': JSON.stringify(true)
        })
    ]
};
