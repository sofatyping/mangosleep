const path = require('path');

const config = {
    mode: 'development',
    entry: {
       index: './src/main/js/app.js'
    },
    output: {
        path: __dirname,
        filename: './src/main/resources/static/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;