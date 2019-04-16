const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new WorkboxPlugin.InjectManifest({
                swSrc: './src/service-worker.js',   
                swDest: 'sw.js'
            })
        ]
    }
};