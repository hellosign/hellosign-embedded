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
                loader: 'json'
            }
        ]
    },
    resolve: {
        fallback: __dirname + "/../"
    }
};
