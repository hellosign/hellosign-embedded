var webpack = require('webpack');

module.exports = {
    name: "Dev",
    entry: __dirname + "/../src/embedded.js",
    output: {
        path: __dirname + "/public/lib/",
        filename: "hellosign-embedded.DEV.js",
        library: "HelloSign",
        libraryTarget: "var"
    },
    module: {
        loaders: [
            {
                test: /\.json/,
                loader: 'json',
                include: __dirname
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            HELLOSIGN_EMBEDDED_VERSION: JSON.stringify("DEV")
        })
    ]
};
