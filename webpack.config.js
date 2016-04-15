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


// var path = require("path");
// var webpack = require("../../");
// module.exports = [
//     {
//         name: "mobile",
//         entry: "./example",
//         output: {
//             path: path.join(__dirname, "js"),
//             filename: "mobile.js"
//         },
//         plugins: [
//             new webpack.DefinePlugin({
//                 ENV: JSON.stringify("mobile")
//             })
//         ]
//     },
//     {
//         name: "desktop",
//         entry: "./example",
//         output: {
//             path: path.join(__dirname, "js"),
//             filename: "desktop.js"
//         },
//         plugins: [
//             new webpack.DefinePlugin({
//                 ENV: JSON.stringify("desktop")
//             })
//         ]
//     }
// ];
