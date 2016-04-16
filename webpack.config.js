var version = require('./package.json').version;

module.exports =
[
    {
        name: "Minified",
        entry: "./src/embedded.js",
        output: {
            path: __dirname + "/dist",
            filename: "hellosign-embedded." + version + ".min.js",
            library: "HelloSign",
            libraryTarget: "var"
        },
        module: {
            loaders: [
                {
                    test: /\.js/,
                    loader: 'uglify',
                    include: __dirname + "/src"
                },
                {
                    test: /\.json/,
                    loader: 'json',
                    include: __dirname
                }
            ]
        }
    },
    {
        name: "Uncompressed",
        entry: "./src/embedded.js",
        output: {
            path: __dirname + "/dist",
            filename: "hellosign-embedded." + version + ".js",
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
        }
    }
]
