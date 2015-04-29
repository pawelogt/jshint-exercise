// Karma configuration
module.exports = function(config) {
    config.set({
        autoWatch: true,
// base path, that will be used to resolve files and exclude
        basePath: '../',
// testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],
// list of files / patterns to load in the browser
        files: [
            'src/**/*.js',
            'spec/**/*.js'
        ],
        browsers:['PhantomJS']
    });
};