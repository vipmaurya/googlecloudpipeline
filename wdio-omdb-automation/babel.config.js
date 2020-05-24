module.exports = {
    presets: [
        [ '/usr/lib/wdio/node_modules/@babel/preset-env', {
            targets: {
                node: 12,
            },
        } ],
    ],
};