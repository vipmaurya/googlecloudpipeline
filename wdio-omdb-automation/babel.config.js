module.exports = {
    presets: [
        [ '@babel/preset-env', {
            targets: {
                node: 8
            },
            configPath: './node_modules'
        } ]
    ]
};
