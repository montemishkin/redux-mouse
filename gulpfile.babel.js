// third party imports
var gulp = require('gulp')
var del = require('del')
var karma = require('karma')
var webpack = require('webpack-stream')
var named = require('vinyl-named')
// local imports
var projectPaths = require('./config/projectPaths')


var buildDir = projectPaths.buildDir
var entry = projectPaths.entry
var webpackConfigPath = projectPaths.webpackConfig
var karmaConfigPath = projectPaths.karmaConfig


/**
 * Default to watching scripts and styles. Rebuild on change.
 */
gulp.task('default', ['watch'])


/**
 * Watch js entry point. Rebuild on change.
 */
gulp.task('watch', function () {
    const config = require(webpackConfigPath)
    config.watch = true

    return gulp.src(entry)
        .pipe(named())
        .pipe(webpack(config))
        .pipe(gulp.dest(buildDir))
})


/**
 * Run test suite once.
 */
gulp.task('test', function (cb) {
    const server = new karma.Server({
        configFile: karmaConfigPath,
        singleRun: true
    }, function () { cb() })

    server.start()
})


/**
 * Watch tests for changes, run tests on change.
 */
gulp.task('tdd', function () {
    const server = new karma.Server({
        configFile: karmaConfigPath,
    })

    server.start()
})


/**
 * Build js entry point for production.
 */
gulp.task('build-production', ['clean'], function () {
    process.env.NODE_ENV = 'production'

    // build client
    return gulp.src(entry)
        .pipe(named())
        .pipe(webpack(require(webpackConfigPath)))
        .pipe(gulp.dest(buildDir))
})


/**
 * Remove ALL previously built files.
 */
gulp.task('clean', function () {
    del.sync(buildDir)
})
