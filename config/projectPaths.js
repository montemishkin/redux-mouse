/**
 * Provides a single, consistent place for js files to get
 * relevant paths, globs, etc pertaining to the project structure.
 */

// node imports
var path = require('path')


var rootDir = path.join(__dirname, '..')
var configDir = path.join(rootDir, 'config')
var sourceDir = path.join(rootDir, 'src')
var entry = path.join(sourceDir, 'index.js')
var buildDir = path.join(rootDir, 'build')
var build = path.join(buildDir, path.basename(entry))


module.exports = {
    // directories
    rootDir: rootDir,
    sourceDir: sourceDir,
    buildDir: buildDir,
    // entry point
    entry: entry,
    // globs
    testsGlob: path.join(sourceDir, '_tests', 'test_*.js'),
    // configuration files
    eslintConfig: path.join(configDir, 'eslint.json'),
    karmaConfig: path.join(configDir, 'karma.js'),
    webpackConfig: path.join(configDir, 'webpack.js'),
}
