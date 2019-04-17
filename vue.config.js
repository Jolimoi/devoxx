const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    configureWebpack: {
        plugins: [
            new WorkboxPlugin.GenerateSW({
                swDest: "sw.js",
                runtimeCaching: [{
                    urlPattern: new RegExp('^https://cfp\.devoxx\.fr/'),
                    handler: 'staleWhileRevalidate',
                },
                {
                    urlPattern: new RegExp('(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)'),
                    handler: 'staleWhileRevalidate'
                }
                ],
                // Make sure new versions of the Service Worker activate immediately
                clientsClaim: true,
                skipWaiting: true,
            }),
        ]
    }
};
