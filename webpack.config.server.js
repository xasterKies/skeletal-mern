const path = require('path');
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd();
const nodeExternals = require('webpack-node-externals')

const config = {
    name: "server",
}

module.exports = config