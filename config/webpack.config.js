'use strict';

var WebpackConfig = (function () {

    function WebpackConfig() {
        return {
            output: {
                library: "ngRxUI"
            },
            resolve: {
                extensions: ["", ".js", ".ts", ".scss"]
            },
            module: {
                loaders: [
                    {
                        test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                    },
                    {
                        test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                    },
                    {
                        test: /\.html$/, loader: "raw"
                    },
                    {
                        test: /\.scss$/,
                        loaders: ["style", "css", "sass"]
                    }
                ]
            }
        };
    }

    return WebpackConfig;
})();

module.exports = WebpackConfig;